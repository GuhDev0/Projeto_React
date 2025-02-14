
import styles from './SecaoProduto.module.css'

import Card from './Cards/card'

export default function SecaoProduto() {
    return (
        <div>
            <div className={styles.container_produto}>
                <div className={styles.container_text1}>
                    <h2>Nossos produtos</h2>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>
               <Card/>
                <div>
                    <h3>
                    Todos os nossos produtos incluem:
                    </h3>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}