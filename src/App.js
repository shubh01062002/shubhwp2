import React,{useEffect , useState} from "react";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios'

function App() {

  const [messages,setMessages] = useState([])

useEffect(()=>{
  axios.get('/messages/sync')
  .then(response => {
    setMessages(response.data)
  })


},[])

useEffect(() => {
  const pusher = new Pusher('88544a1deef3aeeef63a', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('insert', (newMessages)=> {
    alert(JSON.stringify(newMessages));
    setMessages([...messages,newMessages])
  });

  return () => {
          channel.unbind_all();
          channel.unsubscribe();
  };

}, [messages])

console.log(messages)

  return (
    <div className="app">
      <div className= "app__body">
      <Sidebar/>
      <Chat messages = {messages}/>
      </div>
   
    </div>
    
  );
}

export default App;
