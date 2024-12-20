import React,{useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom' 
import { Button } from '@mui/material';
import './AddEmployee.css'
export default function AddEmployee()
{
    const[formData,setFormData]=useState({})
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    // const handleClickClose = () => {
    //     setOpen(false);
    // };
      
    const handleSubmit=(event)=>
    {
        event.preventDefault();
       
    }
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setFormData((prevData)=>({
            ...prevData,[name]:value
        }));
    };

    const navigate=useNavigate();

       return(
        <>
        <div>
                    <form  class="form-group" onSubmit={handleSubmit}>
                    <label htmlFor="employeeId">Employee ID:</label>
              <input className='add-form'type="text"id="employeeId"name="employeeId"class="form-control"value={formData.emp_id}
              onChange={handleChange}required/>
              <br/>
               <label htmlFor="name">Name:</label>
                <input type="text"id="name"name="name"class="form-control"value={formData.emp_name}
              onChange={handleChange}required/> <br/>
               <label htmlFor="department">Department:</label>
                <input type="text"id="department"name="department"class="form-control"value={formData.emp_dept}
              onChange={handleChange}required/> <br/>
               <label htmlFor="designation">Designation:</label>
                <input type="text"id="designation"name="designation"class="form-control"value={formData.emp_job}
              onChange={handleChange}required/> <br/>
               <label htmlFor="employeeId">Salary:</label>
                <input type="text"id="salary"name="salary"class="form-control"value={formData.emp_salary}
              onChange={handleChange}required/> <br/>
               <label htmlFor="email">Email:</label>
                <input type="text"id="email"name="email"class="form-control"value={formData.emp_email}
              onChange={handleChange}required/>
              
                    </form>
                </div>
<br></br>
<Button sx={{ marginRight: 2 }}onClick={()=>navigate('/')}variant="contained" color="success">
  Submit
</Button>
<Button  sx={{ marginRight: 2 }}onClick={()=>navigate('/')} variant="outlined" color="error">
  Cancel
</Button>
        </>
       );
}