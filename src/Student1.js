import React from "react";

  function Student1(props) {
     return(
        <div>
            <h1>Student Component</h1>
<button onClick={props.getData}>Call Function</button>
        </div>
    )
}


export default Student1;
