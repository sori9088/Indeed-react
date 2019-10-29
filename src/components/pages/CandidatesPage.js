import React, { useEffect, useState } from "react";
import {
  Card,
  ListGroup,
  Container,
  ListGroupItem

} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CandidatesPage() {


  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const getCandidates = async () => {
      const response = await fetch("http://localhost:3001/candidates");
      const data = await response.json();
      setCandidates(data);
      console.log(data)
    };
    getCandidates();
  }, []);

  const onDeleteCandidate = (e, id) => {
    e.preventDefault();
    const config = {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    };
    fetch(`http://localhost:3001/candidates/${id}`, config);
    const newCandidates = candidates.filter(candidate => candidate.id != id);
    setCandidates(newCandidates);
  }


  return (
    <div className="container justify-items-center">
      <div className="d-flex justify-content-end my-3 px-4">
      <Link to={`/add`} className="btn btn-outline-dark">Add Candidate</Link>
      </div>
      <Container fluid className="d-flex flex-wrap text-center hansol">
        {candidates && candidates.map((candidate) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={candidate.photo_url} />
              <Card.Body>
                <Card.Title>{candidate.first_name + " " + candidate.last_name}</Card.Title>
                <Card.Text>
                  {candidate.id}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{candidate.email}</ListGroupItem>
                <ListGroupItem>{candidate.company}</ListGroupItem>
                <ListGroupItem>{candidate.job_title}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Link to={`/candidates/${candidate.id}`} className="btn btn-info">Edit</Link>
                <Card.Link onClick={(e) => onDeleteCandidate(e, candidate.id)} href={`/candidate/${candidate.id}`} className="btn btn-danger">Delete</Card.Link>
              </Card.Body>
            </Card>

          )
        }).reverse()}
      </Container>
    </div>
  )
}
