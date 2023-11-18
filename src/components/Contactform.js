import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";

const Contactform=()=>{
     const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()
        const onSubmit = (data) => console.log(data)
     
    return(
         <>
   <form>
         <Grid sx={{backgroundColor:'tan',height:"100vh"}}  Container> 
         <Grid  container sx={{padding:"45px",display:"flex",justifyContent:"center",boxShadow:"20px",}}>
            <Grid  md={6} style={{ backgroundColor:"lightblue",textAlign: 'center',justifyContent: 'center', boxShadow:"20px",   alignContent: 'center', padding: '30px', marginTop:"1px", borderRadius:"12px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <Grid fontFamily={"Roboto"} color={"darkblue"}><h1>Contact us</h1></Grid>

                  <Grid margin={1}><TextField  error={errors.Name} {...register("Name",{required:"Entername"})} required id="standard-basic" label="Name" variant="standard"  helperText={errors.Name?errors.Name.message:""}/></Grid>
                  <Grid margin={1}> <TextField error={errors.MobileNo} {...register("MobileNo",{required:"EnterNo"})}   helperText={errors.MobileNo?errors.MobileNo.message:""} required  id="standard-basic" label="MobileNo" variant="standard" /></Grid>
                  <Grid margin={1}> <TextField error={errors.Gmail}  {...register("Gmail",{required:"Entergmail"})} helperText={errors.Gmail?errors.Gmail.message:""} required id="standard-basic" label="Gmail" variant="standard" /></Grid> 
                  <Grid margin={1} paddingLeft={5}> <TextField error={errors.Addquiries} {...register("Addquiries",{required:"enter message"})} helperText={errors.Anyquiries?errors.Anyquiries.message:""}
          id="outlined-multiline-static"
          label="Add quiries"
          multiline
          rows={3}
        /></Grid> 
                  <Grid marginTop={2} boxColor={"darkblue"} onClick={handleSubmit(onSubmit)}><Button variant="outlined">Submit</Button></Grid>
                 </Grid> 
            </Grid>
         </Grid>
         </form>
         </>
    )
}

export default Contactform;