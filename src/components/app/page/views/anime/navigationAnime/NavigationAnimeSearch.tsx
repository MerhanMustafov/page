import { useState } from 'react'

import {NavigationAnimeSearchDropdown} from './NavigationAnimeSearchDropdown'
import {NavigationAnimeSearchInput} from './NavigationAnimeSearchInput'

interface AnimeSearchData {
  animeId: string
  animeTitle: string
  animeUrl: string
  animeImg: string
  status: string
}
interface Props{
    input: string
    setInput: (i: string) => void
}

export function NavigationAnimeSearch(props: Props) {
//   const [input, setInput] = useState<string>('')
  const [data, setData] = useState<AnimeSearchData[]>([])
  const [loading, setLoading] = useState<boolean>(false)


  
  return (
    <div className="anime-NavigationAnimeSearch-outer-wrapper">
      <div className="anime-NavigationAnimeSearch-inner-wrapper">
        
        <NavigationAnimeSearchInput {...{setData, loading, setLoading, input:props.input, setInput:props.setInput}}/>
        <NavigationAnimeSearchDropdown {...{data, loading, input:props.input, setInput:props.setInput}} />
      </div>
    </div>
  )
}
