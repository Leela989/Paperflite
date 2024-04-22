import React from 'react';
import menuBar from '../../assets/menu-bar.svg';
import searchIcon from '../../assets/search-icon.svg';
import Content from './Content';

function ContentTab() {
    const onClickingMenuBar = () => {
        alert('Functionality is yet to decide, Coming Soon...')
    }
    return (
        <div>
            <div className='px-3 h-full border border-lg border-gray-300'>
                <div className='flex justify-between pt-8'>
                    <p className='font-bold text-4xl'>Conversations</p>
                    <img src={menuBar} alt="description" className='cursor-pointer mr-12 relative top-4' width={40} height={40} onClick={onClickingMenuBar}/>
                </div>
                <p>track user engagement</p>
                <Content />
            </div>
        </div>
    )
}

export default ContentTab