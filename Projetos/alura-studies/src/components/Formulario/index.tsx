import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adcionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state, selecionado: false, completado: false, id: uuidv4() },
    ]);
    this.setState({
      tarefa: "",
      tempo: "00:00",
    });
  }

  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adcionarTarefa.bind(this)}
      >
        <h2>Tarefas</h2>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa"></label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
            id="tarefa"
            placeholder="O que você quer estudar ?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            step={1}
            min={"00:00:00"}
            max={"03:00:00"}
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}

export default Formulario;
