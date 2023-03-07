import React, {useEffect} from 'react'
import {getNews} from '../../store/thunks/news'
import {Box, Grid, Link, Typography} from '@mui/material'
import {useStyles} from './styles'
import {useAppDispatch, useAppSelector} from "../../utils/hooks";

const NewsPage = () => {
    const dispatch = useAppDispatch()
    const {news} = useAppSelector((state) => state.news)
    const classes = useStyles()

    const renderNewsBlock = news.map((element: any) => (
        <Grid container className={classes.newsBlock}>
            <Grid item xs={12} md={3}>
                <img src={element.imageurl} alt={element.category}/>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box className={classes.newsTitle}>
                    <Typography variant="h3">{element.title}</Typography>
                </Box>
                <Box className={classes.newsBody}>
                    <Typography variant="body1">{element.body}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={12} className={classes.readMore}>
                <Typography variant="h4">
                    <Link target={'_blank'} href={element.url}>Read more</Link>
                </Typography>
            </Grid>
        </Grid>
    ))

    useEffect(() => {
        dispatch(getNews())
    }, [])

    return (
        <Grid className={classes.root}>
            <Grid className={classes.blockTitle}>
                <Typography variant="h2">Новости</Typography>
            </Grid>
            <Grid>{renderNewsBlock}</Grid>
        </Grid>
    )
}

export default NewsPage