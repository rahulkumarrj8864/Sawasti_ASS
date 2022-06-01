import React,{useState} from 'react'
import { Row,Col,Form,Button,InputGroup,Container, Card } from 'react-bootstrap';

export default function Page() {
    const [validated, setValidated] = useState(false);
    const [emergencyNumber,setEmergencyNumber] = useState('')
    const [validin , setValidin] = useState("invalid")
    const firstRegEx = '^[A-Za-z. ]{5,15}$';
    const secondRegEx = /^[A-Za-z. ]{3,30}$/;
    const pinRegEx = '^[1-9][0-9]{5}$';
    // const emerRegEx = '^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$';
    const emerRegEx = '^[1-9][0-9]{9}$';


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  // const handleEmergencyNumber = (e) => {
  //   // if(emergencyNumber.length > 0){

  //   //   setValidin("invalid")
  //   // }else if(e.target.value.length >=10) {
  //   //   setValidin("invalid")
  //   // }
  //   // console.log(`"${validin}"`)
  //   if(emerRegEx.test(emergencyNumber)){
  //     // setValidated(true)
  //     // console.log("hello");
  //     // setValidin("valid")
  //   }else if (emerRegEx.test(emergencyNumber)>10){
  //     setValidin("invalid")
  //   }
  //   else {
  //     // alert("hello")
  //     setValidin("invalid")
  //   }
  //   // else if(!emerRegEx.test(emergencyNumber) || (emergencyNumber === null)) {
  //   //   // setValidated(false)
  //   //   console.log("world");
  //   //   setValidin("invalid")
  //   // }
  //   setEmergencyNumber(e.target.value)
  // }
  return (
    <div className='mb-3 mt-2'>
    <Card>
    <h3 className='text-center mt-3 fw-bold text-muted'>Form Validation</h3>
    <Card.Body>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group id="firstName" className='mb-2'>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" required placeholder='Smith' pattern={firstRegEx} onFocus="true" onBlur={"true"}/>
              <Form.Control.Feedback type="invalid">Please Vaild First Name (5 - 15).</Form.Control.Feedback>
            </Form.Group>
            <Form.Group id="lastName" className='mb-2'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" required placeholder='John' pattern={firstRegEx} onFocus="true" onBlur={"true"}/>
              <Form.Control.Feedback type="invalid">Please Vaild Last Name (5 - 15).</Form.Control.Feedback>
            </Form.Group>
            <Form.Group id="dateOfBirth" className='mb-2'>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control type="date" required />
              <Form.Control.Feedback type="invalid">Please choose Vaild Date Of Birth</Form.Control.Feedback>
            </Form.Group>
            <Form.Group id="gender" className='mb-2'>
              <Form.Label>Gender</Form.Label>
              {/* <Form.Control type="number" required placeholder='+91 996585684'/> */}
              <Form.Select aria-label="Default select example">
                {/* <option disabled value="-1">Open this select Gender</option> */}
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group id="pinCode" className='mb-2'>
              <Form.Label>Pin Code</Form.Label>
              <Form.Control type="text" required placeholder='Zip Code' pattern={pinRegEx}/>
              <Form.Control.Feedback type="invalid">Please Enter Vaild Zip Code (maximum 6 character).</Form.Control.Feedback>
            </Form.Group>
            <Form.Group id="emergencyNumber" className='mb-2'>
              <Form.Label>Emergency Number</Form.Label>
              <Form.Control type="text" required placeholder='996585684' pattern={emerRegEx}/>
              <Form.Control.Feedback type={validin}>Please Enter Vaild Phone Number (maximum 10 character).</Form.Control.Feedback>
            </Form.Group>
            <Form.Group id="bloodGroup" className='mb-2'>
              <Form.Label>Blood Group</Form.Label>
              {/* <Form.Control type="number" required placeholder='+91 996585684'/> */}
              <Form.Select aria-label="Default select example">
                {/* <option disabled value="0">Open this select Gender</option> */}
                <option value="male">A+</option>
                <option value="female">A-</option>
                <option value="other">B+</option>
                <option value="other">B-</option>
                <option value="other">AB+</option>
                <option value="other">AB-</option>
                <option value="other">O+</option>
                <option value="other">O-</option>
              </Form.Select>
            </Form.Group>
            {/* <Form.Group id="email" className='mb-2'>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required placeholder='example@gmail.com'/>
            </Form.Group>
            <Form.Group id="password" className='mb-2'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" required />
            </Form.Group> */}
            <Button className="w-100 mt-3" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
        <h3 className='text-center mt-3 fw-bold text-muted'>&nbsp;</h3>
      </div>
  )
}
