import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebarchat.css'

const Sidebarchat = () => {
  return (
    <div className='sidebarchat'>
        <Avatar/>
        <div className='sidebar__chatinfo'>
            <h2>shubh gupta</h2>
            <p>hello ji kese ho</p>
        </div>

    </div>
  )
}

export default Sidebarchat