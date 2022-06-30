import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Welcome from "./pages/welcome/Welcome";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <BrowserRouter>
      <div className="App">
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
              path="/home"
              element={
                <Home
                  setWord={setWord}
                  category={category}
                  setCategory={setCategory}
                  word={word}
                  setMeanings={setMeanings}
                  meanings={meanings}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
