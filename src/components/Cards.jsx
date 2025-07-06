import React from 'react'
import Single from '../assets/Single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white text-black'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} />
                    <h2 className='text2xl font-bold text-center py-8 ' >Single user</h2>
                    <p className='text-center text-4xl font-bold' >$149</p>
                    <div className='text-center font-medium' >
                        <p className='py-2 border-b mx-8 mt-8' >500 GB Storage</p>
                        <p className='py-2 border-b mx-8' >1 granted User </p>
                        <p className='py-2 border-b mx-8' >Send up to 2 GB</p>
                    </div>
                    <button>Start Trail</button>
                </div>
            </div>
        </div>
    )
}

export default Cards