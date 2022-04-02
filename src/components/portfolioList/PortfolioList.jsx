import React from 'react'
import './portfolioList.css'
import Project from '../project/Project'
import { projects } from '../../Data'

const PortfolioList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
        </div>
        <div className="pl-list">
          {projects.map((item) => (
            <Project key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
    </div>
  )
}

export default PortfolioList
