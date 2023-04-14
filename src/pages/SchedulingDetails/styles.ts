import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(ScrollView)`
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

export const SchedulingContent = styled.View`
  flex: 1;
  padding: 0 24px;
  justify-content: space-evenly;
`;

export const DateBox = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  padding: 16px 0;
  padding-right: 16px;
`;

export const IconWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 12px;
  margin-right: 24px;
`;

export const DateArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const SelectedDate = styled.View``;

export const SelectedDateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const SelectedDateDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const ValueBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 16px 0;
`;
export const ValueDetails = styled.View``;

export const ValueDetailsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
`;
export const ValueDetailsExplain = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const TotalValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const ButtonArea = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 24px;
`;
