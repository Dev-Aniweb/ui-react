import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <>
   <div className='py-10 flex h-[90vh]  gap-10 px-5'>
    <Leftcontent/>
    <Rightcontent users={props.users}/>
   </div>
    
    </>
  )
}

export default Page1content