import './App.css'
import React from "react";
import { Container, Divider, Grid, Header, Menu, Message, Segment, Table } from 'semantic-ui-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getAllUsers
} from "./usersSlice";

function App() {

  const dispatch = useDispatch()
  const { entities, loading } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  if (loading) return(<p>Loading...</p>)

  return (
    <div>
      <h2>Users</h2>
        <Table attached='top' basic verticalAlign='top'>
        <Table.Header>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Street Address</Table.HeaderCell>
              <Table.HeaderCell>City</Table.HeaderCell>
              <Table.HeaderCell>State</Table.HeaderCell>
              <Table.HeaderCell>Postal Code</Table.HeaderCell>
              <Table.HeaderCell>Country</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
        </Table.Header>
      <Table.Body>
          {entities.map((user) => (
            <Table.Row>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.firstName}</Table.Cell>
                <Table.Cell>{user.lastName}</Table.Cell>
                <Table.Cell>{user.street}</Table.Cell> 
                <Table.Cell>{user.city}</Table.Cell> 
                <Table.Cell>{user.state}</Table.Cell> 
                <Table.Cell>{user.postal}</Table.Cell> 
                <Table.Cell>{user.country}</Table.Cell> 
                <Table.Cell>{user.email}</Table.Cell> 
                <Table.Cell>{user.phone}</Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
      </Table>
    </div>
  )

  // return (
  //   <Grid>
  //     <Grid.Column>
  //     </Grid.Column>
  //   </Grid>
  // )
}

export default App
