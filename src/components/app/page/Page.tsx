import { Routes, Route } from 'react-router-dom'
import { HomeView } from './views/home/HomeView'
import { AnimeView } from './views/anime/AnimeView'
import {GuestNavigation} from './navigation/guest/GuestNav'

export function Page() {
  return (
    <div className="Page">
      <header className="Header">
        <Routes>
            <Route path="/*" element={<GuestNavigation/>} />
        </Routes>
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
