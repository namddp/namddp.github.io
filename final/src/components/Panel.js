function Panel(props){
    return(
        <div className='form'>
          <div>
           <label htmlFor='gender' >Giới Tính</label>
            <select id="gender" name="gender" onChange={props.inputChanging} value={props.Sp.gender}>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
            </div>
            <div>
            <label htmlFor="name">Tên Món Đồ</label>
            <input type="text" id="name" name="name" onChange={props.inputChanging} value={props.Sp.name} placeholder="Nhập tên món đồ..."/>
            </div>
            <div>
            <label htmlFor="lname">Brand</label>
            <input type="text" id="brand" name="brand" onChange={props.inputChanging} value={props.Sp.brand} placeholder="Nhập brand của món đồ.."/>
            </div>
            <div>
            <label htmlFor="gender">Loại</label>
            <select id="type" name="type" onChange={props.inputChanging} value={props.Sp.type}>
              <option value="t-shirts">t-shirts</option>
              <option value="jacket">jacket</option>
              <option value="jean">jean</option>
              <option value="shirt">shirt</option>
              <option value="coat">coat</option>
            </select>
            </div>
            <div>
            <label htmlFor="price">Giá</label>
            <input type="number" id="price" name="price"  onChange={props.inputChanging} value={props.Sp.price} placeholder="nhập giá món đồ..."/>
            </div>
            <div>
            <label htmlFor="lname">Hình Ảnh Món Đồ</label>
            <input type="text" id="img1" name="img1" onChange={props.inputChanging} value={props.Sp.img1} placeholder="nhập link ảnh món đồ.."/>
            </div>
            <div>
            <label htmlFor="lname">Hình Ảnh Món Đồ</label>
            <input type="text" id="img2" name="img2" onChange={props.inputChanging} value={props.Sp.img2} placeholder="nhập link ảnh món đồ.."/>
            <button onClick={() => props.addItem()}> Thêm Món Mới</button>
           </div>
        </div>
    );
  }

  export default Panel;