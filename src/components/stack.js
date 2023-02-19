import htmlCssJs from '../assets/html,css,js.png'
import java from '../assets/java.png'
import node from '../assets/node.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import figma from '../assets/figma.png'
export const Stack = () => {
  return (
    <div className='stack'>
      <h1>2. 개발 스택</h1>
      <div>
        <figure>
          <img src={htmlCssJs} alt='html,css,js' />
          <figcaption>1. HTML, CSS, Javascript</figcaption>
        </figure>
        <figure>
          <img src={java} alt='JAVA' />
          <figcaption>2. JAVA</figcaption>
        </figure>
        <figure>
          <img src={react} alt='React' />
          <figcaption>3. React & React Native</figcaption>
        </figure>
        <figure>
          <img src={python} alt='python' />
          <figcaption>4. Python, PyTorch, YOLO</figcaption>
        </figure>
        <figure>
          <img src={node} alt='node.js' />
          <figcaption>5. node.js</figcaption>
        </figure>
        <figure>
          <img src={figma} alt='figma' />
          <figcaption>5. Figma</figcaption>
        </figure>
      </div>
    </div>
  )
}
