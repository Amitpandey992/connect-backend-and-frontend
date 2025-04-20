import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch("/api/jokes", {
          method: "GET",
        });
        const data = await response.json();
        setJokes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJokes();
  });

  return (
    <>
      <h1>Hello world</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h1>{joke.content}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
