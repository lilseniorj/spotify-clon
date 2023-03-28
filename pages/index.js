import ListAlbums from '../components/ListAlbums';

export default function Home() {
  return (
    <div className="pt-28 md:pl-72 p-8">
      <ListAlbums title="Spotify Playlist" />
      <ListAlbums title="Sleep" />
      <ListAlbums title="Focus" />
      <ListAlbums title="Mood" />

    </div>
  );
}
