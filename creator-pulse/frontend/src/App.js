import "./App.css";
import { useState } from "react";

 
import Navbar from "./Component/Navbar";
import Blog from "./Component/Blog";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";

function App() {
  const [isblogVisible, setIsBlogVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsBlogVisible={setIsBlogVisible} setIsLoggedIn={setIsLoggedIn}/>
      {isblogVisible ? <Blog/> : <Sidebar/>}
      <Footer />
    </div>
  ); 
}

export default App;

