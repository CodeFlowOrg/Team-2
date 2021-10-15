import React from 'react';
import {Grid,Paper} from '@material-ui/core';
import img1 from '../images/fb.png'
import img2 from '../images/insta.png'
import img3 from '../images/twitter.png'
import {
    Button,
    TextField,
    Link,
    InputLabel,
    Box,
    Typography,
    Container
  } from "@mui/material";
function footer(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
          email: data.get("email"),
          message: data.get("message")
        });
      };
  
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
   <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  label="message"
                  type="message"
                  id="message"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
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