import React from "react";
import Container from "react-bootstrap/Container";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      title: "[ EASY ] PokéFacts",
      description: "Learn niche, and highly unnecessary, facts about Pokémon!",
      dest: "facts",
      image:
        "https://vignette.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807"
    },
    {
      title: "[ MEDIUM ] PokéBehaviours",
      description: "Discover how Pokémon behave.",
      dest: "behaviours",
      image:
        "https://lh3.googleusercontent.com/proxy/OqsgBGbg5AG5GbQFaTQhlj-TTkIE7GQQueQJwKYMnhkxhRWenViFiWpD7NRiUWS3ZYszms7MhLo1H1DaCMSUhigEmAzL8y9w1w"
    }
  ];

  return (
    <Container style={{ padding: "20px" }}>
      <h4 style={{ textAlign: "center", marginBottom: "50px" }}>
        Choose a category
      </h4>
      {categories.map((category, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <CategoryItem
            title={category.title}
            description={category.description}
            image={category.image}
            dest={category.dest}
          />
        </div>
      ))}
    </Container>
  );
}

export default Categories;
