import React from 'react'
import { formateRevenue } from '../../../utils/formatePrice'

const DashboardOverview = ({title, amount, Icon, revenue = false}) => {
    const convertedAmount = revenue ? Number(amount).toFixed(2) : amount
  return (
    <>
      <div className='xl:w-80 w-full space-y-4 text-center md:text-start px-5 py-8'>
        <div className='flex md:justify-start justify-cente items-center gap-2'>
            <h3 className='uppercase text-xl text-slate-700 font-semibold'>{title}</h3>
            <Icon className='text-slate-800 text-2xl' />
        </div>

        <h1 className='font-bold text-slate-800 text-xl'>
            {revenue ? "$" : null}
            {revenue ? formateRevenue(convertedAmount) : convertedAmount}
        </h1>
      </div>
    </>
  )
}

export default DashboardOverview
