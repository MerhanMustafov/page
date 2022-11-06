import {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomeView } from './views/home/HomeView'
import { AnimeView } from './views/anime/AnimeView'
import {GuestNavigation} from './navigation/guest/GuestNav'
import {AnimeDetail} from './views/anime/animeDetail/AnimeDetail'

export function Page() {

    
    
  return (
    <div className="Page">
      <header className="Header">
        {/* This navigation will lead to one of the routes below in the main 
        [/anime/*]/ 
        [/manga/*]/ 
        [/movies/*]/ 
        [/images/*]*/ }
            <GuestNavigation/>
      </header>

      <main className="Main">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/anime/*" element={<AnimeView />} />
        </Routes>
      </main>
      <footer className="Footer"></footer>
    </div>
  )
}
