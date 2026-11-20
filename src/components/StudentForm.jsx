import { useState } from "react";

function StudentForm(){
    const [nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [email, setemail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [filiere, setFiliere] = useState("");
    const [image, setImage] = useState("");





    return( <form className="Student-Form">
        <h3>Add student</h3>
        <div className="f">
            <label htmlFor="nom">Nom</label>
            <input id="nom"type="text" onChange={(e) => setNom(e.target.value)}/>
        </div>
        <div className="f">
            <label htmlFor="Prenom">Prenom</label>
            <input id="Prenom" type="text" onChange={(e) => setPrenom(e.target.value)}/>
        </div>
        <div className="">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" onChange={(e) => setemail(e.target.value)}/>
        </div>
        <div className="f">
           <label htmlFor="telephone">Telephone</label>
          <input id="number" type="tel" onChange={(e) => setTelephone(e.target.value)}/> 
        </div>
        <div className="f">
            <label htmlFor="filiere">Filiere</label>
            <select id="filiere">
                <option value="" disabled>select filiere</option>
                <option value="GLSI" onChange={(e) => setFiliere(e.target.value)}>GLSI</option >
                <option value="DSI" onChange={(e) => setFiliere(e.target.value)}>DSI</option>
                <option value="RSI" onChange={(e) => setFiliere(e.target.value)}>RSI</option>
            </select>
        </div>
        <div>
            <label htmlFor="image">Image: </label>
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.value)} />
        </div>

<button type="submit">Ajouter</button>

    </form>)
 
}

export default StudentForm;