import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <h1> MENU QUÁN</h1>
        <ol type="1" id="menu">
        </ol>
        <label for="input">New Drink</label><input type="text" name="NewDrink" id="new"/>
        <button onclick="addNew()">add item</button>
    </div>
  );
}




export default App;
