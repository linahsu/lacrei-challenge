import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '../app/page';

describe('HomePage', () => {
beforeEach(() => {
jest.spyOn(window, 'open').mockImplementation(() => null);
});

afterEach(() => {
jest.clearAllMocks();
});

test('Should open the correct URL when the "Quem Somos" button is clicked', () => {
render(<HomePage />);
userEvent.click(screen.getByText('Quem Somos'));
expect(window.open).toHaveBeenCalledWith('https://lacreisaude.com.br/quem-somos/', 'blank');
});
});
