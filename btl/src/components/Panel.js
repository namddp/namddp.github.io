function Panel(props){
    const [item,inputChanging,addItem] = props
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

  export default Panel;