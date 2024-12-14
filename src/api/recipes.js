import api from "src/api";

export const fetchRecipes = async (signal) => {
  try {
    const response = await api.get("/recipes", { signal }); // Passer le signal d'abandon à la requête
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes", error);
    throw error; // Remonte l'erreur pour une gestion ultérieure
  }
};
