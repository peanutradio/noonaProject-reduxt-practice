import React from 'react'
import { useSelector } from 'react-redux'

const GrandSonBox = () => {
  let count = useSelector(state=>state.count)

  return (
    <div className='grandsonbox'>Grand Son Box{count}</div>
  )
}

export default GrandSonBox