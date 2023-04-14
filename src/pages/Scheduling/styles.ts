import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(ScrollView)``;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0 24px 32px 24px;
`;

export const BackButton = styled.View`
  position: absolute;
  margin: 30px 24px;
`;

export const TitleBox = styled.View`
  margin-top: 70px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
`;

export const SelectedDate = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateBox = styled.View``;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};
`;

interface DateValueProps {
  isEmpty: boolean;
}

export const DateValue = styled.Text<DateValueProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, isEmpty }) =>
    isEmpty ? "transparent" : theme.colors.background_secondary};

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, isEmpty }) =>
    isEmpty ? theme.colors.main_light : "transparent"};
`;

export const Body = styled.View`
  background-color: red;
`;

export const ButtonArea = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 24px;
  flex: 1;
`;
