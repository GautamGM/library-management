import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletebooks, fetchbooks } from "../../slices/bookSlice";
import FormAddBook from "../../components/forms/addBookForm";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ManageBooks = () => {
  const { bookData: data, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const naviagte=useNavigate()
  const [toggle, setToggle] = useState(true);
  const [updateValue,setUpdateValue]=useState(null)
  // handel edit book
  const handleEdit = (row) => {
    console.log("Edit book:", row);
    setUpdateValue(row)
    setToggle(false)
  };
 
  // delete book
  const handleDelete = (id) => {
    dispatch(deletebooks(id))
      .unwrap()
      .then((data) => {
        if (data) toast.success("Book deleted successfully.");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Title", headerName: "Title", width: 130 },
    { field: "Author", headerName: "Author", width: 130 },
    {
      field: "Publication_Year",
      headerName: "Publication Year",
      type: "number",
      width: 160,
    },
    {
      field: "Genre",
      headerName: "Genre",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            sx={{ color: "blue" }}
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box className="outer-div-for-form">
      {toggle ? (
        <Button
          sx={{
            width: "150px",
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "black",
            borderRadius: "0px",
            color: "white",
            textTransform: "none",
          }}
          onClick={() => setToggle(false)}
        >
          Add Book +
        </Button>
      ) : null}
      <Box
        className="border"
        sx={{
          padding: "15px",
          marginBottom: "15px",
          display: toggle ? "none" : "block",
        }}
      >
        <FormAddBook setToggle={setToggle} update={updateValue} setUpdateValue={setUpdateValue}/>
      </Box>
      <Box
        className={`border ${
          toggle ? "block" : "hidden"
        } p-2 w-[90%] mx-auto overflow-auto`}
      >
        <Typography>Books List</Typography>
        <Paper sx={{ overflow: "auto", width: "80%", margin: "20px auto " }}>
          <DataGrid
            rows={data ? data.filter((row) => row != null) : []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default ManageBooks;
