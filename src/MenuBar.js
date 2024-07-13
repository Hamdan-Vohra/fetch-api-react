import React from 'react'

const MenuBar = ({ handleMenu }) => {
    return (
        <header className='menu'>
            <ul className='container'>
                <li>
                    <button
                        type='button'
                        onClick={(e) => handleMenu('users')}
                        autoFocus
                    >
                        Users
                    </button>
                </li>
                <li>
                    <button
                        type='button'
                        onClick={(e) => handleMenu('posts')}
                    >
                        Posts
                    </button>
                </li>
                <li>
                    <button
                        type='button'
                        onClick={(e) => handleMenu('comments')}
                    >
                        Comments
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default MenuBar