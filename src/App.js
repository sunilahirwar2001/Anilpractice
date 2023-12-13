// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';
// import User from './User';
// import Classcomponent from './Classcomponent';
// import Jsx from './Jsx';

//import { useState } from "react";

//      function App() {
//       let data = "sunil sahab";
//       function Apple() {
//       data ="peter";
//       alert(data);
//       return(<div>Apple component</div>)
//    }
//   return (
//     <div>
//    <h1>Hello world</h1>
//    <h1>{data}</h1>
//    <button onClick={Apple}>Click me</button>
//    {/* event uses in react */}
  
//    {/* <User/>
//    <User/>
//    <User/>
//    <User/> */}
//    {/* <h1>Helo Sunil</h1>
//     <Classcomponent/>
//     <Classcomponent/>
//     <Apple/> */}
//    {/* <Jsx/> */}
   
//    </div>
//   );
// }
// export default App;

//STATE USE IN REACTJS
//  import {useState} from 'react';

//   function App() {
//   // let data="sunil"
//    const [data,setData]=useState(0);
//   function updadeData()
//   {
//       data='ahirwar';
//     alert(data); 
//   setData("Ahirear") ;//change karta h
//   setData(data+1);
//    }
//   return(
 
//     <div className='App'>
//     <h1>{data}</h1>
//     <button onClick={updadeData}>Click</button>
//     </div>
//   );
// }
// export default App;
 

//part:13 CLASS Component
// import React,{Component} from 'react';
//   class App extends Component {
//      constructor() {
//      super();
//     this.state={
// //data:"anil"
//       data:1
//     }
//    }
//    Apple() {
//    // alert("apple");
//    //this.setState({data:"sindhu"});
//     this.setState({data:this.state.data+1});
//   }
    
   
//   render()
//   {
//     return(
//     <div className='App'>
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>this.Apple()}>Click</button>
//     </div>
      
//     );
//   }
//  }
//  export default App;

 //Part 14 Props in reactJs
 
//   import Student from './Student';
// import { useState } from 'react';
//  function App(){
//   const [name,setName]=useState("Anil");
//   return(
//     <div className='App'>

//       <h1>Props uses in react:</h1>
//       <Student  name={"anil"} email='anil@gmail.com' />
//       <Student  name={"peter"} email='peter@gmail.com'/>
//       {/* <Student name={name}/> */}
//       <button onClick={()=>{setName("sindhu")}}>Update</button>
//     </div>
//   );
//  }
//  export default App;

 //CLASS COMPONENT USE IN PROPS
//  import Student from './Student';
//  import React from 'react';
//  class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       name:"Anil"
//     }
//   }
//   render(){

  
//   return(
//     <div className='App'>
//     <h1>Props1</h1>
//     <Student name={this.state.name} email= "anil@gmail.com"></Student>
//    <button onClick={()=>this.setState({name:"sidhu"}) }>Update</button>
//     </div>
//   );
//  }
// }
// export default App

//GET INPUT BOXX VALUE
       // import logo from './logo.svg';
//       import './App.css';
//          import React ,{useState}from 'react' ;

//             function App() {
//      const  [data,setData] = useState(null)
//      const  [print,setPrint] = useState(false)

//   function getData(val)
//   {
//     console.warn(val.target.value)
//     setData(val.target.value)
//     setPrint(false)
//   }
//   return (
//     <div className="App">
//      {
//        print?
//        <h1> {data}</h1>
//        :null
//      }
//     <input type="text" onChange={getData} />
//     <button onClick={()=>setPrint(true)} >Print Data</button>
//     </div>
//   );
// }
// export default App;


//HIDE SHOW AND TOGGLE REACT IN JS
//import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import {useState} from 'react'
// function App()  { 
//   const[state,setState]= React.useState(true);
//   return( 
//     <div className="App">
//   {
//     state?<h1> Hello world</h1>:null
//     }
  
//      <button onClick={()=>setState(false)}></button>
//      <button onClick={()=>setState(true)}></button>

//     </div>
    
//   )
// }
// export default App ;

// import logo from './logo.svg';
// import './App.css';
// import React,{useState} from 'react'
// function App() {
//   const [show,setShow] = useState(true); 
//   return (
//     <div className="App">
//      {
//        show?<h1>Hello World !</h1>:null
//      }
//      <button onClick={()=>setShow(true)} >Show</button>
//      <button onClick={()=>setShow(false)} >Hide</button>
// <button onClick={()=>setShow(!show)} >Toggle</button> 
//     </div>
//   );
// }
//      export default App;

 //FORM CREATE 
//    import React from 'react';
//    import {useState} from 'react';
//    function App(){

//   const[name,setName]=useState("");
//   const[tnc,setTnc]=useState(false);
//   const[interest,setInerest]=useState("");
//   function getFormData(e){
//    console.warn(name,tnc,interest);
//       e.preventDefault();
//    }




//   return(
//     <div className='App'>
//       <h1>Handle form in react</h1>
//   <form onSubmit={getFormData} >
   
//     <input type="text" placeholder='Enter name'  onChange={(e)=>setName(e.target.value)} />
    
//    <select>
//       <option> Bmv</option>
//       <option>Ferari</option>
//       <option>Lamergoni</option>
//       <option>Toyota</option>
//       </select>
     
//     <input  type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/><span>Accept terms and condtion</span>
     
    
//       <button type='submit'>Submit</button>
      
//   </form>
//   </div>
//  );
//  }

//  export default App;
// import "./styles.css";
// import React,{useState} from "react";
// export default function App() {
//   const[state,setState] = useState("");
//   const[interest,setInterest] = useState("")
//   const [tcn,setTcn]= useState(false);
// const handleSubmit=(e)=>{
//   console.log(state,interest,tcn);
//      e.preventDefault();
//    }
//    return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//  <p>{state}</p>
// <input type='text' value={state} onChange={(e)=>setState(e.target.value)}
//  placeholder="Enter your name"/>

// <select value={interest} onChange={(e)=>setInterest(e.target.value)}>
//   <option>BMw</option>
//   <option>Ferrair</option>
//    <option>Lamergini</option>
// </select>
// <input type = 'checkbox'value={tcn} onChange={(e)=>setTcn(e.target.value)}/><span>Term and condition</span>
// <button type='submit'>Click</button>
//       </form>
//       {/* {
//         state?<h1>Hello</h1>:null
//       }
//      {/* <button onClick ={click1}>Hide</button>
//      <button onClick= {handleClick}>Show</button> */}
  
//     </div>
//   );
// }


// import Profile from './Profile'
// import React,{useReducer,useState} from 'react';


