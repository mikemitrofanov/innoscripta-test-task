import {useParams} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {useGetArticleQuery} from "../store/apis/articles.ts";

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
    const { isLoading, data } = useGetArticleQuery(articleId);

    if (isLoading) return (<div>Loading</div>);

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
                backgroundImage: `url(${data.image_url})`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={data.image_url} alt={''} />}
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
                            {data.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {data.content}
                        </Typography>
                        <Link variant="subtitle1" href={data.base_url}>
                            Read more...
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Article;
