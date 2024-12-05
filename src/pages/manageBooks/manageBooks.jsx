import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletebooks } from '../../slices/bookSlice';
import { useDispatch } from 'react-redux';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Title', headerName: 'Title', width: 130 },
  { field: 'Author', headerName: 'Author', width: 130 },
  {
    field: 'Publication_Year',
    headerName: 'Publication Year',
    type: 'number',
    width: 90,
  },
  {
    field: 'Genre',
    headerName: 'Genre',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'image',
    headerName: 'Image',
    type: 'number',
    width: 300,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    sortable: false,
    renderCell: (params) => {
      const dispatch=useDispatch()
      const handleEdit = () => {
        // Handle the Edit action here
        console.log('Edit book:', params.row);
      };
      
      const handleDelete = () => {
        // Handle the Delete action here
        const id=Number(params.row.id)

        dispatch(deletebooks(id)).unwrap()
        .then((data)=>{
          console.log(data,"data whenit delete")
        })
        .catch((error)=>{
          console.log(error,"error when we delete")
        })
      };

      return (
        <>
          <IconButton  sx={{color:"blue"}} onClick={handleEdit}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </>
      );
    },
  },
];

const ManageBooks = () => {
  const data = useSelector((state) => state.books.bookData);

  return (
    <Box className="border p-2 w-[100%] flex justify-center overflow-auto ">
      <Paper sx={{ height:450,width:"90%", overflow:"auto"  }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize:5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        sx={{ border: 0, textAlign: 'center',backgroundColor:"white" }}
      />
    </Paper>
    </Box>
  );
};

export default ManageBooks;
