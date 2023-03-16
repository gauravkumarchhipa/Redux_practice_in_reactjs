import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const handler = ()=>{
    dispatch({
      type : "FirstCase",
      payload : ["BTC", "ETH", "XRP"],
    });
  }

  const handleradd = ()=>{
    dispatch({
      type : "Increment",
    });
  }

  const handlermin = ()=>{
    dispatch({
      type : "Decrement",
    });
  }

  const {count}= useSelector(state=>state.first);

  const {coins} = useSelector(state=>state.first)

  return (
    <div>
      <button onClick={handler}>Click</button>
      <br/>
      <p>{coins[0]}</p>
      <p>{coins[1]}</p>
      <p>{coins[2]}</p>
      <br/>
      <button onClick={handleradd}>Addition +</button>
      <p>{count}</p>
      <button onClick={handlermin}>Minus -</button>
    </div>
  )
}
export default Home