// import React,{useState} from "react";
// export default function App() {
// const [name,setName]= useState("");


// const [password,setPassword]= useState('');
//   const[nameError,setNameError]= useState(false);
//   const[passwordError,setPasswordError] = useState(false);
//   const loginHandler = (e) => {
//     e.preventDefault();
//     // const savedName = localStorage.getItem("name");
//     // const savedPassword = localStorage.getItem("password");
//     if (name.length >= 3 && password.length >= 3) {
//       localStorage.setItem("name",name);
//       localStorage.setItem("password",password);
//       console.log(name, password);
//     } else {
//       console.log("False");
//     }
//   }
//       const handleAddName=(e)=>{
//         let item = e.target.value;
//        if(item.length<3){
//       setNameError(true);
//        }
//        else{
//        setNameError(false)
//        }
//        setName(item);
        
  
//       }
//       const handleAddPassword=(e)=>{
//      let  data = e.target.value;

//         if(data.length<3){
//          setPasswordError(true); 
//          }
//          else{
//           setPasswordError(false);
//          }
//          setPassword(data)
          
        
  
//       }

    

//   return (
//     <div className="App">
//       <form onSubmit={loginHandler}>
//   <p>{name}</p>
//  <input type='text' onChange={handleAddName} placeholder="Enter your name"/>
// <span>{nameError?<p>User not valid</p>:" "}</span>
//   <input type='password'onChange={handleAddPassword} placeholder="Enter your Password"/>
//   <span>{passwordError?<p>password not valid</p>:" "}</span>

//       <button type='submit'>Click</button>

//       </form>

//     </div>
//   );
// }


// function App() {

//   function reducer(state,action) {
//     switch(action.type){
//       case'increment':
//       return{...state,count:state.count+1}
  
//       case 'decrement':
//         return{...state,count:state.count-1}
//         default:
//         return state
//     }
//   }
//   const [state,dispatch]=useReducer(reducer,{count:1})
//   const  [count,setCount]=useState({count:0})
//   return (
// <>
// {count.count}
// <button onClick={()=>{
//   setCount({...count,count:count.count+1})
// }}>button</button>
   
  
//     <Profile />
//     </>
   
//   );

// }
// export default App;

//REDUCER READ IN JS 
    
// import React, { createContext, useState, useContext } from 'react';
// import Child from './Child';
// import SuperChild from './SuperChild';

// export const GlobalInfo = createContext();

// function App() {
//   const [appColor, setAppColor] = useState("green");
//   const [day, setDay] = useState("Monday");

//   const getDay = (item) => {
//     console.warn(item);
//   }

//   return (
//     <GlobalInfo.Provider value={{ appColor, getDay }}>
//       <div>
//         <h1 style={{ color: appColor }}>App component {day}</h1>
//         <Child />
//         <SuperChild />
//       </div>
//     </GlobalInfo.Provider>
//   );
// }

// export default App;



// import Profile from './Profile'
// function App() {
//   return (
//     <div className="App">
//     <Profile />
//     </div>
//   );
// }


//fFORM VALIDATION 
// import logo from './logo.svg';
// import './App.css';
// import Login from './Login'
// function App() {
//   const data = true;
//   return (
//     <div className="App">
//      <Login />
//     </div>
//   );
// }

// export default App;


//FUNCTION PASS AS PPROS
// import React from 'react';
// import Child from './Child';

// function Parent() {
//   // Define a function that you want to pass to the child component
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       {/* Pass the handleClick function as a prop to the Child component */}
//       <Child handleClick={handleClick} />
//     </div>
//   );
// }

// export default Parent;


// import {useState} from 'react';

// function Child({handleClick}) {
//   return <button onClick={handleClick}>Increment</button>;
// }
// import React,{useState} from "react";
// export default function App() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     console.log('Function ran in Child component');
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h2>Count is: {count}</h2>

//       <Child handleClick={handleClick} />
//     </div>
//   );
// }


// import React from 'react';
// import styles from './App.module.css'; // Import the CSS module

//  function App() {
//   return (
//     <div className={styles['my-component']}>
//       <h1>Hello, React!</h1>
//     </div>
//   );
// }
// export default App;

// import React, { useState } from 'react';

// const App = () => {
// const [hello,setHello] = useState(1);
// const [age,setAge] = useState(0);
//   const handleClick =()=>{
//     //setHello(0)

//   //  console.log(mycheck);
//     setAge(50);

//     setHello(hello === 1?0:1);

//     setHello(500);
//   }
//   return (
//     <div id="main">
//       <h1 id="marco-polo">{hello === 1?"Marco":"Polo"}</h1>
     
//       <button id="marco-polo-toggler" onClick={handleClick} >
//         {hello === 1?"Polo":"Marco"}
//       </button>
//     </div>
//   );
// };

// export default App;



//  import React, { useState } from 'react';
//    import ToDo from './ToDo';
//     const initialTodos = [
//   { id: 1, input: 'Task 1', createdAt: '2022-01-01T00:00:00Z' },
//   { id: 2, input: 'Task 2', createdAt: '2022-01-02T00:00:00Z' },
 
// ];
//        function App() {
//   const [todos, setTodos] = useState(initialTodos);
//      const reverseOrder = () => {
//       const reversedTodos = [...todos].reverse();
//       setTodos(reversedTodos);

//   };


//   return (
//     <div>
//       <button onClick={reverseOrder}>Reverse</button>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Input</th>
//             <th>Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//       { todos.map(todo => (
//             <ToDo key={todo.id} todoId={todo.id} createdAt={todo.createdAt}>
//               {todo.input}
//             </ToDo>
//            ) ) }
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;



//    import React, { useState } from 'react';
//    var name ="";
//            function App() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const handleTitleChange = (event) => {
//       setTitle(event.target.value);
//   };

//   const handleDescriptionChange = (event) => {
//        setDescription(event.target.value);
//    };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setTitle(description);
//     setDescription(title);
//   }; 

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" value={title} onChange={handleTitleChange} />
//         <h1> {title}</h1>
//       </label>
//       <br />
//       <label>
//         Description:
//         <input type="text" value={description}    onChange={handleDescriptionChange} />
//         <h1>{description}</h1>
//       </label>
//       <br />
//       <h1>{name}</h1>
//       <button type="submit">Add Todo</button>
//     </form>
//   ) ;

// }

// export default App;

// import React, { useState, useEffect } from "react";


