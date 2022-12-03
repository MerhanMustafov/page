import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {Page} from './Page';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
jest.mock('axios') 


describe('Page', () => {
    it('Page initial render', () => {
        render(<Page />, {wrapper: BrowserRouter});
    })
   
    it('all genres present on the screen', async () => {
       const user = userEvent.setup()
        const anime_detail = generate_data();
        const res = {data: anime_detail};
        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(res);
        render(<Page />, {wrapper: BrowserRouter});
        const anime = screen.getByRole('link', {name: 'Anime'});
        await user.click(anime)
        const check_genres = () => {
            listOfGenres.forEach(g => {
                expect(screen.getByText(g)).toBeInTheDocument()
            })
        }
        check_genres()
        // screen.debug();
        
    })
     it('checking if loadings are there on initial render of anime page view', async () => {
         const user = userEvent.setup()
        const anime_detail = generate_data();
        const res = {data: anime_detail};
        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(res);
        render(<Page />, {wrapper: BrowserRouter});
        const anime = screen.getByRole('link', {name: 'Anime'});
        await user.click(anime)
       const loading = await screen.findAllByText(/loading .../i);
       expect(loading).toHaveLength(3)
    } ) 
})


 const listOfGenres = [
        "action",
        "adventure",
        "cars",
        "comedy",
        "crime",
        "dementia",
        "demons",
        "drama",
        "dub",
        "ecchi",
        "family",
        "fantasy",
        "game",
        "gourmet",
        "harem",
        "historical",
        "horror",
        "josei",
        "kids",
        "magic",
        "martial-arts",
        "mecha",
        "military",
        "Mmusic",
        "mystery",
        "parody",
        "police",
        "psychological",
        "romance",
        "samurai",
        "school",
        "sci-fi",
        "seinen",
        "shoujo",
        "shoujo-ai",
        "shounen",
        "shounen-ai",
        "slice-of-Life",
        "space",
        "sports",
        "super-power",
        "supernatural",
        "suspense",
        "thriller",
        "vampire",
        "yaoi",
        "yuri",
        ]


const generate_data: () => AnimeDetailData = () => ({
  animeTitle: 'One Piece',
  animeImg: 'https://gogocdn.net/images/anime/N/naruto.jpg',
  type: 'TV Series',
  status: 'Completed',
  synopsis:
    'In a world of mystical and powerful enemies lurk in every nation, a legendary Nine-Tailed Demon Fox attacked the ninja village Konoha, killing many innocent people. In response of a desperate measure from the people, the leader of the village – the Fourth Hokage – sacrificed his life to defeat the demon fox. By sacrificing his own life, he sealed the demon fox into a very young boy named, Naruto Uzumaki. Naruto has lost his parents during the attack. He grew up in the village and was mistreated badly by everyone in town.\n\nWith his loud mouth and careless attitude, he is determined to become the greatest ninja, hokage, in his village. Along with friends, and hope, Naruto trains to become a better ninja than expected.',
  genres: ['action'],
  episodesList: [{ episodeId: '123', episodeNum: '100' }],
})


interface AnimeDetailData {
  animeTitle: string
  animeImg: string
  type: string
  status: string
  synopsis: string
  genres: string[]
  episodesList: { episodeId: string; episodeNum: string }[]
}