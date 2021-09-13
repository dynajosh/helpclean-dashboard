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
import { DataGrid, useGridControlState } from '@material-ui/data-grid';
import "./Artisans.css";

const Artisans = () => {
  const [artisans, setArtisans] = useState([])
  const [pageNumber, setPageNumber] = useState([])
  const [loading, setLoading] = useState(true)
  const [loaderVisibiltiy, setLoaderVisibilty] = useState('flex')
  const dataSize = 5


  useEffect(() => {
    console.log("Hiii")
    axios.get('https://helpclean-artisan-jgn56hmtbq-uc.a.run.app/v1/helpclean_artisan_api/get_all_artisan/1/20')
    .then(res => {
      console.log(res.data.artisans)
      setArtisans(res.data.artisan)
      console.log("artisans = ", artisans)
      setLoading(false)
      setLoaderVisibilty('none')
      console.log(loading)
      {
        !loading && (
          console.log("artisansList =")
        ) 
      }
      // console.log("artisansList =", artisansList)
      // console.log(artisans)
    },)
    .catch(error => {
      console.log(console.error)
    })
  }, [])


  var artisansList = Object.keys(artisans).map(
    function(key){
      return artisans[key]
    }
  )

  const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
      field: 'first_name',
      headerName: 'First Name',
      width: '200',
      editable: false
    },
    {
      field: 'email',
      headerName: 'User Email',
      width: '300',
      editable: false
    },
    {
      field: 'phone_number',
      headerName: 'Phone Number',
      width: '200',
      editable: false
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: '2000',
      editable: false
    },
    {
      field: 'viewArtisan',
      headerName: "Actions",
      renderCell: (cellValues) => {
        return(
          <button
          variant ="contained"
          color="primary"
          onClick={
            (e)=>{
              console.log(e, cellValues)
            }
          }>View Artisan</button>
        )
      }
    }
    
  ]
  

  // const rows = artisans.map(user => ({
  //   id : 1,
  //   firstName: user.first_name,
  //   email: user.email,
  //   phone: user.phonec
  // }) )

  const rows = artisansList;

  return (
    <div>

      <div className="profile-wrapper">
        <div style={{ height: 400, width: '100%' }}>
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
        <h1 className="form-heading">View and Manage Artisans</h1>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
          {!loading && (
            <div>
            {/* {artisansList.map((user) => {
              <h1>Che{user.dob}</h1>
            })} */}
            <h1>cHee</h1>
            <button onClick={() =>
              console.log(artisans, "Chee", artisansList)
            }>Chee</button>
            {artisansList.map((artisan)=>{
              return(
                <h1>{artisan.first_name}</h1>
              )
            })}
            </div>
           )} 
          
          
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="profile-wrapper">
  //     <h1 className="form-heading">View and Manage artisans</h1>
  //   </div>
  // );
};

export default Artisans;