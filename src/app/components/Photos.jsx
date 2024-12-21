import styles from './Photos.module.css';

function Photos(){
    return(
        <section className={styles.photos}>
            <h3 className={styles.head}>Сделали более 3.000 заказов за 2 года</h3>
            <div className={styles.subtitle}>Посмотрите фото реальных заказов из нашего Instagram</div>
            <div className={styles.content}>
                <img src='/images/inst1.jpg' alt='1 photo' className={styles.item}></img>
                <img src='/images/inst2.jpg' alt='2 photo' className={styles.item}></img>
                <img src='/images/inst3.jpg' alt='3 photo' className={styles.item}></img>
                <img src='/images/inst4.jpg' alt='4 photo' className={styles.item}></img>
                <img src='/images/inst5.jpg' alt='5 photo' className={styles.item}></img>
                <img src='/images/inst6.jpg' alt='6 photo' className={styles.item}></img>
                <img src='/images/inst7.jpg' alt='7 photo' className={styles.item}></img>
                <img src='/images/inst8.jpg' alt='8 photo' className={styles.item}></img>
                <img src='/images/inst9.jpg' alt='9 photo' className={styles.item}></img>
            </div>
            <img src='/images/01.png' alt='end' className={styles.endp}></img>

        </section>
    );
}
export default Photos;