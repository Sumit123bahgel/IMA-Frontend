import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";


const Loading = () => {
    const override = {
        borderColor: "red",
    }

  return (
    <div className='d-flex justify-content-center align-items-center w-90 h-full ml-2'>
     <BounceLoader
        color={'#aaaaaa'}
        loading={true}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
    </div>
  )
}

export default Loading
