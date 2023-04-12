import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps {
  isDisable: boolean;
  color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  background-color: ${({ theme, color }) =>
    color === "Red"
      ? theme.colors.main
      : color === "Green"
      ? theme.colors.success
      : theme.colors.shape_dark};
  opacity: ${({ isDisable }) => (isDisable ? 0.5 : 1)};

  padding: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
`;
