import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0 24px;
  padding-top: 88px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(30)}px;
  margin-bottom: 18px;
`;

export const HeaderSubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(15)}px;
  margin-bottom: 34px;
`;

export const Body = styled.View`
  margin: 24px 16px 0px 16px;
  flex: 1;
  justify-content: center;
`;

export const SchedulesInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 29px;
`;

export const SchedulesCount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`;

export const SchedulesCounter = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const SchedulesItens = styled.View`
  gap: 2px;
  margin-bottom: 16px;
`;
