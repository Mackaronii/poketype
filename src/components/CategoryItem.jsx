import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CategoryItem(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} style={{ maxWidth: "150px" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Link to={`/${props.dest}`}>
          <Button variant="outline-primary">View</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CategoryItem;
