function Header(props) {
    return(
      <div className="head">
        <h1>Women's</h1>
        <ul>
          <li>NEW ARRIVALS</li>
          <li>SPECIALS</li>
          <li>BESTSELLER</li>
          <li>MOST VIEWED</li>
          <li>FEATURED PRODUCTS</li>
          <li><button onClick={() => props.setAdd(!props.Add)}>ADMIN PANEL</button></li>
          </ul>
      </div>
      
    );
  }

  export default Header;