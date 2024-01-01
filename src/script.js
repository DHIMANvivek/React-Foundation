// import {createElement as ce} from  "react";
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/404";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
const Instamart = lazy(() => import("./components/Instamart"));
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Vivek Dhiman",
        age: 20
    });

    // useEffect(() => {
    //     setUser(() => {
    //         return {
    //             name: "Vivek ji",
    //             age: 20
    //         }
    //     })
    // }, []);

    return (
        <Provider store={store}>
            <userContext.Provider value={{
                user: user
            }}>
                <HeaderComponent />

                <Outlet />

                <FooterComponent />
            </userContext.Provider>
        </Provider>
    );
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <BodyComponent user={{
                    name: 'Vivek',
                    age: 20
                }} />
            }
            , {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}>
                    <About />
                </Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "*",
                element: <h1 style={{
                    margin: '0 auto',
                    textAlign: 'center',
                }}>
                    <Error />
                </h1>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: '/instamart',
                element: <Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
]);

// {
//   "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);