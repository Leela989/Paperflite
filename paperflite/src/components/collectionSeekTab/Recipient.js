import React from 'react';
import data from '../../mockData/Recipients.json';
import profilePhoto from '../../assets/profilePhoto.jpg';
import profilePhoto1 from '../../assets/profilePhoto1.jpg';
import profilePhoto2 from '../../assets/profilePhoto2.jpg';
import profilePhoto3 from '../../assets/profilePhoto3.jpg';
import profilePhoto4 from '../../assets/profilePhoto4.jpg';
import emailIcon from '../../assets/email-red_icon.svg';
import contentIcon from '../../assets/content-icon.svg';
import shareIcon from '../../assets/share-icon.svg';
import locationIcon from '../../assets/location-icon.svg';

function Recipient() {

    const images = [profilePhoto, profilePhoto1, profilePhoto2, profilePhoto3, profilePhoto4];

    return (
        <div>
            <div>
                <div className='flex '>
                    <p className='text-[#E51058] pl-3 text-lg'>Recipients - 0{data.length}</p>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <p className='text-base font-normal'>Sections - 0{data.length}</p>
                </div>
                {data.map((item, index) => {
                    return (
                        <div className='flex py-3 px-2 justify-between pt-5'>
                            <div className='flex'>
                                <img src={images[index]} alt="description" className='rounded-md w-[35px] h-[35px]'></img>
                                <p className='pl-3 text-base font-medium'>{item.name}</p>
                                <div className="w-4 border-r-2 border-gray h-5 mt-1 mr-4">&nbsp;</div>
                                <p className='text-sm font-normal hidden md:block'>{item.lastView}</p>
                            </div>
                            <div className='flex'>
                                <p className='text-[#717274] mt-1'>{item.team}</p>
                                <img src={emailIcon} alt="emailIcon"></img>
                                <img src={contentIcon} alt="content-Icon"></img>
                                <img src={shareIcon} alt="content-Icon"></img>
                                <div className="w-4 border-r-2 border-gray h-5 mt-2 mr-4">&nbsp;</div>
                                <img src={locationIcon} alt={locationIcon}></img>
                            </div>

                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default Recipient