import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';
import ContactList from './ContactList';

let contacts = [{
  id: 1,
  name: 'Jane',
  number: '909 900 0000'
}, {
  id: 2,
  name: 'Sara',
  number: '090 889 7654'
}, {
  id: 3,
  name: 'Jack',
  number: '678 543 8976'
}, {
  id: 4,
  name: 'Androw',
  number: '091 654 8768'
}]

class App extends React.Component {
    render () {
      return (
        <div className="content">
          <h1>List of contacts</h1>
          <ContactList contacts={this.props.contacts}/>
        </div>
      )
    }
}
ReactDOM.render(
  <App contacts={contacts} />, 
  document.getElementById('app')
);