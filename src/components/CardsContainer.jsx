import { useAxios } from "../hooks/useAxios";
import { CardContainerHeader } from "./CardContainerHeader";
import { Loader } from "./Loader";
import { Cards } from "./Cards";
import PropTypes from "prop-types";

export const CardsContainer = ({ baseUrl, randNum, searchData }) => {

    const 
    
    URL = 
        searchData 
            ? `${baseUrl}/${searchData}` 
            : `${baseUrl}/${randNum}`,
            
    { data, loading, error } = useAxios(URL);

    return (

        <>
            { data && (<CardContainerHeader data={data} />) }
            <section className="cardContainer">

                { (error && loading) && (<h1> Error: {JSON.stringify(error)} </h1>) }
                { (loading && !data) && (<Loader />) }
                { data && (<Cards elements={data.residents}/>) }    

            </section>
        </>

    );

};

CardsContainer.propTypes = {

    baseUrl: PropTypes.string.isRequired,
    randNum: PropTypes.number.isRequired

}