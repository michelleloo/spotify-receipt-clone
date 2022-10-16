import { Track } from "../types/spotifyTypes";
import styles from '../styles/components/receipt.module.scss';

interface TrackProps {
    tracks: Track[];
    name: string;
}
function millisToMinutesAndSeconds(millis: number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = Number(((millis % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

export default function Receipt({ tracks, name }: TrackProps) {
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');


    const totalTime = tracks.reduce((acc, track) => acc + track.duration_ms, 0);
    return( 
        <div className={styles.receiptMain}>
            <h2>Music Receipt</h2>
            <h3>Top Track Generator</h3>
            <hr className={styles.hrLine}></hr>

            <p>Order #0001 for {name}</p>
            <p>{utc}</p>
            <hr className={styles.hrLine}></hr>

            <table>
                <tbody>
                <tr>
                    <th>QTY</th>
                    <th>ITEM</th>
                    <th>AMT</th>
                </tr>
                {tracks?.map((track, index) => (
                    <tr key={track.id}>
                        <td>{index + 1}</td>
                        <td>{track.name} <br></br><span>{track.artists[0].name}</span></td>
                        <td>{millisToMinutesAndSeconds(track.duration_ms)}</td>
                    </tr>
                ))}
                </tbody>

                </table>
                <hr className={styles.hrLine}></hr>

                <table>
                    <tbody>
                    <tr>
                        <td>Item Count:</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>{millisToMinutesAndSeconds(totalTime)}</td>
                    </tr>
                    </tbody>
                   
                </table>
                <hr className={styles.hrLine}></hr>
                <p>CARD #: **** **** **** 2022</p>
                <p>EXP: 12/22</p>
                <p>CARDHOLDER: {name}</p>
                <h3>Thank You for visiting!!</h3>
        </div>

    );
}