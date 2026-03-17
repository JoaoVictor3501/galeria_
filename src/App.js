import { useState, useEffect } from "react";

function App() {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/imagens")
      .then((res) => res.json())
      .then((dados) => setImagens(dados));
  }, []);

  return (
    <div>
      <h1>Galeria de Imagens</h1>

      {imagens.map((img) => (
        <img
          key={img.id}
          src={img.download_url}
          alt={img.author}
          width="200"
        />
      ))}
    </div>
  );
}

export default App;