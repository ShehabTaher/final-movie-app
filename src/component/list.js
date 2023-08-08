import MovieCard from "./moviecards";
import data from "./moviedata";
import { useState } from "react";
import AddMovie from "./add";
import { Link } from "react-router-dom";


function MoviesList() {

  const [movies, setMovies] = useState(data);
  return (
    <>
      <h1 className="header" style={{ textAlign: "center" }}> movies</h1>

      <div className=" filter">
        <button
          onClick={() => {
            const sortedMovies = [...movies];
            sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
            setMovies(sortedMovies);
          }}
        >
          filter by title
        </button>

        <button
          onClick={() => {
            const sortedMovies = [...movies];
            sortedMovies.sort((a, b) => b.rating - a.rating);
            setMovies(sortedMovies);
          }}>

          filter by rating
        </button>
        <button onClick={() => setMovies(data)}>remove all filters</button>

      </div>
      <div className="movieList">
        {movies.map((movie) => (
          <Link
            to={`/${movie.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            key={movie.id}
          >
            <MovieCard {...movie}
            />
          </Link>
        ))}

        {/* {movies.map((movie, index) => (
          <Link
            to={`/${movies.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            key={index}
          >
            <MovieCard
              title={movie.title}
              description={movie.description}
              posterURL={movie.posterURL}
              rating={movie.rating}
            />
          </Link>
        ))} */}
      </div>

      <div className="div">
        <h1>Add Movie</h1>
        <AddMovie movies={movies} setMovies={setMovies} />
      </div>
    </>
  );


}
export default MoviesList;
// import { React, useState } from "react";
// import { Container, Navbar } from "react-bootstrap";
// import Filter from "./Filter";
// import Lightbox from "../tools/Lightbox";

// function MovieList() {
//   const [filteredBy, setFilteredBy] = useState("All");

//   const handleFilterChange = (e) => {
//     setFilteredBy(e.target.value);
//   };
//   const [show, setShow] = useState(false);

//   return (
//     <div style={{ maxWidth: "1000px", margin: "auto" }}>
//       <main className="App-header">
//         <Navbar
//           bg="dark"
//           expand="lg"
//           variant="dark"
//           style={{ margin: "0px 0px 5px  0px" }}
//         >
//           <Container style={{ margin: "auto" }}>
//             <Navbar.Brand>favorite movies</Navbar.Brand>
//             <div>
//               <label
//                 htmlFor="filter"
//                 style={{ color: "white", marginRight: "10px" }}
//               >
//                 Filter by:
//               </label>
//               <select id="filter" onChange={handleFilterChange}>
//                 <option value="All">All</option>
//                 <option value="A-Z">A-Z</option>
//                 <option value="rate">rate</option>
//               </select>
//               <Lightbox show={show} setShow={setShow} />
//             </div>
//           </Container>
//         </Navbar>
//         <Filter filteredBy={filteredBy} />
//       </main>
//     </div>
//   );
// }

// export default MovieList;
