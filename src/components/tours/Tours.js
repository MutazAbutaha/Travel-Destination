function Tours(props){
    return(
         <>
         <h2>{props.name}</h2>
         <img src={props.image} alt={props.name}/>
         <br  style={{width:50,color:"black"}}/>
         </>
    )
};

export default Tours;