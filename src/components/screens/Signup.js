import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import Nav from '../Nav'
import M from 'materialize-css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Signup = ()=>{

    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [dob, setDob] = useState("")
    const [password, setPassword] = useState("")
    var today = new Date()
    


    const postData = ()=>{
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return M.toast({html: "Enter a valid email...",classes:"#e53935 red darken-1"})
        }
        else if(contact.length!==10){
            return M.toast({html: "Enter a valid contact...",classes:"#e53935 red darken-1"})
        }
        
        fetch("/signup",{
            method: "post",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name,
                email,
                contact,
                dob,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                return M.toast({html: data.error,classes:"#e53935 red darken-1"})
            }
            M.toast({html:"Signedup Successfully",classes:"#00897b teal darken-1"})
            history.push("/login")
        })
    }


    return (
        <div>
            <Nav />
        <div className="mycard">
            <div className="card auth-card">
                <h2>Signup</h2>
                <input type="text" placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)} 
                />
                <input type="text" placeholder="Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="number" placeholder="Contact"
                value={contact}
                onChange={(e)=>setContact(e.target.value)} 
                />
                <DatePicker placeholderText="Date of Birth(MM/DD/YYYY)" 
                selected={dob}
                onChange={date => setDob(date)}
                minDate={new Date('01-01-1900')}
                maxDate={today}
                />
                <input type="password" placeholder="Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light" onClick={()=>postData()}>
                    Signup
                </button>
                <h6>
                <Link to="/Login">Already have an account? </Link>
                </h6>
            </div>
        </div>
        </div>
    )
}

export default Signup