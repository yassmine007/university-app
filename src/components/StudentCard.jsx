
import { useState } from "react";

function StudentCard(props) {
  const [informationsVisibles, setInformationsVisibles] = useState(false);

  function afficherMasquer() {
    setInformationsVisibles(!informationsVisibles);
  }

  return (
    <div className="student-card">
      <div className="student-card-header">
        {props.image && (
      <img
        src={props.image}
        alt={props.nom}
        className="student-image"
        />
)}
      </div>

      <h3>{props.nom}</h3>

      <button onClick={afficherMasquer}>
        {informationsVisibles
          ? "Masquer les informations"
          : "Afficher les informations"}
      </button>

      {informationsVisibles && (
        <div className="student-information">
          <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.tel}</p>
          <p><strong>Filière :</strong> {props.filiere}</p>
          <p><strong>Année :</strong> {props.annee}</p>
          <p><strong>Groupe :</strong> {props.groupe}</p>
          <p><strong>Ville :</strong> {props.ville}</p>
        </div>
      )}

      <div className="student-card-actions">
        <button onClick={props.onModifier}>
          Modifier le nom
        </button>

        <button onClick={props.onSupprimer}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;