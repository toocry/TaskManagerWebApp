import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'
// import TaskListPage from './TaskList'
import Home from './Home'
// import { Task } from './api'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate, 
  // useNavigate
} from "react-router-dom";
import { useAuthentication } from './api'




// interface TaskListProps {
//   tasks: Task[];
//   toggleCompletion: (taskId: number) => void;
// }



// interface PrivateRouteProps {
//   isAuthenticated: boolean;
//   children: React.ReactNode;
//   path: string;
// }






function App() {
  

  const {authenticated} = useAuthentication();
  

  return (
    <Router>
      <Routes>
        <Route  path="/home" 
                element = {authenticated ? <Home/> : <Navigate to="/login"/>} 
        />
        
        
        <Route path="/login" element={<Login/>}/>

        <Route path="/signup" element={<SignUp/>}/>

        
      </Routes>
    </Router>
  )
}



export default App;
