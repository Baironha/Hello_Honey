import React from 'react'
import AdminsHome from '../components/SidebarAdmin'
import { Outlet } from 'react-router-dom'

function Admin_page() {
    return (
        <div>
            <AdminsHome/>
        </div>
    )
}

export default Admin_page