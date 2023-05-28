import Card from "./Card";
import greek_salad from "../images/greek_salad.jpg";
import lemon_dessert from "../images/lemon_dessert.jpg";
import bruschetta from "../images/bruschetta.svg";

const FoodData = [
    {
        img: greek_salad,
        title: "Greek Salad",
        price: 12.00,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        img: bruschetta,
        title: "Bruschetta",
        price: 5.99,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        img: lemon_dessert,
        title: "Lemon Dessert",
        price: 5.00,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    },
];


function Main() {
    const foodCards = FoodData.map((food) => {
        return (
            <Card 
            key={food.title}
            image={food.img}
            title={food.title}
            price={food.price}
            description={food.description}
            />
        )
    })
    return <main>
        <div>
            <h1>This week's specials</h1>
            <button>Online Menu</button>
        </div>
        <div>
            {foodCards}
        </div>
    </main>
}

export default Main;