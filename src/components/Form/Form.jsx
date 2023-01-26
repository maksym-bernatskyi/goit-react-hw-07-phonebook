import { useState } from 'react';
import { useGetContactsQuery, useCreateContactMutation } from 'components/Redux/contactsApi';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Input from 'components/Input';
import { FormContainer, ButtonSubmit } from "./Form.styled";
import { TailSpin } from 'react-loader-spinner';

const Form = () => {
    const [createContact, { isLoading }] = useCreateContactMutation();
    const { data: contacts } = useGetContactsQuery();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const reset = () => {
        setName("");
        setNumber("");
    };

    const handleSubmit = (event) => {
        if (number.length > 13) {
        return alert('Please enter correct phone number!');
    }

        const checkName = contacts.find((element) => element.name === name);
        checkName === undefined ? createContact({ name, number }) : alert(`${name} is already in contacts!`);
        event.preventDefault();
        reset();
    };

    const handleInputChange = (event) => {
        setName(event.currentTarget.value);
    };

        return (
            <FormContainer onSubmit={handleSubmit}>
                <Input 
                    onChange={handleInputChange} 
                    title="Name" 
                    type="text" 
                    name="name" 
                    value={name} 
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    placeholder="Please enter the name"
                    />
                <PhoneInput 
                    defaultCountry="UA"
                    onChange={(number) => {setNumber(number)}}
                    region="Europe"
                    title="Number"
                    type="tel"
                    name="number"
                    value={number}
                    placeholder="Please enter phone number"
                    autoComplete="off"
                    international
                    className="inputPhone"
                    maxLength="16"
                    />
                <ButtonSubmit disabled={isLoading} onSubmit={handleSubmit}>
                    {isLoading && <TailSpin color="#ffffff" width="16" height="16" />}
                    Add contact
                </ButtonSubmit>
            </FormContainer>
        );
    };

export default Form;