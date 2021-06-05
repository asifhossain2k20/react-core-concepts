import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const friends=['Alu','Joy','Jack','Prince']

 const products=[
   {name:'PC HP',price:'$400'},
   {name:'Walton TV',price:'$800'},
   {name:'LG TV',price:'$200'},
   {name:'Apple TV',price:'$900'}
 ]

 const jobsArr=['Doctor','Engineer','Web Developer']

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is React Practice Ground </h1>
        <h2>Dynamic users</h2>
        <Users></Users>


        <Count></Count>

        <h4>Mapping a Array in List</h4>
        <ul>
          {
            friends.map(element=><li>{element}</li>)
          }
          {
            products.map(element=><li>{element.name}</li>)
          }
        </ul>

        <h4>Mapping Array Object in a Div</h4>
        {
          products.map(element=><Product product={element}></Product>)
        }

{/* 
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}
        <Person name="Asif" job={jobsArr[0]}></Person>
        <Person name="Alif" job={jobsArr[1]}></Person>
        <Person name="Hossain" job={jobsArr[2]}></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  const style={
    border:'2px solid blue',
    borderRadius:'10px',
    margin:'10px',
    padding:'10px',
    backgroundColor:'skyBlue',
    width:'300px'
  }
  return(
    <div>
     {
       users.map(element=>
        <div style={style}>
          <h2>ID {element.id}</h2>
          <h3>{element.name}</h3>
          <h4>{element.email}</h4>
        </div>
        )
     }
    </div>
  )
}
function Count(){
  const [count,setCount]=useState(10)
  const increaseState=()=>setCount(count+1);
  return(
    <div>
      <h3>Count : {count}</h3>
      <button onMouseMove={increaseState}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'2px solid blue',
    backgroundColor:'grey',
    borderRadius:'10px',
    margin:'10px',
    padding:'10px',
    width:'300px',
    float:'left'
  }
 const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>BUY NOW</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:'2px solid red',
    borderRadius:'10px',
    margin:'10px',
    padding:'10px',
    width:'400px'
  }
  console.log(props);
  return(
    <div style={personStyle}>
      <h1>{props.name}</h1>
      <h3>{props.job}</h3>
    </div>
  )
}

export default App;
