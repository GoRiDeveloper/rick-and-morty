import { useState, useEffect } from "react";
import axios from "axios";

const errorTypes = {

    "AbortError": "Petición Cancelada"

};

export const useAxios = (url) => {

    const 
    
    [data, setData]             = useState(null),
    [loading, setLoading]       = useState(true),
    [error, setError]           = useState(false),
    [controller, setController] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();
        setController(abortController);

        const getData = async () => {

            try {

                const 
                
                RES = await axios.get(url, { signal: abortController.signal }),
                { data } = RES;
    
                setData(data);
                setError(false);
                
            } catch (err) {

                if (err.name === errorTypes[err.name]) {

                    console.log(errorTypes.AbortError);

                } else {

                    const ERROR = {
                        message: err.message,
                        status: err.response?.status
                    };
                    setError(ERROR);

                };
                
            } finally { setLoading(false); };

        };

        getData(url);

        return () => abortController.abort();

    }, [url]);

    const handleCancelReq = () => {

        if (controller) {

            controller.abort();
            setError(errorTypes.AbortError);
            
        };

    };

    return { data, loading, error, handleCancelReq };

};