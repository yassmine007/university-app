
function StudentCard(props) {
  return (
    <div className="student-card">
      <div className="student-card-header">
        <img
          src={props.image}
          alt={props.nom}
          className="student-image"
        />
      </div>

      <h3>{props.nom}</h3>

      <div className="student-information">
        <p><strong>Email :</strong> {props.email}</p>
        <p><strong>Téléphone :</strong> {props.tel}</p>
        <p><strong>Filière :</strong> {props.filiere}</p>
        <p><strong>Année :</strong> {props.annee}</p>
        <p><strong>Groupe :</strong> {props.groupe}</p>
        <p><strong>Ville :</strong> {props.ville}</p>
      </div>
    </div>
  );
}

export default StudentCard;