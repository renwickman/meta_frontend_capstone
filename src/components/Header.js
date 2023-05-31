import Food_2 from "../icons_assets/Food_2.jpg"

const Header = () => {
 return (
    <header>
        <div className="headContainer">
                <div className="row">
                    <div className="column">
                        <h1 className="title">Little Lemon</h1>
                        <h1 className="title_2">Chicago</h1>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button type="button" class="btn btn-warning">
                            Reserve a table
                        </button>
                    </div>
                    <div className="column">
                        <img width="300px" src={Food_2} alt="person holding food" />
                    </div>
                </div>
            </div>
    </header>
 )
};

export default Header;