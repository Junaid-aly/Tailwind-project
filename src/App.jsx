import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import  Signup from "./components/Signup"
import Login from "./components/Login"

import Settings from "./components/Setting"
import Home from "./components/Home"
import Addtodo from "./components/Addtodo"
import Addproduct from "./components/Addproduct"
import  { AuthContext, AuthProvider } from "./components/Context/AuthContext"
import { useContext } from "react"
import AuthRoutes from "./components/AuthRoutes"






function App() {


    
    return (
      <>
  <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route element={<AuthRoutes/>}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/addTodo" element={<Addtodo />} />
                        <Route path="/addproduct" element={<Addproduct />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </>
  )

}

export default App
