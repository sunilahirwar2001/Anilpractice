// import React, {  Children } from 'https://esm.sh/react@18.2.0'
// import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

// // CustomSwitch" component aur "CustomCase" / "DefaultCase" components ka use aap React 
// // applications mein conditional rendering aur component composition ke liye kar sakte hain.
// //  Inka main use case hota hai ki aap kuch specific conditions ke basis par alag-alag UI elements 
// // render kar sakte hain. Iska ek example use case niche diya gaya hai:
// const CustomSwitch = ({children, value}) => {
//   const cases = [];
//   const defaults = [];
//   Children.forEach(children, (e) => {
//     if(e.type.name === "CustomCase"){
//       if(typeof e.props.value === 'function'){
//         if(e.props.value(value)){
//           cases.push(e);
//         }
//       }else if(value === e.props.value){
//         cases.push(e);
//       }
//     }else if (e.type.name === "DefaultCase"){
//       defaults.push(e);
//     }
//   });
  
//   if(cases.length > 0){
//     return cases;
//   }else{
//     return defaults;
//   }
// };
// const CustomCase = ({children}) => {
//   return <>{children}</>;
// };
// const DefaultCase = ({children}) => {
//   return <>{children}</>;
// }
// const App = () => {
//   return <>
//     <CustomSwitch value="1000">
//       <CustomCase value={(e) => e < 10}><div>Hello 20</div></CustomCase>
//       <CustomCase value="20">Hello 20</CustomCase>
//       <CustomCase value="30">Hello 30</CustomCase>
//       <CustomCase value="10"><div>Hello 10</div></CustomCase>
//       <DefaultCase>Hello 40</DefaultCase>
//     </CustomSwitch>
//   </>;
// };

// export default CustomSwitch

