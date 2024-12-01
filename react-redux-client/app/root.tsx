import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    Link
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import Cars from "./routes/cars";
import CarsStatistics from "./routes/stats";



export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>

            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

export default function App() {
    return <div>
        <div style={{ background: "red" }} >
            <Link to={"/home"}> Home </Link>
            <Link to={"/cars"}> Cars </Link>
            <Link to={"/stats"}> Stats </Link>
        </div>
        <Cars />
        <CarsStatistics />
    </div>
}

// export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
//     let message = "Oops!";
//     let details = "An unexpected error occurred.";
//     let stack: string | undefined;

//     if (isRouteErrorResponse(error)) {
//         message = error.status === 404 ? "404" : "Error";
//         details =
//             error.status === 404
//                 ? "The requested page could not be found."
//                 : error.statusText || details;
//     } else if (import.meta.env.DEV && error && error instanceof Error) {
//         details = error.message;
//         stack = error.stack;
//     }

//     return (
//         <main className="pt-16 p-4 container mx-auto">
//             <h1>{message}</h1>
//             <p>{details}</p>
//             {stack && (
//                 <pre className="w-full p-4 overflow-x-auto">
//                     <code>{stack}</code>
//                 </pre>
//             )}
//         </main>
//     );
// }
