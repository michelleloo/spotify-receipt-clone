import { Album } from "../types/spotifyTypes";
import styles2 from '../styles/components/albums.module.scss';

interface AlbumProps {
    albums: Album[];
}

export default function Albums({ albums }: AlbumProps) {
    //
    //                    <h2 className={styles2.album__artist}>{album.artists[0]}</h2>
    //<img src={album.images[0].url} alt={album.name} className={styles2.album__image}/>
    return( 
        <div className={styles2.albums}>
            {albums?.map((album) => (
                <div key={album.id} className={styles2.album}>
                    <h1 className={styles2.album__name}>{album.name}</h1>
                </div>
            ))}
        </div>
    );
}