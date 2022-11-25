import {screen, render} from '@testing-library/react';
import {MemoryRouter, BrowserRouter} from 'react-router-dom'
import {GuestNavigation} from './GuestNav';


describe('page navigation buttons', () => {
    it('Home btn on the screen', () => {
        render(<GuestNavigation />, {wrapper: BrowserRouter })
        const home_bnt = screen.getByText(/home/i)
        expect(home_bnt).toBeInTheDocument()
    })
    it('Anime btn on the screen', () => {
        render(<GuestNavigation />, {wrapper: BrowserRouter })
        const anime_bnt = screen.getByText(/anime/i)
        expect(anime_bnt).toBeInTheDocument()
    })
    it('Movie btn on the screen', () => {
        render(<GuestNavigation />, {wrapper: BrowserRouter })
        const movie_bnt = screen.getByText(/movie/i)
        expect(movie_bnt).toBeInTheDocument()
    })
})

