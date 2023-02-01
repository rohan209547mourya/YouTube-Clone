import React from 'react'
import { Box, Stack } from '@mui/material'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos }) => {
    console.log(videos)

    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
            {

                videos.map((el, index) => {

                    return (
                        <Box key={index} >
                            {/* {console.log(el)} */}
                            {el.id.videoId && <VideoCard video={el} />}
                            {el.id.channelId && <ChannelCard channelDetail={el} />}
                        </Box>
                    )
                })

            }
        </Stack >
    )
}

export default Videos