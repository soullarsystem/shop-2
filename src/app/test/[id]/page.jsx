import prisma from "../../../../lib/prisma";
import styles from "./Page.module.css";

export default async function Page({ params }) {
    const { id } = await params;
    const cardList = await prisma.card.findMany();

    // Найти нужный товар по id
    const product = cardList.find((post) => id == post.id);
    
    return (
        <div className={styles.pageContainer}>
            <div className={styles.cardContainer}>
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className={styles.productImage}
                />
                <h2 className={styles.productTitle}>
                    {product.name}
                </h2>
                <p className={styles.productDescription}>
                    {product.description}
                </p>
                <p className={styles.productPrice}>
                    Цена: {product.price} ₽
                </p>
                <div className={styles.buttonContainer}>
                    <button className={styles.buyButton}>
                        Купить
                    </button>
                    <button className={styles.cartButton}>
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    );
}