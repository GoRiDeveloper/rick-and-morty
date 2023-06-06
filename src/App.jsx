import { useAxios } from "./hooks/useAxios";
import { MainLayout } from "./layouts/main_layout/Main_Layout";
import { CardsContainer } from "./components/CardsContainer";
import { getRandomDimension } from "./utils/getRandomDimension";

export const App = () => {

    const 
    
    URL = import.meta.env.VITE_BASE_URL,
    { data, loading, error } = useAxios(URL);

    return (

        <MainLayout loader={loading}>

            {
                data && (
                    <CardsContainer 
                        baseUrl={URL} 
                        randNum={getRandomDimension(data.info.count)}
                    />
                )
            }

        </MainLayout>

    );

};