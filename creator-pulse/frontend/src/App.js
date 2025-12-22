import "./App.css";
import { useState } from "react";

 
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import MainSection from "./Component/MainSection";

function App() {
  const [isblogVisible, setIsBlogVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsBlogVisible={setIsBlogVisible} setIsLoggedIn={setIsLoggedIn}/>
      {isblogVisible ? <MainSection/> : <Sidebar/>}
      <Footer />
    </div>
  ); 
}

export default App;

