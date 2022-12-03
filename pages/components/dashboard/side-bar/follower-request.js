import React from 'react';

const FollowerRequest = (props) => {
    const {request} = props;
    return (
      <div className="mt-8 justify-center flex flex-row">
        <span className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </span>
        <p className="text-4xl">
          <span className="text-slate-500">Waiting for </span>{" "}
          <span className='ml-2'> {request && request.length} Requests</span>
        </p>
      </div>
    );
}

export default FollowerRequest;
