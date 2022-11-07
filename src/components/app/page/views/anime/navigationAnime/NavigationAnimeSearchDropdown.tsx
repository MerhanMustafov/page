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
 
  return (
    // style={inputEl.value.length <= 0 ? {display: 'none'} : {display: 'block'}}
    <div className="anime-NavigationAnimeSearchDropdown-outer-wrapper">
        {props.input.length >  0 
        ?
        <div onClick={(e) => props.setInput('')}>Clear</div>
        : null
        }
      <div className="anime-NavigationAnimeSearchDropdown-inner-wrapper">
        {props.loading ? (
          <div>Loading ...</div>
        ) : (
          <>
            {props.data.length > 0
              ? props.data.map((animeData) => (
                  <NavigationAnimeSearchDropdownBox
                    {...{
                      input: props.input,
                      setInput: props.setInput,
                      ...{ animeData },
                    }}
                  />
                ))
              : null}
          </>
        )}
      </div>
    </div>
  )
}
