export function Genres(){
    let key = 1

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

        function xScroll(e: React.WheelEvent){
    const elToScroll = document.querySelector('.anime-Genres-inner-wrapper') as HTMLElement
    if(e.deltaY === 100){
        // +
        elToScroll.scrollLeft += 150
    }else if(e.deltaY === -100){
        // -
        elToScroll.scrollLeft -= 150
    }
  }
    return (
        <div className="anime-Genres-outer-wrapper">
                
                <span className="genre-text">Genres</span>
            <div onWheel={(e) => xScroll(e)} className="anime-Genres-inner-wrapper">
            {listOfGenres.length > 0

            ?
             listOfGenres.map(g => <div key={`Genres${key++}`} onWheel={(e) => xScroll(e)} className="anime-Genres-box">{g}</div> ) 

            : <div>Loading genres ...</div> }
            </div>
        </div>
    );
}