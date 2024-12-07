import { mangaVerseApiKey } from "@/constants";
import axios from "axios";

export const fetchManga = async () => {
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/fetch",
    params: {
      page: "1",
      nsfw: "false",
      type: "japan",
    },
    headers: {
      "x-rapidapi-key": mangaVerseApiKey,
      "x-rapidapi-host": "mangaverse-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchMangaWithGenres = async (genres: string) => {
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/fetch",
    params: {
      page: "1",
      genres: genres,
      nsfw: "false",
      type: "japan",
    },
    headers: {
      "x-rapidapi-key": mangaVerseApiKey,
      "x-rapidapi-host": "mangaverse-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchLatest = async () => {
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/latest",
    params: {
      page: "1",
      nsfw: "false",
      type: "japan",
    },
    headers: {
      "x-rapidapi-key": mangaVerseApiKey,
      "x-rapidapi-host": "mangaverse-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const searchManga = async (query: string) => {
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/search",
    params: {
      text: query,
      nsfw: "false",
      type: "japan",
    },
    headers: {
      "x-rapidapi-key": mangaVerseApiKey,
      "x-rapidapi-host": "mangaverse-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getManga = async (mangaId: string) => {
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga",
    params: {
      id: mangaId,
    },
    headers: {
      "x-rapidapi-key": mangaVerseApiKey,
      "x-rapidapi-host": "mangaverse-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const fetchChapters = async (mangaId: string) => {
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/chapter",
    params: {
      id: mangaId,
    },
    headers: {
      "x-rapidapi-key": mangaVerseApiKey,
      "x-rapidapi-host": "mangaverse-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchChapterImages = async (chapterId: string) => {
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/image",
    params: {
      id: chapterId,
    },
    headers: {
      "x-rapidapi-key": mangaVerseApiKey,
      "x-rapidapi-host": "mangaverse-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
