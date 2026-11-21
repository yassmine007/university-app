import { useState } from "react";

function StudentForm(props){
    const [nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [email, setemail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [ville,setVille] = useState("");
    const [filiere, setFiliere] = useState("");
    const [annee, setAnnee] = useState("2026/2027");
    const [image, setImage] = useState("");


    function handleSubmit(e) {
    e.preventDefault();
    const nouvelEtudiant = {
        nom: Prenom + " " + nom,
        prenom: Prenom,
        email: email,
        telephone: telephone,
        ville:ville,
        filiere: filiere,
        Année:annee,
        image: image ? URL.createObjectURL(image) : "",
    };
    props.onAjouter(nouvelEtudiant);
}



    return( <form className="Student-Form" onSubmit={handleSubmit}>
        <h3>Add student</h3>
        <div className="f">
            <label htmlFor="nom">Nom</label>
            <input id="nom"type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
        </div>
        <div className="f">
            <label htmlFor="Prenom">Prenom</label>
            <input id="Prenom" type="text" value={Prenom} onChange={(e) => setPrenom(e.target.value)}/>
        </div>
        <div className="">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setemail(e.target.value)}/>
        </div>
        <div className="f">
           <label htmlFor="telephone">Telephone</label>
          <input id="telephone" type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)}/> 
        </div>
        <div className="f">
            <label htmlFor="ville">Ville</label>
            <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} />
        </div>
        <div className="f">
            <label htmlFor="filiere">Filiere</label>
            <select id="filiere" value={filiere} onChange={(e) => setFiliere(e.target.value)}>
                <option value="" disabled>select filiere</option>
                <option value="GLSI">GLSI</option >
                <option value="DSI" >DSI</option>
                <option value="RSI" >RSI</option>
            </select>
        </div>
        <div className="f">
            <label htmlFor="Annee">Année</label>
            <input id="annee" type="text" value={annee} onChange={(e) => setannee(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="image">Image: </label>
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        </div>

<button type="submit">Ajouter</button>

    </form>)

 
}


export default StudentForm;