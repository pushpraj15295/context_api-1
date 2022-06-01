import React ,{useReducer} from 'react';
import './App.css';
 
const reducer = (counter , action) =>{

  switch(action.type){

    case "INC" : {
      return counter+1;
    }
    case "DEC" : {
      return counter-1;
    }
    default :{
      return counter;
    }
  }
}

function App() {
  const [counter , dispatch] = useReducer(reducer , 0)
  return (
    <div className="App">
         
     Counter : {counter}
     <div>
          <button onClick={() =>dispatch({type:"INC"})}>+</button>
          <button onClick={() =>dispatch({type:"DEC"})}>-</button>
     </div>
         
    </div>
  );
}

export default App;
