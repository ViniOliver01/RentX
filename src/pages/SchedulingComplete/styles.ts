import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 65px;
  background-color: ${({ theme }) => theme.colors.header};
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
  margin-top: 40px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  padding: 16px 77px 80px 77px;
  text-align: center;
`;
