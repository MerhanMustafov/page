import { NavigationAnimeSearchDropdownBox } from './NavigationAnimeSearchDropdownBox'

interface AnimeSearchData {
  animeId: string
  animeTitle: string
  animeUrl: string
  animeImg: string
  status: string
}
interface Props {
  loading: boolean
  data: AnimeSearchData[]
  input: string
  setInput: (i: string) => void
}
export function NavigationAnimeSearchDropdown(props: Props) {
    let key = 1
  return (
    // style={inputEl.value.length <= 0 ? {display: 'none'} : {display: 'block'}}
    <div className="anime-NavigationAnimeSearchDropdown-outer-wrapper">
      {props.input.length > 0 ? (
        <div className="anime-NavigationAnimeSearchDropdown-clear" onClick={(e) => props.setInput('')}>CLEAR</div>
      ) : null}
      <div className="anime-NavigationAnimeSearchDropdown-inner-wrapper">
        <>
          {props.data.length > 0 ? (
            props.data.map((animeData) => (
              <NavigationAnimeSearchDropdownBox
              key={`NavigationAnimeSearchDropdown${key++}`}
                {...{
                  input: props.input,
                  setInput: props.setInput,
                  ...{ animeData },
                }}
              />
            ))
          ) : (
            props.input.length > 0 && props.loading && <div>Loading ...</div>
            
          )}
        </>
      </div>
    </div>
  )
}
