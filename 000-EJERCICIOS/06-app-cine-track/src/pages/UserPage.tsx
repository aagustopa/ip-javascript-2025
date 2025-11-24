import { Outlet } from "react-router";

export default function UserPage() {
    return (
        <>
            <h1>User Page</h1>
            <p>user page with top movies</p>
            <Outlet />
        </>
    );
}