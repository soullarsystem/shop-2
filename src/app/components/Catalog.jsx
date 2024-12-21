import styles from './Catalog.module.css';
import prisma from '../../../lib/prisma';
import Link from 'next/link';

export default async function Catalog() {

  const items = await prisma.card.findMany();

  return (
    <section className={styles.catalog} id="catalog">
      <h2>Для любых событий и дорогих вам людей</h2>
      <img src="/images/berry.png" alt="Ягода вверху" className={styles.Tberry} />
      <div className={styles.grid}>
      {items.map((item) => (
      <Link href={`/test/${item.id}`} key={item.id} className={styles.card}>
        <div>
          <img src={item.imageUrl} alt={item.name} className={styles.image} />
          <h3 className={styles.name}>{item.name}</h3>
          <p className={styles.des}>{item.description}</p>
          <p className={styles.price}>{item.price}</p>
          <button className={styles.button2}>Заказать</button>
        </div>
      </Link>
    ))}

      </div>

      <img src="/images/leaf.png" alt="Листок справа" className={styles.Rleaf} />
      <img src="/images/leaf.png" alt="Листок слева" className={styles.Lleaf} />
    </section>
  );
}
