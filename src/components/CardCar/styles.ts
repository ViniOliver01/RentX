import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex-direction: row;
  padding: 24px;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.line};
`;

export const CarDetails = styled.View``;

export const PriceDetails = styled.View``;

export const FuelDetails = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Manufactor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Model = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Diary = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const CarImage = styled.Image`
  width: 160px;
  height: 92px;
`;
