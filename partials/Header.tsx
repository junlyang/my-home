
import getConfig from 'next/config'

export default function Header() {
    
    return (
        <header>
        <nav>
            <a href="/"><h1>냠냠이</h1></a>
            <ul>
                <li>
                    <a href={`${process.env.BASE_URL}/`}>메인</a>
                </li>
                <li>
                    <a href={`${process.env.BASE_URL}/images`} >ImageScroll</a>
                </li>
                <li>
                    <a href={`${process.env.BASE_URL}/board`} >게시판</a>
                </li>
                <li><a>설정</a>
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