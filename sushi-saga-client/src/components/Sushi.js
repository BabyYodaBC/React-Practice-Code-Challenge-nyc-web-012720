import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(event) => {props.eatSushi(event, props.sushi.img_url)}}>
        { 
          props.eaten === true ?
            null
          :
            <img src={ props.sushi.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        { props.sushi.name } - ${ props.sushi.price }
      </h4>
    </div>
  )
}

export default Sushi