import { Stack, Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Sidebar, Videos } from './'
import { fetchFromApi } from '../utils/fetchData'

const Feed = () => {

    const [selectedCategory, setSelectedCateogry] = useState('New')
    const [videosData, setVideosData] = useState([])

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => {
                setVideosData(data.items)
            })
    }, [selectedCategory])

    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            <Box
                sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <Sidebar

                    selectedCategory={selectedCategory}
                    setSelectedCateogry={setSelectedCateogry}
                />
            </Box>

            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>

                <Typography variant='h4' mb={2} fontWeight='bold' sx={{ color: "white" }}>{selectedCategory}

                    <span style={{ color: 'red' }}> Videos</span>
                </Typography>

                <Videos videos={videosData} />
            </Box>
        </Stack>
    )
}

export default Feed