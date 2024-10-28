import React from 'react'
import{Link} from "react-router-dom"
import {Button} from '../components/Button'
import Image  from "../assets/images/pagenotfound.png"
import { useTitle } from '../hooks/useTitle'
export const PageNotFound = () => {
  useTitle("PageNotFound")
  return (
    <main className='dark:bg-gray-800'>
       <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
            <img className="rounded" src={Image} alt="404 Page Not Found" />
          </div>
        </div>
      </section>
      <section>
      <div className="flex justify-center ">
          <Link to="/">
            <Button>Back To Cinemate</Button>
          </Link>          
        </div>
      </section>
    </main>
  )
}
