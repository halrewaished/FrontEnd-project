import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import "./Home.css";
import Category from "../../data/Category";

const Home = ({ setWord, category, setCategory, word, setMeanings, meanings }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#121212",
      },
      mode: "light",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
    setMeanings([]);
  };
  return (
    <>
    <div className="header">
      <span className="title">Translate</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word"
            id="standard-basic"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {Category.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
    <div className="meanings">
    {meanings[0] && word && category === "en" && (
      <audio
        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
        style={{ backgroundColor: "#fff", borderRadius: 10 }}
        controls
      >
        Your Browser doesn't support audio element.
      </audio>
    )}
    {word === "" ? (
      <span className="subTitle">Start by typing a word in Search</span>
    ) : (
      meanings.map((mean) =>
        mean.meanings.map((item) =>
          item.definitions.map((def) => (
            <div
              className="singleMean"
              style={{ backgroundColor: "white", color: "black" }}
            >
              <b>{def.definition}</b>
              <hr style={{ backgroundColor: "black", width: "100%" }} />
              {def.example && (
                <span>
                  <b>Example : </b>
                  {def.example}
                </span>
              )}
              {def.synonyms && (
                <span>
                  <b>Synonyms : </b>
                  {def.synonyms.map((s) => `$(s),`)}
                </span>
              )}
            </div>
          ))
        )
      )
    )}
  </div>
  </>
);
};

export default Home;
