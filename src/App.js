import React,{useContext,useEffect,createContext,useState, useReducer} from 'react';
import './App.css';
import {Route, BrowserRouter, Switch, useHistory} from 'react-router-dom'
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import Dashboard from './components/screens/Dashboard'
import {Reducer, intialState} from './reducer/reducer'
import Reset from './components/screens/Reset'
import NewPassword from './components/screens/NewPassword';

export const userContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(userContext)
  const [data, setData] = useState([])
  useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user"))
      if(user){
        dispatch({type:"USER",payload:user})
      history.push("/")
      }else{
        if(!history.location.pathname.startsWith("/reset"))
      {
        history.push("/login")
      }
      }
  },[])

  return(
  <Switch>
    <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/reset">
        <Reset />
      </Route>
      <Route path="/reset/:token">
        <NewPassword />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/">
        <Dashboard />
      </Route>
      
      
  </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(Reducer,intialState)

  return (
    <userContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
