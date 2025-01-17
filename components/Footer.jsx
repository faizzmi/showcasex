import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-max flex items-center gap-2 mx-auto'>
            faizzmi74@gmail.com
        </div>
        <div className='text-center sm:flex items-center justify-between border-t 
        border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Faiz Azmi. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target="_blank" href="https://www.linkedin.com/in/faizazmi7/">Linkedin</a></li>
                <li><a target='_blank' href="https://github.com/faizzmi">Github</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer