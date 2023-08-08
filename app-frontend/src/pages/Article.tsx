import {useParams} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getArticleRequest} from "../store/articles/actions.ts";
import * as React from "react";

interface ArticleInterface {
    content: string;
    image_url: string;
    linkText: string;
    title: string;
    published_at: string;
    base_url: string;
}


const Article = () => {
    const { articleId } = useParams();
    const dispatch = useDispatch();
    const { loading, article } = useSelector(store => store.articles);

    useEffect(() => { dispatch(getArticleRequest(articleId)) }, []);

    if (loading || !article.id) return (<div>Loading</div>);

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${article.image_url})`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={article.image_url} alt={''} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {article.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {article.content}
                        </Typography>
                        <Link variant="subtitle1" href={article.base_url}>
                            Read more...
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Article;
