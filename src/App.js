import React, { Component } from 'react';
import Note from './Components/Note' 
import './App.css';

class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      noteText : '',
      notes: [],

    }
  }

  updateEnteredText(noteText){
    this.setState({ noteText : noteText.target.value})
  }

  HandleKeyPress = (event) => {
    if(event.key === 'Enter'){
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({noteText:''});
    } 
  }

  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({notes: notesArr})
  }

  addNote(){
    if(this.state.noteText ===''){
      return
    }
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText:''});
    this.textInput.focus();
  }


  render(){

    let notes =  this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
        deleteMethod={()=>this.deleteNote(key)} />
    })

    return(
      <div className="Container">

        <div className="header">TO-DO APP</div>

        {notes}

        <div className="btn" onClick={this.addNote.bind(this)}>+</div>

        <input type="text"
          ref={((input) => {this.textInput = input})}

          className="textInput"

          value={this.state.noteText}

          onChange={noteText => this.updateEnteredText(noteText)}

          onKeyPress={this.HandleKeyPress.bind(this)}
        />

      </div>
    );
  }
}

export default App;
