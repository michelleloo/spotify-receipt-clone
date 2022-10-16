import { MySession } from "../types/sessionTypes";


const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';
const CURRENTLY_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';



export const customGet = async (url: string, session: MySession | null) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  }).then((res) => res.json());

  return res;
};

export const getPlaylists = async (session: MySession | null) => {
  const res = await customGet(PLAYLISTS_ENDPOINT, session);
  return res;
}

export const topTracks = async (session: MySession | null) => {
  const res =  await fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  }).then((res) => res.json());
  return {res};
};