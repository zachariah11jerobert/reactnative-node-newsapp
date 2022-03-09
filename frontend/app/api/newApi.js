import apiClient from "./client";

const getAll = async () => {
  try {
    const response = await apiClient.get("/news");
    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
    console.log("Error while getting all news.", error.message);
  }
};

const getByCategory = (category, qty) => {
  const endpoint = qty ? `/news/${category}/${qty}` : `/news/${category}`;

  try {
    const response = await apiClient.get(endpoint);
    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
    console.log("Error while gettingCategorisNews.", error.message);
  }
};

export default {
  getAll,
  getByCategory,
};
