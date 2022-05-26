import "../App.css";

const ShowRepository = ({ item }) => {

  return (
    
    <div className="show_repo">
      <img src={item.owner.avatar_url} alt="profile"
      style={{borderRadius: "50px",background:"gray", width: "30%"}}
      />
      <p>{item.owner.login}</p>
      <p>Repository</p>
      <a href={item.git_url.split(":")[1]}>
        https:{item.git_url.split(":")[1]}
      </a>
    </div>
  );
};

export default ShowRepository;
