import { Track } from "../types/spotifyTypes";
import styles2 from '../styles/components/tracks.module.scss';
import TrackCard from "./trackCard";
interface TrackProps {
    tracks: Track[];
}

export default function Tracks({ tracks }: TrackProps) {
    return( 
        <div>
            {tracks?.map((track) => (
                <TrackCard track={track} key={track.id} />
            ))}
        </div>

    );
}