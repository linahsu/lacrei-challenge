"use client";
import * as S from './ui/styles';

export default function Home() {
  const handleAboutButtonClick: () => void = () => {
    window.open('https://lacreisaude.com.br/quem-somos/', 'blank');
  }

  const handlePurposeButtonClick: () => void = () => {
    window.open('https://lacreisaude.com.br/quem-somos/#proposito', 'blank');
  }

  const handleMissionButtonClick: () => void = () => {
    window.open('https://lacreisaude.com.br/quem-somos/#missao-visao-valores', 'blank');
  }

  return (
    <div>
      <S.HomeImage src='/people-holding-flag.8d096827.png' alt="people holding flag" />

      <S.HomeContainer>
        <S.Button onClick={handleAboutButtonClick}>Quem Somos</S.Button>
        <S.Button onClick={handlePurposeButtonClick}>Nosso Propósito</S.Button>
        <S.Button onClick={handleMissionButtonClick}>Missão, Visão e Valor</S.Button>
      </S.HomeContainer>
    </div>
  );
}
