import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SenderMessage from "../conponemts/ui/Sender/SenderMessage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[{
            path: "/:id",
            element: <SenderMessage></SenderMessage>
        }]

    }
])