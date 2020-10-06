import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import Nav from '../Nav'
import M from 'materialize-css'
const Reset = ()=>{
    const [email,setEmail] = useState("")
    const history = useHistory()
    const postData = ()=>{
        fetch('/reset-password',{
            method : "post",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                return M.toast({html:data.error,classes:"#e53935 red darken-1"})
            }
            M.toast({html: data.message, classes:"#00897b teal darken-1"})
            history.push("/login")
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <Nav />
            <div className="mycard">
                <div className="card auth-card">
                    <h4>Reset password</h4>
                    <input type="text" placeholder="Email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <button className="btn waves-effect waves-light" onClick={()=>postData()}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Reset