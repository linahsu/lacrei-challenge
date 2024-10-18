"use client"
import * as S from '../ui/styles';

export default function Page() {
    const handlePolicyButtonClick: () => void = () => {
        window.open('https://lacreisaude.com.br/politica-de-privacidade/', 'blank');
      }
    
      const handleTermsButtonClick: () => void = () => {
        window.open('https://lacreisaude.com.br/termos-de-uso/', 'blank');
      }
    
      const handleRightsButtonClick: () => void = () => {
        window.open('https://lacreisaude.com.br/direitos-de-titular/', 'blank');
      }
    
      return (
        <S.SecurityContainer>
            <S.SecurityImage src='/rights-holder-image.91c51f01.png' alt="right holder image" />

            <S.SecurityButtonContainer>
            <S.Button onClick={handlePolicyButtonClick}>Política de Privacidade</S.Button>
            <S.Button onClick={handleTermsButtonClick}>Termos de Uso</S.Button>
            <S.Button onClick={handleRightsButtonClick}>Direitos de Titular</S.Button>
            </S.SecurityButtonContainer>
        </S.SecurityContainer>
      );
}