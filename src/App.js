import './App.css'
import _ from 'lodash'
import React from "react";
import { Header, Table } from 'semantic-ui-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getAllUsers
} from "./usersSlice";


function sortingReducer(state, action){
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}


function App() {
  const dispatch = useDispatch()
  const { entities, loading} = useSelector((state) => state.users)
  const [state, sortingDispatch] = React.useReducer(sortingReducer, {
    column: null,
    data: entities,
    direction: null,
  })
  const { column, data, direction } = state

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  if (loading) return(<p>Loading...</p>)

  return (
    <div>
      <h2>Users</h2>
        <Table sortable celled fixed attached='top' basic verticalAlign='top'>
        <Table.Header>
              <Table.HeaderCell
            sorted={column === 'id' ? direction : null}
            onClick={() => sortingDispatch({ type: 'CHANGE_SORT', column: 'id' })}
            >
              ID</Table.HeaderCell>
              <Table.HeaderCell
            sorted={column === 'firstName' ? direction : null}
            onClick={() => sortingDispatch({ type: 'CHANGE_SORT', column: 'firstName' })}
            >
              First Name</Table.HeaderCell>
              <Table.HeaderCell
            sorted={column === 'lastName' ? direction : null}
            onClick={() => sortingDispatch({ type: 'CHANGE_SORT', column: 'lastName' })}
            >
            Last Name</Table.HeaderCell>
              <Table.HeaderCell
            sorted={column === 'street' ? direction : null}
            onClick={() => sortingDispatch({ type: 'CHANGE_SORT', column: 'street' })}
            >
            Street Address</Table.HeaderCell>
              <Table.HeaderCell
            sorted={column === 'city' ? direction : null}
            onClick={() => sortingDispatch({ type: 'CHANGE_SORT', column: 'city' })}
            >
            City</Table.HeaderCell>
              <Table.HeaderCell
            sorted={column === 'state' ? direction : null}
            onClick={() => sortingDispatch({ type: 'CHANGE_SORT', column: 'state' })}
            >
            State</Table.HeaderCell>
              <Table.HeaderCell
            sorted={column === 'postal' ? direction : null}
            onClick={() => sortingDispatch({ type: 'CHANGE_SORT', column: 'postal' })}
            >
            Postal Code</Table.HeaderCell>
              <Table.HeaderCell
            sorted={column === 'country' ? direction : null}
            onClick={() => sortingDispatch({ type: 'CHANGE_SORT', column: 'country' })}
            >
            Country</Table.HeaderCell>
              <Table.HeaderCell
            sorted={column === 'email' ? direction : null}
            onClick={() => sortingDispatch({ type: 'CHANGE_SORT', column: 'email' })}
            >
            Email</Table.HeaderCell>
              <Table.HeaderCell
            sorted={column === 'phone' ? direction : null}
            onClick={() => sortingDispatch({ type: 'CHANGE_SORT', column: 'phone' })}
            >
            Phone</Table.HeaderCell>
        </Table.Header>
      <Table.Body>
          {entities.map((user) => (
            <Table.Row key={user.id}>
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

}

export default App
