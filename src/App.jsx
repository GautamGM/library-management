import { Box,Typography } from "@mui/material"
import { fetchbooks } from "./slices/bookSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Routes,Route } from "react-router-dom"
import BookLayout from "./layouts/layout"
function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchbooks())
  },[dispatch])
  return (
    <>
    <Routes>
      <Route path="/" element={<BookLayout/>}>

      </Route>
    </Routes>
    </>
  )
}

export default App
