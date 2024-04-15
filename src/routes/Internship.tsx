import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Internship = ({company, location, startDate, endDate, description, _id, showEdit}) => {
  const navigate = useNavigate();
  return (
    <div style={{
      borderLeft: "3px solid black",
      paddingLeft: "1em",
      paddingTop: 0,
      marginBottom: "2em",
      paddingBottom: 0
    }}>
        <h2>{company}</h2>
        <h3>{location}</h3>
        <p>{startDate.split('T')[0]} to {endDate.split('T')[0]}</p>
        <p>{description}</p>
        {showEdit && <Button onClick = {() => navigate(`/internshipEdit/${_id}`)} variant="outline" style={{marginLeft: 0, marginBottom: 0}}>Edit</Button>}
    </div>
  )
}

export default Internship