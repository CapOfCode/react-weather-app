import React from 'react'

function Weather (props)  {
  return (
    <div>
      <div className="lineone">
                <div className="templete">
                  <h3>{props.dataname}</h3>
                  <h3>
                    <span className="clone">: </span>
                  </h3>
                </div>
                <div className="data">
                  <h3>
                    {props.weatherdt}
                  </h3>
                </div>
              </div>
    </div>
  )
}

export default Weather
