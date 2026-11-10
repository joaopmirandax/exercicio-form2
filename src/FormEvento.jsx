import { useState } from "react";

function FormEvento() {
  // Estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipoParticipante, setTipoParticipante] = useState("estudante");
  const [turno, setTurno] = useState("manha");
  const [oficinas, setOficinas] = useState([]);
  const [aceiteRegulamento, setAceiteRegulamento] = useState(false);

  function handleOficina(event) {
    const { value, checked } = event.target;

    if (checked) {
      // Adiciona a oficina marcada em um novo array
      setOficinas([...oficinas, value]);
    } else {
      // Remove do array a oficina que foi desmarcada
      setOficinas(oficinas.filter((oficina) => oficina !== value));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Mostra no console todos os dados preenchidos
    console.log("Dados da inscrição:", {
      nome,
      email,
      tipoParticipante,
      turno,
      oficinas,
      aceiteRegulamento,
    });

    // Volta todos os campos para o estado inicial
    setNome("");
    setEmail("");
    setTipoParticipante("estudante");
    setTurno("manha");
    setOficinas([]);
    setAceiteRegulamento(false);
  }

  return (
    <main className="pagina">
      <form className="formulario" onSubmit={handleSubmit}>
        <h1>Evento de Tecnologia</h1>
        <p>Preencha os dados abaixo para realizar sua inscrição.</p>

        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <fieldset>
          <legend>Tipo de participante</legend>

          <label className="opcao">
            <input
              type="radio"
              name="tipoParticipante"
              value="estudante"
              checked={tipoParticipante === "estudante"}
              onChange={(event) => setTipoParticipante(event.target.value)}
            />
            Estudante
          </label>

          <label className="opcao">
            <input
              type="radio"
              name="tipoParticipante"
              value="profissional"
              checked={tipoParticipante === "profissional"}
              onChange={(event) => setTipoParticipante(event.target.value)}
            />
            Profissional
          </label>
        </fieldset>

        <label htmlFor="turno">Turno preferido</label>
        <select id="turno" value={turno} onChange={(event) => setTurno(event.target.value)}>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>

        <fieldset>
          <legend>Oficinas de interesse</legend>

          <label className="opcao">
            <input
              type="checkbox"
              value="frontend"
              checked={oficinas.includes("frontend")}
              onChange={handleOficina}
            />
            Front-end
          </label>

          <label className="opcao">
            <input
              type="checkbox"
              value="backend"
              checked={oficinas.includes("backend")}
              onChange={handleOficina}
            />
            Back-end
          </label>

          <label className="opcao">
            <input
              type="checkbox"
              value="dados"
              checked={oficinas.includes("dados")}
              onChange={handleOficina}
            />
            Dados
          </label>

          <label className="opcao">
            <input
              type="checkbox"
              value="ia"
              checked={oficinas.includes("ia")}
              onChange={handleOficina}
            />
            Inteligência Artificial
          </label>
        </fieldset>

        <label className="opcao aceite">
          <input
            type="checkbox"
            checked={aceiteRegulamento}
            onChange={(event) => setAceiteRegulamento(event.target.checked)}
          />
          Aceito o regulamento do evento
        </label>

        <button type="submit" disabled={!aceiteRegulamento}>
          Fazer inscrição
        </button>
      </form>
    </main>
  );
}

export default FormEvento;
