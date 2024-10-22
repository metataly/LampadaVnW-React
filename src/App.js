import { useState } from "react";
import "./Style.scss";

export default function App() {
  const [lamp, setLamp] = useState(false);
  const trocar = () => {
    setLamp(!lamp);
  };

  return (
    <main>
      <h1>Liberte a magia da programação com a Lâmpada de Alladin</h1>
      <img
        src={
          lamp
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
        }
        alt="Gênio da Lâmpada"
      />

      <button onClick={trocar}> Clique Aqui</button>
    </main>
  );
}
