
import "./App.css";

import img1 from "./assets/image1.jpeg";
import img2 from "./assets/image2.jpeg";
import img3 from "./assets/image3.jpeg";

import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

const students = [
  {
    id: 1,
    nom: "yassmine horry",
    email: "yassminehorry@gmail.com",
    tel: "50 283 152",
    filiere: "Génie logiciel et systèmes d'information",
    annee: "2026/2027",
    groupe: "GLSI2B",
    ville: "Mahdia",
    image:  img1,
  },
  {
    id: 2,
    nom: "Slim shady",
    email: "slim@example.com",
    tel: "20 111 222",
    filiere: "Informatique",
    annee: "2026/2027",
    groupe: "GLSI2B",
    ville: "Mahdia",
    image:  img2,
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
    image:  img3,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="container" id="etudiants">
        <h1>Fiche étudiant</h1>

        <h2 className="section-title">Liste des étudiants</h2>

        <p className="section-description">
          Année universitaire 2026/2027 — GLSI 2
        </p>

        <section className="students-list">
          {students.map((student) => (
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
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
