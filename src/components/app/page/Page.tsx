import {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomeView } from './views/home/HomeView'
import { AnimeView } from './views/anime/AnimeView'
import {GuestNavigation} from './navigation/guest/GuestNav'
import {MovieView} from './views/movie/MovieView'
export function Page() {

    
    
  return (
    <div className="Page">
      <header className="Header">
        {/* This navigation will lead to one of the routes below in the main 
        [/anime/*]/ 
        [/manga/*]/ 
        [/movie/*]/ 
        [/images/*]*/ }
            <GuestNavigation/>
      </header>

      <main className="Main">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/anime/*" element={<AnimeView />} />
          <Route path="/movie/*" element={<MovieView />} />
        </Routes>
      </main>
      <footer className="Footer"></footer>
    </div>
  )
}
