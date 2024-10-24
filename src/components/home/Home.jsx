import styles from "@/styles/Home.module.css";

export default function HomeComp() {
  return (
    <div className={styles.containerTela}>
      <div className={styles.atividadesRecentes}>
        <h2>Olá, {localStorage.getItem("nome")}, Seja bem vindo</h2>
        <p>Olá, seja bem vindo ao Schoolify!</p>
        <p>Aqui estar  as atividades recentes</p>
      </div>
      <div className={styles.containersDireita}>
        <div className={styles.proximosEventos}>
          <h2>Próximos Eventos</h2>
          <p>Aqui estar  os eventos recentes</p>
        </div>
        <div className={styles.sugestoesLivros}>
          <h2>Sugestões de Leitura</h2>
          <p>Aqui estar as sugestões de livros</p>
        </div>
      </div>
    </div>
  );
}
