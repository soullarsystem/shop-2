import styles from './Footer.module.css';

function Footer() {
    return (
      <footer className={styles.footer}>
        <section className={styles.block}>
          <div className={styles.booking}>Чтобы сделать заказ, укажите ваш телефон</div>
          <div className={styles.subt}>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</div>
          <form>
            <label htmlFor="phone" ></label>
            <input type="tel" id="phone" name="phone" className={styles.forma} placeholder="&#128379; Номер телефона" pattern="\+7\s?\(?9[0-9]{2}\)?\s?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}" required></input>
            <button className={styles.button3}>Сделать заказ</button>
          </form>
          <div className={styles.checkbox}>
            <input type="checkbox" id="agreementCheckbox"></input>
            <label htmlFor="agreementCheckbox">Нажимая на кнопку, вы соглашаетесь с <u>условиями обработки персональных данных</u></label>
          </div>
          <img src="/images/berry.png" alt="Ягода слева" className={styles.Rberry}/>
          <img src="/images/leaf.png" alt="Листок слева" className={styles.Lfleaf}/>
          <img src="/images/berry.png" alt="Листок справа" className={styles.Lberry}/>
          <img src="/images/leaf.png" alt="Листок слева" className={styles.Rtleaf}/>
        </section>
        <div className={styles.podv}>
          <p>Согласие на обработку данных</p>
          <p>Служба поддержки</p>
          <p>Политика конфиденциальности</p>
        </div>
        <p className={styles.ogrn}>© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000</p>
      </footer>
    );
  }
  export default Footer;