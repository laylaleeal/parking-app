import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const  App = () => {
  const [renderFind, toggleRenderFind] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        Tight Spot
      </header>
      <main>
        <Button 
          name="Find a spot"
          onClick={()=> {
            toggleRenderFind(true)
            console.log("clicked Spot button")
          }}
        ></Button>
        {!renderFind && <Button 
          name="Rent a spot"
          onClick={()=>console.log("clicked Rent button")}
        ></Button>}
        {renderFind && <span>You are now looking at some spots</span>}
      </main>
    </div>
  );
}

const Button = (props) => {
  return <button onClick={props.onClick}>{props.name}</button>
}

export default App;
