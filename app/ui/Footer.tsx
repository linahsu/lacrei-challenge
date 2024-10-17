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
                        <p>Quem somos</p>
                    </a>
                    <a href="https://lacreisaude.com.br/quem-somos/#proposito" target="_blank">
                        <p>Nosso Propósito</p>
                    </a>
                    <a href="https://lacreisaude.com.br/quem-somos/#missao-visao-valores" target="_blank">
                        <p>Missão, Visão e Valor</p>
                    </a>
                </div>

                <div>
                    <p className="title">Saúde</p>
                    <a href="https://paciente.lacreisaude.com.br/" target="blank">
                        <p>Buscar Atendimento</p>
                    </a>
                    <a href="https://profissional.lacreisaude.com.br/">
                        <p>Oferecer Atendimento</p>
                    </a>
                    <a href="https://lacreisaude.com.br/ajuda/" target="_blank">
                        <p>Dúvidas frequentes</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}