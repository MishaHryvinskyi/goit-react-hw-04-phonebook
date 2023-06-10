import PropTypes from "prop-types";
import { List, ListItem, BtnDelite } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDeleteContact = id => {
    onDeleteContact(id);
  };

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <BtnDelite onClick={() => handleDeleteContact(contact.id)}>
          Remove
          </BtnDelite>
        </ListItem>
      ))}
    </List>
  );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

export default ContactList;