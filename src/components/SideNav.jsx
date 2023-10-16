
import { FaAngleDown } from "react-icons/fa";
import React from 'react';
import './SideNav.styles.css'; // Import the styles
import { List, ListItem, ListItemText } from '@mui/material';
import { FaAngleRight } from 'react-icons/fa';
import { FaDashcube, FaHireAHelper, FaPeopleArrows, FaMoneyBillWave, FaGooglePlusSquare, FaProductHunt,FaHome } from 'react-icons/fa';


const SideNav = () => {
  return (
    

  // ...

  <div className="side-nav">
    <h2><FaHome/>&nbsp;Dashboard</h2>
    <List>
      <ListItem className="nav-item" button style={{ display: 'flex', alignItems: 'center', }}>
        <FaDashcube className="nav-item" />&nbsp;<ListItemText className="nav-item" primary="Dashboard" />
        <FaAngleRight className="nav-item" />
      </ListItem>
      <ListItem   button>
        <FaProductHunt className="nav-item" />&nbsp;<ListItemText className="nav-item" primary="Product" />
        <FaAngleRight className="nav-item"/>
      </ListItem>
      <ListItem  button>
        <FaPeopleArrows className="nav-item" />&nbsp;<ListItemText className="nav-item" primary="Customers" />
        <FaAngleRight className="nav-item" />
      </ListItem>
      <ListItem  button>
        <FaMoneyBillWave className="nav-item"/>&nbsp;<ListItemText className="nav-item"  primary="Income" />
        <FaAngleRight className="nav-item"/>
      </ListItem>
      <ListItem   button>
        <FaGooglePlusSquare className="nav-item"/>&nbsp;<ListItemText className="nav-item" primary="Promote" />
        <FaAngleRight className="nav-item"/>
      </ListItem>
      <ListItem  button  className="nav-item" >
        <FaHireAHelper className="nav-item"/>&nbsp;<ListItemText className="nav-item" primary="Help" />
        <FaAngleRight className="nav-item"/>
      </ListItem>
    </List>

    <div style={{ position: "absolute", bottom: "22px", left: "22px", backgroundColor: "rgba(45,45,105,255)", color: "white", padding: "10px", borderRadius: "5px" }}>
      <div className=" custom-card mt-0" style={{ height: "30px", padding: "1px", boxShadow: "none", display: "flex", alignItems: "flex-start", border: "none", width: "178px" }}>
        <img style={{ height: "30px", width: "30px", borderRadius: "70px", margin: "2px" }} src="https://i.pinimg.com/736x/a7/96/98/a79698e6e8d74213650194e941b155df.jpg" alt="" className="card-img-top" />
        <div className="card-body m-0" style={{ paddingLeft: "10px", paddingTop: "5px" }}>
          <h5 className="card-title mb-0" style={{ fontSize: "10px", fontWeight: "lighter", margin: "0", color: "GrayText" }}>Evana<FaAngleDown /> <br />Project Manager </h5>
        </div>
      </div>

    </div>
  </div>
  );
};

export default SideNav;
