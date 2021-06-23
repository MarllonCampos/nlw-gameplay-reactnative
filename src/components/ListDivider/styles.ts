import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'80%',
    height:1,
    backgroundColor:theme.colors.secondary40,
    marginVertical:21,
    alignSelf:'flex-end',
    marginHorizontal:'auto'
  }
})