import * as React from 'react';
import {useNavigate} from "react-router-dom";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface ArticleProps {
    article: {
        id: number;
        published_at: string;
        short_description: string;
        content: string;
        image_url: string;
        title: string;
    }
}

export default function Article(props: ArticleProps) {
    const navigate = useNavigate();
    const { article } = props;
    console.log(article, props);

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea
                component="a"
                onClick={() => navigate(`articles/${article.id}`)}
            >
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {article.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {article.published_at}
                        </Typography>
                        {article.short_description && <Typography variant="subtitle1" paragraph>
                            {article.short_description}
                        </Typography>}
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image={article.image_url}
                        alt={''}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
}