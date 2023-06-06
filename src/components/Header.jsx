export const Header = ({ setSearchData }) => {

    const 
    
    handleSubmit = (e) => 
        e.preventDefault(),

    handleChange = (e) => 
        setTimeout(() => setSearchData(e.target.value), 500);

    return (

        <header className="header">

            <a className="header__logo" href="/">
                <img className="header__image" src="/assets/img/logo/logo.png" alt="logo" />
            </a>
            <form 
                className="header__form"
                onSubmit={handleSubmit}
            >
                <input 
                    className="header__input" 
                    type="text" 
                    onChange={handleChange}
                    placeholder="Type a location Id..."
                />
                <button className="header__btn"> Search </button>
            </form>

        </header>

    );

};