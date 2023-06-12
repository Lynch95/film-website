import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import ComingSoon from "./pages/ComingSoon";
import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./components/ColorModeSwitch";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='Reviews' element={<Reviews />} />
      <Route path='ComingSoon' element={<ComingSoon />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
