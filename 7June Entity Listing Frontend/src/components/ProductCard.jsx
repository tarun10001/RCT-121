import styles from "./ProductCard.module.css";

function ProductCard({ id , avatar, name , price, rating}) {
  return (
    <div data-testid="product-container" className={styles.container} key={id}>
      <img src={avatar} alt="logo" width="200px" height="200px" />
      <div>
        <div>Name : {name}</div>
      </div>
      <div>Price ₹{price}</div>
      <div>Rating {rating}</div>

    </div>
  );
}

export default ProductCard;