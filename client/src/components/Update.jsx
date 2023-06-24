import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState();

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setname(localStorage.getItem('Name'));
        setemail(localStorage.getItem('Email'));
        setphone(localStorage.getItem('Phone'));
    }, []);


    const updateAPIData = () => {
        axios.put(`https://6495340bb08e17c91791bb63.mockapi.io/api/v1/crud-app/${id}`, {
            name,
            email,
            phone
        }).then(() => {
            history('/')
        })
    }
    return (
        <div>
            <Form className="create-form">
            <Form.Field>
                    <label> Name</label>
                    <input value={name} placeholder='Enter Name' onChange={(e) => setname(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input value={email} placeholder='Enter Email' onChange={(e) => setemail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input value={phone} placeholder='PHONE' onChange={(e) => setphone(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}