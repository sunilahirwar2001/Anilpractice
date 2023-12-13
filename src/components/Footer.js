import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EmailIcon from '@mui/icons-material/Email';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import  DoneAllIcon  from '@mui/icons-material/DoneAll';
const Footer = () => {
  return (
    <div>
    <div className='footer-part'>
      <div className='free-star'>
        <h2>Free Starter</h2> 
        <p> The Quickest and easiest way to try Protocols with basic functionalities </p>
       <button>Get Started<TrendingFlatIcon/> </button>
        <div className='below'>
      <h5>What you'll get:</h5>
      <span><Person2Icon/> A Upto 8 Users </span>
      <span><CloudUploadIcon/> Upto 3gb Storage</span>
      <span><EmailIcon/>Email Support</span>
      <button>Explore feature</button>
      <p>Basic of Documents Task Flow,Voting,Accounting,Banking,Notes,Investor,Director and Team Management included</p>
        </div>
      </div>

      <div className='enterprise'>
        <h2>Enterprise Plan</h2> 
        <p> Effortlessly customize and fine -tune services as your needs shift. ensuring the perfect tools for success   </p>
       <button>Contanct Us<TrendingFlatIcon/> </button>
        <div className='below'>
      <h5>What you'll get:</h5>
      <span><Person2Icon/> A Upto 75 Users </span>
       <span> <DoneAllIcon/> Customization of all other features</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
