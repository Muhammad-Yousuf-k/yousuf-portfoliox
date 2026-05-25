import React from 'react'
import SectionTop001 from '../component/SectionTop001'
import Timeline from '../component/Timeline'
import useData from '../hooks/useData';

const ExperienceSection = () => {
    const { experiencesData } = useData();


    return (
        <div id='service' className='flex flex-col items-center w-full gap-10 pt-15'>
            <SectionTop001 name="Experience" />
            <Timeline experiencesData={experiencesData} />


        </div>
    )
}

export default ExperienceSection