// function App() {
//   const [result, setResult] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredResults, setFilteredResults] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://api.mfapi.in/mf");
//         const data = await response.json();
//         setResult(data.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filtered = result.filter(
//       (data) =>
//         data.schemeName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredResults(filtered.slice(0, 10));
//   }, [result, searchTerm]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div className="App">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a mutual fund"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>
//       <div className="funds-container">
//         <ul>
//           {filteredResults.map((data) => (
//             <li key={data.schemeCode}>
//               <h3>{data.schemeName}</h3>
//               <p>Scheme Code: {data.schemeCode}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
//LOAD DATA IN A SIMPLE WAY
// import React, { useEffect, useState } from 'react'
// const App = () => {
//   const[isLoading,setIsLoading] = useState(true);
//   const[data,setData] = useState(null);
 
//   useEffect(()=>{
//     setTimeout(()=>{


//     const fetchData = "sample fatch data got display";
//     setIsLoading(false);
//     setData(fetchData);
//   },2000)
//   },[])
//  if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//  <h1>{data}</h1>
    
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'
// const App = () =>  {
//       const [isLoading,setIsLoading] = useState(true);   
//       const[data,setData] = useState([]);
//       const [searchTerm,setSearchTerm] = useState('');
//       const [filteredData, setFilteredData] = useState([]);
//        useEffect(()=> {
//     const fetchData = async()=>{
//       try{
//          const define = await fetch('https://api.mfapi.in/mf');
//          const result =  await define.json();
//          console.log(result);
//          setData(result);
//           setIsLoading(false);
//     }
//     catch (error) {
//       console.log('Error fetching data:', error);
//       setIsLoading(false);
//   };
// }
//     fetchData()
// } ,[])
//   const handleChange=(e)=>  {
//      setSearchTerm(e.target.value);
// }
//     useEffect(()=>{
//   const filterResults = data.filter((item)=>
//   item.schemeName.toLowerCase().includes(searchTerm.toLowerCase()));
//     console.log(filterResults);
//        setFilteredData(filterResults.slice(0,10));

// },[data,searchTerm])

// if (isLoading) {
//   return <div>Loading...</div>;
// }
//   return (
//     <div>
//  <div className='container'>
//   <input type='text' placeholder='enter search scheme ' className='searchData'
//   value={searchTerm} onChange={handleChange}
  
//   />
//  <ul>
//           {filteredData.map((item) => (
//             <li key={item.schemeCode}>
//               <span>{item.schemeName}</span> - <span>{item.schemeCode}</span>
//             </li>
//           ))}
//         </ul>
//  </div>
      
//     </div>
//   )
// }

// export default App




//SEARCH BAAR DROPDOWN IN MASOUD
      
// import React, { useState } from 'react'
// import data from './data';
// const App = () => {

//   const[value,setValue]= useState('');

//   const handleChange=(e)=>{
// setValue(e.target.value);

//   }
//  const onSearch = (searchTerm)=>{

//   setValue("search",searchTerm);
//  }
//  const filteredSuggestions = data.filter((item) =>
//     item.fullname.toLowerCase().startsWith(value.toLowerCase())
//   );


//   return (
//     <div>
//       <input type='text' placeholder='enter search name' value={value} onChange={handleChange}/>
//  <button  onClick={()=>onSearch(value)}>Submit</button>
// <div>
//   {
//     filteredSuggestions.filter((item)=>{
//       const serachTerm = value.toLowerCase();
//       const fullName = item.fullname.toLowerCase();

//       // return fullName.startsWith(serachTerm);
//       return serachTerm && fullName.startsWith(serachTerm) && fullName!==serachTerm;
//     })
  

  
   
//     .map((datas)=>(
//      <div onClick={()=>onSearch(datas.fullname)}     >{datas.fullname}</div> 
//     ))
//     }
//  </div>
//     </div>
//   )
// }

// export default App










//import React, { useState } from 'react';

//       import data from './data';
//         const App = () => {
//         const [value, setValue] = useState('');
//     const   handleChange = (e) => {

//        setValue(e.target.value);
//   };

//   const onSearch = (searchTerm) => {
//       setValue(searchTerm);
//   };

//   const filteredSuggestions = data.filter((item) =>
//    // item.fullname.toLowerCase().startsWith(value.toLowerCase())
//    item.fullname.toLowerCase().includes(value)
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter search name"
//         value={value}
//         onChange={handleChange}
//         autoComplete="off"
//       />
//       <button onClick={() => onSearch(value)}>Submit</button>
//       <div>
//         {filteredSuggestions
//             .filter((datas) => datas.fullname.toLowerCase() !== value.toLowerCase())   
//               .map((datas) => (
//             <div key={datas.id} onClick={() => onSearch(datas.fullname)}>
//                   {datas.fullname}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default App;







//      import React,{useEffect, useState} from 'react'
//      const App = () => {
//      const [category,setCategory] = useState('general');
//      const [newsData, setNewsData] = useState([]);
//      const[menu,setMenu] = useState(''); 

//          useEffect(()=> {
//  const apikey = '6ace96d50e405f04424aa2b7e0478912';
// const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;
//         fetch(url)
//   .then(function (response){
//     return response.json();
//     }   )

//         .then(function(data){
//           setNewsData(data.articles);
//           console.log(data.article);
//          } )




// },[category])
//  console.log(category);

//        const handleSelect=(e)=>{
//   setCategory(e.target.value);
//    setMenu(e.target.value);

//   }

//    return  (
//      <div>
//       <h1>Dropdown menu</h1>
//       <select placeholder='Enter your mneu'  value={category} onChange={handleSelect}>
//       <option value="general">General</option>
//         <option value="business">Business</option>
//         <option value="sports">Sports</option>
//         <option value="technology">Technology</option>
//         <option value="world">World</option>
//         <option value="entertainment">Entertainment</option>
//         <option value="science">Science</option>
//       </select>
//       {menu && <p>You selected: {menu}</p>}   
//       <ul>
//         {newsData.map((item) => (
//           <li>
//             <img src={item.image} alt='Article' />
//             <p>{item.title}</p>
//             <p>{item.description}</p>
//           </li>
//         ))}
//       </ul>
//      </div>
//    )
//  }
 
//  export default App

// import React, { useState } from 'react';

// function TypingGame() {
//      const [inputText, setInputText] = useState('');
//      const texts = ['Sample text 1', 'Sample text 2', 'Sample text 3', 'Sample text 4', 'Sample text 5', 'Sample text 6', 'Sample text 7', 'Sample text 8', 'Sample text 9', 'Sample text 10'];
//      const [currentIndex, setCurrentIndex] = useState(0);
//      const [accuracy, setAccuracy] = useState(100);

