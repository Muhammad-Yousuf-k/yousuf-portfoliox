import React, { useEffect, useState } from 'react'

const serviceCardBlack = ({ data }) => {

    const [topState, setTopState] = useState(data.top)


    return (
        <div style={{ top: topState }} className={` ${data.anima}  w-[90%] xl:w-[80%]  bg-[var(--primary)] gap-5 p-5 flex flex-col lg:flex-row items-center min-h-[350px] max-h-[100vh] rounded sticky`}>
            <img src={data.img} alt="" className='w-70 shrink-0 h-70' />
            <div className="flex gap-3 flex-col justify-center items-center lg:items-start ">
                <h1 className='text-4xl sm:text-6xl xl:text-8xl md:text-5xl text-white font-bold'>{data.name}</h1>
                <p className='sm:text-base lg:text-xl xl:text-2xl text-center lg:text-start line-clamp-3 text-white'>{data.para}</p>
            </div>
        </div>
    )
}

export default serviceCardBlack