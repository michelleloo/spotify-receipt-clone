import { Track } from "../types/spotifyTypes";
import styles from "../styles/components/trackCard.module.scss";
interface TrackProps {
    track: Track;
}

export default function TrackCard({track}  : TrackProps) {
    //             <img src={track.album.images[0].url} alt={track.name} className={styles.trackCard__image}/>

    return(
        <div key={track.id} className={styles.trackCard}>
            <h1 className={styles.trackCard__name}>{track.name}</h1>
            <h2 className={styles.trackCard__artist}>{track.artists[0].name}</h2>
        </div>
    )
}