import { useParams } from "react-router";
    
const Numbers = (props) => {
  const { parameter } = useParams();
 // var par=Number(parameter)

  if(isNaN(+parameter)){
    return (
        <div>
        <h1> The word is:  { parameter }</h1>
        
        </div>
        )
  }
  else if (!isNaN(+parameter)){
    return (
        <div>
        <h1> The number is:  { parameter }</h1>
        
        </div>
        )
  }
  
  }

export default Numbers