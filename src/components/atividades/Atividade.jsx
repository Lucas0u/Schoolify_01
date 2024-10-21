import styles from "@/styles/Atividade.module.css";
import { useState } from "react";

const CreateDisciplina = () => {
  const [nome, setNome] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("url-da-sua-api/disciplinas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, imgUrl }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar disciplina");
      }

      const data = await response.json();
      setSuccessMessage(`Disciplina criada com sucesso: ${data.nome}`);
      setNome("");
      setImgUrl("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Criar Disciplina</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="nome">Nome da Disciplina:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="imgUrl">URL da Imagem:</label>
          <input
            type="text"
            id="imgUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Criar Disciplina
        </button>
      </form>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default CreateDisciplina;
