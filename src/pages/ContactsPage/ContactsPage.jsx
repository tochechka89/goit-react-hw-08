import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactsPage() {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <PageTitle>PhoneBook</PageTitle>
            <ContactForm />
            <div>{isLoading && 'Please wait a minute...'}</div>
            <SearchBox />
            <ContactList />
        </div>
    )
}