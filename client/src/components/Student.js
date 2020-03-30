import React from 'react'

const Student = (props) => {
    let {firstName, lastName, age, country, skills, bio} = props.student
    return (
        <div className="student-container">
            <h1>Name: {firstName} {lastName}</h1>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <p>Skills: {skills}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}

export default Student;
