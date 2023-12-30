import React from 'react'
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import './table.scss'

const drop = ({str}) => {
  return (<div className='drop'>
    <div>{str}</div>
    <div className="down">
    <KeyboardArrowDownOutlinedIcon/>
    </div>
    </div>
  )
}

export default drop