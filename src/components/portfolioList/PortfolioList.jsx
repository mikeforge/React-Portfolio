import React from 'react'
import './portfolioList.css'
import Project from '../project/Project'

const PortfolioList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
        </div>
        <div className="pl-list">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </div>
  )
}

export default PortfolioList
