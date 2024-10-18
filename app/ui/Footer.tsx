"use client";
import Link from "next/link";
import Image from "next/image";
import * as S from "./styles";

export default function Footer() {
    return (
        <footer>
            <S.FooterContent>
                <Link href="./">
                    <Image src='/logo-footer.svg' alt="logo" width={190} height={190} />
                </Link>

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
                    <a href="https://lacreisaude.com.br/acessibilidade/" target="_blank">
                        <S.FooterLink>Acessibilidade</S.FooterLink>
                    </a>
                </div>

                <div>
                    <S.FooterTitle>Saúde</S.FooterTitle>
                    <a href="https://paciente.lacreisaude.com.br/" target="blank">
                        <S.FooterLink>Buscar Atendimento</S.FooterLink>
                    </a>
                    <a href="https://profissional.lacreisaude.com.br/">
                        <S.FooterLink>Oferecer Atendimento</S.FooterLink>
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
            </S.FooterContent>
        </footer>
    )
}