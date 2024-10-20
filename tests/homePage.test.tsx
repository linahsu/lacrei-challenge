import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '../app/page';

describe('HomePage', () => {
    beforeEach(() => {
        window.open = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should open the correct URL when the "Quem Somos" button is clicked', async () => {
        render(<HomePage />);

        const aboutButton = screen.getByText('Quem Somos');
        
        userEvent.click(aboutButton);
        
        await waitFor(() => {
            expect(window.open).toHaveBeenCalledWith('https://lacreisaude.com.br/quem-somos/', 'blank');
        });
    });
});
