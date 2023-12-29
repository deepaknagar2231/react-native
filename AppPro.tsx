import React from "react";
import{
View,
Text,
StyleSheet,
useColorScheme
} from 'react-native'

function AppPro():JSX.Element{
    const isDarkMode=useColorScheme();
    return(
        <View style={styles.container}>
            <Text style={isDarkMode?styles.whiteText:styles.blackText}>Hello World</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    whiteText:{
        color:'#FF0000'
    },
    blackText:{
        color:'#000000'
    }
})
export default AppPro;