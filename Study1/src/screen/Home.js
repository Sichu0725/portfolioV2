import React from "react"
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react"

export const Home = ({navigation}) => {
  const Storage_KEY = "@user_info"


  const [ name, setName ] = useState("")
  const [ input, setInput ] = useState('')

  const change = value => setName(value)
  const onSubmitEditing = () => {
    //패치 보내서 uuid, encryto_id 받아옴
    setData(input)
  }
  const setData = async (value) => {
    try {
      await AsyncStorage.setItem(Storage_KEY, name)
      getData()
    } catch (e) {
      console.log("error store", e)
    }
  }
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(Storage_KEY)
      if (value !== null) {
        setInput(value)
      }
    } catch(e) {
      console.log("error get", e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const styles = StyleSheet.create({
    button : {
      margin: 10,
      padding : 10,
      borderRadius : 8,
      backgroundColor: 'skyblue',
      alignItems : "center",
      color : 'black',
    },
    nowSee : {
      fontSize : 28,
      fontWeight: "bold",
      padding : 5,
      textAlign : "center"
    },
    inputText : {
      fontSize : 16
    },
    button_contents: {
      fontWeight: "bold",
      fontSize : 15
    }
    
  })

  
  return (
    <View>
      <Text style={styles.nowSee}>현재 감시 중 : {input}</Text>
      <TextInput
      style={styles.inputText}
      onChangeText={change}
      onSubmitEditing={onSubmitEditing}
      value={name}
      placeholder="이름을 입력해주세요" />
      <Pressable
      style={styles.button}
      onPress={() => navigation.navigate('Notice')}>
        <Text style={styles.button_contents}>이용 규정</Text>
      </Pressable>
    </View>
  )

}