import { Link } from "react-router"
import { Outlet } from "react-router"

import "./nav.scss"
function Nav() {
    return (
        <>
            <div className="top">
                <nav>
                    <ul>
                        <li>
                            <Link to="/details">Details</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Nav