import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'

class App extends Component {
  state = {
    form: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {
      console.log(resp.data)
      this.setState({
        form: resp.data
      })
    })
  }
  
  render() {
    let fieldResult = []
    this.state.form.forEach(field => {
      if (field.type === "text") {
        fieldResult.push(
        <div key = {field.id}>
          <i className = {"fa " + field.icon}/> <input type = {field.type} placeholder={field.label}/>
        </div>
        )
        
  
      } else if (field.type === "email") {
        fieldResult.push(
          <div key = {field.id}>
          <i className = {"fa " + field.icon} /><input type = {field.type} placeholder={field.label}/>
        </div>)


      } else if (field.type === "select"){
        fieldResult.push(
            <select key={field.id}>
              <option value= "lang">Select Language</option>
              {field.options.map((opt, i) => {
                return <option key={'opt' + i} value={opt.value}>{opt.label}</option>
              })}
            </select>
          

      )} else if (field.type === "textarea") {
        fieldResult.push( 
        <div key = {field.id}>
          <i className = {"fa " + field.icon} /><input type = {field.type} placeholder={field.label}/>
        </div>)

      } else if (field.type === "tel") {
        fieldResult.push(
        <div key = {field.id}>
          <i className = {"fa " + field.icon} /><input type = {field.type} placeholder={field.label}/>
        </div>
        )
      }
    })

    return (
      <div>
        <h1>Sign Up or Sign</h1>
        {fieldResult}
        <button>Submit</button>
      </div>
      
    )
    
  }
}

export default App;