import React from 'react'
import Drop from "./drop"
import Tabledata from './tabledata'
const table = () => {
  return (
    <>
    <div className="ttop">
        <h2>Market is down 0.80%</h2>
        <div className="select">
            <Drop str='24H' />
            <Drop str='Top Gainers' />
        </div>
    </div>
    <div className="tbottom">
        <Tabledata/>
    </div>
    </>
  )
}

export default table
