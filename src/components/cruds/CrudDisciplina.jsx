import styles from "@/styles/Crud.module.css";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Botao from "../botoes/Botao";

const DisciplinaManager = () => {
  const [nome, setNome] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [disciplinas, setDisciplinas] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Função para buscar disciplinas
  const fetchDisciplinas = async () => {
    const response = await fetch("url-da-sua-api/disciplinas");
    const data = await response.json();
    setDisciplinas(data);
  };

  useEffect(() => {
    fetchDisciplinas();
  }, []);

  // Função para criar disciplina
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

      setSuccessMessage("Disciplina criada com sucesso!");
      setNome("");
      setImgUrl("");
      fetchDisciplinas(); // Atualiza a lista de disciplinas
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Função para deletar disciplina
  const deletarDisciplina = async (id) => {
    try {
      await fetch(`url-da-sua-api/disciplinas/${id}`, {
        method: "DELETE",
      });
      fetchDisciplinas(); // Atualiza a lista de disciplinas
      setSuccessMessage("Disciplina deletada com sucesso!");
    } catch (error) {
      setErrorMessage("Erro ao deletar disciplina.");
    }
  };

  return (
    <div className={styles.crudGeral}>
      <div className={styles.formContainer}>
        <FontAwesomeIcon icon={faScroll} className={styles.icon} />
        <h1>Disciplina</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="ex: Matemática"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="imgUrl">Imagem:</label>
            <input
              type="text"
              id="imgUrl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              placeholder="URL da imagem"
              required
            />
          </div>
          <Botao type="submit" className={styles.botaoRegisto}>
            Registrar
          </Botao>
          {successMessage && <p className={styles.success}>{successMessage}</p>}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </form>
      </div>

      <div className={styles.lista_container}>
        <h1>Disciplinas</h1>
        <ul>
          {disciplinas.map((disciplina) => (
            <li key={disciplina.id} className={styles.listItem}>
              <h2>{disciplina.nome}</h2>
              <img src={disciplina.imgUrl} alt={disciplina.nome} />
              <button onClick={() => deletarDisciplina(disciplina.id)} className={styles.deleteButton}>
                Deletar
              </button>
              <button className={styles.updateButton}>
                Atualizar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisciplinaManager;
