import React from 'react'
import { FaUser } from 'react-icons/fa'
import { flowerPot } from '../../utils/constants'
import { Link } from 'react-router-dom'

const UpperSection = ({user}) => {
  return (
    <div>
      <section className="relative flex min-h-[280px] items-center overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 to-amber-400 px-8 py-8 text-white md:px-16">

        {/* Avatar */}
        <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gray-300 md:h-44 md:w-44">
          <FaUser className="text-6xl text-white md:text-7xl" />
        </div>

        {/* User Information */}
        <div className="ml-8 md:ml-10">

          <h1 className="text-3xl font-bold md:text-4xl">
            {user?.username || "User"}
          </h1>

          <p className="mt-2 text-lg">
            {user?.email || "user@example.com"}
          </p>

          <p className="mt-5 text-lg">
            Shop smarter, live better!
          </p>

          <Link className='mt-6 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800'
                                            to={'/products'}>
                                        shop
                                    </Link>

        </div>


        {/* Shopping Illustration */}
        <div className="absolute right-10 hidden items-center gap-6 lg:flex">

          <div className="flex h-50 w-50 items-end justify-center rounded-full bg-white/40">
            <img src={flowerPot} alt="" />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold">
              Happy
            </h3>

            <h3 className="text-2xl font-bold">
              Shopping!
            </h3>
          </div>

        </div>

      </section>
    </div>
  )
}

export default UpperSection
