import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchData'
import Sidebar from './Sidebar'
import intToString from '../utils/NumberToKM'
import Videos from './Videos'


const ChannelDetails = () => {

    const [isSubscribed, setIsSubscribed] = useState(false)

    const { id } = useParams()
    const [channelDetails, setChannelDetails] = useState(null)
    const [videos, setVideos] = useState([])

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

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '60%', margin: 'auto', padding: '30px' }}>
                <div style={{ display: 'flex' }} >
                    <div style={{ width: '100px' }}>
                        <img style={{ width: '100%', borderRadius: '50%' }} src={channelDetails?.snippet?.thumbnails?.high?.url} alt="logo" />
                    </div>
                    <div>
                        <Typography noWrap variant='h3' marginLeft={3} marginTop={1} fontSize={31} color='white' >{channelDetails?.snippet?.title.slice(0, 30)}</Typography>
                        <Typography color='gray' marginLeft={3} >
                            {channelDetails?.snippet?.customUrl}
                        </Typography>
                        <Typography color='gray' marginLeft={3} >
                            {intToString(channelDetails?.statistics?.subscriberCount)} subscribers
                        </Typography>
                    </div>
                </div>
                <div>
                    {
                        isSubscribed ?
                            <div>
                                <button
                                    style={{ color: 'white', border: '1px solid gray', padding: '10px', width: '130px', borderRadius: '20px', fontWeight: 'bold', background: 'none' }}

                                    onClick={() => setIsSubscribed(!isSubscribed)}
                                >Unsubscribe</button>
                                <span style={{
                                    color
                                        : 'white',
                                    marginLeft: '20px',
                                    border: '1px solid gray',
                                    padding: '10px',
                                    borderRadius: '47%'
                                }}><i className="fa-solid fa-bell"></i></span>
                            </div>

                            :

                            <button
                                className='hover'
                                style={{}}

                                onClick={() => setIsSubscribed(!isSubscribed)}
                            >Subscribe</button>
                    }
                </div>
            </div>

            <Box display='flex' marginTop={2} >
                <Videos videos={videos} direction='row' />
            </Box>

        </Box >
    )
}
export default ChannelDetails