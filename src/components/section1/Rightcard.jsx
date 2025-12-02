import React from 'react'
import Rightcardcontent from './Rightcardcontent'
const Rightcard = (props) => {
  return (
    <div className=' w-80 h-full shrink-0 overflow-hidden relative  rounded-4xl'>
<img  src={props.img}   alt=" " className='h-full w-full object-cover' />
    <Rightcardcontent  id ={props.id}tag={props.tag}/>
    </div>
  )
}

export default Rightcard