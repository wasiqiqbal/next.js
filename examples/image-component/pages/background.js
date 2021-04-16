import Image from 'next/image'
import ViewSource from '../components/view-source'
import { bgWrap, bgText } from '../styles.module.css'

const Background = () => (
  <div>
    <ViewSource pathname="pages/background.js" />
    <div className={bgWrap}>
      <img
        alt="Mountains"
        src="/mountains.jpg"
        layout="fill"
        objectFit="cover"
        
      />
    </div>
    <p className={bgText}>
      Image Component
      <br />
      as a Background
    </p>
  </div>
)

export default Background