//     const handleInputChange = (event) => {
//       const { value } = event.target;
//       setInputText(value);
//   };

//   const handleRestartGame = () => {
//     setCurrentIndex(0);
//     setInputText('');
//     setAccuracy(100);
//   };

//   const calculateAccuracy = () => {
//     const text = texts[currentIndex];
//     const totalChars = text.length;
//     let mistakes = 0;
//     for (let i = 0; i < totalChars; i++) {
//       if (text[i] !== inputText[i]) {
//         mistakes++;
//       }
//     }
//    const calculatedAccuracy = ((totalChars - mistakes) / totalChars) * 100;
//     setAccuracy(calculatedAccuracy.toFixed(2));
//     } ;
//   const handleInputSubmit = (event) => {
//     event.preventDefault();

//     if (inputText === texts[currentIndex]) {
//       if (currentIndex === texts.length - 1) {
//         // Game completed
//         alert('Congratulations! You completed the game.');
//         handleRestartGame();
//       } else {
//         // Move to the next text
//         setCurrentIndex(currentIndex + 1);
//         setInputText('');
//         setAccuracy(100);
//       }
//     } else {
//       calculateAccuracy();
//     }
//   };

//   return (
//     <div className="typing-game">
//       <div className="text">{texts[currentIndex]}</div>
//       <form onSubmit={handleInputSubmit}>
//         <input className="input" type="text" value={inputText} onChange={handleInputChange} />
//         <div className="accuracy">Accuracy: {accuracy}%</div>
//         <button className="restart-btn" type="button" onClick={handleRestartGame}>
//           Restart Game
//         </button>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default TypingGame;























// import React, { useState } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';

// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const themeStyles = {
//     light: {
//       backgroundColor: '#ffffff',
//       color: '#000000',
//     },
//     dark: {
//       backgroundColor: '#212121',
//       color: '#ffffff',
//     },
//   };

//   const currentTheme = isDarkMode ? 'dark' : 'light';
//   const styles = themeStyles[currentTheme];

//   return (
//     <div style={styles}>
//       <button onClick={toggleTheme}>
//         {isDarkMode ? <FaSun /> : <FaMoon />}
//       </button>
//       <h1>Toggle Theme Example</h1>
//       {/* Rest of your application */}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react'

// const App = () => {
//   const[name,setName] = useState('');
//   const [email,setEmail]= useState('');
//   const[phone,setPhone] = useState('');
//   const[gender,setGender] = useState('male');
//   const[password,setPassword] = useState('');  
//   const[errorMessage,setErrorMessage] = useState('');
//   const[welcomeMessage,setWelcomeMessage] = useState('');

//  const validateForm=(event)=> {
//       event.preventDefault();
//     setErrorMessage('')
//     setWelcomeMessage('');
   

//       if(!name || !email || !gender || !phone  || !password){
//         setErrorMessage('All fields are mandatory');
//         return
//        }
//       const alphaNumeric = /^[a-zA-Z0-9\s]*$/;
//       if(!alphaNumeric.test(name)){
//         setErrorMessage("Name is not alphanumeric");
//         return
//       }
//       if(!email.includes('@')){
//         setErrorMessage("Email must contain @");
//         return
//       }

//   if(gender ==='male' && gender=== 'female' &&   gender==='other'){
// setErrorMessage("Please identitfy as male, female, or other")
// return
//   }
//  if(isNaN(phone)){
//   setErrorMessage("Phone Number must contain only numbers ");
//   return
//  }
//  if(password.length<6){
// setErrorMessage("Password must contain at least 6 numbers ");
// return
//  }
//  const username = email.split('@')[0];
//  setWelcomeMessage(`Hello ${username}`);       
//  }

   
 




//   return (
//     <div>
//       <form onSubmit={validateForm}>
//       <label>Name</label>
//       <input type='text'  data-testid = 'name' value={name} 
//       onChange={(e)=>setName(e.target.value)}/>
     
//       <label>Email address</label>
//       <input type='email'  data-testid = 'email' value={email}
//        onChange={(e)=>setEmail(e.target.value)}/>
   
//   <select
//   id='gender'
//   value={gender}
//   onChange={(e)=>setGender(e.target.value)}>Gender
//     <option>Male</option>
//     <option>Female</option>
//     <option>Other</option>
//   </select>

//       <label>Phone Number</label>
//       <input type='number'  data-testid = 'phoneNumber' value={phone}  
//          onChange={(e)=>setPhone(e.target.value)}/>
     
//       <label>Password</label>
//       <input type='password'  data-testid = 'password' value={password}  
//       onChange={(e)=>setPassword(e.target.value)}/>
    
//       <button  data-testid = 'submit'           
//                                        >Submit button</button> 
//  </form>    
//  {errorMessage && <div className='error' >{errorMessage} </div>}
   
//    {welcomeMessage && <div>{welcomeMessage}</div>}
   
   
   
//     </div>
//   )
// }
// export default App

// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [workDuration, setWorkDuration] = useState(25); // Default work duration set to 25 minutes
//   const [breakDur, setBreakDur] = useState(5); // Default break duration set to 5 minutes
//   const [timerType, setTimerType] = useState('Work');
//   const [start, setStart] = useState(false);
//   const [reset, setReset] = useState(workDuration * 60);

//   useEffect(() => {
//     if (reset === 0) {
//       if (timerType === 'Work') {
//         setReset(breakDur * 60);
//         setTimerType('Break');
//         alert('Break timer is over. Get back to work!');
//       } else {
//         setReset(workDuration * 60);
//         setTimerType('Work');
//         alert('Work timer is over. Take a break!');
//       }
//     }
//   }, [reset, timerType, workDuration, breakDur]);

//   const handleWorkDuration = (e) => {
//     const duration = parseInt(e.target.value);
//     if (!isNaN(duration) && duration >= 0) {
//       setWorkDuration(duration);
//       setReset(duration * 60);
//     }
//   };

//   const handleBreakDuration = (e) => {
//     const duration = parseInt(e.target.value);
//     if (!isNaN(duration) && duration >= 0) {
//       setBreakDur(duration);
//       if (timerType === 'Break') {
//         setReset(duration * 60);
//       }
//     }
//   };

//   const handleStart = () => {
//     setStart(true);
//   };

//   const stopTimer = () => {
//     setStart(false);
//   };

//   const resetTimer = () => {
//     setStart(false);
//     setReset(workDuration * 60);
//     setTimerType('Work');
//   };

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60)
//       .toString()
//       .padStart(2, '0');
//     const seconds = (timeInSeconds % 60).toString().padStart(2, '0');

