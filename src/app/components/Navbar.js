import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  // creating an array of object where each object contains nav menu name and its associated routes
  const navItems = [
    { name: "All Products", link: "/allProducts" }, 
    { name: "Electronics", link: "/electronics" },
    { name: "Jewellery", link: "/jewellery" },
    { name: "Mens", link: "/men" },
    { name: "Womens", link: "/women" },
    { name: "Cart", link: "/cart" },
  ];

  const [ selectedNavItem, setSelectedNavItem ] = React.useState(navItems[0].name);

  const Listdata = useSelector((state) => {   
    return state.productSlice;
  });

  // storing tht total number of products in the local storage, which we have added to the cart
  localStorage.setItem('count', Listdata.length);

  function handleLinkClick(productName) {
    if(productName === "Logout") {
      localStorage.removeItem('token');
      localStorage.removeItem('count');
      history.push('/login');
    }
    setSelectedNavItem(productName);
  }
  const tokenId = localStorage.getItem('token');

  return (
    <>
      <Box sx={{ display: "flex", marginBottom: "80px" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar sx={{ backgroundColor: "#DDA380", justifyContent: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block", color: "#000" } }}
            >
              {`<Store />`}
            </Typography>

            <Box 
              sx={{ display: { xs: "none", sm: "block" }}} 
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {navItems.map((item) => (
                  <li key={item.name} style={{ listStyleType: 'none', marginRight: '12px' }}>
                      <Link 
                        to={item.link} 
                        style={{ textDecoration: 'none' }} 
                        onClick={ () => { handleLinkClick(item.name) } }
                      >{item.name}</Link>
                  </li>
              ))}

              { localStorage.getItem('count') }

              {
                tokenId ? (
                  <li style={{ listStyleType: 'none', marginLeft: '12px' }}>
                    <Link
                      to="/logout" 
                      style={{ textDecoration: 'none' }} 
                      onClick={ () => { handleLinkClick("Logout") } }
                    >Logout</Link>
                  </li>
                ) : null
              }
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* dynamically setting up the header name of the page based on the current URL */}
      <div style= {{ padding: '10px 38px' }}>
        <h4 style={{ float: "left" }}>
          { window.location.pathname === "/login" || window.location.pathname === "/logout" ? "" : selectedNavItem}
        </h4>
      </div>
    </>
  );
};

export default Navbar;
