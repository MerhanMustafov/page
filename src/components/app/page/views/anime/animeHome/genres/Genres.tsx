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
    return (
        <div className="anime-Genres-outer-wrapper">
            <div className="anime-Genres-inner-wrapper">

            {listOfGenres.length > 0

            ?
             listOfGenres.map(g => <span key={`Genres${key++}`} className="anime-Genres-box">{g}</span> ) 

            : <div>Loading genres ...</div> }
            </div>
        </div>
    );
}