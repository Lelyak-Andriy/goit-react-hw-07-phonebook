import { useDeleteContactsMutation } from '../../redux/contacts/contacts-reducer';
import { IoTrashBinOutline } from 'react-icons/io5';
import { BallTriangle } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

export default function ContactsListItem({ id, name, phoneNumber }) {
  const [deleteContact, { isLoading }] = useDeleteContactsMutation();

  return (
    <>
      <li className={styles.item}>
        <span className={styles.info}>
          {name}: {phoneNumber}
        </span>
        {isLoading ? (
          <button
            className={styles.button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            <BallTriangle height="20" width="40" color="beige" />
          </button>
        ) : (
          <button
            className={styles.button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            <IoTrashBinOutline />
          </button>
        )}
      </li>
    </>
  );
}

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};
