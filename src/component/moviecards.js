
function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.posterURL} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.rating}</p>
    </div>
  );
}
export default MovieCard;