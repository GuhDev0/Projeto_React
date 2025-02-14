import CardSobre from './Card_sobre'
import styles from './SecaoSobre.module.css'
export default function Contato(){
    return(
        <div>
                <div className={styles.container_produto}>
                    <h2>QUEM SOMOS NÓS?</h2>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                    <CardSobre/>
                </div>
        </div>
    )
}