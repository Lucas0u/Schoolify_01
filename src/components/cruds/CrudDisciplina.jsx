import styles from "@/styles/Crud.module.css";
import { faPencil, faScroll, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Botao from "../botoes/Botao";

const CrudDisciplina = () => {
  const [nome, setNome] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [disciplinas, setDisciplinas] = useState([]);

  // Simulação de buscar disciplinas do banco (pode ser substituída por uma chamada de API real)
  const fetchDisciplinas = () => {
    setDisciplinas([
      {
        id: 1,
        nome: "Matemática",
        imgUrl: "https://static.vecteezy.com/ti/vetor-gratis/p1/20277225-matematica-rabisco-definir-educacao-e-estude-conceito-escola-equipamento-matematicas-formulas-dentro-esboco-estilo-mao-desenhado-ector-ilustracao-isolado-em-branco-fundo-vetor.jpg"
      },
      {
        id: 2,
        nome: "História",
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/002/236/242/small_2x/history-minimal-thin-line-icons-set-vector.jpg"
      }
    ]);
  };

  useEffect(() => {
    fetchDisciplinas();
  }, []);

  // Função para adicionar uma nova disciplina
  const handleSubmit = (e) => {
    e.preventDefault();
    const novaDisciplina = { nome, imgUrl };
    setDisciplinas([...disciplinas, novaDisciplina]); // Adiciona a nova disciplina ao estado
    setNome(""); // Limpa o campo de nome
    setImgUrl(""); // Limpa o campo de URL da imagem
  };

  return (
    <div className={styles.crudGeral}>
      <div className={styles.formContainer}>
        <FontAwesomeIcon icon={faScroll} className={styles.icon} />
        <h1>Disciplinas</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="nome">Disciplina:</label>
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
        </form>
      </div>

      <div className={styles.lista_Container}>
        <h1>Lista de Disciplinas</h1>
        <ul>
          {disciplinas.map((disciplina, index) => (
            <li key={index} className={styles.listItem}>
              <p>{disciplina.nome}</p>
              <img src={disciplina.imgUrl} alt={disciplina.nome} className={styles.imagemDisciplina} />
              <button className={styles.botaoDeletar}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button className={styles.botaoEditar}>
                <FontAwesomeIcon icon={faPencil} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CrudDisciplina;
