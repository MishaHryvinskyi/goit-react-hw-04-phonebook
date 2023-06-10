import { nanoid } from "nanoid";
import { useState } from "react";
import PropTypes from "prop-types";
import { PhoneForm, PhoneLabel, Input, Btn } from './ContactForm.styled';


const ContactForm =({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if(name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const isDuplicateName = contacts.some(contact => contact.name === name);
  
    if (isDuplicateName) {
        alert(`${name} is already in contacts.`);
      return;
    }
  
    const id = nanoid();
    const newContact = { id, name, number };
  
    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <PhoneForm onSubmit={handleSubmit}>
      <PhoneLabel>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </PhoneLabel>
      <PhoneLabel>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleChange}
        />
      </PhoneLabel>
      <Btn type="submit">Add contact</Btn>
    </PhoneForm>
  );
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