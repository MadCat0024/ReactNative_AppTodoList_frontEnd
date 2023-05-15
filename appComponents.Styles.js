import { StyleSheet } from "react-native";
import color from './contains/color';
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F5F5F5',
        flex: 1,
      },
      body:{
        flex:1,
        paddingTop: 30,
        paddingHorizontal: 20,
      },
      textInput:{
    
      },
      header:{
        fontSize: 28,
        fontWeight: 'bold',
        color: color.primary,
        fontStyle:'italic',
      },
      items: {
        marginTop: 25,
      },
})
export default styles