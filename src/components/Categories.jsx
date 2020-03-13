import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      categories: [
        {
          title: "[ EASY ] PokéFacts",
          description: "Highly unnecessary facts about Pokémon.",
          dest: "facts",
          wideImage:
            process.env.PUBLIC_URL +
            "/assets/category_backgrounds/1100px/facts.png",
          narrowImage:
            process.env.PUBLIC_URL +
            "/assets/category_backgrounds/767px/facts.png"
        },
        {
          title: "[ MEDIUM ] PokéBehaviours",
          description: "Discover how Pokémon behave.",
          dest: "behaviours",
          wideImage:
            process.env.PUBLIC_URL +
            "/assets/category_backgrounds/1100px/behaviours.png",
          narrowImage:
            process.env.PUBLIC_URL +
            "/assets/category_backgrounds/767px/behaviours.png"
        }
      ]
    };

    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  }

  updateWindowWidth() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <Container style={{ padding: "20px" }}>
        <h4 style={{ textAlign: "center", marginBottom: "50px" }}>
          Choose a category
        </h4>
        {this.state.categories.map((category, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <Link
              to={`/${category.dest}`}
              style={{
                textDecoration: "none",
                color: "#000"
              }}
            >
              <CategoryItem
                title={category.title}
                description={category.description}
                image={
                  this.state.width < 768
                    ? category.narrowImage
                    : category.wideImage
                }
              />
            </Link>
          </div>
        ))}
      </Container>
    );
  }
}

export default Categories;
