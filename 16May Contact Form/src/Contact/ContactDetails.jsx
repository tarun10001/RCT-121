import React, {useState} from "react";
import "../App.css"

const ContactDetails = ({item}) => {

    const [click, setClick] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <div className="main_div"
        onClick={() => handleClick()}
        >
            <div className="img_div">
                <img src={item.profile} alt="img" />
            </div>
            <div className="details_div">
                <p>{item.username}</p>
                <p>{click? item.email : item.number}</p>
            </div>
        </div>
    )
}


export default ContactDetails;