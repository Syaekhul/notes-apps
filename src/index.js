import "./styles/styles.css";
import NotesApi from "./data/remote/note-api.js";
import "./components/header-bar.js";
import "./components/add-note.js";
import "./components/note-list.js";
import "./components/footer-bar.js";
import "./animation/animation.js";

NotesApi.getNotes().then((data) => {
  console.log(data);
});
