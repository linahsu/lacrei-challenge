"use client";
import Link from "next/link";
import Image from "next/image";
import * as S from "./styles";

export default function Footer() {
    return (
        <footer>
            <S.FooterContent>
                <Link href="./">
                    <S.FooterImage>
                        <Image src='/logo-footer.svg' alt="logo" width={190} height={190} />
                    </S.FooterImage>
                </Link>

                <S.FooterLinkContainer>
                    <div>
                        <S.FooterTitle>Lacrei Saúde</S.FooterTitle>
                        <a href="https://lacreisaude.com.br/quem-somos/" target="_blank">
                            <S.FooterLink>Quem somos</S.FooterLink>
                        </a>
                        <a href="https://lacreisaude.com.br/quem-somos/#proposito" target="_blank">
                            <S.FooterLink>Nosso Propósito</S.FooterLink>
                        </a>
                        <a href="https://lacreisaude.com.br/quem-somos/#missao-visao-valores" target="_blank">
                            <S.FooterLink>Missão, Visão e Valor</S.FooterLink>
                        </a>
                    </div>

                    <div>
                        <S.FooterTitle>Segurança e Privacidade</S.FooterTitle>
                        <a href="https://lacreisaude.com.br/politica-de-privacidade/" target="blank">
                            <S.FooterLink>Política de Privacidade</S.FooterLink>
                        </a>
                        <a href="https://lacreisaude.com.br/termos-de-uso/">
                            <S.FooterLink>Termos de Uso</S.FooterLink>
                        </a>
                        <a href="https://lacreisaude.com.br/direitos-de-titular/">
                            <S.FooterLink>Direitos de Titular</S.FooterLink>
                        </a>
                    </div>
                </S.FooterLinkContainer>
            </S.FooterContent>
        </footer>
    )
}