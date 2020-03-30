import React from 'react';
import axios from 'axios';



const AddStudent = (props) => {

    const handleSubmit = (e) => {
            e.preventDefault();
            //we don't need the id anymore since it's created by the database
            const formData = props.formData;
            console.log(formData)
            const url = 'http://localhost:5000/api/v1.0.0/students'
             axios.post(url, formData).then((response) => {
               console.log(response)
               console.log('saved')
             }).catch(error => {
              console.log(error.message);
            })
            //we call the add student method from the app, which has been passed here as props
            //we are pushing directly to the database so we don't need this line of code
            props.addStudent(formData)
            props.history.push('/students');
        }
    
   
    return (

        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
          <h3 className="form-title">Add Student</h3>

          <label>First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First name"
              value={props.formData.firstName}
              onChange={props.handleChange} />
          
            <label>Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last name"
              value={props.formData.lastName}
              onChange={props.handleChange} />
                   
            <br />
            <label>Country</label>
            <input id="country" 
            type="text" 
            name="country" 
            placeholder="Country"
            value={props.formData.country}
              onChange={props.handleChange} />
​            <br />

            <label>Age</label>
            <input type="text" 
            id="age" 
            name="age" 
            placeholder="Age"
            value={props.formData.age}
            onChange={props.handleChange} />
          
​
            <label>Skills</label>
            <textarea 
            type="text" 
            id="skills" 
            name="skills" 
            cols="120" rows="5"
            placeholder="skills"
            value={props.formData.skills}
            onChange={props.handleChange}></textarea>
​            <br />

            <label for="bio">Your bio</label>
            <textarea id="bio" 
            name="bio" cols="120" rows="10" 
            placeholder="Bio"
            value={props.formData.bio}
            onChange={props.handleChange}></textarea>
​            <br />

          <div className="add-student-btn__wrapper">
          <button className="btn" type="submit" id="submit-button">Add</button>
            </div>
        
        </form>
        </div>
    )
}

export default AddStudent