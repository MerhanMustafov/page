import {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomeView } from './views/home/HomeView'
import { AnimeView } from './views/anime/AnimeView'
import {GuestNavigation} from './navigation/guest/GuestNav'

import {searchAnime} from '../../../api/apiReaquest/apiRequest'

export function Page() {

    // useEffect(() => {
    //     async function getAnime() {
    //         const data = await searchAnime()
    //         console.log(data, 'DATA')
    //     }

    //     getAnime()


    // }, [])
    
  return (
    <div className="Page">
      <header className="Header">
            <GuestNavigation/>
      </header>

      <main className="Main">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/anime" element={<AnimeView />} />
        </Routes>
      </main>
      <footer className="Footer"></footer>
    </div>
  )
}
