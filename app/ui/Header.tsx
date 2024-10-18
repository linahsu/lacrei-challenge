import Image from 'next/image';
import Link from 'next/link';
import './header.css';

export default function Header() {
    return (
        <header className='header-container'>
            <Link href="./">
                <Image src='/logo.svg' alt="logo" width={190} height={190} />
            </Link>
            <nav className='header-nav'>
                <Link href="/">Quem Somos</Link>
                <Link href="/security">Segurança e Privacidade</Link>
            </nav>
        </header>
    )
}