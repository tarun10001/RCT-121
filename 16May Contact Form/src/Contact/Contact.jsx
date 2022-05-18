import { nanoid } from 'nanoid';
import ContactDetails from "./ContactDetails";
import "../App.css"


const Contact = () => {
let data = [
    {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JzeiQmejq_mbO2t8udr_FtNZKJajkK_iGw&usqp=CAU",
      username: "Annette Murphy",
      email: "sara.cruz@example.com",
      number:"+91-9213432112"
    },
    {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-fmRi8kX2kr5IE-0wawV-dtUZvS_HOmyRA&usqp=CAU",
      username: "Theresa Watson",
      email: "michael.mitchell@example.com",
      number:"+91-9712343211"
    },
    {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmRlghCtTnC-2Z7iViT50l8WTApclrdIzLA&usqp=CAU",
      username: "Cody Howard",
      email: "glen.lane@example.com",
      number:"+91-9854545411"
    },
    {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pkmklU5XKE2uaQgXV1O7NfItFPPelXcDew&usqp=CAU",
      username: "Max Lane",
      email: "dwight.fleming@example.com",
      number:"+91-9341212121"
    },
    {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMWn2VzlfvjfN9QdKqP38M6QPOgXK-33Y5A&usqp=CAU",
      username: "Marvin Fisher",
      email: "kelly.howard@example.com",
      number:"+91-9865654311"
    },
    {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgl9cSlU8TeOp83ZxiyBaNp2ZY90OsliBWWg&usqp=CAU",
      username: "Brooklyn Mccoy",
      email: "chad.stephens@example.com",
      number:"+91-9876767651"
    },
  ];

  return (
      <div className="card">
          <h2>CONTACT FORM</h2>
          <h4>Click on the Contact Card to show the mobile no.</h4>
          {data.map((item) => (
          <div key={nanoid()}>
              <ContactDetails item={item} />
          </div>
          ))}
      </div>
  )
  };

  export default Contact;