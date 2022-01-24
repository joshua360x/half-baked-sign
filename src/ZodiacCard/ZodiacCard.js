import { zodiac } from '../data'
import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {

  {/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */}
  return (

    <div>

      <p>
        {name}
        {console.log('🚀 ~ file: ZodiacCard.js ~ line 13 ~ ZodiacCard ~ name', name)}
        {dates}
        <img src={`/images/${name}.png`} alt="" />
      </p>
      {/* <img src={require(`${zodiac.name}.png`)} alt="" /> */}
      {/* <img src={require(`${zodiac.image}`)} alt="" /> */}
      {/* <img src={require(`../../public/images/${props.zodiac.name}.png`)} alt="" /> */}
    </div>
  )
}
