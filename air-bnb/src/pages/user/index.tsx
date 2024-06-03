import React from 'react'
import { Outlet } from "react-router-dom";

export default function IndexHome() {
    return (
        <div>
            <Outlet />
        </div>
    )
}
