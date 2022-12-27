import Product from "./Product";
function Products(props){
//    const [selected,arr,add,setAdd,select] = props
    return (
      <div>
        <button className='btn' onClick={() => props.setAdd(props.arr)}>ALL</button>
        <button className='btn' onClick={() => props.select('Adidas')}>Adidas</button>
        <button className='btn' onClick={() => props.select('Luis Vuitton')}>Luis Vuitton</button>
        <button className='btn' onClick={() => props.select('NYC')}>NYC</button>
        <button className='btn' onClick={() => props.select('Jersey')}>Jersey</button>
        <button className='btn' onClick={() => props.setAdd(!props.add)}>ADMIN PANEL</button>
        {/* //cái này học lỏm trên youtube haha */}
        {/* <ControlPanel /> */}
      <div className='products'>
      {props.selected.map(item => (
          <Product key={props.selected.id} img={item.img1} brand={item.brand} name={item.name} price={item.price} type1={item.img1} type2={item.img2} />
      ))}
      </div>
      </div>
    )
  }

  export default Products;