import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={styles.imgContainer}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontWeight:'400',
        margin:8
    },
    imgContainer:{
        margin:8,
        flex:1,
        borderRadius:15,
        width:300,
        height:300,
        borderColor:'red'
    },
    image:{
        height:200,
        width:200
    },
    tinyLogo: {
      width: 200,
      height: 200,
    },
})