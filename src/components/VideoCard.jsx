import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { fetchChannelDetails } from '../utils/fetchData'

axios.defaults.timeout = 100000

const VideoCard = ({ video }) => {


    // const [channelDetails, setChannelDetails] = useState([])

    // useEffect(() => {

    //     console.log(video?.snippet?.channelId)

    //     fetchChannelDetails(video?.snippet?.channelId)
    //         .then((data) => {
    //             setChannelDetails(data.items[0])
    //         })
    // }, [channelDetails])


    return (
        <Card sx={{ width: { md: '320px', xs: '100%' }, marginRight: '12px', marginBottom: '22px', boxShadow: 'none', }}>
            <Link to={`/watch?v=${video.id.videoId}`}>
                <CardMedia
                    image={video.snippet?.thumbnails?.high?.url}
                    alt={video.snippet?.title}
                    sx={{ height: 155, width: 320 }}
                />
                <CardContent sx={{ backgroundColor: '#1e1e1e', height: '50px' }}>
                    <Link id='videoVideo' to={`/video?id=${video.id.videoId}`}>
                        <Typography noWrap fontWeight='bold' color='white' variant='subtitle1'>
                            {video?.snippet?.title}
                        </Typography>
                    </Link>
                    <Link id='channelLink' to={`/channel?id=${video.snippet?.channelId}`}>
                        <Typography fontWeight='bold' color='gray' variant='subtitle2'>
                            {video?.snippet?.channelTitle}
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    )
}

export default VideoCard