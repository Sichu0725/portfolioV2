import img1 from '../assets/myImg.jpg'
export const MyInfo = () => {
  return (
    <div className='myInfo'>
      <img src={img1} alt='myImg' />
      <div>
        <h1>0. 자기소개</h1>
        <p>
          이름 : 최홍찬 <br />
          성격 : 잔잔함
          <br />
          주개발분야 : ML
          <br />
          관심분야 : 웹/앱, Machine learning, Security
          <br /> 좋아하는 것 : 집, 개, 고양이, 웹 해킹, 웹 &앱 개발, POP, 독서,
          수면, 게임( chess, lol, etc ) <br />
          싫어하는 것 : 격렬한 운동, 일 떠넘기기, 소리 큰 것, 개념 없는 사람
          <br />
          메일 : choihc8511@gmail.com <br />
          github : [{' '}
          <a href='https://github.com/Sichu0725'>
            https://github.com/Sichu0725
          </a>{' '}
          ]
        </p>
      </div>
    </div>
  )
}
