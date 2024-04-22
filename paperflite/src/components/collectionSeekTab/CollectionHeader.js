import React from 'react'
import icon1 from '../../assets/collection_seek-icon1.svg';
import icon2 from '../../assets/collection_seek-icon2.svg';
import icon3 from '../../assets/collection_seek-icon3.svg';
import data from '../../mockData/CollectionSeek.json';
import emailIcon from '../../assets/email-icon.svg';
import timeSpent from '../../assets/time_spent-icon.svg';
import dealValue from '../../assets/deal_value-icon.svg';
import contentIcon from '../../assets/content-icon.svg';
import Recipient from './Recipient';
import backgroundImg from '../../assets/BackgroundImg.png'

function CollectionHeader() {

    let icons = [emailIcon, contentIcon, timeSpent, dealValue];
    return (
        <div className=''>
            <div className="relative ">
                <img src={backgroundImg} className="w-full h-full object-cover" alt="Background" />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className='flex justify-between mt-1 px-2'>
                <div className='font-bold text-3xl'>
                    Collection "seeeek"
                </div>
                <div className='flex space-x-3 px-3'>
                    <img src={icon1} />
                    <img src={icon2} />
                    <img src={icon3} />
                </div>
            </div>
            <div className='px-2'>
                <div>You shared 2 assets with 4 recipients</div>
                <div>1 month ago via QuickSend</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pl-2 py-2">
                {data?.map((item, index) => (
                    <div key={index} className="border border-lg w-36 sm:w-48 h-24 sm:h-[76px] rounded-xl">
                        <div className="flex justify-between px-2">
                            <p className="font-bold pt-3">{item?.percentage}</p>
                            <p className="relative ">
                                <img src={icons[index]} alt="description" width={40} height={40} />
                            </p>
                        </div>
                        <div className="pl-2 pt-3">{item?.name}</div>
                    </div>
                ))}
            </div>
            <Recipient />

        </div>
    )

}

export default CollectionHeader


{/* <div>
<img src={backgroundImg} width="100%"  alt='bgm' />
<div>
<div className='flex justify-between relative bottom-2 pl-6'>
<div className='font-bold text-3xl'>Collection "Seeeek"</div>
<div className='flex space-x-3'>
    <img src={icon1} alt="description" className='cursor-pointer'></img>
    <img src={icon2} alt="description" className='cursor-pointer'></img>
    <img src={icon3} alt="description" className='cursor-pointer'></img>
</div>
</div>
<div className='pt-[18px] pl-6'>
<p className='leading-3 text-base'>You shared 2 assets with 4 recipients</p>
<p className='leading-2 text-[#717274] pt-2 text-sm'>1 month ago via QuickSend</p>
</div>
<div className="w-full flex flex-wrap space-x-8 ml-4 space-y-2 px-2 py-7">
{data?.map((item, index) => (
    <div key={index} >
        <div className='border border-lg sm:w-48 w-36 h-[76px] rounded-xl'>
            <div className="flex justify-between px-2">
                <p className="font-bold">{item?.percentage}</p>
                <p className='relative bottom-2'>
                    <img src={icons[index]} alt="description" width={40} height={40} />
                </p>
            </div>
            <div className="pl-2">{item?.name}</div>
        </div>
    </div>
))}
</div>
</div>

<Recipient />
<div className='bg-slate-950 w-full'></div>
</div> */}
