import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import ChatRoom from "./ChatRoom"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <IconButton>
                    <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                </IconButton>
                <div classname="sidebar__header__right">
                    <IconButton><CreateIcon /></IconButton>
                    <IconButton><ExpandMoreIcon /></IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <SearchIcon />
                <input className="sidebar__search__input" placeholder="Search or start a new chat"></input>
            </div>
            <div className="sidebar__main">
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
                <ChatRoom />
            </div>
        </div>
    );
};

export default Sidebar;