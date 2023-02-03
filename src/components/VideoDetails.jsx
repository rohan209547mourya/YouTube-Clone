import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Typography, Stack } from '@mui/material'

import intToString from '../utils/NumberToKM'
import { fetchFromApi } from '../utils/fetchData'
import { Videos } from './'


const VideoDetails = () => {

    const [video, setVideo] = useState([])
    const [videoData, setVideoData] = useState(null)
    const { id } = useParams();

    useEffect(() => {

        fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => {
                setVideoData(data.items[0])
            })

        fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => { setVideo(data.items) })
    }, [id])



    if (!videoData) return (<h1>Loading...</h1>)

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoData


    return (

        <Box minHeight='95vh'>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls playing />
                        <Typography color='white' variant='h6' fontWeight='bold' p={2} sx={{ color: 'white', width: '80%', margin: 'auto' }}>
                            {title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' py={1} px={2} sx={{ color: 'white', width: '80%', borderBottom: '1px solid gray', margin: 'auto' }}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtite1', md: 'h6' }} color='white'>
                                    {channelTitle}
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px' alignItems='center' >
                                <Typography variant='body1' sx={{ opacity: 0.8 }}>
                                    {intToString(viewCount)}{' Views'}
                                </Typography>
                                <Typography variant='body1' sx={{ opacity: 0.8 }}>
                                    {intToString(likeCount)}{' Likes'}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
                    <Videos videos={video} direction='column' />
                </Box>
            </Stack>


        </Box>
    )
}

export default VideoDetails