import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export function CourseCard({ title, semester, description, image }) {
    return (
        <Card sx={{ maxWidth: 345, mb: 2 }}>
            <CardMedia
                component="img"
                height="250"
                image={image}
                alt="course"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {semester}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">Buy Now</Button>
            </CardActions>
        </Card>
    );
}