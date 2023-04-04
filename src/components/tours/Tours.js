
import "./Tours.css"


function Tours(props){
    
    return(

         <div className="card">
         <h3>{props.name} </h3>
         <img src={props.image} alt={props.name}/>
         </div>
    )
};

export default Tours;