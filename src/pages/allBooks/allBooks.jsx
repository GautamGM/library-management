import { useSelector } from "react-redux"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import BookCard from "../../components/BooksCard/BooksCard";
import { Box } from "@mui/material";
import { Drawer, DrawerHeader } from "../../layouts/layout";
import DetailOfBooks from "../../components/deatilPage/detailPageofBook";
import { Route, useParams } from "react-router-dom";
const AllBooksList=()=>{
    const params = useParams();
    const {bookData,isLoading}=useSelector((state)=>state.books)
    console.log(bookData,"nooooo")
    return(
       <div className="flex justify-center mt-5">
         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4  " >
            {bookData.map((book)=>{
                return(
                    <Box sx={{margin:"5px"}}>
                      <BookCard data={book}/>
                    </Box>
                )
            })}
        </div>
        <Box >
        <DetailOfBooks data={bookData}/>
        </Box>
       </div>
    )
}
export default AllBooksList