import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const StudentDetails = (props) => {
    const deleteStudent = () => {
        const id = props.match.params.id;
        const url = `http://localhost:5000/api/v1.0.0/students/${id}/delete`;
        console.log(id)
        axios.delete(url).then(response => {
            console.log(response)
            console.log('deleted')
        }) 
        props.history.push('/students');
        props.deleteStudent();
    }
    if(props.students) {
        const student = props.students.find(st => st._id === props.match.params.id)
        return (
            <div className="student-container">
                <h1>Single Student</h1>
                <h2>{student.firstName} {student.lastName}</h2>
                <h3>{student.age}</h3>
                <h3>{student.country}</h3> 
                <h3>{student.skills.join(', ')}</h3> 
                <h3>{student.bio}</h3> 
                <div className="edit-delete-container"> 
                <NavLink to={`/students/edit/${student._id}`} className="edit-delete">Edit</NavLink>
                <NavLink to='/students' className="edit-delete" onClick={deleteStudent}>Delete</NavLink>
                </div>
    
            </div>
        )
    } else {
        return(
            <h1>No data</h1>
        )
    }
    
}

export default StudentDetails;
