import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./Contexts/CitiesContext";
import { AuthProvider } from "./Contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
import { Suspense, lazy } from "react";

// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

// step 1 :lazy help us to reduce bundle size by calling the page when they are needed
// step 2 : wrap the routes with suspense, it will show the spinner while thw page load
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          {/*  step 2 : wrap the routes with suspense, it will show the spinner while thw page load */}
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              {/* index is default route */}
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              {/* Nested Routes */}
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    {" "}
                    {/* its a page to protect app from unauthorize access, it check weather the user login or not */}
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  // Navigate is by default react-router element
                  element={<Navigate replace to="cities" />} // this will by default move us to cities page (see URL) when we enter appLayout pageand replace is used for the working of the moving back fuctionality
                  // element={<CityList cities={cities} isLoading={isLoading} />}
                />
                <Route path="cities" element={<CityList />} />
                {/* here id after colon is user defined name */}
                {/* we will pass the id in URL andd then later we will use it */}
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />

                <Route path="form" element={<Form />} />
              </Route>
              {/* It will show when one of upper pages are not selected  */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
