import styles from './SecaoContato.module.css'
import Card_Contato from './Card_Contato'

export default function Contato(){
    return(
        <div className={styles.container_contato}>
            <h3>
            Fale conosco
            </h3>
            <p>
            Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
            </p>
            <Card_Contato/>
        </div>
    
    )
        
}
