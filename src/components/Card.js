import { MdOutlineDeliveryDining } from "react-icons/md";

const Card = ( {image, title, price, description }) => {
    return (
        <div>
            <img width="300px" src={image} alt="food" />
            <div>
                <div>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
                <p>{description}</p>
                <span>
                    Order a Delivery
                    <MdOutlineDeliveryDining
                    size={30}
                    />
                </span>
            </div>
        </div>
    )
}

export default Card;