import PropTypes from "prop-types";

export const CardContainerHeader = ({ data }) => {

    const 
    
    { name, type, dimension, residents } = data,
    population = residents.length;

    return (

        <header className="cardContainerHeader">
            <h1 className="cardContainerHeader__heading">{ name }</h1>
            <div className="cardContainerHeader__infoBox">
                <div className="cardContainerHeader__subtitles">

                    <p className="cardContainerHeader__subtitle"> Tipo : </p>
                    <p className="cardContainerHeader__subtitle"> Dimensión : </p>
                    <p className="cardContainerHeader__subtitle"> Población : </p>

                </div>
                <div className="cardContainerHeader__desc">

                    <p className="cardContainerHeader__desc">{ type || "Sin Información" }</p>
                    <p className="cardContainerHeader__desc">{ dimension || "Sin Información" }</p>
                    <p className="cardContainerHeader__desc">{ population || "Sin Población" }</p>

                </div>
            </div>
        </header>

    );

};

CardContainerHeader.propTypes = {

    data: PropTypes.object.isRequired

};