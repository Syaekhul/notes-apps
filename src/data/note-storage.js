import { notesData } from "./note-data.js";

const STORAGE_KEY = "userNotes";

// Ambil data dari Local Storage
function getNotesFromLocalStorage() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Simpan data ke Local Storage
function saveNotesToLocalStorage(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// Tambahkan catatan baru ke Local Storage
export function addNoteToStorage(newNote) {
  const storedNotes = getNotesFromLocalStorage();
  storedNotes.push(newNote);
  saveNotesToLocalStorage(storedNotes);
}

// Hapus catatan dari Local Storage berdasarkan ID
export function deleteNoteFromStorage(noteId) {
  let storedNotes = getNotesFromLocalStorage();
  storedNotes = storedNotes.filter((note) => note.id !== noteId);
  saveNotesToLocalStorage(storedNotes);
}

// Toggle status arsip di Local Storage
export function toggleArchiveNoteInStorage(noteId) {
  const storedNotes = getNotesFromLocalStorage();
  const note = storedNotes.find((note) => note.id === noteId);
  if (note) {
    note.archived = !note.archived;
    saveNotesToLocalStorage(storedNotes);
  }
}

// Gabungkan data default (`note-data.js`) dengan Local Storage
export function getAllNotes() {
  return [...notesData, ...getNotesFromLocalStorage()];
}
