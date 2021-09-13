import React, { useEffect, useImperativeHandle, useState } from "react";
import "../../../../auth/AuthPage.css";
import {
  InputContainer,
  Input,
  Button,
  TextArea,
} from "../../../../styled-components/Inputs";
import * as Yup from "yup";
import axios from "axios";
import { Toast } from "../../../../styled-components/Toast";
import { useFormik } from "formik";
import  Loader from  "react-loader-spinner"

// Importing Material UI components
import { DataGrid } from '@material-ui/data-grid';
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([])
  const [pageNumber, setPageNumber] = useState([])
  const [loading, setLoading] = useState(true)
  const [loaderVisibiltiy, setLoaderVisibilty] = useState('flex')
  const dataSize = 5


  useEffect(() => {
    axios.get('https://helpclean-artisan-jgn56hmtbq-uc.a.run.app/v1/helpclean_artisan_api/get_all_artisan/1/5')
    .then(res => {
      setUsers(res.data.artisan.artisan)
      setLoading(false)
      setLoaderVisibilty('none')
      console.log(res.data.artisan)
      // console.log(users)
    },)
    .catch(error => {
      console.log(console.error)
    })
  }, [])




  const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
      field: 'firstName',
      headerName: 'First Name',
      width: '150',
      editable: false
    },
    {
      field: 'email',
      headerName: 'User Email',
      width: '150',
      editable: false
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      width: '300',
      editable: false
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      width: '300',
      editable: false
    },
    
  ]
  

  // const rows = users.map(user => ({
  //   id : 1,
  //   firstName: user.first_name,
  //   email: user.email,
  //   phone: user.phonec
  // }) )

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div>
        {/* <div className="page-overlay" 
        style={{
          display: loaderVisibiltiy
          }}>
        <div className="modal-wrapper" >
          <div className="loader-container" >
            <div className="loader">
              <Loader
                  type="Oval"
                  color="#E4F33C"
                  height={70}
                  width={70}
              />
            </div>
          </div>
          </div>
        </div> */}
      <div className="profile-wrapper">
        <div style={{ height: 400, width: '100%' }}>
        <h1 className="form-heading">View and Manage Users</h1>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
          {/* {!loading && (
            <div>
            {users.map((user) => {
              <h1>{user.first_name}</h1>
            })}
            </div>
          )} */}
          {/* {users.map((user) => {
              <h1>{user.first_name}</h1>
            })} */}
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="profile-wrapper">
  //     <h1 className="form-heading">View and Manage Users</h1>
  //   </div>
  // );
};

export default Users;
