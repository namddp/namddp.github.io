function Product(props){
    // const [img,brand,name,price,type1,type2] = props
    return(
         <div className="product" key={props.id}>
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

  export default Product;