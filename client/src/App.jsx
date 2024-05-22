import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import SignOut from "./pages/SignOut";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Header from "./Components/Header";


export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/sign-in" element={<SignIn />}></Route>
    <Route path="/sign-up" element={<SignOut />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
  </Routes>
  </BrowserRouter>
}