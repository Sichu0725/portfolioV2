import React from "react"
import { ScrollView, Text, StyleSheet, SectionList, View } from "react-native"

export const Notice = () => {

  const styles = StyleSheet.create({
    h2 : {
      fontSize : 18,
      color : "black",
      fontWeight : "800"
    },
    contents : {
      padding : 5,
      color : "black"
    }
  })

  const data = [
    {
      title : "1. 개발 의도",
      data : ["I. 학교에서 친구들이 롤을 하지 않으면 좋을거 같다.", "II. 친구가 롤을 할 때 놀리고 싶다."]
    },
    {
      title : "2. 사용방법",
      data : ["I. 감시하고 싶은 친구의 롤 닉네임을 등록하고, 앱을 끄지 않는다.(백그라운드 지원함)"]
    },
    {
      title : "3. 저작권은 개발자한테 있습니다.",
      data : ["I. 사용하는 것은 자유이지만 무단 배포는 하지 말아 주세요."]
    }
  ]

  return (
    <SectionList
    sections={data} 
    renderSectionHeader={ ({section}) => {
      return (
        <View>
          <Text style={styles.h2}>{section.title}</Text>
        </View>
      )
    }}
    renderItem = { ({section, index}) => {
      return(
        <View>
          <Text style={styles.contents}>{section.data[index]}</Text>
        </View>
      )
    }} />
  )
}