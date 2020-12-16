import Sidebar from "./Sidebar"
import Mainchat from "./Mainchat"
import React from 'react';

const MainArea = () => {
    return (
        <div className="mainarea">
            <Sidebar />
            <Mainchat />
        </div>
    );
};

export default MainArea;