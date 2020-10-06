import React,{useState} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import Nav from '../Nav'
import M from 'materialize-css'
const NewPassword = ()=>{
    const [password,setPassword] = useState("")
    const history = useHistory()
    const {token} = useParams()
    const postData = ()=>{
        fetch('/new-password',{
            method : "post",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                password,
                token
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
                    <h4>New password</h4>
                    <input type="password" placeholder="New Password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button className="btn waves-effect waves-light" onClick={()=>postData()}>
                        Update password
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewPassword