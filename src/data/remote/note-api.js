import Swal from "sweetalert2";

const BASE_URL = "https://notes-api.dicoding.dev/v2";

const showLoading = () => {
  const loader = document.getElementById("loading");
  if (loader) loader.style.display = "block";
};

const hideLoading = () => {
  const loader = document.getElementById("loading");
  if (loader) loader.style.display = "none";
};

const showError = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};

const NotesApi = {
  async getNotes() {
    showLoading();
    try {
      const response = await fetch(`${BASE_URL}/notes`);
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      return result.data;
    } catch (error) {
      showError(`Error fetching notes: ${error.message}`);
      return [];
    } finally {
      hideLoading();
    }
  },

  async getArchivedNotes() {
    showLoading();
    try {
      const response = await fetch(`${BASE_URL}/notes/archived`);
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      return result.data;
    } catch (error) {
      showError(`Error fetching archived notes: ${error.message}`);
      return [];
    } finally {
      hideLoading();
    }
  },

  async getNote(id) {
    showLoading();
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}`);
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      return result.data;
    } catch (error) {
      showError(`Error fetching note with id ${id}: ${error.message}`);
      return null;
    } finally {
      hideLoading();
    }
  },

  async createNote(title, body) {
    showLoading();
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      return result.data;
    } catch (error) {
      showError(`Error creating note: ${error.message}`);
      return null;
    } finally {
      hideLoading();
    }
  },

  async archiveNote(id) {
    showLoading();
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {
        method: "POST",
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      return result.message;
    } catch (error) {
      showError(`Error archiving note with id ${id}: ${error.message}`);
      return null;
    } finally {
      hideLoading();
    }
  },

  async unarchiveNote(id) {
    showLoading();
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}/unarchive`, {
        method: "POST",
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      return result.message;
    } catch (error) {
      showError(`Error unarchiving note with id ${id}: ${error.message}`);
      return null;
    } finally {
      hideLoading();
    }
  },

  async deleteNote(id) {
    showLoading();
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      return result.message;
    } catch (error) {
      showError(`Error deleting note with id ${id}: ${error.message}`);
      return null;
    } finally {
      hideLoading();
    }
  },
};

export default NotesApi;
