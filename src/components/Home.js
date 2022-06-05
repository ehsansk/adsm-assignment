import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let Navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      Navigate("/form");
    }, 3000);
  }, []);
  return (
    <div className="bg-color d-flex justify-content-center align-items-center">
      <img src="./Vodafone_idea_logo.png" className="App-logo" alt="logo" />
    </div>
  );
}

export default Home;
