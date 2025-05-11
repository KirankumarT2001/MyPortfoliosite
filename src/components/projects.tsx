import { project_list } from '@/utils/data'
import React from 'react'
import Image from 'next/image'

const projects = () => {
  return (
    <section id='projects' className='scroll-mt-28 mb-28'>
        <h1 className='font-semibold underline'>My Projects</h1>
        <div className='flex flex-wrap justify-center items-center'>
        {
          project_list.map((e,index)=>{
            return <div className='card mb-6 m-4 ' key={index}>
            <div>
              <h2>{e.title}</h2>
              <div className='flex items-center'>
                <p className='font-bold text-gray-400'>Made with:    </p>
                {
                  e.made.map((value,ind) => {
                    return  <Image key={ind} src={value} alt="" className='mr-3 text-2xl m-3' height={38} width={38} />
                  })
                }
              </div>
              <div className='mb-4'>
                {e.details}
              </div>

            </div>
          </div>
          })
        }
      </div>
    </section>
  )
}

export default projects
