import React, { useRef, useState } from 'react'

    const CounterUsed = () => {      
  const [count,setCount] = useState(0);
  const timerRef = useRef(null);
   const handleIncrease  = ()=>{
    timerRef.current =   setInterval(()=>{
      setCount((prev)=>prev+1);
    },1000)

 }
   function stopTimer(){
   clearInterval(timerRef.current) ;
 }
       return (
       <div>
         <h1>{count}</h1>
       <button  onClick={handleIncrease}>start</button>
       <button onClick={stopTimer} >end</button>
      </div>
  )
}

export default CounterUsed


//SECOND TARIKA SE BHI KAR SAKTE HAI  
//      import React, { useEffect, useRef,useState } from 'react';
//             const CounterUsed = () => {
//       const [count,setCount] = useState(0);
//       const [start,setStart] = useState(false);
//          let timerRef = useRef(null); 
//           useEffect(()=>{
//             if(start) {
//         timerRef.current = setTimeout(()=>{
//               setCount(count+1);
//         },1000)
//     } 
//    return () => {
//         clearTimeout(timerRef.current);
//        }
//        },[count,start])
//        const  handleIncrease = ()=>{
//           setStart(true);
//     } 
//     const   stopTimer = ()=>{
//         clearTimeout(timerRef.current);
//       setStart(false);
//     }
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button  onClick={handleIncrease}>start</button>
//        <button onClick={stopTimer} >end</button>
//     </div>
//   )
// }
// export default CounterUsed
