import { useParams } from "react-router";
    ///:word/:color/:background
 
const Coloredwords = (props) => {
  const { word,fontColor,background }  = useParams();
    
   
      const myStyle = {
        color: fontColor,
        backgroundColor: background,
       
      };
  return (

    <h1 style={myStyle}> {word}</h1>
  );
}
export default Coloredwords;