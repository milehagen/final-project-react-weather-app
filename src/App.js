import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

 export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather defaultCity="Oslo"/>
      <small>Coded by <a href="https://www.linkedin.com/in/mi-le-hagen-5aa0b617/" target="_blank" rel="noreferrer">Mi Le Hagen</a></small>
      </div>
    </div>
  );
}

 
