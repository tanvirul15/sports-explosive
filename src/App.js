import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navigation";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header heading={true} />
      <Home />
    </div>
  );
}

export default App;
