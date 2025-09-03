import React from 'react'
import { PanelLeftClose, PanelRightClose, Bell } from 'lucide-react'

import './Sidebar.css'

// interface SidebarProps {}

export const Sidebar: React.FC = () => {
	const [collapsed, setCollapsed] = React.useState(false)

	return (
		<div className={`sidebar-container ${collapsed ? 'collapsed' : ''}`}>
			<div className="sidebar">
				<header className="sidebar-header">
					<div className={`sidebar-header-logo-container ${collapsed ? 'opacity' : ''}`}>
						<h3 className="sidebar-header-logo">Nest</h3>
					</div>
					<div className="sidebar-header--buttons">
						<button className="icon-button" onClick={() => setCollapsed(!collapsed)}>
							<Bell color="#656966" size={22} />
						</button>
						<button className="icon-button" onClick={() => setCollapsed(!collapsed)}>
							{collapsed ? (
								<PanelRightClose color="#656966" size={22} />
							) : (
								<PanelLeftClose color="#656966" size={22} />
							)}
						</button>
					</div>
				</header>
			</div>
		</div>
	)
}
