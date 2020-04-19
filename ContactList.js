import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            search: '',
            contacts: props.contacts
        };
    }
    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }
    addContact(event) {
        event.preventDefault();
        console.log(this.refs.name.value);
        let name = this.refs.name.value;
        let number = this.refs.number.value;
        let id = Math.floor(Math.random() * 100) + 1;
        this.setState({
            contacts: this.state.contacts.concat({id, name, number})
        });
        this.refs.name.value = '';
        this.refs.number.value = '';
    }
    render () {
        let filteredContacts = this.state.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    placeholder="Search..."
                />
                <form onSubmit={this.addContact.bind(this)}>
                    <input placeholder="Name" type="text" ref="name"/>
                    <input placeholder="Phone Number" type="text" ref="number"/>
                    <button type="submit">Add new contact</button>
                </form>
                <ul>
                    {
                        filteredContacts.map((contact)=>{
                            return <Contact contact={contact} key={contact.id}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ContactList;