import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Profile from "./pages/Profile";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='create' element={<Create />} />
      <Route path='profile' element={<Profile />} />
    </Route>,
  ),
);

import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import HeroImage from "./components/HeroImage";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Grid
        templateAreas={`"nav nav"
                  "hero hero"
                  "content content"
                  "footer footer"`}>
        <GridItem pl='2' bg='orange.300' area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem pl='2' area={"hero"}>
          <HeroImage />
        </GridItem>
        <GridItem pl='2' bg='gold' area={"content"}>
          content
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={"footer"}>
          footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
