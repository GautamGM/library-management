/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";

const BookCard = ({ data }) => {
  const naviagte = useNavigate();
  // function for get detail of paticular book
  const handelDetail = (id) => {
    naviagte(`detail/${id}`);
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <Card
      sx={{
        maxWidth: { sm: 300 },
        height: { sm: 370, xl: 380 },
        width: "100%",
        margin: "auto",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <CardMedia
        component="img"
        image={data.image}
        alt={data.Title}
        sx={{
          height: 200,
          objectFit: "contain",
          borderRadius: "10px",
        }}
        draggable={false}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          sx={{
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: { sm: "16px" },
            fontWeight: "600",
          }}
        >
          {data.Title}{" "}
          <div className="text-[12px] text-[grey]">
            Year:{data.Publication_Year}
          </div>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Author:{data.Author}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          size="small"
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: "11px",
            borderRadius: "5px",
          }}
          onClick={() => handelDetail(data.id)}
        >
          More detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
