import React, { useEffect, useState } from 'react';

            const InfiniteScrolling = () => {     
    const [count,setCount] = useState(50);
          
    useEffect(()=> {
    const onScroll = ()=>{
        if(window.innerHeight+ window.scrollY >= window.document.body.offsetHeight -30) {
                setCount(count+50);
        }
    }
      window.addEventListener('scroll',onScroll);

            return ()=> window.removeEventListener('scroll',onScroll);
             },[count])
             

                 const element = [];
               for(let i=0;i<count;i++){
                element.push(<div key={i}> {i+1}</div>)
                     }
     return (
    <div>
       <main>{element}</main>
    </div>
  )
}

export default InfiniteScrolling;









