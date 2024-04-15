import React from 'react'

const Internship = ({company, location, startDate, endDate, description}) => {
  return (
    <div>
        <center>
        <h1>{company}</h1>
        <h2>{location}</h2>
        <h3>{startDate.split('T')[0]} to {endDate.split('T')[0]}</h3>
        <p>{description}</p>
        </center>
    </div>
  )
}

export default Internship