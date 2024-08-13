import { useSelector } from 'react-redux'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {

    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.list}>
            {filteredContacts.map((contact) => (
                <li className={css.listItem} key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    )
}