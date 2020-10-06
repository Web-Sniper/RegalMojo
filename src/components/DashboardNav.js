import React,{useContext} from 'react'
import {userContext} from '../App'
import { Link , useHistory} from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import M from 'materialize-css'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

const DashboardNav = ()=>{
    const {state, dispatch} = useContext(userContext)
    const history = useHistory()
    return (
        <>
        <nav >
                <div className="nav-wrapper white mynav">
                    
                    <ul id="icons1">
                    <li><Link to="#"><i className="material-icons">check_box</i></Link></li>
                    <li><Link to="#"><i className="material-icons">chat_bubble_outline</i></Link></li>
                    <li><Link to="#"><i className="material-icons">mail</i></Link></li>
                    <li><Link to="#"><i className="material-icons">date_range</i></Link></li>
                    <li><Link to="#"><i className="material-icons">star_border</i></Link></li>
                    </ul>


                    <Link to="#" className="brand-logo center">
                    <img 
                               src="https://images-na.ssl-images-amazon.com/images/I/310x-PyHVEL.jpg"
                               className="responsive-img"
                               style={{height:"50px",width:"50px0",marginTop:"10px"}}
                               />

                    </Link>

                    <ul id="nav-mobile" className="right">
                        <li><Link to="/login">English</Link></li>
                        <li><Link to="#"><i className="material-icons">fullscreen</i></Link></li>
                        <li><Link to="#"><i className="material-icons">search</i></Link></li>
                        <li><Link to="#">
                            <Badge badgeContent={6} color="primary">
                                <NotificationsNoneOutlinedIcon />
                            </Badge>
                        </Link></li>
                        <li>
                            <Link to="#">
                                
                               John Deo
                               
                               
                            </Link>
                        </li>
                        <li>
                            
                        <img 
                               src="https://dev.quantumcloud.com/simple-business-directory/wp-content/uploads/2018/01/brianjohnsrud.jpg"
                               className="circle responsive-img"
                               style={{height:"50px",width:"50px",marginTop:"10px"}}
                               />
                        </li>
                        <li><Link className="dropdown-trigger btn" to="#" data-target="dropdown5" onClick={()=>{
                            localStorage.clear()
                            dispatch({type:"CLEAR"});
                            M.toast({html: "logged out Sucessfully", classes:"#00897b teal darken-1"})
                            history.push("/login")
                        }}
                        >Logout</Link></li>
                        
                    </ul>
                </div>
            </nav><br />

            <div className="row">
                <div className="col s12">
            <nav>
                <div className="nav-wrapper white">
                <ul id="nav-mobile" className="left">
                <li>
                    <Link className="dropdown-trigger btn" to="#" data-target="dropdown1">
                    <i className="material-icons left ">home</i>Dashboard<i className="material-icons right">arrow_drop_down</i>
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-trigger btn" to="#" data-target="dropdown2">
                    <i className="material-icons left" >apps</i>Apps<i className="material-icons right">arrow_drop_down</i>
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-trigger btn" to="#" data-target="dropdown3">
                    <i className="material-icons left">layers</i>UI Elements<i className="material-icons right">arrow_drop_down</i>
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-trigger btn" to="#" data-target="dropdown4">
                    <i className="material-icons left">edit</i>Forms & Tables<i className="material-icons right">arrow_drop_down</i>
                    </Link>
                </li>
                <li><Link className="dropdown-trigger btn" to="#" data-target="dropdown5">
                    <i className="material-icons left">insert_drive_file</i>Pages<i className="material-icons right">arrow_drop_down</i>
                    </Link>
                </li>
                <li><Link className="dropdown-trigger btn" to="#" data-target="dropdown5">
                    <i className="material-icons left">insert_chart</i>Charts & Maps<i className="material-icons right">arrow_drop_down</i>
                    </Link>
                </li>
                <li><Link className="dropdown-trigger btn" to="#" data-target="dropdown5">
                    <i className="material-icons left">format_list_bulleted</i>Others<i className="material-icons right">arrow_drop_down</i>
                    </Link>
                </li>
                </ul>
                </div>
            </nav>
            </div>
            </div>
            </>
    )
}

export default DashboardNav