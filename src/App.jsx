import { Box,Typography } from "@mui/material"
import { fetchbooks } from "./slices/bookSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Routes,Route } from "react-router-dom"
import BookLayout from "./layouts/layout"
import HomePage from "./pages/home/homePages"
import AllBooks from "./pages/allBooks/allBooks"
import { ManageAccounts } from "@mui/icons-material"
import AboutPage from "./pages/about/about"
import ManageBooks from "./pages/manageBooks/manageBooks"
function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchbooks())
  },[dispatch])
  return (
    <>
    <Routes>
      <Route path="/" element={<BookLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path="/books" element={<AllBooks/>}/>
      <Route path="/managebook" element={<ManageBooks/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
