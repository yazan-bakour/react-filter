import React from 'react';

class Contact extends React.Component {
    _handleDelete(id){
        this.props.handleDelete(id);
    }
    render () {
        return (
            <ul>
                <li key={this.props.contact.id}>
                    {this.props.contact.name} {this.props.contact.number}
                    <button onClick={() => this.props.onDelete(this.props.contact.id)}>X</button>
                </li> 
            </ul>
        )
    }
}
export default Contact;