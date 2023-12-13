function Student(props)
{
    console.warn(props);
    return(
    <div style={{backgroundColor:"skyblue",margin:10}}>
    <h1> Hello{props.name}</h1>
    <h2>Email:{props.email}</h2>
            </div>
    )
}
export default Student;

// PROPS USED IN CLASS COMPONENT
// import React from "react"  
// class  Student extends React.Component {
//     render()
//     {
       
//         console.log(this.props);
//         return(
//             <div>
//             <h1> Hello{this.props.name}</h1>
//             <h1> Hello{this.props.email}</h1>

//             </div>
//         )
//     }


// }



// class Student extends React.Component{
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//                 <h1>Hello {this.props.email}</h1>
//             </div>
//         );
//     }
// }

// export default Student;
