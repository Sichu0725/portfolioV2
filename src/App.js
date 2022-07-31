import { DoIt } from './components/doIt'
import { Header } from './components/header'
import { MyInfo } from './components/myInfo'
import { Project } from './components/project'
import { Stack } from './components/stack'
import './style/index.sass'
import './style/scroll.css'
export const App = () => {
  const backgroundColor = ['#ffc155', '#5599ff', '#ff8af5', '#ff4646', 'black']
  const textColor = ['black', 'white', 'white', 'white', 'white']
  const random = Math.floor(Math.random() * backgroundColor.length)
  return (
    <>
      <Header
        color={textColor[random]}
        backgroundColor={backgroundColor[random]}
      />
      <MyInfo />
      <Project
        color={textColor[random]}
        backgroundColor={backgroundColor[random]}
      />
      <Stack />
      <DoIt />
    </>
  )
  // 추가할 만한 것
  // 프로젝트 card 호버시 프로젝트에 사용된 스택, 나의 역할 등 서술 (이미지 위에 반투명하게)
}
