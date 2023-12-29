import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';


export const list=[
    {
        uid:1,
        name:"Deepak",
        status:"Halwa",
        image:"https://images.pexels.com/photos/19561008/pexels-photo-19561008/free-photo-of-portrait-of-man-behind-leaf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        uid:2,
        name:"Sahul",
        status:"Gazar",
        image:"https://images.pexels.com/photos/19477280/pexels-photo-19477280/free-photo-of-a-man-walking-on-the-beach-with-a-surfboard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        uid:3,
        name:"Yatika",
        status:"Pagaal",
        image:"https://images.pexels.com/photos/8530923/pexels-photo-8530923.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        uid:4,
        name:"Vedant",
        status:"Ullu",
        image:"https://images.pexels.com/photos/14334577/pexels-photo-14334577.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }
]
const ContactList = () => {
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {
            list.map(({uid,name,status,image})=>(
                <View key={uid} style={styles.userCard}>
                    <Image source={{uri:image}} style={styles.userImage} />
                    <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText:{
        fontSize:30,
        fontWeight:'bold',
        marginLeft:20

    },
    container:{
       paddingHorizontal:16,
       marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8D3DAF',
        borderRadius:10
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginLeft:20
    },
    userName:{
        marginLeft:20,
        fontSize:16,
        fontWeight:'bold',
        color:'white'
    },
    userStatus:{
        marginLeft:20,
        fontSize:16,
        fontWeight:'300',
        color:'white'
    }

})