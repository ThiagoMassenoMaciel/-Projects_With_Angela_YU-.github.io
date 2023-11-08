import React, { useState } from 'react'
import productData from '../../products.json'
import { Link } from 'react-router-dom';

const title = (
  <h2>Search Your One From <span>Thousands</span> of Products </h2>
)

const desc = "we have the largest collection of products"

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
  ];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(productData);

  //console.log(productData);

  //Search funtionality
  const handleSearch = ( e )=> {
    //console.log(e.target.value)
    //console.log("entrou dentro da variavel  handleSearch = com arrow function")

    	//search funtionality
      const searchTerm = e.target.value;
      setSearchInput(searchTerm);

    	//filtering products based on search
      const filtered = productData.filter((product) =>  product.name.toLowerCase().includes(searchTerm.toLowerCase()) )
      //Select it and put on array that specific products(OBJECTS) that have into their property names includes the word from user are searching 
      //[consider : both names used to search and to be finded are lowerCase]
      console.log("antes de setar");

      setfilteredProducts(filtered);

      console.log(filtered)

      console.log("depois de setar");
      
  }

  return (
    <div className="banner-section style-4"> 
      <div className="container">" 
        <div className="banner-content">

            {title}
            <form>

              <input 
                  type="text" 
                  name="search" 
                  id="search" 
                  placeholder="Search your product" 
                  value={searchInput}
                  onChange={handleSearch}
              />

              <button type="submit">
                  <i className="icofont-search"></i>
              </button>
              
            </form>

            <p> {desc} </p>

            <ul className="lab-ul"> 
              
              {
                searchInput && filteredProducts.map( (product, i ) => { <li key={i}> <Link to={`/shop/${product.id}`}> {product.name} </Link> </li> 
                  }
                )
              }

            </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner