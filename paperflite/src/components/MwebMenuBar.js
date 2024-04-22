import React from 'react';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/Component 4.svg';

function MwebMenuBar(props) {
    return (
        <div className='fixed w-screen bottom-0 border border-[#DBDBDB] border-2'>
            <div className='bg-white h-24 flex justify-center justify-around'>
                <img src={icon1} alt="Icon 1" className='cursor-pointer' width={30} height={30} />
                <img src={icon2} alt="Icon 2" className='cursor-pointer' width={30} height={30} />
                <img src={icon3} alt="Icon 3" className='cursor-pointer' width={30} height={30}/>
            </div>

        </div>
    );
}

export default MwebMenuBar;