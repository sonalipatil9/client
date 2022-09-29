import React from 'react'
import {useState,useEffect} from'react'
import {Link, useParams} from 'react-router-dom';

import {toast} from 'react-toastify';
import axios from 'axios';
import "./AddEdit.css";
const initialState ={
    name:"",
    email:"",
    contact:""
}

function AddEdit() {
    const [state, setState] = useState(initialState);
    const {name, email, contact} = state;

    const {id} =useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/get/${id}`)
        .then((resp) => setState({...resp.data[0]}));

    },[id])
    const handleSubmit =(e) => {
        e.preventDefault();
        if(!name || !email||!contact)
        {
            toast.error("Please provide value in eact text box")
        }
        else{
            if(!id)
            {
                axios.post("http://localhost:5000/api/post",{
                    name,email,contact
                    
                    
                }).then(() =>{
                    setState({name:"",email:"",contact:""})
                   
                }).catch((err)=>toast.error(err.response.data))
                toast.success("Data is added successfully");
            }else{
                axios.put(`http://localhost:5000/api/update/${id}`,{
                    name,email,contact
                    
                    
                }).then(() =>{
                    setState({name:"",email:"",contact:""})
                   
                }).catch((err)=>toast.error(err.response.data))
                toast.success("Data is updated successfully");

            }
            
        }
    }

    const HandleInputChange = (e)=>{
        const{ name, value} = e.target;
        setState({...state, [name]:value});
    }

  return (
    <div>
    <form style={{margin:"auto", alignContent:"center"}} 
    onSubmit ={handleSubmit}>
        <label htmlFor="name" >Name</label>
        <input type="text" id="name" name="name" placeholder='Enter your name' value={name||""} onChange={HandleInputChange}
        />


<label htmlFor="email" >Email</label>
        <input type="email" id="email" name= "email" placeholder='Enter your email' value={email||""} onChange={HandleInputChange}
        />

<label htmlFor="contact" >Contact</label>
        <input type="number" id="contact" name ="contact" placeholder='Enter your contact' value={contact||""} onChange={HandleInputChange}
        />
<input type="submit" value= {id? "Update":"Save"}/> 
    <Link to="/">
    <input type="submit" value="Cancel"/>
    </Link>

    </form>
    
    </div>
  )
}

export default AddEdit;
