import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import ComingSoon from "./pages/ComingSoon";
import { useState } from "react";

function App() {
  const [films, setFilms] = useState([
    {
      id: 1,
      name: "Black Mirror",
      bgImage: "./src/images/bm.jpg",
      height: "200px",
      border: "1px solid",
    },
    {
      id: 2,
      name: "What is a woman?",
      bgImage: "./src/images/whatwoman.jpg",
      height: "200px",
      border: "1px solid",
    },
    {
      id: 3,
      name: "Succession",
      bgImage: "./src/images/logan.jpg",
      height: "200px",
      border: "1px solid",
    },
    {
      id: 4,
      name: "Cleopatra",
      bgImage: "./src/images/cleo.jpg",
      height: "200px",
      border: "1px solid",
    },
    {
      id: 5,
      name: "Peter Pan",
      bgImage: "./src/images/peterwendy.png",
      height: "200px",
      border: "1px solid",
    },
    {
      id: 6,
      name: "Beef",
      bgImage: "./src/images/beef.jpg",
      height: "200px",
      border: "1px solid",
    },
    {
      id: 7,
      name: "The Watcher",
      bgImage: "./src/images/watcher.jpg",
      height: "200px",
      border: "1px solid",
    },
    {
      id: 8,
      name: "Happy Valley",
      bgImage: "./src/images/hp.jpg",
      height: "200px",
      border: "1px solid",
    },
  ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path='Reviews'
          element={
            <Reviews
              films={films}
              onReview={(id) =>
                setFilms(films.filter((film) => id === film.id))
              }
            />
          }
        />
        <Route path='ComingSoon' element={<ComingSoon />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
