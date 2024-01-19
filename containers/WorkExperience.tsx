import {Experience, Heading} from '@/components/components'
import React from 'react'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <div>
         <Heading heading="Work Experience"/>
         <div className='flex flex-col gap-8' style={{gap:"32px", padding: "0px 20px"}}>
            <Experience />
            <Experience />
            <Experience />
         </div>
    </div>
  )
}

export default WorkExperience