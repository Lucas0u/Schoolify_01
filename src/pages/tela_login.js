import Login from "@/components/tela_login/Login";
import styles from "@/styles/Login.module.css";

export default function TelaLogin() {
  return (
    <div className={styles.tela_login}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/assets/icones/Logo.svg" alt="Logo Schoolify" />
          <h3>Painel de controle</h3>
          <p className={styles.descricao}>
            O Schoolify é um aplicativo de gestão escolar que visa melhorar a
            comunicação entre escolas e pais. Com ele, você pode gerenciar
            atividades, eventos e mensagens de forma eficiente.
          </p>
        </div>
        <div className={styles.container_login}>
          <Login />
        </div>
      </div>
      <footer className={styles.footer}>
        <p>
          Ao continuar, voc  concorda com os <a href="/termos-de-uso" className={styles.link}>Termos de Serviço</a> e <a href="/politica-de-privacidade" className={styles.link}>Politica de Privacidade</a> do Schoolify.
        </p>
      </footer>
    </div>
  );
}