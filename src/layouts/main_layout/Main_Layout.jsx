import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";

export const MainLayout = ({ children, loading, pages, setCurrentPage }) => {

    return (

        <main className="layout">

            {
                loading

                    ? (<Loader />)
                    : (
                        <>
                            <Header />
                            <div className="layout__container">

                                {children}

                            </div>
                        </>
                    )
            }

        </main>

    );

};