import styles from "../page.module.css";
import utils from "@/components/utils.module.css";
import ProductGallery from "@/components/productGallery";
import AddToCart from "@/components/addToCart";
import { product } from "@/public/data";

export default function Principal() {
  return (
    <div>
      Destaques
    <div className={`${styles.main} ${utils.flex}`}>

      <h1 className={utils.srOnly}>E-Rede</h1>

      <div className={styles.productDetail}>
      
        <span
          className={`${styles.companyName} ${utils.upperCase} ${utils.textOrange400} ${utils.fs300} ${utils.fw700}`}
        >
          {product.company}
        </span>
        <img src="images/card.png" />
        <h1 className={`${utils.textNeutral700} ${utils.fs800}`}>
          {product.title}
        </h1>
        <p>{product.description}</p>
        <div className={`${styles.productPrice} ${utils.flex}`}>
          <div className={`${styles.newPrice} ${utils.flex} ${utils.fw700}`}>
            <span className={`${utils.textNeutral700} ${utils.fs500}`}>
              R${product.currentPrice.toFixed(2)}
            </span>

          </div>

        </div>
        
        <AddToCart
          name={product.title}
          price={product.currentPrice}
          thumbnail={product.images.thumbnails[0].src}
        />
      </div>
    </div>
    </div>
  );
}
