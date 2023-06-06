export const Header = () => {

    return (

        <header className="header">

            <a className="header__logo" href="/">
                <img className="header__image" src="/assets/img/logo/logo.png" alt="logo" />
            </a>
            <form className="header__form">
                <input 
                    className="header__input" 
                    type="text" 
                    placeholder="Type a location Id..."
                />
                <button className="header__btn"> Search </button>
            </form>

        </header>

    );

};