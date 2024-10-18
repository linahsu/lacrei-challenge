'use client';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';

export default function Header() {
    return (
        <S.HeaderContainer>
            <Link href="./">
                <Image src='/logo.svg' alt="logo" width={190} height={190} />
            </Link>
            <S.HeaderNav>
                <Link href="/">Quem Somos</Link>
                <Link href="/security">Segurança e Privacidade</Link>
            </S.HeaderNav>
        </S.HeaderContainer>
    )
}