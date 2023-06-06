import { useAxios } from "../hooks/useAxios";
import { Loader } from "./Loader";

export const Card = ({ url }) => {

    const { data, loading, error } = useAxios(url);

    return (

        <>
            {
                data
                    ? (
                        <article className="card">

                            <div className="card__boxImage">
                                <img 
                                    className="card__image"
                                    src={data.image} 
                                    alt="personaje" 
                                />
                            </div>
                            <div className="card__box">
                                <div className="card__heading">
                                    <h2 className="card__title"> {data.name} </h2>
                                </div>
                                <div className="card__infoBox">
                                    <div className="card__subtitlesBox">

                                        <p className="card__subtitle"> RAZA </p>
                                        <p className="card__subtitle"> ORIGEN </p>
                                        <p className="card__subtitle"> APARICIONES </p>

                                    </div>
                                    <div className="card__descBox">

                                        <p className="card__desc"> {data.species} </p>
                                        <p className="card__desc"> {data.origin.name} </p>
                                        <p className="card__desc"> 
                                            {
                                                data.episode.length === 1
                                                    ? `${data.episode.length} vez`
                                                    : `${data.episode.length} veces`
                                            }
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </article>
                    )
                    : (<Loader />)
            }
            
        </>

    );

};