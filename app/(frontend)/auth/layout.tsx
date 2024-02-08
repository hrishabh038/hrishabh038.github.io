import {Footer} from '@/containers/containers'
import React from 'react'

type Props = {children: React.ReactNode}

const Layout = (props: Props) => {
  return (
    <div className='flex flex-col'>
        <div className='pt-[60px] m-auto px-4'>
            {props.children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout