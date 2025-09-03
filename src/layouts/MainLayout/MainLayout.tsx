import React from 'react'

import './MainLayout.css'
import { Sidebar } from '../Sidebar/SideBar'

interface MainLayoutProps {
	children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="main-layout">
			<Sidebar />
			<main className="content">{children}</main>
		</div>
	)
}
