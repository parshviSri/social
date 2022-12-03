import React from 'react';
import StatsBar from './stats-bar/stats-bar';
import ProfileBar from './profile-bar/profile-bar';
import SideBar from './side-bar/side-bar';
const Dashboard = () => {
    return (
        <div className='container'>
            <div className='flex flex-row'>
                <div className='basis-1/3 border'><StatsBar/></div>
                <div className='basis-1/3 border'><ProfileBar/></div>
                <div className='basis-1/3 border'><SideBar/></div>


            </div>
            
        </div>
    );
}

export default Dashboard;
