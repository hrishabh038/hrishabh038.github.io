import React from 'react'

type Props = {heading: string}

const Heading = (props: Props) => {
  return (
    <div className='text-sm font-bold tracking-wider px-[25px]  left-0 top-0 lg:static flex items-center sticky backdrop-filter backdrop-blur-lg h-[60px] bg-slate-900/40 z-50'>{props.heading.toUpperCase()}</div>
  )
}

export default Heading