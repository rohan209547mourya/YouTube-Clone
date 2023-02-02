import { Stack } from '@mui/material'
import React from 'react'

const Sidebar = ({ selectedCategory, setSelectedCateogry }) => {

    const categories = [
        { name: 'New', icon: <i className="fa-solid fa-house"></i> },
        { name: 'Music', icon: <i className="fa-solid fa-music"></i> },
        { name: 'Education', icon: <i className="uil uil-graduation-cap"></i> },
        { name: 'Podcast', icon: <i className="fa-solid fa-podcast"></i> },
        { name: 'Gaming', icon: <i className="fa-solid fa-gamepad"></i> },
        { name: 'Sport', icon: <i className="fa-solid fa-medal"></i> },
        { name: 'Beauty', icon: <i className="fa-solid fa-spa"></i> },
        { name: 'Comedy', icon: <i className="fa-solid fa-masks-theater"></i> },
        { name: 'Gym', icon: <i className="fa-solid fa-dumbbell"></i> },
        { name: 'Crypto', icon: <i className="fa-brands fa-bitcoin"></i> },

    ];

    return (
        <Stack sx={{
            overflow: 'auto', height: { sx: 'auto', md: '95%' }, width: { md: '200px' }, flexDirection: { md: 'column' }
        }}>

            {

                categories.map((category, index) => (
                    <button
                        key={index}
                        className='category-btn'
                        onClick={() => setSelectedCateogry(category.name)}
                        style={{ color: 'white', backgroundColor: category.name === selectedCategory && 'red' }}>


                        <span
                            style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}
                        </span>

                        <span style={{ opacity: category.name === selectedCategory ? 1 : 0.7 }}>{category.name}</span>
                    </button>
                ))
            }

        </Stack >
    )
}

export default Sidebar