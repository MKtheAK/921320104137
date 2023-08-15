import logo from './logo.svg';
import './App.css';
import { Axios } from 'axios';
import { useEffect, useState } from "react";


function App() {
//   fetch("http://20.244.56.144/train/register")
// .then((res) => res.json())
// .then((data) => {
//   console.log(data);
// });


const [name, setName] = useState("");
const fetchData = () =>{
Axios.get('http://20.244.56.144/train/register=${name}').then((res)=>{
  console.log(res.data);
});
};
  return (
    <div className="App">
      <button>Generate train</button>
      <p> </p>
    </div>
  );
}

export default App;
