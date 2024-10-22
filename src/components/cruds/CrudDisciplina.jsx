import styles from "@/styles/Crud.module.css";
import { faPencil, faScroll, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Botao from "../botoes/Botao";

const CrudDisciplina = () => {
  const [nome, setNome] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [disciplinas, setDisciplinas] = useState([]);
  const [editandoDisciplina, setEditandoDisciplina] = useState(null); 

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

  // Função para criar ou atualizar disciplina
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se houver disciplina sendo editada
    if (editandoDisciplina) {
      try {
        const response = await fetch(`url-da-sua-api/disciplinas/${editandoDisciplina.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, imgUrl }),
        });

        if (!response.ok) {
          throw new Error("Erro ao atualizar disciplina");
        }

        setSuccessMessage("Disciplina atualizada com sucesso!");
        setEditandoDisciplina(null); // Reseta o estado de edição
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      // Criar nova disciplina
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
      } catch (error) {
        setErrorMessage(error.message);
      }
    }

    setNome("");
    setImgUrl("");
    fetchDisciplinas(); // Atualiza a lista de disciplinas
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

  // Função para editar disciplina
  const editarDisciplina = (disciplina) => {
    setNome(disciplina.nome); // Preenche o campo de nome
    setImgUrl(disciplina.imgUrl); // Preenche o campo de URL da imagem
    setEditandoDisciplina(disciplina); // Define qual disciplina está sendo editada
  };

  const ex_disciplina = [
    {
      nome: "Matemática",
      imgUrl: "https://static.vecteezy.com/ti/vetor-gratis/p1/20277225-matematica-rabisco-definir-educacao-e-estude-conceito-escola-equipamento-matematicas-formulas-dentro-esboco-estilo-mao-desenhado-ector-ilustracao-isolado-em-branco-fundo-vetor.jpg"
    },
    {
      nome: "História",
      imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/002/236/242/small_2x/history-minimal-thin-line-icons-set-vector.jpg"
    }
  ];

  return (
    <div className={styles.crudGeral}>
      <div className={styles.formContainer}>
        <FontAwesomeIcon icon={faScroll} className={styles.icon} />
        <h1>{editandoDisciplina ? "Editar Disciplina" : "Disciplina"}</h1>
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
            {editandoDisciplina ? "Atualizar" : "Registrar"}
          </Botao>
          {successMessage && <p className={styles.success}>{successMessage}</p>}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </form>
      </div>

      <div className={styles.lista_Container}>
        <h1>Lista de Disciplinas</h1>
        <ul>
          {ex_disciplina.map((disciplina, index) => (
            <li key={index} className={styles.listItem}>
              <p>Disciplina: {disciplina.nome}</p>
              <span>Img: </span><img src={disciplina.imgUrl} alt={disciplina.nome}/>
              <button className={styles.botaoDeletar} onClick={() => deletarDisciplina(disciplina.id)}><FontAwesomeIcon icon={faTrash} /></button>
              <button className={styles.botaoEditar} onClick={() => editarDisciplina(disciplina.id)}><FontAwesomeIcon icon={faPencil} /></button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default CrudDisciplina;
