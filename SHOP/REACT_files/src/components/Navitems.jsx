import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo.png'
const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const [socialToggle, setSocialToggle] = useState(false)
  const [headerFixed, setHeaderFixed] = useState(false)

  //add event listenner
  window.addEventListener("scroll", ()=> { 
    // When you scroll the viewport on flow direction Vertical(Y) i will set the Position fixed
    if (window.scrollY > 200){
        setHeaderFixed(true)
    }else{
        setHeaderFixed(false)
    }
  })

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
      {/*   header top start */}

      <div className ={ `header-top d-md-none ${socialToggle ? "open": ""}`} >
          <div className="container">
          <div className="header-top-area">
              <Link to="/signup" className="lab-btn me-3"><span>Create Accout</span></Link>
              <Link to="/login"><span>Log in</span></Link>
          </div>
        </div>
      </div>

    {/*   header button */}

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/*   logo  */}

            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="This image is a logo for the site eccommerse" />
                </Link>
              </div>
                  
            </div>

          </div>
        </div>

      </div>
    </header>
  )
}

export default Navitems