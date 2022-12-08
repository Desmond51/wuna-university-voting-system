import React from "react";
import { Card, Button } from "react-bootstrap";


function VotingCard(props) {
  let { team, incrementVoteCount } = props;

  return (
       
    <Card className="my-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`/assets/images/${team.profilepic}`} />
      <Card.Body>
        <Card.Title>{team.name}</Card.Title>
        <Card.Title style={{color:"#f3aa92"}}>{team.age}</Card.Title>
        
        <Button variant="success btn btn-primary border rounded-pill btn-md'" style={{backgroundColor:"#7791a1"}} onClick={() => incrementVoteCount(team._id)}>
          Vote
        </Button> 
        <Button className="float-end btn ms-4 me-3 border rounded-pill btn-md " style={{backgroundColor:"#f3aa92"}} variant="success" onClick={() => incrementVoteCount(team._id)}>
          Details
        </Button>
      </Card.Body>
      <Card.Footer>Vote count: {team.votes}</Card.Footer>
    </Card>
    
  );
}
export default VotingCard;