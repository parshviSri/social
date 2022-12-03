import React from 'react';
import FollowerList from './followers/follower-list';
import FollowingList from './followings/following-list';
import RecentPublications from './publications/recent-publications';
import TotalStats from './total-stats';
 const StatsBar = () => {
    return (
      <div>
        <TotalStats/>
        <RecentPublications/>
        <FollowerList/>
        <FollowingList />
      </div>
      
    );
}
export default StatsBar

