import {Grid} from "@mui/material";
import {useGetArticlesQuery} from "../store/apis/articles.ts";
import Article from "../components/Article.tsx";

const Home = () => {
    const { data, isLoading } = useGetArticlesQuery();

    if (isLoading) return (<div>Loading</div>)
    const { data: articles } = data;
    console.log('asdasd', articles);

    return (
        <>
            <main>
                <Grid container spacing={4}>
                    {articles.map((article: any) => (
                        <Article key={article.id} article={article} />
                    ))}
                </Grid>
            </main>
        </>
    )
}

export default Home;