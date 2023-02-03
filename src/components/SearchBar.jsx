import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e) => {

        e.preventDefault()

        if (searchQuery) {

            navigate(`/search/${searchQuery}`)
        }

        setSearchQuery("")
    }

    return (

        <Paper
            component='form'
            onSubmit={handleSearch}
            sx={{
                borderRadius: 15,
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}>

            <input
                placeholder='Search...'
                value={searchQuery}
                className='search-bar'
                onChange={(e) => { setSearchQuery(e.target.value) }} />

            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar