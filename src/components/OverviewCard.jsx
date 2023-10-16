import './CardListStyle.css';
import OverviewImage from './OverviewImage';
import { FaAngleDown } from "react-icons/fa";

const OverviewCard = () => {
    return (
        <div className="card-list">
            <div class="card" id='overview' style={{ width: "800px", height: "250px" }}>


                <div style={{ display: "flex", flexDirection: "row" }}>
                    <p style={{ padding: "0px 0px", marginTop: "0px", fontWeight: "bold" }} className="card-title">Overview </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p style={{ padding: "0px 200px", marginTop: "0px", fontWeight: "lighter" }} className="card-title">Quantity <FaAngleDown /> </p>
                </div>




                <p style={{ padding: "0px", marginTop: "0px", color: "GrayText" }} class="card-subtitle mb-2 text-muted">Customers That Buy Products</p>

                <OverviewImage />

            </div>
        </div>
    )
}

export default OverviewCard;