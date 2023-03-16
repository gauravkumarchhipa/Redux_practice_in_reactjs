import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const {coins} = useSelector(state=>state.first)
  return (
    <div>{coins[0]}</div>
  )
}

export default About