import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./unpleased-button.css"


export default function UnpleasedButton() {

return (
   <>
   <Button className="unpleased-button" ><FontAwesomeIcon icon={faFaceFrown}/>İlgimi çekmiyor</Button>
   
   <Button className="unpleased-button"><FontAwesomeIcon icon={faFaceFrown}/>Bu gündem başlığı zararlı veya spam içeriyor</Button>
   
   </>

)


}