import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
let clm=[{
  id:0,
  name:'Coffee',
  type: 'drink',
},
{
  id:1,
  name:'Coca Cola',
  type: 'drink',
},
{
  id:2,
  name:'Milk',
  type: 'drink',
},
{
  id:3,
  name:'Thịt Chó',
  type: 'food',
},
{
  id:4,
  name:'Thịt Mèo',
  type: 'food',
},
{
  id:5,
  name:'Mắm Tôm',
  type: 'sauce',
},]

function Tem(){
  const [kq,setKq] = useState([]);
  const [items,setItem] = useState(clm);
  const [input,setInput] = useState('');
  const select = (id) => {
    setKq((prev)=>{
      if(prev.includes(id) === false){
      return [...prev,id]
      }else{
        prev = prev.filter(e => e !== id)
        return prev;
      }
    })
  }
  
  const editItem = (a) => {
    let i = prompt('tên mới của món này là gì?')
    let item = clm.filter(e => e.id === a)
    item = {
      id: a,
      name: i,
      type: item.type,
    }
    let newMenu = clm.filter(e => e.id !== a)
    newMenu.push(item)
    setItem(newMenu)
  }
  const editMenu = () => {
    let i = {
      id: items.length,
      name: input,
      type: 'food',
    }
    setItem([...items,i])
    setInput('')
  }
  const deleteItem = (a) => {
    setItem((prev) => prev.filter(e => e.id !== a))
  }

  const onSelect = () => {
    console.log(kq)
    return(
    <Result selected = {kq} name = {items}/>)
  }
  const chonLoai = (t) => {
    setItem(() => clm.filter(e => e.type === t))
  }
  const handleOnchange = (event) => {
      setInput(event.target.value)
  }
  return(
    <div className="App">
      <button onClick={() => chonLoai('food')}>Food</button>
      <button onClick={() => chonLoai('drink')}>Drink</button>
      <button onClick={() => chonLoai('sauce')}>Sauce</button><br/>
      {items.map(i => (
         <span key={i.id}><input 
          checked = {kq.includes(i.id)}
          onChange = {() => select(i.id)}
          type="checkbox" id={i.id} name={i.id} value=""/>
          <label htmlFor={i.id}>{i.name}</label>
          <button onClick={() => editItem(i.id)}>Sửa</button><button onClick={() => deleteItem(i.id)}>Xoá</button>
          <br/></span> 
))}
      <input type="text" value={input} onChange={handleOnchange}/>
      <button onClick={() => editMenu()}>Thêm Món vào menu</button>
      <input type="submit" value="Submit" onClick={() => onSelect}/>
    </div>
  )
}

function Result(props){
  return (
    <div>
      <p>Bạn đã chọn:</p>
      <ul>
        {props.selected.map((index) => {
          return(
            <li key={index}>{props.name[index].name}</li>
          )
        })}
      </ul>
    </div>
  )
}
function App() {
  return (
    <Tem/>
  );
}

export default App;

