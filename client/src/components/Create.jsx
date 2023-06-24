import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Create() {

    const navigate = useNavigate()
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState();
  
    const postData = () => {
        axios.post(`https://6495340bb08e17c91791bb63.mockapi.io/api/v1/crud-app`, {
            name,
            email,
            phone
        })
        navigate("/")
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label> Name</label>
                    <input placeholder='Enter Name' onChange={(e) => setname(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Enter Email' onChange={(e) => setemail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input placeholder='PHONE' onChange={(e) => setphone(e.target.value)}/>
                </Form.Field>
              
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}