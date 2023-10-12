// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'
import TaskListPage from './TaskList'
import { Task } from './api'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


interface TaskListProps {
  tasks: Task[];
  toggleCompletion: (taskId: number) => void;
}



interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
  path: string;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { isAuthenticated, children, path } = props;

  return isAuthenticated ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Navigate to="/login" />
  );
}




function App() {
  
  // const isAuthenticated: boolean = Boolean(localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        
        <Route path="/login" Component={Login}/>
          
        <Route path="/signup" Component={SignUp}/>

        {/* <PrivateRoute path="/tasks" isAuthenticated={true}>
          <TaskListPage />
        </PrivateRoute> */}
      </Routes>
    </Router>
  )
}



export default App
