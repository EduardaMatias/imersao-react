import * as S from './styles'

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <S.StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </S.StyledTimeline>
  );
}

export default Timeline;
