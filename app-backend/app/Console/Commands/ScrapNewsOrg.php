<?php

namespace App\Console\Commands;

use App\Models\Article;
use App\Models\Category;
use App\Models\Source;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class ScrapNewsOrg extends Command implements ScrapperInterface
{
    private string $apiKey;
    private string $baseUrl;
    private string $sourceName;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:scrap-news-org';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get articles from NewsOrg';

    public function __construct()
    {
        parent::__construct();
        $this->apiKey = env('NEWS_ORG_API_KEY');
        $this->baseUrl = 'https://newsapi.org/v2/top-headlines';
        $this->sourceName = 'NewsAPI.org';
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {

        $sourceEntity = Source::firstWhere('name', $this->sourceName);
        $response = Http::get($this->baseUrl, [
            'apiKey' => $this->apiKey,
            'language' => 'en',
        ]);

        if (!$response->successful()) {
            $this->error("Failed scrapping {$this->sourceName}: {$response->json()['message']}");
            return;
        }

        $articles = $response->json()['articles'];
        $data = [];
        foreach ($articles as $article) {
            $category = Category::firstOrCreate(['name' => $article['source']['name']]);
            $category->sources()->sync([$sourceEntity->id => ['original_id' => $article['source']['id']]]);

            $data[] = [
                'source_id' => $sourceEntity->id,
                'category_id' => $category->id,
                'original_id' => null, // there is no original id in response
                'title' => $article['title'],
                'short_description' => $article['description'] ?? '',
                'content' => $article['content'] ?? '',
                'author' => $article['author'] ?? $this->sourceName,
                'base_url' => $article['url'],
                'image_url' => $article['urlToImage'] ?? '',
                'published_at' => Carbon::createFromTimestamp(strtotime($article['publishedAt']))
                    ->toDateTimeString(),
                'created_at' =>  Carbon::now(),
                'updated_at' =>  Carbon::now(),
            ];
        }
        Article::insert($data);
    }
}
