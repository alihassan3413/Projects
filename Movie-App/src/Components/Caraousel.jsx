import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import Slider from "../Components/Carousel/Slider.json";

function Caraousel() {
  return (
    <Carousel
      sx={{
        padding: 20,
        backgroundColor: "black",
        marginBottom: 10,
      }}
    >
      {Slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default Caraousel;
