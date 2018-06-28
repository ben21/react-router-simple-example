import React from 'react';

import { observer } from 'mobx-react';
import store from './store';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

let student1 = {
  id: 'student1',
  name: 'Ben'
}
let student2 = {
  id: 'student2',
  name: 'Nikki'
}
let course1 = {
  id: 'course1',
  name: 'Math 101'
}

store.addStudent(student1)
store.addStudent(student2)
store.addCourse(course1)
store.enrollStudent(course1.id, student1.id)

const StudentsList = observer(() => 
      <div>
          <h2>{course1.name}</h2>
          <ul>
              {store.enrolledStudents(course1.id).map(
                  n => <li key={n.id}>{n.name}</li>
              )}
          </ul>
          <button
              onClick={() => store.enrollStudent(course1.id, student2.id)}
          >Enroll Student 2</button>
      </div>
  )





const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            <li><Link to="/">Enrollment</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>

          </ul>
         </nav>

           <Route exact path="/" component={StudentsList}/>
           <Route path="/category" component={Category}/>
           <Route path="/products" component={Products}/>

      </div>
      </Router>
    )
  }
}

export default App;
