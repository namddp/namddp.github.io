
import './App.css';
import {useState} from 'react';
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


function Header() {
  return(
    <div className="head">
      <h1>Women's</h1>
      <ul>
        <li>NEW ARRIVALS</li>
        <li>SPECIALS</li>
        <li>BESTSELLER</li>
        <li>MOST VIEWED</li>
        <li>FEATURED PRODUCTS</li>
        </ul>
    </div>
  );
}


function Products(){
  const [type,setType] = useState(arr);
  const [add,setAdd] = useState(false);
  const select = (ic) => {
    setType(() => (arr.filter(e => e.brand === ic)))
  }
  const ControlPanel = () => {
    const [item,setItem] = useState({});
    const inputChanging = (event) => {
      const key = event.target.name
      const value = event.target.value
      console.log(`key:${key} value:${value}`)
      setItem({
        ...item,
        id: arr.length,
        [key] : value
      })
    }
    const addItem = (event) => {
      setType(
        [
        ...type,
        item
      ]
      )
    }
    return(
        <div className='form'>
           <label htmlFor='gender' >Giới Tính</label>
            <select id="gender" name="gender" onChange={inputChanging} value={item.gender}>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
            <label htmlFor="name">Tên Món Đồ</label>
            <input type="text" id="name" name="name" onChange={inputChanging} value={item.name} placeholder="Nhập tên món đồ..."/>
            <label htmlFor="lname">Brand</label>
            <input type="text" id="brand" name="brand" onChange={inputChanging} value={item.brand} placeholder="Nhập brand của món đồ.."/>
            <label htmlFor="gender">Loại</label>
            <select id="type" name="type" onChange={inputChanging} value={item.type}>
              <option value="t-shirts">t-shirts</option>
              <option value="jacket">jacket</option>
              <option value="jean">jean</option>
              <option value="shirt">shirt</option>
              <option value="coat">coat</option>
            </select>
            <label htmlFor="price">Giá</label>
            <input type="number" id="price" name="price"  onChange={inputChanging} value={item.price} placeholder="nhập giá món đồ..."/>
            <label htmlFor="lname">Hình Ảnh Món Đồ</label>
            <input type="text" id="img1" name="img1" onChange={inputChanging} value={item.img1} placeholder="nhập link ảnh món đồ.."/>
            <label htmlFor="lname">Hình Ảnh Món Đồ</label>
            <input type="text" id="img2" name="img2" onChange={inputChanging} value={item.img2} placeholder="nhập link ảnh món đồ.."/>
            <button onClick={() => addItem()}> Thêm Món Mới</button>
        </div>
    );
  }
  return (
    <div>
      <button className='btn' onClick={() => setType(arr)}>ALL</button>
      <button className='btn' onClick={() => select('Adidas')}>Adidas</button>
      <button className='btn' onClick={() => select('Luis Vuitton')}>Luis Vuitton</button>
      <button className='btn' onClick={() => select('NYC')}>NYC</button>
      <button className='btn' onClick={() => select('Jersey')}>Jersey</button>
      <button className='btn' onClick={() => setAdd(!add)}>ADMIN PANEL</button>
      {/* //cái này học lỏm trên youtube haha */}
      {add && <ControlPanel/>}
      {/* <ControlPanel /> */}
    <div className='products'>
    {type.map(item => (
        <Product img={item.img1} brand={item.brand} name={item.name} price={item.price} type1={item.img1} type2={item.img2} />
    ))}
    </div>
    </div>
  )
}

function Product(props){
  return(
       <div className="product">
        <img className="img" src={props.img} alt=""/>
        <p>{props.brand}</p>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <div className="type">
            <img className="imgtype" src={props.type1} alt=""/>
            <img className="imgtype" src={props.type2} alt=""/>
        </div>
        <div className="size">
            <span>S</span>
            <span>M</span>
            <span>L</span>
        </div>
        <div className="color">
            <div className="black"></div>
            <div className="brown"></div>
            <div className="white"></div>
        </div>
       </div>
  );
}

function App() {
  return (
    <div>
    <Header />
    <Products />
    </div>
  );
}

export default App;