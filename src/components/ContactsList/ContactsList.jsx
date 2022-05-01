import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contacts/contacts-reducer';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import ContactsListItem from './ContactsListItem';
import styles from './ContactsList.module.css';

export default function ContactList() {
  const filter = useSelector(getFilter);
  const { data, error } = useFetchContactsQuery();

  const getFilteredContacts = contacts =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );

  const filteredContacts = data ? getFilteredContacts(data) : [];

  return (
    <>
      {error || (filteredContacts && filteredContacts.length === 0) ? (
        <div className={styles.warning}>You have no contacts!</div>
      ) : (
        <ul className={styles.list}>
          {data &&
            filteredContacts.map(({ id, name, phone }) => (
              <ContactsListItem
                key={id}
                id={id}
                name={name}
                phoneNumber={phone}
              />
            ))}
        </ul>
      )}
    </>
  );
}
