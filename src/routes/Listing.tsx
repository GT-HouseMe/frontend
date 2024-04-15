import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Listing = ({name, location, rent, startDate, endDate, description, _id, showEdit}) => {
  const navigate = useNavigate();
  return (
    <div style={{
      borderLeft: "3px solid black",
      paddingLeft: "1em",
      paddingTop: 0,
      marginBottom: "2em",
      paddingBottom: 0
    }}>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <p>{rent}/month</p>
        <h3>{startDate.split('T')[0]} to {endDate.split('T')[0]}</h3>
        <p>{description}</p>
        {showEdit && <Button onClick = {() => navigate(`/listingEdit/${_id}`)} variant="outline" style={{marginLeft: 0, marginBottom: 0}}>Edit</Button>}
    </div>
  )
}

export default Listing