//     return `${minutes}:${seconds}`;
//   };

//   useEffect(() => {
//     let countdown;
//     if (start && reset > 0) {
//       countdown = setInterval(() => {
//         setReset((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(countdown);
//   }, [start, reset]);

//   return (
//     <div>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//       <input
//         type="text"
//         placeholder="Work duration (minutes)"
//         onChange={handleWorkDuration}
//       />
//       <input
//         type="text"
//         placeholder="Break duration (minutes)"
//         onChange={handleBreakDuration}
//       />
//       <div>
//         <h2>{timerType}</h2>
//         <h2>{formatTime(reset)}</h2>
//       </div>
//     </div>
//   );
// };

// export default App;

 



// import React, { Component, useEffect, useState } from "react";
// // import '../styles/App.css';
// // import { Timestamp } from "mongodb";

// const App = () => {
//   const [workDuration, setWorkDuration] = useState(25);
//   const [breakDur, setBreakDur] = useState(5);
//   const [timerType, setTimerType] = useState('Work');
//   const [start, setStart] = useState(false);
//   const [reset, setReset] = useState(workDuration * 60);

//      useEffect(() =>   {
//     if (reset === 0) {
//       if (timerType === 'Work') {
//         setReset(breakDur * 60);
//         setTimerType("Break");
//         alert("Break timer is over. Get back to work!");
//       } else {
//         setReset(workDuration * 60);
//         setTimerType("Work");
//         alert("Work timer is over. Take a break!");
//       }
//     }
//   }, [reset, timerType, workDuration, breakDur]);

//   const startTimer = () => {
//     setStart(true);
//   };

//   const stopTimer = () => {
//     setStart(false);
//   };

//   const resetTimer = () => {
//     setStart(false);
//     setReset(workDuration * 60);
//     setTimerType("Work");
//   };

//   const handleWorkDuration = (event) => {
//     const duration = parseInt(event.target.value);
//     if (!isNaN(duration) && duration >= 0) {
//       setWorkDuration(duration);
//     }
//   };

//   const handleBreakDurationChange = (event) => {
//     const duration = parseInt(event.target.value);
//     if (!isNaN(duration) && duration >= 0) {
//       setBreakDur(duration);
//     }
//   };

//   const formatTime = (timeInSeconds) => {
//     const minute = Math.floor(timeInSeconds / 60)
//       .toString()
//       .padStart(2, '0');
//     const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
//     return `${minute}:${seconds}`;
//   };

//   useEffect(() => {
//     let countdown;
//     if (start) {
//       countdown = setInterval(() => {
//         setReset((prevTime) => prevTime - 1);
//       }, 1000);
//     }
//     return () => clearInterval(countdown);
//   }, [start]);

//   return (
//     <div id="main">
//       <div>
//         <h1>Work Time</h1>
//         <button data-testid="start-btn" disabled={start} onClick={startTimer}>
//           Start
//         </button>
//         <button data-testid="stop-btn" disabled={!start} onClick={stopTimer}>
//           Stop
//         </button>
//         <button
//           data-testid="reset-btn"
//           disabled={start}
//           onClick={resetTimer}
//         >
//           Reset
//         </button>
//       </div>
//       <div>
//         <label>Work duration</label>
//         <input
//           type="number"
//           data-testid="work-duration"
//           value={workDuration}
//           onChange={handleWorkDuration}
//         />
//       </div>
//       <div>
//         <label>Break Duration</label>
//         <input
//           type="number"
//           data-testid="break-duration"
//           value={breakDur}
//           onChange={handleBreakDurationChange}
//         />
//         <button>set</button>
//       </div>
//       <div>
//         <div>
//           <h2>{timerType}</h2>
//           <h2>{formatTime(reset)}</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


//      import React, { useState } from 'react';
//      const App = () => {
//      const[name,setName] = useState('');
//      const [email,setEmail] = useState('');
//      const [phone,setPhone] = useState('');
//      const [gender,setGender] = useState('male')
//      const [password,setPassword] = useState('');
//      const [errorMessage,setErrorMessage] = useState('');
//      const [welcomeMessage,setWelcomeMessage] = useState('');
//      const handleSubmit = (event) => {
//         event.preventDefault();  
//               setErrorMessage('');
//                  if(!name  || !email || !password || !email ||!gender) {
//                setErrorMessage("Please filled all field mandatory ");
//              }
//           if(name.trim() === '') {
//          setName("Please fill inputy field")
//            return ;   
//            }   
//            if(email.includes("@")){
//             setEmail('please use @');
//            }

//              if(!phone>=10){
//               setErrorMessage("plase give 10 number provide");

//              }
//              if(password.length<6){
//               setErrorMessage("plase give 10 number provide");

//              }
//      setWelcomeMessage(`Hello ${name}`);  
//          console.log(welcomeMessage);  
//       }

//     return (

//  <form onSubmit={handleSubmit}>

//       <label>Name</label>
//      <input type='text'
//      value={name}
//   onChange={(e)=>setName(e.target.value)}
//       placeholder='Enter your Name '/>
      
    
   
//         <label>Email:</label>
//         <input type='email' value={email}
//            onChange={(e)=>setEmail(e.target.value)}
//         placeholder='Enter your Email'/>
     
//         <label>Phone No:</label>
//         <input type='number'
//            onChange={(e)=>setPhone(e.target.value)}
//          value={phone} placeholder='Enter your Phone no'/>
     
//         <select
//           value={gender}
//            onChange={(e)=>setGender(e.target.value)}>
//           <option>Male</option>
//           <option>Female</option>
//           <option>Others</option>
//         </select>
        
      
//         <label>Password :</label>
//         <input type='password' 
//            onChange={(e)=>setPassword(e.target.value)}
//         value={password} placeholder='Enter your Password'/>
//        <button type='submit'>Submit</button>
//        {errorMessage && <div className='error' >{errorMessage} </div>}
//        {welcomeMessage && <div>{welcomeMessage}</div>}
//         </form>
//     )
//   }
  
//   export default App
  





//   import React, { useState, useEffect } from "react";

//    const App = () => {
//   const [countdownTime, setCountdownTime] = useState(0);

//   useEffect(() => {
//         let countdownInterval;

//     const startCountdown = () => {
//       clearInterval(countdownInterval);

//       const inputTime = Math.floor(parseFloat(countdownTime));

//       if (!isNaN(inputTime) && inputTime >= 0) {
//         setCountdownTime(inputTime);

