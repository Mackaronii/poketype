import React from "react";
import Card from "react-bootstrap/Card";

function CategoryItem(props) {
  return (
    <Card bg="dark" text="light">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CategoryItem;
