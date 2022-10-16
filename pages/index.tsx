import styles from '../styles/Home.module.scss'
import { getSession, signOut } from "next-auth/react";
import {GetServerSideProps} from 'next';
import { isAuthenticated } from "../utils/isAuthenticated";
import { customGet, topTracks } from "../utils/customGet";
import Receipt from '../components/receipt';
import { useState, useEffect } from 'react';
import {User} from '../types/spotifyTypes';

interface HomeProps {
  userProfile: User;
  userTopTracks: any;
}

export default function Home({ userProfile, userTopTracks}: HomeProps) {

  const [data, setData] = useState(userTopTracks ? userTopTracks : null);
  const [isLoading, setLoading] = useState(false)
  async function fetchData(time_range: string) {
    console.log("fetching data")
    try{
      setLoading(true)
      const session = await getSession()
      console.log(session)
      const data = await customGet('https://api.spotify.com/v1/me/top/tracks?time_range='+ time_range + '&limit=10', session)
      setData(data)
      setLoading(false)
    }
    catch(err){
      console.log(err)
      setData(null)
    }
  }
  useEffect(() => {

  },[]);
  return (
    <div className={styles.main}>
      <div >
        <h1>Good morning {userProfile.display_name}!</h1>
        <h2>Heres Your Order</h2>
      </div>
      <div>
        <button onClick={() => fetchData("long_term")}>Long Term</button>
        <button onClick={() => fetchData("medium_term")}>Medium Term</button>
        <button onClick={() => fetchData("short_term")}>Short Term</button>
      </div>

      {isLoading && data ? 
      <p>Loading...</p>
      :<div className={styles.receiptContainer}>
      <Receipt tracks={data?.items} name={userProfile.display_name} />
      </div> }
      
      <button onClick={() => signOut()}> Logout</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!(await isAuthenticated(session))) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const userProfile = await customGet("https://api.spotify.com/v1/me", session);
  const userTopTracks = await customGet(
    "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10",
    session
  );

  return { props: {userProfile, userTopTracks } };
};