//         countdownInterval = setInterval(() => {
//           setCountdownTime((prevTime) => {
//             if (prevTime > 0) {
//               return prevTime - 1;
//             } else {
//               clearInterval(countdownInterval);
//               return 0;
//             }
//           });
//         }, 1000);  // Corrected interval timing: 1000 milliseconds (1 second)
//       } else {
//         setCountdownTime(0);
//       }
//     };

//     document.addEventListener("keydown", (event) => {
//       if (event.key === "Enter") {
//         startCountdown();
//       }
//     });

//     return () => {
//       clearInterval(countdownInterval);
//       document.removeEventListener("keydown", startCountdown);
//     };
//   }, [countdownTime]);

//   return (
//     <div className="wrapper">
//       <div id="whole-center">
//         <h1>
//           Reverse countdown for
//           <input
//             id="timeCount"
//             onKeyDown={(event) => {
//               if (event.key === "Enter") {
//                 setCountdownTime(event.target.value);
//               }
//             }}
//           />{" "}
//           sec.
//         </h1>
//       </div>
//       <div id="current-time">{countdownTime}</div>
//     </div>
//   );
// };

// export default App;




//   import React, { useEffect, useRef, useState } from 'react'
//         const App = () => {
//         const[time,setTime] = useState(0);

//          useEffect(()=>{
//          return()=>clearInterval(id.current); 
//                },[]);

//            let id = useRef();

//    const handleTime = () => {
//     id.current= setInterval(()=>{
 
//         setTime((prev)=>prev+1);
//         console.log(time);
//       },2000)
//     }

//   return (
//     <div>
//         <h1>{time}</h1>
//       <button onClick={handleTime}>Start</button>
//       <button onClick={()=>clearInterval(id.current)}>Stop</button>
//       <button
//            onClick={() => {
//             clearInterval(id.current);
//             setTime(0);
//           }}     >Reset</button>
//     </div>
//   )
// }

// export default App




// import { useEffect, useRef, useState } from "react";
// // import "./App.css";

// function App() {
//   const [time, setTime] = useState(0);

//      useEffect(() => {
//     return () => clearInterval(id.current);
//   },  []);

//   let id = useRef();

//   function handelTime() {
//     id.current = setInterval(() =>  {  
//       setTime((prev) => prev + 1);
//       console.log(time);
//     },1000);
//   }

//   return (
//     <div className="App">
//       <h1>{time}</h1>
//       <button onClick={() => handelTime()}>Start</button>
//       <button onClick={() => clearInterval(id.current)}>Pause</button>
//       <button
//         onClick={() => {
//           clearInterval(id.current);
//           setTime(0);
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }

// export default App;

//   import React, { useState } from 'react';
//   import WordInput from './WordInput';
//    const ParagraphInput = () => {
//    const [inputText, setInputText] = useState('');

//     const handleInputChange = (event) => {
//      setInputText(event.target.innerText);
//      };

//   return (
//     <div
   
//       contentEditable={true}
//       onInput={handleInputChange}
//       style={{
//         border: '1px solid black',
//         padding: '10px',
//         minHeight: '100px',
//       }}
//     >
//        <WordInput/>
//       {inputText}
//     </div>
//   );
// };

// export default ParagraphInput;





  
// import React, { useEffect, useState } from 'react'
// import './index.css'
// import ScoreBoard from './components/ScoreBoard'
// import blueCandy from './images/blue-candy.png'
// import greenCandy from './images/green-candy.png'
// import orangeCandy from './images/orange-candy.png'
// import purpleCandy from './images/purple-candy.png'
// import redCandy from './images/red-candy.png'
// import yellowCandy from './images/yellow-candy.png'
// import blank from './images/blank.png'

  

//  const width =8;
//  const candyColors = [
//   blueCandy,
//   greenCandy,
//   orangeCandy,
//   purpleCandy,
//   redCandy,yellowCandy,
//  ]




// const App = () => {

//   const [currentColor,setCurrentColor] = useState([]);

//  const [squareBeingDrag,setSquareBeingDrag] = useState(null);
//  const [squareBeingReplace,setSquareBeingReplace] = useState(null);
 
//  const [ScoreDis,setScoreDis] = useState(0);


//   const checkForColumnFours =()=>{

//     for(let i=0;i<=39;i++){

//       const columnFour = [i,i+width,i+width*2,i+width*3]

//       const decidedColor = currentColor[i];
//       const isBlank = currentColor[i]===blank

//       if(columnFour.every(square=>currentColor[square] === decidedColor   && !isBlank)){
       
//         setScoreDis((score)=>score+4)

//         columnFour.forEach((square=>currentColor[square] == blank))
//     return true
//       }
//     }
//   }
 
//   const checkFoRowFours =()=>{
//     for(let i=0;i<64;i++){
//       const RowFour = [i,i+1,i+2,i+3]
//       const decidedColor = currentColor[i];
     
// const notValid = [5,6,7,13,14,15,21,22,23,30,31,37,38,39,45,46,47,53,54,55,62,63,64];
 
// const isBlank = currentColor[i]===blank

// if(notValid.includes(i)) continue;

//       if(RowFour.every(square => currentColor[square]=== decidedColor &&  !isBlank) ){
//        setScoreDis((score)=>score+4)
//          RowFour.forEach(square=>currentColor[square] =blank)
//        return true
//       }
//     }
//   }


//   const checkForRowThree = ()=>{


//     for(let i=0;i<64;i++){
//       const rowOfThree = [i,i+1,i+2]
//       const decidedColor = currentColor[i];
//       const isBlank = currentColor[i]===blank

//        const notValid = [6,7,14,15,22,23,30,31,38,39,46,47,54,54,55,63,64];

//       if(notValid.includes(i)) continue;
        
//       if(rowOfThree.every(square => currentColor[square]=== decidedColor  && isBlank) ){

//         setScoreDis((score)=>score+4)

//          rowOfThree.forEach(square=>currentColor[square] = blank)
 
//       }
//     }
    
//   }



//   const checkForColumnThree =()=>{
//     for(let i=0;i<=47;i++){
//       const columnThree = [i,i+width,i+width*2]
//       const decidedColor = currentColor[i];

//       const isBlank = currentColor[i]===blank

//       if(columnThree.every(square => currentColor[square]=== decidedColor  && !isBlank) ){
//         setScoreDis((score)=>score+4)

//          columnThree.forEach(square=>currentColor[square] = blank)
//        return true
//       }
//     }
//   }



 

 
//  const moveIntoSquareBelow = () =>{

//     for(let i=0;i<=55;i++){
//       const firstRow = [0,1,2,3,4,5,6];
//           const isFirstRow=   firstRow.includes(i)

