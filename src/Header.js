import React from 'react'
import './Header.css'
import Home from '@material-ui/icons/Home';
import FlashOn from '@material-ui/icons/FlashOn';
import LiveTv from '@material-ui/icons/LiveTv';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import Search from '@material-ui/icons/Search';
import Person from '@material-ui/icons/Person';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <div className="header_icon_row">
                    <div className="header_icon_col header_icon_col--active">
                        <Home/>
                        <p>Home</p>
                    </div>
                    <div className="header_icon_col">
                        <FlashOn/>
                        <p>Trending</p>
                    </div>
                    <div className="header_icon_col">
                        <LiveTv/>
                        <p>LIVE</p>
                    </div>
                    <div className="header_icon_col">
                        <VideoLibrary/>
                        <p>Collections</p>
                    </div>
                    <div className="header_icon_col">
                        <Search/>
                        <p>Search</p>
                    </div>
                    <div className="header_icon_col">
                        <Person/>
                        <p>User</p>
                    </div>

                </div>

            </div>
            <div className="header_right">
                <img src="https://i.ibb.co/nQBZFYx/Nice-Png-hulu-png-2424140.png" alt=""/>
            </div>
        </div>
    )
}

export default Header
