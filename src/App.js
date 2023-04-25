import { useState } from 'react';
import './App.css';
import { SculptureList } from './Data.js';

function App() {
  const [index, setIndex] = useState(0);
  const[showMore, setShowMore]= useState(false);
  const[initialPos, setInitialPos] = useState({
    x:0,
    y:0
  })
  
  function handleClick(){
    setIndex(index+1);
  }
  function handleClickMore(){
    setShowMore(!showMore);
  }

  let sculptures = SculptureList[index];
  
  return (
    <div className='mainPost' onPointerMove={e=>{
      setInitialPos({
        x:e.clientX,
        y:e.clientY
      })
    }}
    style={
      {
        position: "relative",
      }
    }>

      <div style={{
        position: "absolute",
        backgroundColor: "red",
        width:20,
        height:20,
        borderRadius: "50%",
        transform: `translate(${initialPos.x}px, ${initialPos.y}px)`,
        boxShadow: "2px 3px gray"
      }}/>
        <div>
        <button onClick={handleClick}>Next</button>
        <h2>{sculptures.name}</h2>
        <h3>(Post {index+1} of {SculptureList.length})</h3>
        <img src={sculptures.img_url} alt="" />
        <button onClick={handleClickMore}>
          {showMore ? "Hide " : "Show "}details
        </button>
        {showMore && <p>{sculptures.description}</p>}
        </div>

    </div>
  );
}

export default App;
