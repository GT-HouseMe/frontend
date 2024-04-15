import React from 'react'

const Internship = ({company, location, startDate, endDate, description}) => {
  return (
    <div>
        <center>
        <h1>{company}</h1>
        <h2>{location}</h2>
        {/* <h3>{startDate}</h3>
        <h3>{endDate}</h3> */}
        <p>{description}</p>
        </center>
    </div>
  )
}

export default Internship