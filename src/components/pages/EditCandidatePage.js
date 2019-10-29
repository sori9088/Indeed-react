import React, {useState, useEffect  } from 'react'
import { Form , InputGroup , Button, Col , Container  } from "react-bootstrap";
import { useParams } from 'react-router-dom'
export default function EditCandidatePage() {
    const [validated, setValidated] = useState(false);
    const [candidate, setCandidate] = useState({});

    const { id } = useParams()
    console.log(id)


    useEffect(()=>{
        const getCandidate = async () => {
            const response =  await fetch("http://localhost:3001/candidates/"+ id);
            const data = await response.json();
            setCandidate(data);
            console.log(data)
          };
          getCandidate();
    },[])

    const handleSubmit = async event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } 
        setValidated(true);

        const config={
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body :JSON.stringify(candidate)
      }
        const response = await fetch ('http://localhost:3001/candidates/'+id, config)
      
        if(form.checkValidity() === true){
          window.location.href='/candidates'
        }
    
  
 
    };
    
    return (
    <Container className='my-5'>
        <h1>Edit Candidate's Information</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={candidate.first_name}
            onChange={(e) => setCandidate({... candidate, first_name : e.target.value})}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={candidate.last_name}
            onChange={(e) => setCandidate({... candidate, last_name : e.target.value})}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>E-mail</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="E-mail"
              aria-describedby="inputGroupPrepend"
              value={candidate.email}
              onChange={(e) => setCandidate({... candidate, email : e.target.value})}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide an email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Company</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Company" 
          value={candidate.company} 
          onChange={(e) => setCandidate({... candidate, company : e.target.value})}
          required  />
          <Form.Control.Feedback type="invalid">
            Please provide a Company.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Job-Title</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Job-Title" 
          value={candidate.job_title}
          onChange={(e) => setCandidate({... candidate, job_title : e.target.value})} 
          required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid value.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>City</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="City" 
          value={candidate.city} 
          onChange={(e) => setCandidate({... candidate, city : e.target.value})}
          required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Container>
    )
}
