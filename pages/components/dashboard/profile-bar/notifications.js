import React from 'react';
import NotificationCard from './notification-card';

const Notifications = (props) => {
    const {notis} = props;
    return (
        <div className='overflow-y-auto h-fit'>
          <p className='text-center text-2xl'>Notifications</p>
          {notis?.items && notis?.items?.map((noti) =><NotificationCard key={noti?.notificationId} notifications={noti} />)}  
        </div>
    );
}

export default Notifications;
