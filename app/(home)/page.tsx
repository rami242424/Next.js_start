import styles from "../../styles/home.module.css";
// import Movie from "../../components/movie";
import { API_URL } from "../constants";
import Movie from '../../components/movie';

export const metadata = {
    title : "Home",
};



async function getMovies() {
    return fetch(API_URL).then(response => response.json());
}

export default async function HomePage(){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map(movie => (
                <Movie 
                    key={movie.id} 
                    id={movie.id} 
                    poster_path={movie.poster_path} 
                    title={movie.title} 
                />
            ))}
        </div>
    );
}