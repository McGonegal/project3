import SearchForm from "./SearchForm";
import '../index.css'


const Header = () => {
    return (
        <header>
            <div className="backgroundImage">
                <h1>Book Club Recommendations</h1>
                <SearchForm />
            </div>
        </header>
    )
}

export default Header;