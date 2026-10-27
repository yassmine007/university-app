
import { useState } from "react";
import "./App.css";

import img1 from "./assets/image1.jpeg";
import img2 from "./assets/image2.jpeg";
import img3 from "./assets/image3.jpeg";

import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

const initialStudents = [
  {
    id: 1,
    nom: "yassmine horry",
    email: "yassminehorry@gmail.com",
    tel: "50 222 111",
    filiere: "Génie logiciel et systèmes d'information",
    annee: "2026/2027",
    groupe: "GLSI2B",
    ville: "Mahdia",
    image: img1,
  },
  {
    id: 2,
    nom: "Slim shadly",
    email: "slim@example.com",
    tel: "20 111 222",
    filiere: "Informatique",
    annee: "2026/2027",
    groupe: "GLSI2B",
    ville: "Mahdia",
    image: img2,
  },
  {
    id: 3,
    nom: "Sarra Trabelsi",
    email: "sarra.trabelsi@example.com",
    tel: "21 333 444",
    filiere: "Génie logiciel",
    annee: "2026/2027",
    groupe: "GLSI2B",
    ville: "Sousse",
    image: img3,
  },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [filiere, setFiliere] = useState("");
  const [ville, setVille] = useState("");
  const [filtre, setFiltre] = useState("Toutes");

 
  function ajouterEtudiant(e) {
    e.preventDefault();

    if (!nom.trim() || !email.trim() || !filiere.trim()) {
      alert("Veuillez remplir le nom, l'email et la filière.");
      return;
    }

    const nouvelEtudiant = {
      id: Date.now(),
      nom: nom,
      email: email,
      tel: tel,
      filiere: filiere,
      annee: "2026/2027",
      groupe: "GLSI2B",
      ville: ville,
      image: null,
    };

    setStudents([...students, nouvelEtudiant]);

    setNom("");
    setEmail("");
    setTel("");
    setFiliere("");
    setVille("");
  }

  
  function supprimerEtudiant(id) {
    setStudents(students.filter((student) => student.id !== id));
  }


function modifierEtudiant(id) {
  const nouveauNom = window.prompt("Entrez le nouveau nom :");

  if (nouveauNom === null || nouveauNom.trim() === "") {
    return;
  }

  setStudents((anciensEtudiants) =>
    anciensEtudiants.map((student) =>
      student.id === id
        ? { ...student, nom: nouveauNom.trim() }
        : student
    )
  );
}



  const studentsFiltres =
    filtre === "Toutes"
      ? students
      : students.filter((student) => student.filiere === filtre);

  const filieresDisponibles = [
    ...new Set(students.map((student) => student.filiere)),
  ];

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="container" id="etudiants">
        <h1>Fiche étudiant</h1>

        <h2 className="section-title">Ajouter un étudiant</h2>

        <form onSubmit={ajouterEtudiant}>
          <input
            type="text"
            placeholder="Nom et prénom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Téléphone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />

          <input
            type="text"
            placeholder="Filière"
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
          />

          <input
            type="text"
            placeholder="Ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          />

          <button type="submit">Ajouter</button>
        </form>

        <h2 className="section-title">Liste des étudiants</h2>

        <p className="section-description">
          Année universitaire 2026/2027 — GLSI 2
        </p>

        <label htmlFor="filtre">Filtrer par filière : </label>

        <select
          id="filtre"
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
        >
          <option value="Toutes">Toutes les filières</option>

          {filieresDisponibles.map((filiere) => (
            <option key={filiere} value={filiere}>
              {filiere}
            </option>
          ))}
        </select>

        <section className="students-list">
          {studentsFiltres.map((student) => (
            <StudentCard
              key={student.id}
              nom={student.nom}
              email={student.email}
              tel={student.tel}
              filiere={student.filiere}
              annee={student.annee}
              groupe={student.groupe}
              ville={student.ville}
              image={student.image}
              onSupprimer={() => supprimerEtudiant(student.id)}
              onModifier={() => modifierEtudiant(student.id)}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
