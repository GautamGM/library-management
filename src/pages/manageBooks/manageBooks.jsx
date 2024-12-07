import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletebooks } from "../../slices/bookSlice";
import FormAddBook from "../../components/forms/addBookForm";
import { useState } from "react";

const ManageBooks = () => {
  const data = useSelector((state) => state.books.bookData);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);

  const handleEdit = (row) => {
    console.log("Edit book:", row);
  };

  const handleDelete = (id) => {
    dispatch(deletebooks(id))
      .unwrap()
      .then((data) => {
        console.log(data, "data when it deletes");
      })
      .catch((error) => {
        console.log(error, "error when we delete");
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
      width: 90,
    },
    {
      field: "Genre",
      headerName: "Genre",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "image",
      headerName: "Image",
      type: "number",
      width: 150,
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
        <FormAddBook setToggle={setToggle} />
      </Box>
      <Box className="border p-2 w-[100%] flex justify-center overflow-auto ">
        <Paper sx={{ height: 450, width: "90%", overflow: "auto" }}>
          <DataGrid
            rows={data ? data.filter((row) => row != null) : []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            sx={{ border: 0, textAlign: "center", backgroundColor: "white" }}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default ManageBooks;
