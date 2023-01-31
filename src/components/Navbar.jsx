import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { SearchBar } from '../components'


const Navbar = () => {
    return (
        <Stack
            direction="row"
            sx={{ background: '#000', position: 'sticky', top: 0, justifyContent: 'space-between' }} alignItems='center'
            p={2}>

            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>

                <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="youtube" height={50} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar