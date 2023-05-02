

/**
 * Get and search dashboard
 * @param {string} token auth
 * @returns
 */
export const searchDashboard = async (token) => {
    const url ="UrlAPoner";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const data = await response.json();
      if (data.errors) {
        return {
          error: data.errors,
          data: null,
        };
      } else {
        return {
          error: null,
          data: data.data,
        };
      }
    } catch (error) {
      return {
        error: error,
        data: null,
      };
    }
  };