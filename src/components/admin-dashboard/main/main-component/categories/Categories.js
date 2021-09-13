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
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [pageNumber, setPageNumber] = useState([])
  const [loading, setLoading] = useState(true)
  const [loaderVisibiltiy, setLoaderVisibilty] = useState('flex')
  const dataSize = 5


  useEffect(() => {
    console.log("Hiii")
    axios.get('https://helpclean-artisan-jgn56hmtbq-uc.a.run.app/v1/helpclean_artisan_api/get_work_category')
    .then(res => {
      console.log(res.data.work_category)
      setCategories(res.data.work_category)
      console.log("categories = ", categories)
      setLoading(false)
      setLoaderVisibilty('none')
      console.log(loading)
      {
        !loading && (
          console.log("categoriesList =")
        ) 
      }
      // console.log("categoriesList =", categoriesList)
      // console.log(categories)
    },)
    .catch(error => {
      console.log(console.error)
    })
  }, [])


  var categoriesList = Object.keys(categories).map(
    function(key){
      return categories[key]
    }
  )

  // const categoriesList = [
   
  //   {
  //     "id" : 1,
  //     "name": "HSHS",
  //     "ene": "jddid"
  //   }
  // ]

  const columns = [
    {field: 'category_id', headerName: 'ID', width: 90},
    {
      field: 'category_name',
      headerName: 'Category Name',
      width: '200',
      editable: false
    },
    // {
    //   field: 'email',
    //   headerName: 'User Email',
    //   width: '300',
    //   editable: false
    // },
    // {
    //   field: 'phone_number',
    //   headerName: 'Phone Number',
    //   width: '200',
    //   editable: false
    // },
    // {
    //   field: 'gender',
    //   headerName: 'Gender',
    //   width: '2000',
    //   editable: false
    // },
    
  ]
  

  // const rows = categories.map(user => ({
  //   id : 1,
  //   firstName: user.first_name,
  //   email: user.email,
  //   phone: user.phonec
  // }) )

  const rows = categoriesList;

  return (
    <div>

      <div className="profile-wrapper">
        <div style={{ height: 400, width: '100%' }}>
        <div className="page-overlay" 
        style={{
          display: loaderVisibiltiy
          }}>
        <div className="modal-wrapper" >
          <div className="loader-container" >
            <div className="loader">
              {/* <Loader
                  type="Oval"
                  color="#E4F33C"
                  height={70}
                  width={70}
              /> */}
            </div>
          </div>
          </div>
        </div>
        <h1 className="form-heading">View and Manage Categories</h1>
          <DataGrid
            rows={rows}
            getRowId={(row) => row.category_id}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
          {!loading && (
            <div>
            {/* {categoriesList.map((user) => {
              <h1>Che{user.dob}</h1>
            })} */}
            <h1>cHee</h1>
            <button onClick={() =>
              console.log(categories)
            }>Chee</button>
            {categoriesList.map((category)=>{
              return(
                <h1>{category.first_name}</h1>
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
  //     <h1 className="form-heading">View and Manage categories</h1>
  //   </div>
  // );
};

export default Categories;