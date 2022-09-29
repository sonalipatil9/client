
import {useState,useEffect} from 'react'
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';
import"./View.css";


function View() {
    const [user, setUser] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/get/${id}`)
        .then((resp) => setUser({...resp.data[0]}));

    },[id])

  return (
    <div>
      <h2>view</h2>
      <div className="card">
        <div className="card-header">
            <p>User Contact Details</p>
            <br></br>
        </div>
        
        <div className='container'>
            <b>Id</b>
            <span>{id}</span>
            <br/><br/>

            <b>Name</b>
            <span>{user.name}</span>
            <br/><br/>

            <b>Email</b>
            <span>{user.email}</span>
            <br/><br/>

            <b>contact</b>
            <span>{user.contact}</span>
            <br/><br/>
<Link to="/">
<div className='btn-btn-edit'>Go Back

</div>

</Link>





        </div>
      </div>
    </div>
  )
}

export default View
