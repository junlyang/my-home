
import getConfig from 'next/config'
import ActiveLink from './ActiveLink'
export default function Header() {
    
    return (
        <header>
        <nav>
            <a href="/"><h1>냠냠이</h1></a>
            <ul>
                <li>
                    <ActiveLink href={`${process.env.BASE_URL}/`}>메인1</ActiveLink>
                </li>
                <li>
                    <ActiveLink href={`${process.env.BASE_URL}/images`} >ImageScroll</ActiveLink>
                </li>
                <li>
                    <a href={`${process.env.BASE_URL}/board`} >게시판</a>
                </li>
                <li><a>설정₩</a>
                    <ul>
                        <li>
                            <a href={`${process.env.BASE_URL}/color`}>color</a>
                        </li>
                        <li>
                            <a href={`${process.env.BASE_URL}/home`}>info</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        </header>
    )
}