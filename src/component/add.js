import { useRef } from "react";

 function AddMovie({ movies, setMovies }) {
  const titleRef = useRef();
  const descRef = useRef();
  const ratingRef = useRef();
  const imageSrcRef = useRef();

  const handleAddMovie = () => {
    const title = titleRef.current.value;
    const description = descRef.current.value;
    const rating = ratingRef.current.value;
    const image = imageSrcRef.current.value;

    if(title && description && rating && image){
      const newMovie = {
        id: Math.random() * 10,
        title,
        description,
        rating,
        image,
      };
  
      titleRef.current.value = "";
      descRef.current.value = "";
      ratingRef.current.value = "";
      imageSrcRef.current.value = "";
  
      setMovies([...movies, newMovie]);
    };
    alert("no data added")
    }

  return (
    <div className="add" >
      title: <input type="text" ref={titleRef} style={{"padding-left":"10PX"}} />
      desc: <input type="text" ref={descRef}  style={{"padding-left":"10PX"}} />
      rating: <input type="number" ref={ratingRef} />
      imageSrc: <input type="text" ref={imageSrcRef} />
      <button className="btn-add" onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
}
export default AddMovie;