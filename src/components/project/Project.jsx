import React from 'react'
import './project.css'


const Project = ({img, link}) => {
  return (
      <div className='p'>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className='p-img' />
        </a>
      </div>
  );
};

export default Project
