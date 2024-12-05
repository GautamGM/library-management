import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const DetailOfBooks = () => {
  const prams=useParams()
  const { bookData: data } = useSelector((state) => state.books);
  const oneImage = data.filter((data) => data.id == prams.id);
  console.log(oneImage, "oneimage");
  return (
    <Box>
      {oneImage.map((book, index) => {
        return (
          <Box key={index} sx={{ padding: "15px", height: "600px", overflow: "auto" }}>
            <div className="image">
              <img src={book.image} alt="" />
            </div>
            <Box>
              <Typography
                sx={{ display: "flex", alignItems: "center", fontSize: "24px" }}
                variant="h4"
              >
                Title:
                <p className="text-[18px] border h-[20px] ml-2">{book.Title}</p>
              </Typography>
              {book.Publication_Year}
              <p>About:{book.About_Book}</p>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default DetailOfBooks;
