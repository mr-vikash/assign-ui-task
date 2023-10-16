import ReactIcons from "./ReactIcons"
const Colors = ({id,text3}) =>{
    switch(id){
        case 1:{
            return(
                <h6 style={{color:"green"}}><ReactIcons id={id}/> {text3}</h6> 
            )
        }
        case 2:{
            return(
                <h6 style={{color:"red",fontWeight:"bold"}}><ReactIcons id={id}/> {text3}</h6> 
            )
        }
        case 3:{
            return(
                <h6 style={{color:"red"}}><ReactIcons id={id}/> {text3}</h6> 
            )
        }
        case 4:{
            return(
                <h6 style={{color:"green"}}><ReactIcons id={id}/>{text3} </h6> 
            )
        }
        default:{
            return(
                <h6 style={{color:"green"}}><ReactIcons id={id}/>{text3} </h6> 
            )
        }
    }
}
export default Colors;