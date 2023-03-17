import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="bulling" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Modern billing and invoicing software makes it easy to control your finances. You can automate the entire billing process, customize your invoices, and track payments in real-time. This can save you time and money, allowing you to focus on growing your business.</p>
    
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div>
    </div>  
  </section>
)

export default Billing