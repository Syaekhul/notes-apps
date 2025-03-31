import "./src/components/note-list.js";
import { getAllNotes } from "./src/data/note-storage.js";

export function initNotesApp() {
  document.addEventListener("DOMContentLoaded", function () {
    const notes = getAllNotes();
    console.log("All Notes:", notes);

    document.dispatchEvent(new CustomEvent("notesUpdated", { detail: notes }));
  });
}
