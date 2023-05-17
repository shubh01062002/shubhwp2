import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar,IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import Sidebarchat from './Sidebarchat';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        
        <div className='sidebar__header'>
        <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bollywoodhungama.com%2Fnews%2Fbollywood%2Foffered-avatar-even-gave-titles-suggestion-james-cameron-govinda%2F&psig=AOvVaw3PZNsYpMD7hW-7DqDjlCdM&ust=1652671581015000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjg28_H4PcCFQAAAAAdAAAAABAJ"/>
                 <div className='sidebar__headerRight'>
                     <IconButton>
                     <DonutLargeIcon/>
                     </IconButton>
                     <IconButton>
                     <ChatIcon/>
                     </IconButton>
                     <IconButton>
                     <MoreVertIcon/>
                     </IconButton>
                 </div>
        </div>
        <div className='sidebar__search'>
             <div className='sidebar__searchcontainer'>
               <SearchOutlined/>
               <input placeholder='search or start new chat' type="text"/>
               </div>

        </div>

        <div className='siderbar__chats'>
              <Sidebarchat/>
              <Sidebarchat/>
              <Sidebarchat/>
              <Sidebarchat/>
        </div>
        </div>
  )
}

export default Sidebar