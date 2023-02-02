import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import React from 'react'

const SearchBar = () => {
    return (

        <Paper
            component='form'
            onSubmit={() => { }}
            sx={{
                borderRadius: 15,
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}>

            <input
                placeholder='Search...'
                value=''
                className='search-bar'
                onChange={() => { }} />

            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar