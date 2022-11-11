import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MovieNavigation } from './movieNavigation/MovieNavigation'
import { MovieHome } from './movieHome/MovieHome'

export function MovieView() {
  return (
    <div className="movie-MovieView-wrapper">
      <MovieNavigation />
      <Routes>
        <Route path="/*" element={<MovieHome />} />
        {/* <Route path="/:movieTitle" element={<MovieHome />}/> */}
      </Routes>
    </div>
  )
}
