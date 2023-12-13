// import React, { useContext } from 'react';
// import { GlobalInfo } from './App';

// function Child() {
//   const { appColor } = useContext(GlobalInfo);
//   console.warn("appcolor", appColor);

//   return (
//     <div>
//       <h1>Child component</h1>
//     </div>
//   );
// }

// export default Child;
import React from 'react';

function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Use the handleClick function passed as a prop */}
      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
}

export default Child;
