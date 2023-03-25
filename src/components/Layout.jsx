import { faMessage, faPlus, faRightFromBracket, faSun, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const SidebarList = (props) => {
    return (
        <button className='text-sm w-full flex items-center rounded px-3 py-2 hover:bg-slate-800 mb-1'>
            <FontAwesomeIcon
                icon={props.iconName}
                className='mr-3 text-gray-400'
            />
            <span className='whitespace-nowrap'>{props.iconTxt}</span>
        </button>
    );
}

const Layout = (props) => {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col justify-between bg-slate-900 text-white w-80 p-3">
                <div>
                    <button className='w-full flex items-center rounded px-3 py-2 border border-gray-500 hover:bg-slate-800 mb-2'>
                        <FontAwesomeIcon
                            icon={faPlus}
                            className='mr-3 text-gray-400'
                        />
                        <span>New Chat</span>
                    </button>
                    <SidebarList iconName={faMessage} iconTxt="React help" />
                    <SidebarList iconName={faMessage} iconTxt="How to write your cv" />
                </div>
                <div className="">
                    <div className="SidebarList">
                        <hr className='border-slate-500 mb-2' />
                        <SidebarList iconName={faTrash} iconTxt="Clear conversations" />
                        <SidebarList iconName={faSun} iconTxt="Light Mode" />
                        <SidebarList iconName={faRightFromBracket} iconTxt="Log out" />
                    </div>
                </div>
            </div>
            <div className="w-full overflow-auto p-5 bg-slate-800 text-gray-300">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
