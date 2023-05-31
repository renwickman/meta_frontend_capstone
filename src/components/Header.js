import Food from "../icons_assets/Food.jpg"

const Header = () => {
 return (
    <header className="header-background">
        <div className="left-side">
            <div className="row">
                <div className="column">
            <h1 className="title">Little Lemon</h1>
            <h1>Chicago</h1>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button type="button" class="btn btn-warning">
                Reserve a table
            </button>
            </div>
            </div>
        </div>
        <div className="right-side">
            <div className="row">
                <div className="column">
            <img 
            width="300px"
            src={Food}
            alt="person holding food"
            />
            </div>
            </div>
        </div>
    </header>
 )
};

export default Header;