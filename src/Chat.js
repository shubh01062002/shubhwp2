import { Avatar,Button,IconButton } from '@material-ui/core'
import React,{useState} from 'react'
import "./Chat.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

function Chat({messages}) {

  const [input, setInput] = useState("");

const sendMessage = async (e) =>{
    e.preventDefault();

   await axios.post('/messages/new',{
      message : input,
      name : "shubh333",
      timestamp :"l",
      recieved : false
    })
    setInput("");
}

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar/>
        <div className='chat__headerInfo'>
         <h3>shubh gupta</h3>
         <p>I am ludo</p>
        </div>
        <div className='chat__headerRight'>
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

      <div className='chat__body'>

        {messages.map((message)=>(

        <p className= {`chat__message ${message.recieved && "chat__reciever" }`}>
        <span className="chat__name">
         {message.name}
        </span>
        {message.message}
        <span className='chat__timestamp'>
            {message.timestamp}
        </span>
      </p>
        
        
        ))}
        
        
       
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon/>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder='type a messasge here' type= "text" />
            <button onClick={sendMessage} type='submit'>
                 send a message
            </button>
        </form>
       <MicIcon/>
      </div>
      </div>
  )
}

export default Chat