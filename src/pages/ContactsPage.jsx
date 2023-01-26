import Container from "components/Container";
import Form from "components/Form";
import { ContactList } from "components/ContactList/ContactList";
import Filter from "components/Filter";
import styled from "styled-components";
import { Title } from "components/ContactList/ContactList.styled";

export const ContactsPage = () => (
    <Container>
        <Title>Phonebook</Title>
        <Form />
        <Filter />
        <ContactList />
    </Container>
);

const Title = styled.h1`
    font-size: 16px;
`;