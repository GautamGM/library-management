import { Box,Typography } from "@mui/material"
import { fetchbooks } from "./slices/bookSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchbooks())
  },[dispatch])
  return (
    <>
    <Box sx={{fontSize:"40px"}} m={3} >hello</Box>
    </>
  )
}

export default App
