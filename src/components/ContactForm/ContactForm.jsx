import { nanoid } from "nanoid";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { PhoneForm, PhoneLabel, Input, Btn } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const isDuplicateName = this.props.contacts.some(
      contact => contact.name === name
    );
  
    if (isDuplicateName) {
        alert(`${name} is already in contacts.`);
      return;
    }
  
    const id = nanoid();
    const newContact = { id, name, number };
  
    this.props.onSubmit(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <PhoneForm onSubmit={this.handleSubmit}>
        <PhoneLabel>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
        </PhoneLabel>

        <PhoneLabel>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.handleChange}
          />
        </PhoneLabel>

        <Btn type="submit">Add contact</Btn>
      </PhoneForm>
    );
  }
}

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

export default ContactForm;