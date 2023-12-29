import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const foodList=[
    {
        id:1,
        name:'Pastry',
        img:'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:2,
        name:'Burger',
        img:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:3,
        name:'Dana Tentris',
        img:'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:4,
        name:'ChowMein',
        img:'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:5,
        name:'Cookies',
        img:'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:6,
        name:'Fried Rice',
        img:'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
     {
        id:7,
        name:'Pastry',
        img:'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:8,
        name:'Burger',
        img:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:9,
        name:'Dana Tentris',
        img:'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:10,
        name:'ChowMein',
        img:'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:11,
        name:'Cookies',
        img:'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:12,
        name:'Fried Rice',
        img:'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
]
const FoodCard = () => {
  return (
    <View >
        <View style={styles.headingContainer}>
        <Text style={styles.headingText}>FoodCard</Text>
        </View>
     
      <ScrollView scrollToOverflowEnabled={true} style={styles.container} horizontal={false}>
        <View style={styles.cards}>
        {
            foodList.map(({id,name,img})=>(
                <View key={id} style={styles.card} >
                    <Image source={{ uri:img }} style={styles.cardImage} />
                    <View>
                        <Text style={styles.cardName}>{name}</Text>
                    </View>
                </View>
            ))
        }
        </View>
      </ScrollView>
    </View>
  )
}

export default FoodCard;

const styles = StyleSheet.create({
    headingContainer:{
        flex:1,
        alignItems:'center'
    },
    headingText:{       
        fontSize:20,
        color:'black',
        fontWeight:'400',
        marginLeft:10,
        padding:10,
    
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
        width:'100%'
       
    },
    cards:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      width:'auto'

            
    },
    card:{
    },
    cardImage:{
        width:160,
        height:160,
        margin:10,
        borderRadius:30,
    },
    cardName:{
        fontSize:15,
        color:'black',
        fontWeight:'300',
        marginLeft:10,
        padding:10 
    }
})