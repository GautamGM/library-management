import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
const BookCard = ({ data }) => {
  const naviagte=useNavigate()
  // function for get detail of paticular book 
  const handelDetail=(id)=>{
    naviagte(`detail/${id}`)
  }


  return (
    <Card
      sx={{
        maxWidth: 345,
        width: "100%", // Responsive width
        margin: "auto",
        borderRadius:"0px" // Center the card
      }}
    >
      <CardActionArea>
        {/* Consistent height for images */}
        <CardMedia
          component="img"
          image={data.image}
          alt={data.Title}
          sx={{
            height: 200, // Fixed height for images
            objectFit: "contain", // Crop image to fit the box
          }}
        />
        <CardContent>
          {/* Consistent height for titles */}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
            //   display: "-webkit-box", // Use a multi-line ellipsis
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Limit to 2 lines
              overflow: "hidden", // Hide overflow
              textOverflow: "ellipsis",
              height: "2rem", // Set fixed height
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
          >
            {data.Title} <div className="text-[12px] text-[grey]">Year:{data.Publication_Year}</div>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Author:{data.Author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex",justifyContent:"end"}}>
        <Button
          size="small"
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: "11px",
            borderRadius: "0px",
          }}
          onClick={(()=>handelDetail(data.id))}
        >
          More detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
