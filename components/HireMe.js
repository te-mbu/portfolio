import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex flex-col items-center justify-center overflow-hidden'>
        <div className='w-48 h-48 relative'>
            <Image src="/images/svgs/circular-text.svg" fill className="object-cover animate-spin-slow"/>
        </div>
        <Link href="mailto:mbu.terence@gmail.com" target='_blank' className='absolute text-light dark:text-dark bg-dark dark:bg-light px-3 py-8 rounded-full shadow-md border border-solid border-dark dark:border-light font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light'>Hire Me</Link>
    </div>
  )
}

export default HireMe