//           if(isFirstRow && currentColor[i] === blank){
//     let randomNumber  = Math.floor(Math.random()*candyColors.length)
//        currentColor[i] = candyColors[randomNumber];
//   }
//      if((currentColor [i+width]) === blank){
//       currentColor[i+width] = currentColor[i];
//       currentColor[i] = blank
//      }

//   }



//  }








//   const createBoard = ()=>{
//     const randomColorArrangement =[];
//     for(let i=0;i<width*width;i++){
//       const randomColor  = candyColors[Math.floor(Math.random()*candyColors.length)];
//        randomColorArrangement.push(randomColor);
//     }
//            setCurrentColor(randomColorArrangement);
//          //  console.log(randomColorArrangement);

//    // console.log(randomColorArrangement);
//   }

 






// const dragStart = (e) => {
//   console.log('Drag Start');

//   setSquareBeingDrag(e.target)
// }
// const dragDrop = (e) => {
//   // e.preventDefault();
//   console.log('Drag Drop');


//   setSquareBeingReplace(e.target)
// }



// const dragEnd = ()=>{
//  console.log('Drag End');
   
//   const squareBeingDragId =  parseInt(squareBeingDrag.getAttribute('data-id'))
//   const squareBeingReplaceId =    parseInt( squareBeingReplace.getAttribute('data-id'));


  
//    currentColor [squareBeingDragId] = squareBeingDrag.getAttribute('src')
// currentColor[squareBeingReplaceId] = squareBeingReplace.getAttribute('src')

// console.log("squareBeingDragId",squareBeingDragId);
// console.log("squareBeingReplaceId",squareBeingReplaceId);

//    const validMoves = [
//          squareBeingDragId-1,
//          squareBeingDragId -width,
//          squareBeingDragId+1,
//          squareBeingDragId +width   
 


//    ]

//    const validMove = validMoves.includes(squareBeingReplaceId)
//    const isColumnFour = checkForColumnFours();
//  const isColumnThree = checkForColumnThree();
//  const isRowFour = checkFoRowFours();
//  const isRowThree = checkForRowThree();

//  if(squareBeingReplaceId && validMove && (isRowThree  ||   isColumnFour ||
//   isColumnThree || isRowFour)){
//   setSquareBeingDrag(null);
//   setSquareBeingReplace(null);


//   }
//   else{
//     currentColor[squareBeingDragId] = squareBeingDrag.getAttribute('src');

//     currentColor[squareBeingReplaceId] = squareBeingReplace.getAttribute('src');
   
//     setCurrentColor([...currentColor]);

//   }


// }













// // const dragStart = (e) => {
// //   console.log('Drag Start');
// //   setSquareBeingDrag(e.target);
// // };

// // const dragDrop = (e) => {
// //   e.preventDefault(); // Prevent default behavior to enable dropping elements
// //   console.log('Drag Drop');
// //   setSquareBeingReplace(e.target);
// // };

// // const dragEnd = () => {
// //   console.log('Drag End');
// //   if (squareBeingDrag && squareBeingReplace) {
// //     const squareBeingDragId = parseInt(squareBeingDrag.getAttribute('data-id'));
// //     const squareBeingReplaceId = parseInt(squareBeingReplace.getAttribute('data-id'));

// //     currentColor[squareBeingDragId] = squareBeingDrag.style.backgroundColor;
// //     currentColor[squareBeingReplaceId] = squareBeingReplace.style.backgroundColor;
// //     setCurrentColor([...currentColor]);
// //   }
// // };







// useEffect(()=>{
//   createBoard()

// },[])   


//  useEffect(()=>{

//  const timer = setInterval(()=>{

 
//   checkForColumnFours();
//   checkFoRowFours();
//    checkForColumnThree()
//    checkForRowThree()
//    moveIntoSquareBelow()

//  setCurrentColor([...currentColor]);
//  },1000)
//  return()=>clearInterval(timer);
 
 

//  },[checkForColumnFours,checkFoRowFours,checkForColumnThree,checkForRowThree,moveIntoSquareBelow,currentColor]);



//   return (
//     <div className='app'>
//      <div className='game'>
//   {
//  currentColor.map((candyColor,index)=>(
//   <img   
   
//   key={index}
//   src={candyColor}

// alt={candyColor}
//   data-id={index}
//   draggable = {true}
//   onDragStart={dragStart}
//   onDragOver={(e) => e.preventDefault()} // Fix the event name here
//   onDrop={dragDrop} // Fix the event name here
//   onDragEnd={dragEnd} // Fix the event
    


//   // onDrawOver = {(e)=>e.preventDefault()}
//   // onDrawOver = {(e)=>e.preventDefault()}
//   // onDrawOver = {(e)=>e.preventDefault()}


//   />
     


//  ))

//   }

//      </div>
//      <ScoreBoard score={ScoreDis} />
//     </div>
//   )
// }

// export default App







// import {useEffect, useState} from 'react'
// import ScoreBoard from './components/ScoreBoard'
// import blueCandy from './images/blue-candy.png'
// import greenCandy from './images/green-candy.png'
// import orangeCandy from './images/orange-candy.png'
// import purpleCandy from './images/purple-candy.png'
// import redCandy from './images/red-candy.png'
// import yellowCandy from './images/yellow-candy.png'
// import blank from './images/blank.png'

// const width = 8
// const candyColors = [
//     blueCandy,
//     orangeCandy,
//     purpleCandy,
//     redCandy,
//     yellowCandy,
//     greenCandy
// ]

// const App = () => {
//     const [currentColorArrangement, setCurrentColorArrangement] = useState([])
//     const [squareBeingDragged, setSquareBeingDragged] = useState(null)
//     const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
//     const [scoreDisplay, setScoreDisplay] = useState(0)

//     const checkForColumnOfFour = () => {
//         for (let i = 0; i <= 39; i++) {
//             const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
//             const decidedColor = currentColorArrangement[i]
//             const isBlank = currentColorArrangement[i] === blank

//             if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//                 setScoreDisplay((score) => score + 4)
//                 columnOfFour.forEach(square => currentColorArrangement[square] = blank)
//                 return true
//             }
//         }
//     }

//     const checkForRowOfFour = () => {
//         for (let i = 0; i < 64; i++) {
//             const rowOfFour = [i, i + 1, i + 2, i + 3]
//             const decidedColor = currentColorArrangement[i]
//             const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]
//             const isBlank = currentColorArrangement[i] === blank

//             if (notValid.includes(i)) continue

//             if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//                 setScoreDisplay((score) => score + 4)
//                 rowOfFour.forEach(square => currentColorArrangement[square] = blank)
//                 return true
//             }
//         }
//     }

