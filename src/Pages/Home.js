import React from 'react'
import {Link} from 'react-router-dom';
import "./Home.css";
import { useEffect,useState } from 'react';
import {toast} from "react-toastify";
import axios from "axios";



function Home() {
    const [data, setData] = useState([]);

    const loadData = async()=>{
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);

    };

    const deleteData = (id)=>{
        if(window.confirm("r u sure?")){
            axios.delete(`http://localhost:5000/api/remove/${id}`)
            toast.success("Contact deleted");
            setTimeout(() =>  loadData(), 500);
        }

    }

    useEffect (() =>{
        loadData();
    },[])
  return (
    <div style={{marginTop:"200px", alignContent:"center"}}>
        <Link to="/AddContact">
        <button className='btn btn-contact'>Insert Data</button>
        </Link>
        <table className="styled-table" border="1" cellSpacing ="0" cellPadding="10"align="center">
            <thead>
                <tr>
                    <td style={{textAlign:"Center"}}>Id</td>
                    <td style={{textAlign:"Center"}}>Name</td>
                    <td style={{textAlign:"Center"}}>Email</td>
                    <td style={{textAlign:"Center"}}>Contact</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) =>
                {
                    return(
                        <tr key={item.id}>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        
                        <td>
                            <Link to={`/update/${item.id}`}>
                            <button className='btn btn-edit'>Update</button>
                            </Link>
                            <button className='btn btn-delete' onClick={()=>deleteData(item.id)}>Delete</button>
                            <Link to={`/view/${item.id}`}>
                            <button className='btn btn-view'>View</button>
                            </Link>
                        </td>
                        </tr>
                    )

                })}

            </tbody>
        </table>

      
    </div>
  )
}

export default Home
