import {screen, render} from '@testing-library/react';
import {MemoryRouter, BrowserRouter} from 'react-router-dom';
import {AnimeCard} from './AnimeCard';

const props = {
  animeId: 'naruto',
  animeTitle: 'Naruto',
  animeImg: 'https://gogocdn.net/images/anime/N/naruto.jpg',
  releasedDate: '2002',
  animeUrl: ''
}

describe('AnimeCard.tsx', () => {
    it('animeTitle to be in the document', () => {
        render(
        <MemoryRouter>
            <AnimeCard {...props}/>
        </MemoryRouter>
        )
        const anime_title = screen.getByText("Naruto")
        expect(anime_title).toBeInTheDocument()
    })
    it('animeId to be in the document', () => {
        render(
        <MemoryRouter>
            <AnimeCard {...props}/>
        </MemoryRouter>
        )
        const anime_id = screen.getByTestId(props.animeId)
        expect(anime_id).toBeInTheDocument()
    })
    it('animeImg to be in the document', () => {
        render(
        <MemoryRouter>
            <AnimeCard {...props}/>
        </MemoryRouter>
        )
        const anime_image = screen.getByAltText(/anime image/i) as HTMLImageElement
        expect(anime_image.src).toContain(`${props.animeImg}`)
        // expect(anime_image).toHaveAttribute('src', `${props.animeImg}`)
    })
})