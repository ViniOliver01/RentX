import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px;
  gap: 8px;
`;

export const BasicBox = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Line = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const MaxSpeed = styled(BasicBox)``;
export const Acceleration = styled(BasicBox)``;
export const HorsePower = styled(BasicBox)``;
export const FuelType = styled(BasicBox)``;
export const GearBox = styled(BasicBox)``;
export const Seats = styled(BasicBox)``;
