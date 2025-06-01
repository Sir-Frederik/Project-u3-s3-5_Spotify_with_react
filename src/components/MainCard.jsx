import { Col, Image } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";

const MainCard = ({ song, isFavourite, onToggleFavourite, onSelectSong }) => {
  return (
    <Col className="text-center d-flex flex-column align-items-center" key={song.id}>
      <div className="position-relative imgContainer">
        {isFavourite ? (
          <HeartFill
            className="heart"
            onClick={() => onToggleFavourite(song)}
            style={{
              cursor: "pointer",
              color: isFavourite ? "red" : "white",
              fontSize: "1.5rem",
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1,
              filter: "drop-shadow(0 0 3px black)",
            }}
          />
        ) : (
          <Heart
            className="heart"
            onClick={() => onToggleFavourite(song)}
            style={{
              cursor: "pointer",
              color: "white",
              fontSize: "1.5rem",
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1,
              filter: "drop-shadow(0 0 3px black)",
            }}
          />
        )}
        <Image fluid src={song.album.cover_medium} alt="track" onClick={() => onSelectSong(song)} style={{ cursor: "pointer" }} />
      </div>
      <p className="Song-Title">{song.title}</p>
      <p> {song.artist.name}</p>
    </Col>
  );
};

export default MainCard;
