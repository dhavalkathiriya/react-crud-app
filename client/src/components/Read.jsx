import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6495340bb08e17c91791bb63.mockapi.io/api/v1/crud-app`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const getdata =()=>{
    axios.get(`https://6495340bb08e17c91791bb63.mockapi.io/api/v1/crud-app`)
      .then((response) => {
        setAPIData(response.data);
      });
    }

  const onDelete = (id) => {
    axios.delete(`https://6495340bb08e17c91791bb63.mockapi.io/api/v1/crud-app/${id}`)
    .then(() =>getdata())
  }
  

  const setData = (user) => {
    let { id, name, email, phone } = user;
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
  };
  console.log();

  return (
    <div>
      <Link
        style={{ background: "#ffff", color: "#000", padding: "5px 20px" }}
        to="/create"
      >
        Add
      </Link>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((user) => (
            <Table.Row>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Link to="/update">
                <Table.Cell>
                  <Button onClick={() => setData(user)}>Update</Button>
                </Table.Cell>
              </Link>
              <Table.Cell>
                <Button onClick={() => onDelete(user.id)}>Delete</Button>
              </Table.Cell>
              {setData(user)}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
