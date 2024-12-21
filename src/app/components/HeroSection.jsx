'use client';
import styles from './HeroSection.module.css';

function HeroSection() {
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalog');
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Сладкий сундук</div>
        <div className={styles.contact}>
          <img
              src="/images/gps.png"
              alt="Телефон"
              className={styles.gpsIcon}
          />
          <div className={styles.location}>
            <span>г. Санкт Петербург, ул. Куйбышева 31</span>
          </div>
          <img
              src="/images/phone.png"
              alt="Телефон"
              className={styles.phoneIcon}
          />
          <div className={styles.phone}>
            <span>8 (812) 844-95-49</span>
            <div className={styles.workingHours}>Ежедневно с 9:00 до 20:00</div>
          </div>
       </div>
      </header>

      <section className={styles.hero}>
        <span className={styles.taste}>ВКУСНЕЙШИЕ</span>
        <div className={styles.container}>
          <h1>Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу</h1>
          <p>Приготовим за 3 часа в день заказа.</p>
          <p>Доставка на авто в холодильнике.</p>
          <button className={styles.button} onClick={scrollToCatalog}>Перейти в каталог</button>
        </div>
        <span className={styles.nine}>9 различных видов на выбор</span>
        <div className={styles.cherrys}>
          <div className={styles.leftImage}>
            <img src="/images/berry.png" alt="Ягода слева" />
          </div>
          <div className={styles.rightImage}>
            <img src="/images/berry.png" alt="Ягода справа" />
          </div>
          <div className={styles.botImage}>
            <img src="/images/berry.png" alt="Ягода внизу" />
          </div>
          <div className={styles.hleafImage}>
            <img src="/images/leaf.png" alt="Листок слева" />
          </div>
      </div>
      </section>
    </>
  );
}
export default HeroSection;