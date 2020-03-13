import React from "react";
import Card from "react-bootstrap/Card";

function CategoryItem(props) {
  return (
    <Card className="text-white">
      <Card.Img src={props.image} />
      <Card.ImgOverlay>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CategoryItem;
