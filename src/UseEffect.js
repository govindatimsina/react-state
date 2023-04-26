import React from 'react'
import { useState, useEffect } from 'react'
export default function UseEffect() {
    const[content, setContent] = useState('Posts');
    const[items, setItems] = useState([]);

    useEffect(
    ()=>{
        fetch(`https://jsonplaceholder.typicode.com/${content}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [content]
    )
  return (
    <div>
      <div>
      <button onClick={()=>{setContent('Posts')}}>Posts</button>
      <button onClick={()=>{setContent('Users')}}>Users</button>
      <button onClick={()=>{setContent('Comments')}}>Comments</button>
      </div>
      <h1>{content}</h1>

      <div>
        {
            items.map(item => {
                return <div>
                    <ul>
                        <li>{JSON.stringify(item)}</li>
                    </ul>
                </div>
            })
        }
      </div>
    </div>
  )
}
