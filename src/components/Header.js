import Food from "../icons_assets/Food.jpg"

const Header = () => {
 return (
    <header>
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>
                Reserve a table
            </button>
        </div>
        <div>
            <img src={Food}
            alt="person holding food"
            />
        </div>
    </header>
 )
};

export default Header;