import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 32px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`;

export const Body = styled.View`
  padding: 16px;
  flex: 1;
  justify-content: center;
`;

export const MyCarsButton = styled(RectButton)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  background-color: ${({ theme }) => theme.colors.main};

  align-items: center;
  justify-content: center;
  border-radius: 999px;
  position: absolute;
  right: ${RFValue(22)}px;
  bottom: ${RFValue(13)}px;
`;
