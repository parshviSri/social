import React from 'react';

const FollowerRequest = (props) => {
    const {request} = props;
    return (
        <div>
            <p>Pending Follower Request : {request && request.length}</p>
        </div>
    );
}

export default FollowerRequest;
