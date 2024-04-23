import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { EMenuDestination } from "./types";
import Wrapper from "./components/layout/Wrapper";
import Home from "./pages/Home";

const App: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Wrapper>
                    <Outlet />
                </Wrapper>
            ),
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                ...Object.values(EMenuDestination).map((v) => ({ path: v, element: <Home /> })),
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
