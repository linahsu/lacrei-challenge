import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-black">
            <Link href="./">
                <Image src='/logo.svg' alt="logo" width={190} height={190} />
            </Link>
        </header>
    )
}