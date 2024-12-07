import { useForm, Controller, set } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { bookSchema } from "../../schema/schema";
import { addbook } from "../../slices/bookSlice.jsx";
const FormAddBook = ({ setToggle }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookSchema),
    mode: "onChange",
    defaultValues: {
      Title: "",
      Author: "",
      Publication_Year: "",
      image: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handel register function

  const handelRegister = (data) => {
    dispatch(addbook(data))
      .unwrap()
      .then((data) => console.log(data, "-->addbook"))
      .catch((error) => {
        console.log(error, "error in add book");
      });
  };

  console.log(errors);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          p: "40px 0",
          height: 580,
          width: "90%",
          backdropFilter: "blur(4px) saturate(200%)",
          WebkitBackdropFilter: "blur(4px) saturate(200%)", // Safari compatibility
          backgroundColor: "rgba(255, 255, 255, 0.24)",
          padding: "5px",
        }}
      >
        {/* ------------------------------ */}
        {/* registerration form */}
        <Box
          className=" h-[470px] "
          sx={{
            width: "100%",
            backdropFilter: "blur(25px) saturate(200%)",
            WebkitBackdropFilter: "blur(25px) saturate(200%)", // Safari compatibility
            backgroundColor: "rgba(255, 255, 255, 0.83)",
            borderRadius: "5px",
            border: "1px solid rgba(209, 213, 219, 0.3)",
            padding: "5px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "30px",
              textAlign: "start",
              marginBottom: "20px",
            }}
          >
            Add book
          </Typography>
          <Box className="p- w-[100%] ">
            <form
              className="flex flex-col h-[350px] justify-between  "
              onSubmit={handleSubmit(handelRegister)}
            >
              {/* name */}
              <Box>
                <Controller
                  name="Title"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      error={!!errors.Title} // Show error if field has an error
                      helperText={errors.Title ? errors.Title.message : ""}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}

              {/* email input */}
              <Box>
                <Controller
                  name="Author"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Author"
                      variant="outlined"
                      error={!!errors.Author}
                      helperText={errors.Author?.message}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}

              {/* password */}
              <Box>
                <Controller
                  name="Publication_Year"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Publication_Year"
                      variant="outlined"
                      error={!!errors.Publication_Year}
                      helperText={errors.Publication_Year?.message}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}

              {/* confirm password */}
              <Box>
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="image url"
                      variant="outlined"
                      error={!!errors.image}
                      helperText={errors.image?.message}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}
              <Button
                type="submit"
                variant={"contained"}
                // disabled={isLoading}
                sx={{
                  textTransform: "none",
                  height: "50px",
                  // backgroundColor: isLoading ? "white" : "#FF4F5A",
                  backgroundColor: "blue",
                  fontSize: "22px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default FormAddBook;
