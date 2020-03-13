import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { label: "PokéFacts", dest: "facts" },
    { label: "PokéLore", dest: "lores" }
  ];

  return (
    <Container style={{ padding: "20px" }}>
      <p style={{ textAlign: "center" }}>Choose a category</p>
      {categories.map((category, i) => (
        <div key={i}>
          <Link to={`/${category["dest"]}`}>
            <Button style={{ marginBottom: "20px" }}>
              {category["label"]}
            </Button>
          </Link>
        </div>
      ))}
    </Container>
  );
}

export default Categories;