//     const checkForColumnOfThree = () => {
//         for (let i = 0; i <= 47; i++) {
//             const columnOfThree = [i, i + width, i + width * 2]
//             const decidedColor = currentColorArrangement[i]
//             const isBlank = currentColorArrangement[i] === blank

//             if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//                 setScoreDisplay((score) => score + 3)
//                 columnOfThree.forEach(square => currentColorArrangement[square] = blank)
//                 return true
//             }
//         }
//     }

//     const checkForRowOfThree = () => {
//         for (let i = 0; i < 64; i++) {
//             const rowOfThree = [i, i + 1, i + 2]
//             const decidedColor = currentColorArrangement[i]
//             const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
//             const isBlank = currentColorArrangement[i] === blank

//             if (notValid.includes(i)) continue

//             if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//                 setScoreDisplay((score) => score + 3)
//                 rowOfThree.forEach(square => currentColorArrangement[square] = blank)
//                 return true
//             }
//         }
//     }

//     const moveIntoSquareBelow = () => {
//         for (let i = 0; i <= 55; i++) {
//             const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
//             const isFirstRow = firstRow.includes(i)

//             if (isFirstRow && currentColorArrangement[i] === blank) {
//                 let randomNumber = Math.floor(Math.random() * candyColors.length)
//                 currentColorArrangement[i] = candyColors[randomNumber]
//             }

//             if ((currentColorArrangement[i + width]) === blank) {
//                 currentColorArrangement[i + width] = currentColorArrangement[i]
//                 currentColorArrangement[i] = blank
//             }
//         }
//     }

//     const dragStart = (e) => {
//         setSquareBeingDragged(e.target)
//     }
//     const dragDrop = (e) => {
//         setSquareBeingReplaced(e.target)
//     }
//     const dragEnd = () => {
//         const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
//         const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))

//         currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
//         currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

//         const validMoves = [
//             squareBeingDraggedId - 1,
//             squareBeingDraggedId - width,
//             squareBeingDraggedId + 1,
//             squareBeingDraggedId + width
//         ]

//         const validMove = validMoves.includes(squareBeingReplacedId)

//         const isAColumnOfFour = checkForColumnOfFour()
//         const isARowOfFour = checkForRowOfFour()
//         const isAColumnOfThree = checkForColumnOfThree()
//         const isARowOfThree = checkForRowOfThree()

//         if (squareBeingReplacedId &&
//             validMove &&
//             (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)) {
//             setSquareBeingDragged(null)
//             setSquareBeingReplaced(null)
//         } else {
//             currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
//             currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
//             setCurrentColorArrangement([...currentColorArrangement])
//         }
//     }


//     const createBoard = () => {
//         const randomColorArrangement = []
//         for (let i = 0; i < width * width; i++) {
//             const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
//             randomColorArrangement.push(randomColor)
//         }
//         setCurrentColorArrangement(randomColorArrangement)
//     }

//     useEffect(() => {
//         createBoard()
//     }, [])

//     useEffect(() => {
//         const timer = setInterval(() => {
//             checkForColumnOfFour()
//             checkForRowOfFour()
//             checkForColumnOfThree()
//             checkForRowOfThree()
//             moveIntoSquareBelow()
//             setCurrentColorArrangement([...currentColorArrangement])
//         }, 100)
//         return () => clearInterval(timer)
//     }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement])


//     return (
//         <div className="app">
//             <div className="game">
//                 {currentColorArrangement.map((candyColor, index) => (
//                     <img
//                         key={index}
//                         src={candyColor}
//                         alt={candyColor}
//                         data-id={index}
//                         draggable={true}
//                         onDragStart={dragStart}
//                         onDragOver={(e) => e.preventDefault()}
//                         onDragEnter={(e) => e.preventDefault()}
//                         onDragLeave={(e) => e.preventDefault()}
//                         onDrop={dragDrop}
//                         onDragEnd={dragEnd}
//                     />
//                 ))}
//             </div>
//             <ScoreBoard score={scoreDisplay}/>
//         </div>
//     )
// }

// export default App
















// import React, { useState } from 'react'
// const App = () => {
     
//   const [count,setCount] = useState(0);
   
//   const handleClick = ()=> {
//       setCount(count+1);
//         }
//     const handleMinus=()=> { 
//         setCount(count-1);
//     }
//   return (
//     <div>
//       <h1  style={{color:count>0?"gold":"blue"}} > 
//       <p>{count}</p>  </h1>
         
//       <button  onClick={handleClick} >+
//           </button>
//       <button   onClick={handleMinus}>-  
//          </button>
//     </div>
//   )
// }
// export default App
 
// import React from 'react'
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
// import Home from './Home'
// import About from './About'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<h1>Hello</h1>} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//       <Link to='/home'>Home</Link>
//       <Link to='/about'>About</Link>
//     </div>
//   )
// }

// export default App





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = 'https://places-in-radius.p.rapidapi.com/openapi.json';
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': 'b661cae799mshcc26f83992b86c4p10f6cajsn39d1fd73344a',
//           'X-RapidAPI-Host': 'places-in-radius.p.rapidapi.com'
//         }
//       };
      
//       try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//       } catch (error) {
//         console.error(error);
//       }

    
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>API Response</h1>
//       {responseData ? (
//         <div>
//           <h2>Places</h2>
//           <ul>
//             {responseData.places.map((place, index) => (
//               <li key={index}>
//                 {place.name}
//                 <img src={place.image_url} alt={place.name} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }

// export default App;









// import React from 'react'
// import CounterUsed from './learnbucket/CounterUsed'
// import InfiniteScrolling from './learnbucket/InfiniteScrolling'
// import CustomSwitch from './learnbucket/SwitchingRendering'
// import RaceCondition from './learnbucket/RaceCondition'
// const App = () => {
//   return (
//     <div>
//       {/* <CounterUsed/> */}
//       {/* <InfiniteScrolling/> */}
//       <CustomSwitch/>
//     {/* <RaceCondition/> */}
  
//     </div>
//   )
// }

// export default App


//    async function fetchApi() {
//   // Use await with fetch to wait for the promise to resolve
//   let response =  fetch("https://jsonplaceholder.typicode.com/todos");
//   // Use await with json() to wait for the parsing of the response body
//   let result =   response.json();
//   // Log the result after the promise is resolved
//   console.log(result);
// }
// // Call the asynchronous function
// fetchApi();


// 

import React from 'react'
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Footer/>
    </div>
  )
}

export default App
