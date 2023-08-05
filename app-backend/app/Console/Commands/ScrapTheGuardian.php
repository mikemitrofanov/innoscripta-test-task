<?php

namespace App\Console\Commands;

use App\Models\Article;
use App\Models\Category;
use App\Models\Source;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class ScrapTheGuardian extends Command implements ScrapperInterface
{
    private string $apiKey;
    private string $baseUrl;
    private string $sourceName;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:scrap-the-guardian';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get articles from The Guardian API';

    public function __construct()
    {
        parent::__construct();
        $this->apiKey = env('GUARDIAN_API_KEY');
        $this->baseUrl = 'https://content.guardianapis.com/search';
        $this->sourceName = 'The Guardian';
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sourceEntity = Source::firstWhere('name', $this->sourceName);
        $response = Http::get($this->baseUrl, [
            'api-key' => $this->apiKey,
            'show-fields' => 'trailText,bodyText,byline,thumbnail',
            'page-size' => 2,
        ]);

        if (!$response->successful()) {
            $this->error("Failed scrapping {$this->sourceName}: {$response->json()['response']['message']}");
            return;
        }

        $articles = $response->json()['response']['results'];
        $data = [];
        foreach ($articles as $article) {
            $category = Category::firstOrCreate(['name' => $article['sectionName']]);
            $category->sources()->sync([$sourceEntity->id => ['original_id' => $article['sectionId']]]);

            $data[] = [
                'source_id' => $sourceEntity->id,
                'category_id' => $category->id,
                'original_id' => $article['id'] ?? null,
                'title' => $article['webTitle'],
                'short_description' => $article['fields']['trailText'] ?? '',
                'content' => $article['fields']['bodyText'] ?? '',
                'author' => $article['fields']['byline'] ?? $this->sourceName,
                'base_url' => $article['webUrl'],
                'image_url' => $article['fields']['thumbnail'] ?? '',
                'published_at' => Carbon::createFromTimestamp(strtotime($article['webPublicationDate']))
                    ->toDateTimeString(),
                'created_at' =>  Carbon::now(),
                'updated_at' =>  Carbon::now(),
            ];
        }
        Article::insert($data);
    }
}
