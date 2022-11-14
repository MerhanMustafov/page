import { useState, useEffect } from 'react'
import { getAnimeByTitle } from '../../../../../../api/apiReaquest/apiRequest'

interface AnimeSearchData {
  animeId: string
  animeTitle: string
  animeUrl: string
  animeImg: string
  status: string
}

interface Props {
  setData: (d: AnimeSearchData[]) => void
  loading: boolean
  setLoading: (b: boolean) => void
  input: string
  setInput: (i: string ) => void
  
}
export function NavigationAnimeSearchInput(props: Props) {
 
   useEffect(() => {
     !props.loading && props.setLoading(true);
    const timeoutId = setTimeout(() => searchAnimeHandler(null), 1000);
    return () => clearTimeout(timeoutId);
  }, [props.input]);

  function searchAnimeHandler(e: React.MouseEvent | null) {
    
        if (props.input!.length <= 0) {
            props.setData([])
          
        } else {
          const animeTitle =
            props.input?.length > 0 &&
            props.input
              ?.split(' ')
              .filter((w) => w !== '')
              .map((w) => w.toLocaleLowerCase())
              .join('+')

          animeTitle &&
            getAnimeByTitle(animeTitle).then((res) => props.setData(res.data))
          
        }
            props.setLoading(false);
        
  }

  
  return (
    <div className="anime-NavigationAnimeSearchInput-search-outer-wrapper">
      <div className="anime-NavigationAnimeSearchInput-search-inner-wrapper">
        <input
          type="text"
          id="anime-NavigationAnimeSearchInput-input"
          placeholder='...'
          value={props.input}
          onChange={(e) => {
            props.setInput(e.target.value);
          }}
        />
        <i
          onClick={(e) => searchAnimeHandler(e)}
          className="fa-solid fa-magnifying-glass anime-NavigationAnimeSearchInput-icon"
        ></i>
      </div>
    </div>
  )
}
