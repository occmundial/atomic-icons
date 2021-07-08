import { render, screen, act } from '@testing-library/react'
import Header from './'

describe('Header', () => {
    it('Matches snapshot', () => {
        const component = render(<Header />)
        expect(component.asFragment()).toMatchSnapshot()
    })
    it('Renders the candy 🍬', async () => {
        await act(() => {
            render(<Header />)
            const element = screen.getByText('🍬');
            console.log(element)
            expect(element).toBeInTheDocument()
        })
    })
})