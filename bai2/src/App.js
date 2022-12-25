import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <Header />
    <Body />
    <Footer />
    </div>
  );
}

function Header(){
  return (
    <div>
      <input type="text" placeholder='enter your task here'/>
    </div>
  );
}

function Body(){
  return(
      <div>
        <ol type="1" id="menu">
            <li>clean up room</li>
            <li>buy some milk</li>
            <li>jogging</li>
            <li>learn react</li>
            <li>doing exercises</li>
        </ol>
      </div>
  );
}

function Footer(){
  return(
    <div>
      <h2>hihi</h2>
      <h2>hihi</h2>
    </div>
  );
}

export default App;
