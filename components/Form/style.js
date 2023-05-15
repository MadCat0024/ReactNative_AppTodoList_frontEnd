import { StyleSheet } from "react-native";
import color from './../../contains/color';
const styles = StyleSheet.create({
    addTask:{
        bottom:30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: color.white,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: color.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    iconCircle: {
        width: 44,
        height: 44,
        backgroundColor:color.primary,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:2,
        borderColor: '#eff7f8'
    },
    icon: {
        fontWeight: 'bold',
        color: color.white,
        fontSize: 24,
    },
    inputText: {
        fontWeight: 'bold',
        color: color.text,
        fontSize: 15,
    },
})

export default styles;