import styles from '@/styles/Atividade.module.css';
import Botao from '@/components/botoes/Botao'

export default function AddComentarios(){
    return(
        <div className={styles.containerComentario}>
            <h2>Comentários</h2>

            <div className={styles.containerForm}>
                <form name='AddComentario' action="#" method="POST">
                    <textarea rows= '4' placeholder='Digite seu comentário' name='comentario' id='comentario' required></textarea>
                    <Botao className={styles.botaoComentario} type='submit'>Enviar</Botao>
                </form>
            </div>
        </div>
    )
}