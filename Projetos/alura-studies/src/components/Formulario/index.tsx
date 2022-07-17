import React from "react";
import Botao from "../Botao";
import style from "./formulario.module.scss";
function Formulario() {
  return (
    <form className={style.novaTarefa}>
      <h2>Tarefas</h2>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa"></label>
        <input
          type="text"
          name="tarefa"
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
          step={1}
          min={"00:00:00"}
          max={"03:00:00"}
          required
        />
      </div>
      <Botao />
    </form>
  );
}

export default Formulario;
