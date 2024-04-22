import React from 'react';
import searchIcon from '../assets/search-icon.svg';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';
import fourDotIcon from '../assets/fourDot-icon.svg';
import paperflite from '../assets/paperflite.jpg';

import '../styles/Sidebar.css';

function Sidebar() {
  const handleImageClick = () => {
    alert('Functionality is not yet mentioned, Coming Soon...');
  };

  return (
    <div>
      <div className='flex justify-center h-full w-[60px] border border-lg border-gray-300 '>
        <div>
          <div className='space-y-16 py-12'>
            <img src={searchIcon} alt="Search" className='cursor-pointer' onClick={() => handleImageClick('Search Icon')} />
            <img src={icon1} alt="Icon 1" className='cursor-pointer' onClick={() => handleImageClick('Icon 1')} />
            <img src={icon2} alt="Icon 2" className='cursor-pointer' onClick={() => handleImageClick('Icon 2')} />
            <img src={icon3} alt="Icon 3" className='cursor-pointer' onClick={() => handleImageClick('Icon 3')} />
            <img src={icon4} alt="Icon 4" className='cursor-pointer' onClick={() => handleImageClick('Icon 4')} />
            <img src={icon5} alt="Icon 5" className='cursor-pointer' onClick={() => handleImageClick('Icon 5')} />
          </div>
          <div className='space-y-12 pt-[90px] py-5'>
            <img src={fourDotIcon} alt="Four Dot Icon" className='cursor-pointer' onClick={() => handleImageClick('Four Dot Icon')} />
            <img src={paperflite} alt="Paperflite" width={30} height={30} className='cursor-pointer' onClick={() => handleImageClick('Paperflite Image')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
