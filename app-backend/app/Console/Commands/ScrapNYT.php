<?php

namespace App\Console\Commands;

use App\Models\Article;
use App\Models\Category;
use App\Models\Source;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class ScrapNYT extends Command implements ScrapperInterface
{
    private string $apiKey;
    private string $baseUrl;
    private string $sourceName;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:scrap-n-y-t';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get articles from NYT';

    public function __construct()
    {
        parent::__construct();
        $this->apiKey = env('NYT_API_KEY');
        $this->baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
        $this->sourceName = 'New York Times';
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sourceEntity = Source::firstWhere('name', $this->sourceName);
        $response = Http::get($this->baseUrl, [
            'api-key' => $this->apiKey,
        ]);

        if (!$response->successful()) {
            $this->error("Failed scrapping {$this->sourceName}: {$response->json()['fault']['detail']['errorcode']}");
            return;
        }

        $articles = $response->json()['response']['docs'];
        $data = [];
        foreach ($articles as $article) {
            $category = Category::firstOrCreate(['name' => $article['section_name']]);
            $category->sources()->sync([$sourceEntity->id => ['original_id' => $article['section_name']]]);

            $data[] = [
                'source_id' => $sourceEntity->id,
                'category_id' => $category->id,
                'original_id' => $article['_id'],
                'title' => $article['headline']['main'] ?? '',
                'short_description' => $article['abstract'] ?? '',
                'content' => $article['lead_paragraph'] ?? '',
                'author' => $article['byline']['original'] ?? $this->sourceName,
                'base_url' => $article['web_url'],
                'image_url' => $article['multimedia'][0]['url'] ?? '',
                'published_at' => Carbon::createFromTimestamp(strtotime($article['pub_date']))
                    ->toDateTimeString(),
                'created_at' =>  Carbon::now(),
                'updated_at' =>  Carbon::now(),
            ];
        }
        Article::insert($data);
    }
}
