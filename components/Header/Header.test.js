import { render, screen } from '@testing-library/react'
import Header from './'

describe('Header', () => {
  it('Matches snapshot', () => {
    const component = render(<Header />)
    expect(component.asFragment()).toMatchSnapshot()
  })
  it('Renders the candy 🍬', () => {
    render(<Header />)
    const element = screen.getByText('🍬')
    expect(element).toBeInTheDocument()
  })
})
