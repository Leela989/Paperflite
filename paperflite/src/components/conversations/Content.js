import React, { useState, useReducer } from 'react';
import mockData from '../../mockData/ConversationsmockData.json';
import icon1 from '../../assets/fishing1.png';
import icon2 from '../../assets/fishing2.png';
import searchIcon from '../../assets/search-icon.svg';

const initialState = {
    data: mockData,
    searchData: mockData,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SORT':
            let sortedData = [...state.searchData];
            switch (action.payload) {
                case 'createdDate':
                    sortedData.sort((a, b) => a.createdDate.localeCompare(b.createdDate));
                    break;
                case 'lastActivity':
                    sortedData.sort((a, b) => a.lastActivity.localeCompare(b.lastActivity));
                    break;
                case 'timeSpent':
                    sortedData.sort((a, b) => a.time.localeCompare(b.time));
                    break;
                default:
                    break;
            }
            return { ...state, searchData: sortedData };
        case 'SEARCH':
            const query = action.payload.toLowerCase();
            const filteredData = state.data.filter(item =>
                item.name.toLowerCase().includes(query)
            );
            return { ...state, searchData: filteredData };
        default:
            return state;
    }
};

function Content() {
    const images = [icon1, icon2, icon1, icon2, icon1];
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSearch = (event) => {
        dispatch({type: 'SEARCH', payload: event.target.value});
    };

    return (
        <div>
            <div className="relative">
                <div className="flex items-center pt-4">
                    <input type="text" className="border border-lg border-gray-300 w-[420px] h-[35px] rounded-lg text-left pl-4" placeholder="Search by conversations and contacts" onChange={handleSearch}/>
                    <img src={searchIcon} alt="searchImg" className=" right-7 relative " width={20} height={20} />
                </div>
            </div>
            <div className='flex justify-between pr-3 pt-3 cursor-pointer'>
                <div>Sort By:</div>
                <div className={`hover:text-[#E51058]`} onClick={() => dispatch({ type: 'SORT', payload: 'createdDate' })}>
                    Created Date
                </div>
                <div className={`hover:text-[#E51058]`} onClick={() => dispatch({ type: 'SORT', payload: 'lastActivity' })}>
                    Last Activity
                </div>
                <div className={`hover:text-[#E51058]`} onClick={() => dispatch({ type: 'SORT', payload: 'timeSpent' })}>
                    Time spent
                </div>
            </div>
            {state.searchData.map((item, index) => (
                <div className='flex' key={index}>
                    <img src={images[index]} alt="description" width={80} height={60} className='py-2'></img>
                    <div className='pl-5 pt-2'>
                        <h1 className='font-bold leading-4 cursor-pointer hover:text-red-500'>{item.name}</h1>
                        <p className='text-[#717274] pt-1'>{item.time}</p>
                        <p className='text-[#A9A9A9] pt-4'>{item.username}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Content;
