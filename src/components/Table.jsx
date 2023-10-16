import { FaAngleDown,FaSearch } from "react-icons/fa";
import './Table.styles.css';
const Table = () => {
    return (

        <div className="card" style={{ width: "1145px", height: "200px" }}>
            < div style={{ display: "flex", flexDirection: "row" }}>
                <h3 style={{ margin: "2px",paddingLeft: "10px" }}>Product Sell</h3>
                <h3 style={{ margin: "2px", color: "GrayText", fontWeight:"lighter", paddingLeft: "705px",fontSize:"12px" }}><FaSearch/>Search</h3>
                <h3 style={{ margin: "2px", color: "GrayText",fontWeight:"lighter", paddingLeft: "70px",fontSize:"12px" }}>Last 30 days</h3>&nbsp;&nbsp;<FaAngleDown />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <p style={{ margin: "1px", color: "GrayText" }}>Product Name</p>
                <p style={{ margin: "1px", color: "GrayText", paddingLeft: "702px" }}>Stock</p>
                <p style={{ margin: "1px", color: "GrayText", paddingLeft: "73px" }}><b>Price</b></p>
                <p style={{ margin: "1px", color: "GrayText", paddingLeft: "60px" }}>Total Sales</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>

                <div className="card custom-card mt-0" style={{ height: "40px", padding: "1px", boxShadow: "none", display: "flex", alignItems: "flex-start", border: "none" }}>
                    <img style={{ height: "40px", borderRadius: "5px", margin: "2px" }} src="https://media.istockphoto.com/id/1644722689/photo/autumn-decoration-with-leafs-on-rustic-background.jpg?s=2048x2048&w=is&k=20&c=dZFmEik-AnmQJum5Ve8GbQj-cjkPsFTJP26lPY5RTJg=" alt="" className="card-img-top" />
                    <div className="card-body m-0" style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                        <h5 className="card-title mb-0" style={{ fontSize: "14px", fontWeight: "bold", margin: "0" }}>Abstract 3D <br /> Lorem, ipsum dolor.</h5>
                    </div>
                </div>

                <p style={{ margin: "1px", color: "GrayText", paddingLeft: "540px" }}>32 in stock</p>
                <p className="text-bold" style={{ margin: "1px", paddingLeft: "50px" }}><b>$ 45.99</b></p>
                <p className="text-bold" style={{ margin: "1px", paddingLeft: "50px", color: "GrayText", }}>20</p>

            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>

                <div className="card custom-card mt-0" style={{ height: "50px", padding: "1px", boxShadow: "none", display: "flex", alignItems: "flex-start", border: "none" }}>
                    <img style={{ height: "40px", borderRadius: "5px", margin: "2px" }} src="https://media.istockphoto.com/id/1644722689/photo/autumn-decoration-with-leafs-on-rustic-background.jpg?s=2048x2048&w=is&k=20&c=dZFmEik-AnmQJum5Ve8GbQj-cjkPsFTJP26lPY5RTJg=" alt="" className="card-img-top" />
                    <div className="card-body m-0" style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                        <h5 className="card-title mb-0" style={{ fontSize: "14px", fontWeight: "bold", margin: "0" }}>Sarphens Illustration <br /> Lorem, ipsum dolor.</h5>
                    </div>
                </div>


                <p style={{ margin: "1px", color: "GrayText", paddingLeft: "540px" }}>32 in stock</p>
                <p className="text-bold" style={{ margin: "1px", paddingLeft: "50px" }}><b>$ 45.99</b></p>
                <p className="text-bold" style={{ margin: "1px", paddingLeft: "50px", color: "GrayText", }}>20</p>

            </div>


        </div>
    )
};

export default Table;