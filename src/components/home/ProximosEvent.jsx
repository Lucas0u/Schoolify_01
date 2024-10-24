import styles from "@/styles/Home.module.css";
import Calendario from "../calendario/Calendario";

export default function ProximosEvent() {
  return (
    <div className={styles.proximosEventos}>
      <h2>Próximos Eventos</h2>
      <p>Aqui estar  os eventos recentes</p>
      <Calendario tamanho="pequeno"/>
    </div>
  );
}