import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "./components/layout/Wrapper";
import Home from "./pages/Home";
import { useAppState } from "./state/app";

const App: React.FC = () => {
    const appConfig = useAppState((state) => state.appConfig);
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
                ...appConfig.headerMenus.map((v) => ({ path: v.to, element: <Home /> })),
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
