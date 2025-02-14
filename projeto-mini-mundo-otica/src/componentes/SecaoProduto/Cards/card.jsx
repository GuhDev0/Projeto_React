import styles from './Cards.module.css'
import Ocs1 from '/public/oculos01.png' 
import Ocs2 from '/public/oculos02.png' 
import Ocs3 from '/public/oculos03.png' 
import Ocs4 from '/public/oculos04.png' 
import Image from 'next/image'

export default function Card() {
    return (
        <div className={styles.container_card_produto}>
            <div className={styles.card}>
                <h3>
                    Óculos de grau
                </h3>
                <Image src={Ocs1} alt='img-Produto' className={styles.img_card} />
                <p>
                    RS 500,00
                </p>
            </div>
            <div>
                <h3>
                    Óculos transition
                </h3>
                <Image src={Ocs2} alt='img-Produto' className={styles.card_img} />
                <p>
                    RS 750,00
                </p>
            </div>
            <div>
                <h3>
                    Óculos de sol
                </h3>
                <Image src={Ocs3} alt='img-Produto' className={styles.card_img} />
                <p>
                    RS 700,00
                </p>
            </div>
            <div>
                <h3>
                    Óculos infantil
                </h3>
                <Image src={Ocs4} alt='img-Produto' className={styles.card_img} />
                <p>
                    RS 500,00
                </p>
            </div>
        </div>
    )
}
