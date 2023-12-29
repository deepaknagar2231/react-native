import { View, Text,Linking, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    const openWebsite=(webiste="")=>{
        Linking.openURL(webiste);
    }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headingText}> React Native  is easy ?....</Text>
        </View>
      </View>
      <Image source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
      }} style={styles.image} />
      <View style={styles.body}>
        <Text numberOfLines={3}>A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.
Opacity is controlled by wrapping the children in an Animated.View, which is added to the view hierarchy. Be aware that this can affect layout.
Do you want to 
    </Text>
      </View>
      <TouchableOpacity onPress={()=>openWebsite('https://reactnative.dev/docs/touchableopacity')}><Text>Readmore</Text></TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    headingText:{
        color:'red',
       paddingLeft:10
    },
    card:{},
    elevatedCard:{},
    headingContainer:{},
    image:{
        width:50,
        height:50
    },
    body:{},
    link:{}
})
export default ActionCard;

