import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.categories = [
      {
        title: "[ EASY ] PokéFacts",
        description: "Highly unnecessary facts about Pokémon.",
        dest: "facts"
      },
      {
        title: "[ MEDIUM ] PokéBehaviours",
        description: "Discover how Pokémon behave.",
        dest: "behaviours"
      }
    ];
  }

  render() {
    return (
      <Container style={{ padding: "20px" }}>
        <h4 style={{ textAlign: "center", marginBottom: "50px" }}>
          Choose a category
        </h4>
        {this.categories.map((category, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <Link
              to={`/${category.dest}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <CategoryItem
                title={category.title}
                description={category.description}
              />
            </Link>
          </div>
        ))}
      </Container>
    );
  }
}

export default Categories;
