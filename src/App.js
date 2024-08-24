import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";

function App() {
  console.log("App component is rendering");
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
