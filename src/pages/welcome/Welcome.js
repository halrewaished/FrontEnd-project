import React from "react";
import { Button } from "@mui/material";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/home");
  };

  return (
      <div className="welcome">
        <span className="content">
          Welcome to the Translate website which provides <br /> <br/>
          translation into 12 languages with examples and synonyms. <br /> <br/>
          Press the button to move into the translation page.<br/> <br/>
          <Button onClick={handleButton} >Click Here</Button>
        </span>
      </div>
  );
};

export default Welcome;
