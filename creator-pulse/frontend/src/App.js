import "./App.css";
import { useState } from "react";

 
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import MainSection from "./Component/MainSection";
import VideoAnalitics from "./Component/VideoAnalytics";
import ShortsAnalytics from "./Component/ShortsAnalytics";
import TagGenerator from "./Component/TagGenerator";
import Blogs from "./Component/Blogs";
import AuthModal from "./Component/Log-in";
import RegisterPage from "./Component/RegisterPage"; 

function App() {
  const [, setIsBlogVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navSelection, setNavSelection] = useState("Home");
  console.log("App Nav Selection:", navSelection);

  const pages = (nav) => {
    switch (nav) {
      case "Home":
        return !isLoggedIn ? (
          <MainSection navSelection={navSelection} setNavSelection={setNavSelection} />
        ) : (
          <VideoAnalitics />
        );
      case "VideoAnalytics":
        return <VideoAnalitics />;
      case "ShortsAnalytics":
        return <ShortsAnalytics />;
      case "TrendingTags":
        return <TagGenerator />;
      case "Blogs":
        return <Blogs />;
      case "LogIn":
        return (
          <AuthModal
            inline
            setIsLoggedIn={setIsLoggedIn}
            setNavSelection={setNavSelection}
            setIsBlogVisible={setIsBlogVisible}
            onLogin={() => {
              setIsLoggedIn(true);
              setNavSelection("VideoAnalytics");
              setIsBlogVisible(true);
            }}
          />
        );
      case "Register":
        return (
          <RegisterPage
            setIsLoggedIn={setIsLoggedIn}
            setNavSelection={setNavSelection}
            setIsBlogVisible={setIsBlogVisible}
          />
        );
      default:
        return <MainSection navSelection={navSelection} setNavSelection={setNavSelection} />;
    }
  }; 

  return (
    <div className="App">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsBlogVisible={setIsBlogVisible}
        setIsLoggedIn={setIsLoggedIn}
        navSelection={navSelection}
        setNavSelection={setNavSelection}
      />

      { (!isLoggedIn || navSelection === "LogIn" || navSelection === "Register") ? (
        <main className="main-content main-full">{pages(navSelection)}</main>
      ) : (
        <div className="layout">
          <Sidebar navSelection={navSelection} setNavSelection={setNavSelection} />

          <main className="main-content">{pages(navSelection)}</main>
        </div>
      )}

      <Footer />
    </div>
  ); 
}

export default App;

