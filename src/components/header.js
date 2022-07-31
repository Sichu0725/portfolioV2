import Slide from './slide'

export const Header = ({ color, backgroundColor }) => {
  return (
    <div
      className='header'
      style={{
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,
        textAlign: 'right',
      }}
    >
      <Slide />
    </div>
  )
}
