import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'

export default function Reg() {
    const [emergencyNumber,setEmergencyNumber] = useState('')
    const regEx = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/
    const pinCode = /^[1-9][0-9]{5}$/
    const handleEmergencyNumber = (e) => {
        e.preventDefault()
        setEmergencyNumber(e.target.value)
    }
    const handleClick = () => {
        if(emergencyNumber.length != 10){
            console.log("max 10");
        }else {
            console.log("max 0");
        }
        if(regEx.test(emergencyNumber)){
            // setValidated(true)
            console.log("hello");
          }
          else if(!regEx.test(emergencyNumber) || (emergencyNumber === null)) {
            // setValidated(false)
            console.log("world");
          }
        //   else {
        //     // setValidated(false)
        //     console.log(" ");
        //     return false
        //   }
    }
  return (
    <div>
        <Form.Group id="emergencyNumber" className='mb-2'>
              <Form.Label>Emergency Number</Form.Label>
              <Form.Control type="number" mask-clean='true' mask='9999999999' restrict="reject" clean="true"  required placeholder='996585684' value={emergencyNumber} onChange={handleEmergencyNumber} maxLength={10} pattern="[0-9]*"/>
        </Form.Group>
        <Button className="w-100 mt-3" type="submit" onClick={handleClick}>
              Submit
            </Button>
    </div>
  )
}
