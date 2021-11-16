import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

 export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather defaultCity="Oslo"/>
      
      </div>
    </div>
  );    

}

 
