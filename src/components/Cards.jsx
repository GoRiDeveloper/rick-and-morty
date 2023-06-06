import { useState } from "react";
import { paginationLogic } from "../utils/pagination";
import { Card } from "./Card";
import PropTypes from "prop-types";

export const Cards = ({ elements }) => {
console.log({elements});

    const 
    
    [currentPage, setCurrentPage] = useState(1),
    { elementsInPage, numPages } = paginationLogic(9, currentPage, elements);
    console.log(numPages);

    return (

        <>
            { 
                elementsInPage?.map(element => (
                    <Card key={element} url={element} />
                )) 
            }
            <div className="cardsBoxBtns">
                { 
                    numPages.map(page => (

                        <button 
                            className="cardsBoxBtns__btn"
                            key={page}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>

                    ))
                }  
            </div>
        </>

    );

};

Cards.propTypes = {

    elements: PropTypes.array.isRequired

};