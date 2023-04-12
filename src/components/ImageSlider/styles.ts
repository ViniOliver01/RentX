import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: 40px 0;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
  gap: 8px;
  margin-bottom: 36px;
`;

interface ImageIndexProps {
  active: boolean;
}

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.shape_dark : theme.colors.shape};
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 100%;
  height: 200px;
`;
