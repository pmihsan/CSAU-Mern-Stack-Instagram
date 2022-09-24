import './App.css';

//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
          <div>
              <Navbar/>
              <div className={"cards"}>
                  <Card userIcon={"panda-avatar.png"} name={"Ihsan"} text={"In IT Lecture hall row 2"} imgSrc={"https://images.unsplash.com/photo-1663877430904-7fdf2283a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"}/>
                  <Card userIcon={"userIcon.png"} name={"Sudeep"} text={"In IT Lecture hall row 1"} imgSrc={"https://images.unsplash.com/photo-1663908778255-bd560e30d55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"}/>
                  <Card userIcon={"panda-avatar.png"}name={"Sathya"} text={"In IT Lecture hall row 1"} imgSrc={"https://images.unsplash.com/photo-1663875972135-bb6654ed702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}/>
                  <Card userIcon={"userIcon.png"} name={"Surya"} text={"In IT Lecture hall row 2"} imgSrc={"https://images.unsplash.com/photo-1663855507818-c2e284547f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}/>
              </div>
          </div>
    </div>
  );
}

export default App;
