import { useState, useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import { Card } from "./Card";
import { CardContainerHeader } from "./CardContainerHeader";
import { Loader } from "./Loader";
import { Cards } from "./Cards";
import PropTypes from "prop-types";

export const CardsContainer = ({ baseUrl, randNum }) => {

    const 
    
    URL = `${baseUrl}/${randNum}`,
    { data, loading, error } = useAxios(URL);

    return (

        <section className="cardContainer">

            { (error && loading) && (<h1> Error: {JSON.stringify(error)} </h1>) }
            { (loading && !data) && (<Loader />) }
            { data && (<CardContainerHeader data={data} />) }
            { data && (<Cards elements={data.residents}/>) }
            

        </section>

    );

};

CardsContainer.propTypes = {

    baseUrl: PropTypes.string.isRequired,
    randNum: PropTypes.number.isRequired

}