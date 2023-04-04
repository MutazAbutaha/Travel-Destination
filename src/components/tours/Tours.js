import "./Tours.css"

function Tours(props){
    function buttonHandler(){
        
    }
    return(

         <div className="card">
         <h3>{props.name} </h3>
        <button className="card" onClick={buttonHandler}>
        <img src={props.image} alt={props.name}/>
         </button>
         <br  style={{width:50,color:"black"}}/>
         </div>
    )
};

export default Tours;