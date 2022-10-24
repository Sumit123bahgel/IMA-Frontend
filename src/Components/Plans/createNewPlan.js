import React from 'react'
import Navbar from '../navbar/navbar'

const CreateNewPlan = () => {
  return (
    <>
        <Navbar/>
        <div className='createNewPlan p-3'>
            <h1 className='text-center'>Create New Plan</h1>
            <form >

              <div className='form-group'>
                <label htmlFor="plan_name">Plan Name</label>
                <input type="text" className='form-control' placeholder='Choose a name' />
              </div>

              <div className='form-group'>
                <label htmlFor="deposit">Deposit Policy</label>
                <input type="text" className='form-control'  />
              </div>

              <div className='form-group'>
                <label htmlFor="period">Period</label>
                <input type="text" className='form-control'  />
              </div>

              <div className='form-group'>
                <label htmlFor="interest">Interest</label>
                <input type="text" className='form-control'  />
              </div>

              <div className='form-group'>
                <label htmlFor="maturity">Maturity Period</label>
                <input type="text" className='form-control'  />
              </div>

                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div> 
    </>
  )
}

export default CreateNewPlan
