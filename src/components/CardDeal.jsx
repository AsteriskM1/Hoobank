import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Finding a better card deal is now easier than ever, thanks to online comparison tools. With just a few easy steps, you can find a better card deal and start enjoying the benefits of a credit card that works for you.</p>
    
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card"  className="w-[100%] h-[100%]"/>
    </div>
  </section>
)


export default CardDeal