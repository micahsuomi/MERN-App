import React from 'react';
import Student from './Student';
import {NavLink} from 'react-router-dom';

const Students = (props) => {
    const studentsList = props.students.map((student, i) => (
        <NavLink to = {`/students/${student._id}`} className="link-student">
        <Student key={student._id} student={student}/>
        </NavLink>
    ))
    return (
        <div>
            <h1>This is the Students Page</h1>
            {studentsList}
        </div>
    )
}

export default Students;