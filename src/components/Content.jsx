import React from 'react';
import { BsSend } from 'react-icons/bs';

const Content = () => {
    return (
        <div className='bg-dark-600 w-full text-gray-50 p-3 overflow-y-scroll relative'>
            <div className="h-full flex flex-col justify-center">
                <div className="">
                    <h1 className='text-3xl font-bold text-center'>ChatGPT Clone</h1>
                </div>
            </div>
            <div className="search flex justify-center absolute fixed bottom-8 left-0 right-0 z-50">
                <div className="relative w-6/12">
                    <input type="text" placeholder="Ask your question..." className='w-full bg-dark-500 text-gray-50 p-3 rounded outline-none focus:outline-none focus:shadow-lg' />
                    <BsSend className='absolute right-5 top-4 cursor-pointer' onClick={() => console.log("Clicked")} />
                </div>
            </div>
        </div>
    );
};

export default Content;