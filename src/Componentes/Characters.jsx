import React, { useState } from "react";

function Characters(props) {
  const { characters, setCharacters } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const reset = () => {
    setCharacters(null);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handleSearch}
        className="input-search"
      />

      <br />
      <span className="back-home" onClick={reset}>
        {" "}
        Volver Al Index
      </span>
      <div className="container-characters">
        {filteredCharacters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive">Alive</span>
                  </>
                ) : (
                  <>
                    <span className="dead">Dead</span>
                  </>
                )}
              </h6>
              <p className="text-grey">
                {" "}
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p className="text-grey">
                {" "}
                <span className="text-grey">Especies: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={reset}>
        {" "}
        Volver Al Index
      </span>
    </div>
  );
}

export default Characters;
