import Link from "next/link"
import Image from "next/image"
import "./footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <Link href="./">
                    <Image src='/logo-footer.svg' alt="logo" width={190} height={190} />
                </Link>

                <div>
                    <p className="title">Lacrei Saúde</p>
                    <a href="https://lacreisaude.com.br/quem-somos/" target="_blank">
                        <p className="footer-link">Quem somos</p>
                    </a>
                    <a href="https://lacreisaude.com.br/quem-somos/#proposito" target="_blank">
                        <p className="footer-link">Nosso Propósito</p>
                    </a>
                    <a href="https://lacreisaude.com.br/quem-somos/#missao-visao-valores" target="_blank">
                        <p className="footer-link">Missão, Visão e Valor</p>
                    </a>
                    <a href="https://lacreisaude.com.br/acessibilidade/" target="_blank">
                        <p className="footer-link">Acessibilidade</p>
                    </a>
                </div>

                <div>
                    <p className="title">Saúde</p>
                    <a href="https://paciente.lacreisaude.com.br/" target="blank">
                        <p className="footer-link">Buscar Atendimento</p>
                    </a>
                    <a href="https://profissional.lacreisaude.com.br/">
                        <p className="footer-link">Oferecer Atendimento</p>
                    </a>
                </div>

                <div>
                    <p className="title">Segurança e Privacidade</p>
                    <a href="https://lacreisaude.com.br/politica-de-privacidade/" target="blank">
                        <p className="footer-link">Política de Privacidade</p>
                    </a>
                    <a href="https://lacreisaude.com.br/termos-de-uso/">
                        <p className="footer-link">Termos de Uso</p>
                    </a>
                    <a href="https://lacreisaude.com.br/direitos-de-titular/">
                        <p className="footer-link">Direitos de Titular</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}