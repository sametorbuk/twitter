import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function UnpleasedButton() {

return (
   <>
   <Button style={{position: "fixed",
  zIndex: "130000",
  background: "white",
  width: "20rem",
  height: "100rem",
  color: "white"}}  ><FontAwesomeIcon icon={faFaceFrown}/>İlgimi çekmiyor</Button>
   
   <Button className="unpleased-button"><FontAwesomeIcon icon={faFaceFrown}/>Bu gündem başlığı zararlı veya spam içeriyor</Button>
   
   </>

)


}

export default UnpleasedButton