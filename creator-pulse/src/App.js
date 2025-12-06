import "./App.css";
import { useState } from "react";

import Navbar from "./Component/Navbar/Navbar";
import ImageAnimation from "./Component/Body/ImageAnimation";
import Footer from "./Component/Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* Navbar always visible */}
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
      />

      {/* Middle part hidden ONLY after login */}
      {!isLoggedIn && <ImageAnimation />}

      {/* Footer ALWAYS visible */}
      <Footer />
    </>
  );
}

export default App;

