import styles from "@/styles/Eventos.module.css"

export default function EventosRegistrados({evento}){
    return(
        <div className={styles.containerEventosRegistrados}>
            <h2>Eventos</h2>
            <div>
                <p>Não há eventos registrados no momento!</p>
            </div>
        </div>
    )
}