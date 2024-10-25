import styles from "@/styles/Home.module.css";
import Calendario from "../calendario/Calendario";

export default function ProximosEvent() {
  return (
    <div className={styles.proximosEventos}>
      <div className={styles.titulo}>
        <h2>Próximos Eventos</h2>
      </div>
      <div className={styles.conteudoEventos}>
        <div className={styles.calendario}>
          <Calendario tamanho="pequeno" />
        </div>
        <div className={styles.cardsCalendario}>
          cards
        </div>
      </div>
    </div>
  );
}
