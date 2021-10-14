import React from 'react';
import {Grid,Paper} from '@material-ui/core';
import img1 from '../images/fb.png'
import img2 from '../images/insta.png'
import img3 from '../images/twitter.png'

function footer(){
  return(
      <div style={{fontFamily:"sans-serif", backgroundColor:"#294A63", color:"#a6a6a6",marginTop:"1%"}}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} >
      <h1 >Student Opportunity<br/>
           Portal</h1>
      </Grid>
  <Grid item xs={12} md={4}>
      <ul style={{listStyleType:"none"}}>
        <br/><br/>
        <li><a href="" style={{color:"#a6a6a6"}}>Home</a></li>
        <li><a href="" style={{color:"#a6a6a6"}}>About</a></li>
        <li><a href="" style={{color:"#a6a6a6"}}>Explore</a></li>
        <li><a href="" style={{color:"#a6a6a6"}}>Feedback</a></li>
      </ul>
  </Grid><div>
   <h2>Contact Us</h2><br/>
    <form><input style={{margi:"1%"}}placeholder="Email ID"/><br/>
    <textarea style={{margin:"1%"}} placeholder="Message"></textarea>
    <button style={{margin:"1%", border:"none" ,backgroundColor:"#a6a6a6"}}type="submit">Submit</button>
        </form>
        </div>
  <Grid item xs={12} md={4}>

  
    
  </Grid>
  
</Grid>
<div style={{backgroundColor:"#EC884D"}}>
<h3 style={{color:"black" ,textAlign:"center"}}> © Copyright to Admin</h3>
<div style={{justifyContent:"center", display:"flex"}}>
    <a style={{padding:"1%"}}><img src={img1} style={{height:"40px" ,width:"40px"}}/></a>
    <a style={{padding:"1%"}}><img src={img2} style={{height:"40px", width:"40px"}}/></a>
    <a style={{padding:"1%"}}><img src={img3} style={{height:"40px", width:"40px"}}/></a>
</div>
</div>


</div>
  )
}
export default footer;