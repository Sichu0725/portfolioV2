export const Card = ({
  imgSource,
  name,
  desc,
  num,
  color,
  backgroundColor,
}) => {
  return (
    <div className='card'>
      <img src={`./assets/${imgSource}.png`} alt='name' className='cardThumb' />
      <div className='cardBody'>
        <p
          style={{ color: `${color}`, backgroundColor: `${backgroundColor}` }}
          className='num'
        >
          {num}
        </p>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
