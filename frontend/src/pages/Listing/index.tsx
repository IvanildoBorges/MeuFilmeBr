import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [PageNumber, setPageNumber] = useState(0);
    const [Page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 29,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    useEffect(() => {
        //Forma errada
        axios.get(`${BASE_URL}/movies?size=${Page.size}&page=${PageNumber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [PageNumber]);

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    {
                        Page.content.map(movie => (
                                <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-5">
                                    <MovieCard movie={movie} />
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Listing;