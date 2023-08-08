import {Grid} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import Article from "../components/Article.tsx";
import {getArticlesRequest} from "../store/articles/actions.ts";
import {useEffect} from "react";
import * as React from "react";

const Articles = () => {
    const dispatch = useDispatch();
    const { loading, articles } = useSelector(store => store.articles);

    useEffect(() => { dispatch(getArticlesRequest()) }, []);

    if (loading) return <div>Loading</div>;

    return (
        <Grid container spacing={4}>
            {articles.data.map((article: any) => (
                <Article key={article.id} article={article} />
            ))}
        </Grid>
    )
}

export default Articles;