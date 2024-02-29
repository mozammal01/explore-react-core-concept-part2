import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';

export default function Freinds() {
  const [friends, setFriends] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, [])

  return (
    <div className='box'>
      <h3>Friends : {friends.length}</h3>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }
    </div>
  )
}



/* 
1. State to hold data
2. Use Effect with dependency array
3. Use fetch to load data 
4. Set loaded data to the state
*/