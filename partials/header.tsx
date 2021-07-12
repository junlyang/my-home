import Image from 'next/image';
import profilePic from '../public/images/logo.svg'

export default function Header () {
    return (
        <div className="header__top">
            <div className="header__logo">
                <a className="site-logo" href="index.html">
                    <Image src={profilePic} alt="Homepage" />
                </a>
            </div>
        </div> 
    )
}