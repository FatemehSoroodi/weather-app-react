import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import Header from "./Header";
import City from "./City";
import Temp from "./Temp";
import Description from "./Description";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Header />
          <City />
          <Temp />
          <Description />
          <Forecast />
          <Search />
        </div>
        <Footer />
      </div>
    </div>
  );
}
