interface Props  {
    episodeId: string, 
    episodeNum: string
}
export function Episode(props: Props){
    return (
        <div className="anime-Episode-outer-wrapper">
            <div className="anime-Episode-inner-wrapper">
                {/* <div>{props.episodeId}</div> */}
                <div className="anime-Episode-number" id={props.episodeId}>{props.episodeNum}</div>
            </div>
        </div>
    );
}