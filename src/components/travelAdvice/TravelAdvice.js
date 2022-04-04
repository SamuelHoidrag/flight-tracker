import React from 'react'
//images
import Hotel1 from '../../images/hotel1.jpg'
import Hotel2 from '../../images/hotel2.jpg'
import Hotel3 from '../../images/hotel3.jpg'
import Hotel4 from '../../images/hotel4.jpg'

const TravelAdvice = () => {
  return (
    <div className="travelAdviceContainer">
      <div className="adviceTitles">
        <div>
          <h2 className="adviceTitle">Inspirație pentru călătorii</h2>
          <p className="adviceParagraphTitle">
            Ultimele sfaturi de călătorie, trucuri de la experți și informații
            utile care te vor ajuta să ai o vacanță de neuitat.
          </p>
        </div>
        <div>
          <button>Mai multă inspirație</button>
        </div>
      </div>
      <div className="adviceBox">
        <div>
          <img alt="hotels" src={Hotel1} />
          <p>Topul țărilor de unde să lucrezi în funcție de fusul orar</p>
          <p className="dataAdvice">ian. 19, 2022 - 1 min</p>
        </div>
        <div>
          <img alt="hotels" src={Hotel2} />
          <p>Topul țărilor în care să călătorești și să lucrezi</p>
          <p className="dataAdvice">ian. 19, 2022 - 1 min</p>
        </div>
        <div>
          <img alt="hotels" src={Hotel3} />
          <p>
            momondo dezvăluie care sunt cele mai bune țări din Europa pentru o
            călătorie cu mașina
          </p>
          <p className="dataAdvice">mai 28, 2021 - 5 min</p>
        </div>
        <div>
          <img alt="hotels" src={Hotel4} />
          <p>Top 7 destinații pentru vacanța de Paște 2019</p>
          <p className="dataAdvice"> dec. 10, 2021 - 13 min</p>
        </div>
      </div>
    </div>
  )
}

export default TravelAdvice
