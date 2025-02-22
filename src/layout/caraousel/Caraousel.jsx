import testimonyData from "./data/testmionyData"

import "./caraousel.scss"
import { useState } from "react"
function Caraousel() {

  const [index, setIndex] = useState(1)

  const style = {
    transform: `translateX(${(index * -100) + 50}%)`
  }

  const handlePrev = () => {
    if (index != 0) {
      setIndex(prev => prev -= 1)
    }
  }

  const handleNext = () => {
    if (index < testimonyData.length - 1) {
      setIndex(prev => prev += 1)
    }
  }

  return (
    <div className="caraousel">
      <div className="caraousel-mover">
        {testimonyData.map((e, index) => {
          return (
            <div
              style={style}
              key={index}
              className="testimony">
              <div className="content">
                <p>{index + 1}</p>
                <h2>{e.name}</h2>
                <h4>{e.comment}</h4>
              </div>
            </div>
          )
        })}
      </div>
      <div className="button-wrapper">
        <button onClick={handlePrev} className="prev">prev</button>
        <button onClick={handleNext} className="next">next</button>
      </div>
    </div>
  )
}

export default Caraousel