import React from 'react'





const QuakesList = (props) => {
  // console.log(QuakesList, "this is QuakesList======")
  const quakesList = props.quakes.map((quake, i) =>{
    return (
      <li key={i}>{quake.properties.title} </li>
    );
  })



  return (
    <div>
    <h4>Quakes:</h4>
    <ul>
    {quakesList}
    </ul>
    </div>
  )

};



export default QuakesList;