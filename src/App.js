import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const nayoks=['LOL','Alom','XYZ']

const products=[
  {name:'PhotoShop',price:'$40'},
  {name:'Software',price:'$20'},
  {name:'Apps',price:'$20'}

]

  return (
    <div className="App">
      <header className="App-header">
      <p>I am React Developer</p>
      <Counter></Counter>
      <Users></Users>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
        </ul>

        {
          products.map(product=><Product product={product}></Product>)
        }
       
       <Person n="Asif" p="Student"></Person>
       <Person n="Alif" p="WebDeveloper"></Person>
       <Person n="AKash" p="Bussmiessman"></Person>
      </header>
    </div>
  );
}
function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  })
  return(
    <div>
        <h3>Dynamic Website : {users.length}</h3>
        <ul>
          {
            users.map(user=><li>{user.name + " " +user.phone +" "+ user.email}</li>)
          }
        </ul>
    </div>
  )
}
function Counter(){
  const [count,setCount]=useState(10);
  const handleIncrease=()=>setCount(count+1);
  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}


function Product(props){
const productStyle={
  border : '2px solid blue',
  radius:'5px',
  height:'200px',
  width:'200px',
  float:'left',
  backgroundColor: 'sky blue',
  marginTop:'5px'
}
const {name,price} = props.product;
  return(
    <div style={productStyle}>
          <h3>{name} </h3>
          <h5>{price}</h5>
          <button >Buy Now</button>
    </div>
  )
}


function Person(props){
  return(
    <div style={{border:'2px solid gold',width :'400px',marginTop:'10px'}}>
        <h3>My Name : {props.n}</h3>
        <h5>Ny Profession : {props.p}</h5>
    </div>
  )
}

export default App;
