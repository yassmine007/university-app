
import { useState } from "react";
import "./App.css";

import img1 from "./assets/image1.jpeg";
import img2 from "./assets/image2.jpeg";
import img3 from "./assets/image3.jpeg";

import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import StudentForm from "./components/StudentForm.jsx";
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
  const [filtre, setFiltre] = useState("Toutes");

  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
    };

    setStudents((anciensEtudiants) => [
      ...anciensEtudiants,
      etudiantAvecId,
    ]);
  }

  function supprimerEtudiant(id) {
    setStudents((anciensEtudiants) =>
      anciensEtudiants.filter((student) => student.id !== id)
    );
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

        <StudentForm onAjouter={ajouterEtudiant} />

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
