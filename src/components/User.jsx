import React, { useEffect, useState } from 'react'
import { BiArrowBack } from "react-icons/bi"
import { useParams, useNavigate } from 'react-router-dom'
import { userDetails } from '../api/services/UserDetails'


import { FiMail } from "react-icons/fi"
import { months } from '../data/date'

const User = () => {
  const { userid } = useParams()
  const navigate = useNavigate()
  const [{ name, login, followers, following, public_repos, email, company, location, twitter_username, blog, created_at = "2021-02-02T11:15:47Z", avatar_url, bio, hireable }, setUserdata] = useState({})

  const toThousand = (number) => {
    let newnumber = (number / 1000).toFixed(1)
    if (newnumber < 1) {
      return number
    } else {
      return `${newnumber}K`
    }
  }

  const toDate = (date) => {
    let newdate = date.split("T")[0].split("-")
    const monthInNumber = newdate[1].toString()
    const month = months[monthInNumber]
    return `${newdate[2]} ${month}, ${newdate[0]}`
  }

  const numbers = [
    {
      title: "follwers",
      number: followers
    },
    {
      title: "following",
      number: following
    },
    {
      title: "Repositories",
      number: public_repos
    },
  ]

  const infos = [
    {
      icon: <FiMail />,
      title: "email",
      data: email
    },
    {
      icon: <FiMail />,
      title: "organization",
      data: company
    },
    {
      icon: <FiMail />,
      title: "location",
      data: location
    },
    {
      icon: <FiMail />,
      title: "joined date",
      data: toDate(created_at)
    },
    {
      icon: <FiMail />,
      title: "twitter",
      data: twitter_username
    },
    {
      icon: <FiMail />,
      title: "website",
      data: blog
    },
  ]

  useEffect(() => {
    userDetails(setUserdata, userid)
  }, [])
  return (
    <div className='mx-2'>
      <div className=' max-w-6xl mx-auto '>

        {/* top portion */}
        <div className=' flex justify-between my-16'>
          <button onClick={() => navigate(-1)} className='  text-3xl'><BiArrowBack /></button>
          <div>
            <button className=' py-3 px-16 text-white font-semibold  rounded-md bg-[#F24E1E]'>{hireable ? "Hire Me" : "Not Hireable"}</button>
          </div>
        </div>

        <div className='border border-black px-6 lg:px-24 relative flex flex-col justify-center items-center'>
          <div className=' mt-28 mb-[1px]  font-bold text-3xl capitalize'>{name}</div>
          <div className=' font-bold text-gray-700 mb-8'>@{login}</div>

          <div className=' flex gap-5 mb-8'>
            {
              numbers.map((number, index) => {
                return (
                  <div key={index} className=' flex flex-col items-center'>
                    <div className=' text-3xl text-gray-700 mb-4'>{toThousand(number.number)}</div>
                    <div className='  px-4 py-1 bg-gray-200 rounded text-sm font-medium capitalize'>{number.title}</div>
                  </div>
                )
              })
            }
          </div>

          {/* description inside boxes */}
          <div className=' lg:grid  grid-cols-2 mb-20 gap-14 '>
            <div className=' border mb-6 lg:mb-0 border-gray-400 py-9 px-11 grid grid-cols-2 gap-y-3'>
              {
                infos.map((info, index) => {
                  const { data, icon, title } = info
                  return (
                    <div key={index} className=' col-span-1 flex flex-col'>
                      <div className=' flex items-center text-gray-500 gap-2'>
                        <div>{icon}</div>
                        <div className='capitalize'>{title}</div>
                      </div>
                      <div className=' font-bold text-sm'>{data ? data : "not available"}</div>
                    </div>
                  )
                })
              }
            </div>

            <div className=' border p-10 border-gray-400'>
              <div className=' font-bold'>Bio</div>
              <div className=' text-sm overflow-auto'>{bio ? bio : "bio not available"}</div>
            </div>
          </div>

          {/* image section */}
          <div className=' absolute -top-12 rounded-full overflow-hidden '>
            <div className=' w-24 h-24 '><img src={avatar_url} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User