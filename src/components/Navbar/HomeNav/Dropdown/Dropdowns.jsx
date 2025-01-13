import { NavLink } from "react-router-dom";

function HtmlDropdown() {
    return (
        <nav className="absolute z-10 top-[2rem] bg-white">
            <ul>
                <li className="text-black">
                    <NavLink>Home</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>Markdown</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>Jade</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>Convert to HTML</NavLink>
                </li>
            </ul>
        </nav>
    )
}

function CssDropdown() {
    return (
        <nav className="absolute z-10 top-[2rem] bg-white">
            <ul>
                <li className="text-black">
                    <NavLink>CSS</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>Less</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>Myth</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>Sass with Compass</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>SCss with Compass</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>Stylus</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>Convert to CSS</NavLink>
                </li>
            </ul>
        </nav>

    )
}

function JsDropdown() {
    return (
        <nav className="absolute z-10 top-[2rem] bg-white">
            <ul>
                <li className="text-black">
                    <NavLink>JavaScript</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>ES6 / Babel</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>JSX(React)</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>CoffeeScript</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>Traceur</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>TypeScript</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>Processing</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>LiveScript</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>ClosureScript</NavLink>
                </li>
                <li className="text-black">
                    <NavLink>
                        Convert to JavaScript
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export {HtmlDropdown, CssDropdown, JsDropdown};