import React from "react";
import { CarImage, CarImageWrapper, Container, ImageIndex, ImageIndexes } from "./styles";

interface ImageSliderProps {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const image = imagesUrl[0];

  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={true} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage
          source={{
            uri: image,
          }}
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  );
}
