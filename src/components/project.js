import { Card } from './card'

export const Project = ({ color, backgroundColor }) => {
  let cnt = 1
  return (
    <div className='project'>
      <h1>1. 프로젝트</h1>
      <div>
        <div className='flex'>
          <Card
            imgSource='chatbot'
            name='GBSW 입학도우미 챗봇'
            desc='경북소프트웨어고등학교에 진학을 원하는 학생들에게 학교 입학부터 학교생활까지의 전반적인 궁금증을 풀어주는 챗봇이다.'
            num={cnt++}
            color={color}
            backgroundColor={backgroundColor}
          />
          <Card
            imgSource='ymanager'
            name='영매니저'
            desc='매일 아침할일이 많은 학생들을 위하여 등록해놓은 할 일들을 까먹지 않게 알려주고 학교의 공지사항을 알려주는 프로그램이다.'
            num={cnt++}
            color={color}
            backgroundColor={backgroundColor}
          />
        </div>
        <div className='flex'>
          <Card
            imgSource='장애인도서관'
            name='전국 장애인 도서관 찾기 시스템'
            desc='일반적인 도서관을 사용하기 힘들어하는 몇몇 장애인들을 위한 장애인도서관 검색 및 그에 대한 정보를 제공하기 위하여 제작한 웹 사이트이다.'
            num={cnt++}
            color={color}
            backgroundColor={backgroundColor}
          />
          <Card
            imgSource='we25'
            name='WE25'
            desc='React를 공부하면서 평소 만들고싶었던 간단하게 사용할 수 있는 커뮤니티 웹 사이트를 제작하였다.'
            num={cnt++}
            color={color}
            backgroundColor={backgroundColor}
          />
        </div>
        <div className='flex'>
          <Card
            imgSource='nyancat'
            name='NYAN? CAT!'
            desc='프린세스메이커처럼 유저의 행동에 따라 분기점이 생겨 엔딩이 달라지는 시뮬레이션 게임을 제작해보고 싶어서 평소 좋아하던 밈(MEME)인 냥캣을 소재로 제작해본 2D 시뮬레이션 게임이다.'
            num={cnt++}
            color={color}
            backgroundColor={backgroundColor}
          />
          <Card
            imgSource='거기누구업소'
            name='거기누구업소'
            desc='코로나가 심해졌을 때 사람들이 외출을 잘 하지 않게되어 음식점을 운영하는 소상공인분들이 피해를 입게되어 이를 도와주기 위해 내 주변지역의 음식점들을 추천해주는 플랫폼이다.'
            num={cnt++}
            color={color}
            backgroundColor={backgroundColor}
          />
        </div>
      </div>
    </div>
  )
}
