import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class EditStudent extends Component {
    componentDidMount() {
      let {students, formData, id} = this.props;
      console.log(this.props)
      console.log(students)
      console.log(formData)      
      let filteredStudent = students.find((student) => student._id === id);
        this.setState({formData: filteredStudent})
        console.log(formData)

    }
    handleSubmit = e => {
      e.preventDefault()
      const id = this.props.match.params.id
       
      const formData = this.props.formData
      
      const url = `http://localhost:5000/api/v1.0.0/students/${id}/edit`
             axios.put(url, formData).then((response) => {
               console.log(response)
               console.log('edited')
             }).catch(error => {
              console.log(error.message);
            })
      this.props.updateStudent(formData, id)
      this.props.history.push('/students')
    }


        render() {
          console.log(this.props.formData)

            return (

                <div className="form-container">
                    <form className="form" onSubmit={this.handleSubmit}>
                  <h3 className="form-title">Edit Student</h3>
        
                  <label>First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={this.props.formData.firstName}
                      onChange={this.props.handleChange} />
                  
                    <label>Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={this.props.formData.lastName}
                      onChange={this.props.handleChange} />
                           
                    <br />
                    <label>Country</label>
                    <input id="country" 
                    type="text" 
                    name="country" 
                    placeholder="Country"
                    value={this.props.formData.country}
                    onChange={this.props.handleChange} />
        ​            <br />
        
                    <label>Age</label>
                    <input type="text" 
                    id="age" 
                    name="age" 
                    placeholder="Age"
                    value={this.props.formData.age}
                    onChange={this.props.handleChange} />
                  
        ​
                    <label>Skills</label>
                    <textarea 
                    type="text" 
                    id="skills" 
                    name="skills" 
                    cols="120" rows="5"
                    placeholder="skills"
                    value={this.props.formData.skills}
                    onChange={this.props.handleChange}></textarea>
        ​            <br />
        
                    <label for="bio">Your bio</label>
                    <textarea id="bio" 
                    name="bio" cols="120" rows="10" 
                    placeholder="Bio"
                    value={this.props.formData.bio}
                    onChange={this.props.handleChange}></textarea>
        ​            <br />
        
                  <div className="add-student-btn__wrapper">
                  <button className="btn" type="submit" id="submit-button">Update</button>
                  <NavLink to="/students/">
                    <button className="btn" type="submit" id="submit-button">Cancel</button>
                </NavLink>
                    </div>
                
                </form>
                </div>
            )
        }
        }
        
    
   
   
export default EditStudent
   

     