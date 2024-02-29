import React from 'react';

export function Loader(){
    return (
        <div className="flex justify-center items-center space-x-2">
            <div className="animate-bounce w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="animate-bounce200 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="animate-bounce400 w-4 h-4 bg-blue-500 rounded-full"></div>
        </div>
    );
}