import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";

export const MainLayout = ({ children, loading, setSearchData }) => {

    return (

        <main className="layout">

            {
                loading

                    ? (<Loader />)
                    : (
                        <>
                            <Header setSearchData={setSearchData} />
                            <div className="layout__container">

                                {children}

                            </div>
                        </>
                    )
            }

        </main>

    );

};