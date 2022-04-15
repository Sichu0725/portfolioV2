import React, { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  let cnt = 0
  const api_key = 'RGAPI-8fbddc7b-b2b4-49db-9232-224de0e99be1' //lol api key
  const [name, setName] = useState("")
  const [userInfo, setUserInfo] = useState({
    name : "",
    puuid : ""
  })
  let tmp = {}

  const notify = () => {
    toast('Loading...', {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  //name input값 핸들링
  const chageName = (e) => {
    setName(e.target.value)
  }

  //페이지 로딩 되면 UserInfo null
  useEffect(() => {
    setUserInfo(tmp)
  }, [])
  
  //쿠키에 등록된 사용자 uuid 서치
  const getSummonerInfo =  async () => {
    await fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${api_key}`)
    .then(notify())
    .then(data =>data.json())
    .then(data => setUserInfo({
      name : data.name,
      puuid : data.puuid
    }))
    .catch(error => console.log(error, 2))
  }

  //우리 게이들 게임 하고 있나?
  if (userInfo.name) {
    setInterval( async() => {
      console.log(cnt++)
      await fetch(`https://kr.api/riotgames.com/lol/match/v5/matches/by-puuid/${userInfo.puuid}/ids`)
      .then(data => data.json())
      .then(data => console.log(data))
    }, 5000);
  }

  //우리 게이들 게임 잘 하고 있네?
  const  bbPlayGame = () => {
    console.log(`${name}이 게임하고 있누 ㄹㅇㅋㅋ`)
    toast.info(`${userInfo.name}이 새끼 게임하고 있네`, {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  //setInterval(watchYou, 5000)

  return (
    <div>
      <h2>'{userInfo.name}' 감시 중</h2>
      <h2>{name === "" ? "Input 비어있음" : name}</h2>
      <input type="text" onChange={chageName} placeholder="감시하고 싶은 친구의 닉네임을 입력해주세요" />
      <button type="button" onClick={() => {
        getSummonerInfo();
      }}> 감시를 시작한다ㅏㅏ<FaSearch/></button>
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
  
}

export default App;
