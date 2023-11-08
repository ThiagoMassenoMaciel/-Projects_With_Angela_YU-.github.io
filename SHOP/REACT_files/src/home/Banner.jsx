import React, { useState } from 'react'
import productData from '../../products.json'

const title = (
  <h2>Search Your One From <span>Thousands</span> of Prodducts </h2>
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

  console.log(productData);

  //Search funtionality
  const handleSearch =( e )=> {
    //console.log(e.target.value)
    //console.log("entrou dentro da variavel  handleSearch = com arrow function")
      const searchTerm = e.target.value;
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

            </form>
            
        </div>
      </div>
    </div>
  )
}

export default Banner