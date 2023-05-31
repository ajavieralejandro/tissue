import React from 'react'
import './style.scss';

export default function SectionHeader({title}) {
  return (
    <h6 className='section-header pt-6'>
      {title}
    </h6>
  )
}
