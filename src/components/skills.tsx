import {skill_value} from '@/utils/data'
import React from 'react'
import Image from 'next/image'

export const Skills = () => {
  return (
    <section id='skills'>
        <h1 className='font-bold underline'>My Skills</h1>
        <ul className='flex flex-wrap justify-center gap-2 text-lg'>
          {
            skill_value.map((e,index) => {
              return <li key={index} className='flex flex-col items-center px-4 py-3'><Image className='skill-img' src={e.image} alt="" /><span>{e.title}</span></li>
            })
          }
        </ul>
    </section>
  )
}
