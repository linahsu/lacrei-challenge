"use client"
import * as S from '../ui/styles';

export default function Page() {
    const handlePolicyButtonClick = () => {
        window.open('https://lacreisaude.com.br/politica-de-privacidade/', 'blank');
      }
    
      const handleTermsButtonClick = () => {
        window.open('https://lacreisaude.com.br/termos-de-uso/', 'blank');
      }
    
      const handleRightsButtonClick = () => {
        window.open('https://lacreisaude.com.br/direitos-de-titular/', 'blank');
      }
    
      return (
        <S.ButtonContainer>
          <S.Button onClick={handlePolicyButtonClick}>Política de Privacidade</S.Button>
          <S.Button onClick={handleTermsButtonClick}>Termos de Uso</S.Button>
          <S.Button onClick={handleRightsButtonClick}>Direitos de Titular</S.Button>
        </S.ButtonContainer>
      );
}