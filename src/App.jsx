import { fetchbooks } from "./slices/bookSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BookLayout from "./layouts/layout";
import HomePage from "./pages/home/homePages";
import AllBooksList from "./pages/allBooks/allBooks";
import AboutPage from "./pages/about/about";
import ManageBooks from "./pages/manageBooks/manageBooks";
import DetailOfBooks from "./components/deatilPage/detailPageofBook.jsx";
import NotFoundPage from "./pages/notfound/notFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchbooks());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<BookLayout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<AllBooksList />}>
            {/* Nested routes under /books */}
            <Route index element={<AllBooksList />} />
            <Route path="detail/:id" element={<DetailOfBooks />} />
          </Route>
          <Route path="/managebook" element={<ManageBooks />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
