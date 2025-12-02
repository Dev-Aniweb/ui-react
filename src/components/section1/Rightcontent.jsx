import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div className='h-full p-6 w-2/3 flex flex-nowrap overflow-x-auto  rounded-4xl gap-10'>
    {props.users.map(function (elem,idx ) {
      return<Rightcard  key={idx} id={idx} img={ elem.img} tag={elem.tag}/>

    })}
    </div>
  )
}

export default Rightcontent