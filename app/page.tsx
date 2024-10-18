"use client";
import * as S from './ui/styles';

export default function Home() {
  const handleAboutButtonClick = () => {
    window.open('https://lacreisaude.com.br/quem-somos/', 'blank');
  }

  const handlePurposeButtonClick = () => {
    window.open('https://lacreisaude.com.br/quem-somos/#proposito', 'blank');
  }

  const handleMissionButtonClick = () => {
    window.open('https://lacreisaude.com.br/quem-somos/#missao-visao-valores', 'blank');
  }

  return (
    <S.ButtonContainer>
      <S.Button onClick={handleAboutButtonClick}>Quem Somos</S.Button>
      <S.Button onClick={handlePurposeButtonClick}>Nosso Propósito</S.Button>
      <S.Button onClick={handleMissionButtonClick}>Missão, Visão e Valor</S.Button>
    </S.ButtonContainer>
  );
}
