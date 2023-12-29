import React from "react";
import {View,Text,StyleSheet, ScrollView} from 'react-native';

function FlatCard():JSX.Element{
return(
    <View>
         <Text style={styles.headingText}>
        Flat Cards
        </Text>
       <View style={styles.container}>
        <ScrollView horizontal={true}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Green</Text>
        </View>
        </ScrollView>
       </View>
        </View>
  
)
}



const styles=StyleSheet.create({
    headingText:{
        fontWeight:'bold',
        fontSize:17,
        paddingHorizontal:10
    } ,
    container:{
        flex:1,
        flexDirection:'row',
    },
    card:{
        width:100,
        height:100,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        margin:8,
    },
    cardOne:{
      backgroundColor:'#a89e32'
    },
    cardTwo:{
      backgroundColor:'#a83279'
    },
    cardThree:{
       backgroundColor:'#32a832'
    },
   
})
export default FlatCard;