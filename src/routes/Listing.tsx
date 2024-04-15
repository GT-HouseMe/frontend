import React from 'react'

const Listing = ({name, location, rent, startDate, endDate, description}) => {
  return (
    <div>
        <center>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{rent}/month</h3>
        {/* <h3>{startDate}</h3>
        <h3>{endDate}</h3> */}
        <p>{description}</p>
        </center>
    </div>
  )
}

export default Listing