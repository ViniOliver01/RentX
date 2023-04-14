import React, { useState } from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { CarImage, CarImageWrapper, Container, ImageIndex, ImageIndexes } from "./styles";

interface ImageSliderProps {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const width = Dimensions.get("window").width;
  const [stateIndex, setIndex] = useState(0);

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((item, index) => (
          <ImageIndex key={index} active={index === stateIndex} />
        ))}
      </ImageIndexes>

      <CarImageWrapper>
        <Carousel
          loop
          width={width}
          height={width / 2}
          data={imagesUrl}
          onSnapToItem={(index) => setIndex(index)}
          renderItem={({ item }) => (
            <CarImage
              source={{
                uri: item,
              }}
              resizeMode="contain"
            />
          )}
        />
      </CarImageWrapper>
    </Container>
  );
}
