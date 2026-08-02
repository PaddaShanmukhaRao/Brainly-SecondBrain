import DashBoard from "./pages/dashboard";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/signup";
import { BrowserRouter,Route, Routes } from "react-router-dom";

export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/dashboard" element={<DashBoard/>}/>
  </Routes>
  </BrowserRouter>
}