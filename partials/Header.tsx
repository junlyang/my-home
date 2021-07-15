export default function Header() {
    return (
        <header>
        <nav>
            <a href="/"><h1>냠냠이</h1></a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/add">Add</a>
                </li>
                <li><a>settings</a>
                    <ul>
                        <li>
                            <a href="/color">color</a>
                        </li>
                        <li>
                            <a href="/home">info</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        </header>
    )
}