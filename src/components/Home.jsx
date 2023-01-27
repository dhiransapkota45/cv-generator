import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [user, setUser] = useState("")
  const navigate = useNavigate()
  const { alluser, loading } = useSelector(store => store.userReducer)
  const [eror, setError] = useState(false)
  console.log(alluser, loading);
  const onsubmitHandler = (e) => {
    e.preventDefault()
    const bool = alluser.some(value => {
      return value.login === user
    })
    console.log(bool);
    if (bool) {
      setError(false)
      navigate(`/user/${user}`)
    } else {
      setError(true)
    }
  }
  return (
    <form onSubmit={onsubmitHandler} className=' h-screen w-screenf flex flex-col justify-center items-center'>
      <div className=' font-bold text-[42px] mb-1'>
        Github profile
      </div>
      <div className=' text-[#3C3C3C] text-2xl mb-6'>Generate your profile</div>
      <div>
        <input onChange={(e) => setUser(e.target.value)} className=' border p-3 w-80 rounded-md mr-5' type="text" placeholder='Github Username' />
        <button type='submit' className='px-12 py-3 rounded-md text-white bg-[#DE5A21]'>{
          loading ? <Spinner /> : "Generate"
        }</button>
        {
          eror && <div className=' text-red-400'>user does not exist on provided api</div>
        }
      </div>
    </form>
  )
}

export default Home


// https://api.github.com/users/dhiransapkota45343434