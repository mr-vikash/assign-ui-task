import './CardListStyle.css';
import CustomerImage from './CustomerImage';
const CustomerCard = () => {
    return (
        <div className="card-list">
            <div class="card" style={{width: "300px",height:"250px",justifyContent:"center"}}>
              
                    <h2 style={{padding:"0px",marginTop:"0px"}}class="card-title">Customers</h2>
                    <p style={{padding:"0px",marginTop:"0px",color:"GrayText"}} class="card-subtitle mb-2 text-muted">Customers That Buy Products</p>
                    <div>
                    <CustomerImage/>
                    </div>
                    
                
            </div>
        </div>
    )
}

export default CustomerCard;