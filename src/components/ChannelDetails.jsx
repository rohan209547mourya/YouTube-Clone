import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchData'
import Sidebar from './Sidebar'
import intToString from '../utils/NumberToKM'


const ChannelDetails = () => {

    const { id } = useParams()
    const [channelDetails, setChannelDetails] = useState(null)
    const [videos, setVideos] = useState([])

    console.log(channelDetails, videos)
    useEffect(() => {

        fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
            setChannelDetails(data?.items[0])
        })
        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
            setVideos(data?.items)
        })

    }, [id])

    return (
        <Box minHeight="95vh">


            <div style={{ height: 'calc((100vw - 240px)/6.2 - 1px)' }}>
                <img
                    src={channelDetails?.brandingSettings?.image?.bannerExternalUrl}
                    alt="Banner"
                    style={{
                        backgroundAttachment: 'fixed', height: '100%', width: '100%', objectFit: 'cover'
                    }}
                />
            </div>

            <div style={{ width: '60%', margin: 'auto', padding: '30px', border: '1px solid red' }}>
                <div style={{ display: 'flex' }} >
                    <div style={{ width: '100px' }}>
                        <img style={{ width: '100%', borderRadius: '50%' }} src={channelDetails?.snippet?.thumbnails?.high?.url} alt="logo" />
                    </div>
                    <div>
                        <Typography variant='h3' marginLeft={3} marginTop={1} fontSize={31} color='white' >{channelDetails?.snippet?.title}</Typography>
                        <Typography color='gray' marginLeft={3} >
                            {channelDetails?.snippet?.customUrl}
                        </Typography>
                        <Typography color='gray' marginLeft={3} >
                            {intToString(channelDetails?.statistics?.subscriberCount)} subscribers
                        </Typography>
                    </div>
                </div>
            </div>

        </Box>
    )
}
export default ChannelDetails