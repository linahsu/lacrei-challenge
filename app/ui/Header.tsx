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
                <S.HeaderLink href="/">Quem Somos</S.HeaderLink>
                <S.HeaderLink href="/security">Segurança e Privacidade</S.HeaderLink>
            </S.HeaderNav>
        </S.HeaderContainer>
    )
}