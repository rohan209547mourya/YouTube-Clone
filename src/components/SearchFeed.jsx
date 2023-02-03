import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Videos } from './'
import { fetchFromApi } from '../utils/fetchData'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {


    const [videosData, setVideosData] = useState([])
    const { searchQuery } = useParams()
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchQuery}}`)
            .then((data) => {
                setVideosData(data.items)
            })
    }, [searchQuery])

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 1, marginLeft: '40px' }}>

            <Typography variant='h4' mb={2} fontWeight='bold' sx={{ color: "white" }}>Search Results for:

                <span style={{ color: 'red' }}>{' '}{searchQuery}</span>
                {' '}videos
            </Typography>

            <Videos videos={videosData} />
        </Box>

    )
}

export default SearchFeed