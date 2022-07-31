import React from 'react'
import Slider from 'react-slick'
import '../style/slick.css'
import '../style/slick-theme.css'
export default function Slide() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  }
  return (
    <>
      <div style={{ minHeight: '330px' }} />
      <Slider {...settings}>
        <div>
          <h2>
            합리적이고 정확한 개발자가 되고싶은 <strong>최홍찬</strong>입니다.
          </h2>
        </div>
        <div>
          <h2>
            믿고 맡길 수 있는 개발자가 되고싶은 <strong>최홍찬</strong>입니다.
          </h2>
        </div>
        <div>
          <h2>
            웹 해킹을 좋아하는 개발자 <strong>최홍찬</strong>입니다.
          </h2>
        </div>
        <div>
          <h2>
            강아지를 좋아하는 개발자 <strong>최홍찬</strong>입니다.
          </h2>
        </div>
      </Slider>
    </>
  )
}
