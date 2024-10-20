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
                <Link href="/" passHref>
                    <S.HeaderLink>Lacrei Saúde</S.HeaderLink>
                </Link>
                <Link href="/security" passHref>
                    <S.HeaderLink>Segurança e Privacidade</S.HeaderLink>
                </Link>
            </S.HeaderNav>
        </S.HeaderContainer>
    )
}