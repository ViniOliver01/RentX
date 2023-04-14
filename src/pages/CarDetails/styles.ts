import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex: 1;
  padding-bottom: 120px;
`;

export const Content = styled(ScrollView)`
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  position: absolute;
  margin: 30px 24px;
`;

export const Details = styled.View`
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CarName = styled.View``;

export const CarDailyRate = styled.View``;

export const Manufacturer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Model = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const DailyTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Daily = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const CarDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 24px;
  margin-bottom: 16px;
  text-align: justify;
  flex: 1;
`;

export const ButtonArea = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 24px;
  height: 120px;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 0;
`;
