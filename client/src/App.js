import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import Contact from './components/Contact';
import StudentDetails from './components/StudentDetails';
import EditStudent from './components/EditStudent';
import Navbar from './components/Navbar';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      formData: {
        skills: [],
        firstName: '',
        lastName: '',
        age: '',
        country: '',
        bio: ''
      },
      isEditing: false
     
    }
  }

  //to fetch the data from the MONGODB database with axios
  componentDidMount() {
    this.fetchData();
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    //we set the state to the initial value of form data plus the mutated data
    const formData = {...this.state.formData, [name] : value}
    this.setState({formData})
   
  }

  fetchData = () => {
    const url = 'http://localhost:5000/api/v1.0.0/students'
    axios.get(url)
    .then(response => this.setState({students: response.data}))
    
    
  }

  addStudent = (student) => {
    this.fetchData()
    // const newStudents = [...this.state.students, student]
    // this.setState({students: newStudents})
    const formData = {
      firstName: '',
      lastName: '',
      age: '',
      country: '',
      skills: [],
      bio: ''
    }
    this.setState({formData})

  }

  editStudent = student => {
    this.setState({isEditing: true})

  }

  deleteStudent = () => {
    // let undeletedStudents = this.state.students.filter((student) => student._id !== id);
    // this.setState({students: undeletedStudents});
    // history.push('/students');
    this.fetchData()
  }

  updateStudent = (formData, id) => {
    console.log(formData, id)
    const updatedStudents = this.state.students.map(student => {
      return student._id === id ? formData : student
     })
     console.log(updatedStudents)
    this.setState({ students: updatedStudents, isEditing: false })
    this.fetchData()

    
  }

  

  render() {
    console.log(this.state.students)

    const { students, formData} = this.state
    return (
            <BrowserRouter>
            <div className="App">

            <Navbar />

            <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* we send the data as props */}

            <Route path="/students/add" 
            render={(props)=><AddStudent 
            {...props} 
            formData={formData}
            handleChange={this.handleChange} 
            addStudent={this.addStudent}
            />} />

           
          <Route exact path="/students/edit/:id" 
            render={(props)=><EditStudent 
            {...props}
            students={students}
            formData={formData}
            id={props.match.params.id}
            handleChange={this.handleChange}
            updateStudent={this.updateStudent}/>} />

            <Route path="/students/:id" component={props => ( 
            <StudentDetails 
            {...props} 
            students={students}
            id={props.match.params.id}
            deleteStudent={this.deleteStudent}/>)} />

            <Route path="/students" 
            component={()=> <Students 
            students={students} />} />

            <Route path="/" component={Home} />
            </Switch>
              
            </div>

            </BrowserRouter>
        
    );
  }
  }
 

export default App;
