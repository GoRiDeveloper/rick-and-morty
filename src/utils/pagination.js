export const paginationLogic = (totalElementsPerPage, currentPage, elements) => {

    if (!elements || !currentPage || !totalElementsPerPage) 
        return { elementsInPage: null, numPages: null };

    const 

    totalPages     = Math.ceil(elements.length / totalElementsPerPage),
    startSlice    = (currentPage - 1) * totalElementsPerPage,
    endSlice      = startSlice + totalElementsPerPage,
    elementsInPage = elements.slice(startSlice, endSlice);

    const numPages = [];

    for (let i = 1; i <= totalPages; i++)
        numPages.push(i);

    return { elementsInPage, numPages };

};