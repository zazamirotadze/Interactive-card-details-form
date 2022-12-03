import React from 'react'
import Form from './Form'

const SecondPart = (props) => {
  return (
    <div className='secondPart'>
      <div className='secondPart__hopefulbox'></div>
      <Form {...props}/>
    </div>
  )
}

export default SecondPart