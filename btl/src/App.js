import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {useState} from 'react';
import Products from './components/Products';
let arr = [
  { 
    id: 0,
    gender: 'female',
    type:'t-shirts',
    img1:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/452213/item/goods_68_452213.jpg?width=1600&impolicy=quality_75',
    img2:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/452213/sub/goods_452213_sub14.jpg?width=160&impolicy=quality_75',
    brand: 'Luis Vuitton',
    name: 'Áo Thun Gân Cổ Tròn Tay Lỡ',
    price: '399.000VND',
  },
  { 
    id: 1,
    gender: 'female',
    type:'t-shirts',
    img1:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446802/item/goods_64_446802.jpg?width=1600&impolicy=quality_75',
    img2:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446802/sub/goods_446802_sub14.jpg?width=1600&impolicy=quality_75',
    brand: 'Adidas',
    name: 'Áo Thun Gân Dáng Ngắn Ngắn Tay',
    price: '244.000VND',
  },
  { 
    id: 2,
    gender: 'male',
    type:'jacket',
    img1:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/445172/item/goods_54_445172.jpg?width=1600&impolicy=quality_75',
    img2:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/445172/sub/goods_445172_sub14.jpg?width=1600&impolicy=quality_75',
    brand: 'Jersey',
    name: 'Áo Khoác Vải Jersey Dáng Ngắn ngắn ngắnn gnawns đáiaidsisidsaidsaidisasidisadidsaidiadidsiad',
    price: '499.000VND',
  },
  { 
    id: 3,
    gender: 'male',
    type:'t-shirts',
    img1:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/449849/item/vngoods_61_449849.jpg?width=1600&impolicy=quality_75',
    img2:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449849/sub/goods_449849_sub13.jpg?width=1600&impolicy=quality_75',
    brand: 'Luis Vuitton',
    name: 'Áo Thun Cổ Tròn Kẻ Sọc Dáng Rộng Tay Lửng',
    price: '391.000VND',
  },
  { 
    id: 4,
    gender: 'male',
    type:'t-shirts',
    img1:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441599/item/goods_27_441599.jpg?width=1600&impolicy=quality_75',
    img2:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/433399/item/goods_09_433399.jpg?width=1600&impolicy=quality_75',
    brand: 'Adidas',
    name: 'Áo Thun Dry-Ex Cổ Tròn Ngắn Tay',
    price: '399.000VND',
  },
  { 
    id: 5,
    gender: 'male',
    type:'hoodie',
    img1:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455815/sub/vngoods_455815_sub9.jpg?width=1600&impolicy=quality_75',
    img2:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455815/item/vngoods_09_455815.jpg?width=1600&impolicy=quality_75',
    brand: 'NYC',
    name: 'Nyc POP Icons Áo Nỉ Chui Đầu Dài Tay',
    price: '599.000VND',
  },
  
];

function App() {
  const [Item,setItem] = useState(arr);
  const [Add,setAdd] = useState(false);
  const select = (ic) => {
    setItem(() => (arr.filter(e => e.brand === ic)))
  }
  return (
    <div className="App">
      <Header/>
      <Products select={select} selected={Item} arr={arr} add={Add} setAdd={setAdd}/>
    </div>
  );
}

export default App;
