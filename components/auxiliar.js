

/**
 * Get user token
 * @param {string} email User email
 * @param {string} password User password
 * @returns {object} Object with error or data properties
 */
export const getToken = async (email, password) => {
  const url = "http://127.0.0.1:8080/FoodDelivery/rest/auth";

  try {
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data = await response.json();

    if (data == undefined || data.status == 401) {
      return {
        error: data,
        data: null,
      };
    } else {
      return {
        error: null,
        data: data,
      };
    }
  } catch (error) {
    return {
      error: error,
      data: null,
    };
  }
};

/**
 * Get user token
 * @param {Token} token User token
 * @returns {boolean} Object with error or data properties
 */
export const verifyToken = async (token) => {
  const url = "http://127.0.0.1:8080/FoodDelivery/rest/auth/verify";

  try {
    const formData = new URLSearchParams();
    formData.append("token", token);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data = await response.json();

    if (data == undefined || data.status == 401) {
      return {
        error: data,
        data: null,
      };
    } else {
      return {
        error: null,
        data: data,
      };
    }
  } catch (error) {
    return {
      error: error,
      data: null,
    };
  }
};


/**
 * Get user details
 * @param {string} token auth
 * @returns
 * 
 */
export const getUser = async (token) => {
    const url ="localhost:3000/rest/users/UserEdit";
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
}

/**
 * Delete user
 * @param {string} token auth
 * @returns
 */
export const deleteUser = async (token) => {
    const url ="localhost:3000/rest/login";
    try {
      const response = await fetch(url, {
        method: "DELETE",
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
}

/**
 * Update user
 * @param {string} token auth
 * @param {object} user user
 * @returns
 */
export const updateUser = async (token, user) => {
    const url ="localhost:3000/rest/login";
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
          body: JSON.stringify({
            user: user,
          }),
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
}

/**
 * Create user
 * @param {string} token auth
 * @returns
 */

/**
 * Get restaurants
 * @param {string} token auth
 * @returns
 */
export const getRestaurants = async (token) => {
    const url ="localhost:3000/rest/restaurants";
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
}

/**
 * Get restaurant
 * @param {string} token auth
 * @param {string} id restaurant id
 * @returns
 */
export const getRestaurant = async (token, id) => {
    const url ="localhost:3000/rest/restaurants/" + id;
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
}

/**
 * Update restaurant
 * @param {string} token auth
 * @param {string} id restaurant id
 * @param {object} values restaurant values
 * @returns
 */
export const updateRestaurant = async (token, id, values) => {
    const url ="localhost:3000/rest/restaurants/" + id;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(values),
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
}


/**
 * Get categories
 * @param {string} token auth
 * @returns
 */
export const getCategories = async (token) => {
    const url ="localhost:3000/rest/categories";
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
}

/**
 * Get category
 * @param {string} token auth
 * @returns
 */
export const getCategory = async (token, id) => {
    const url ="localhost:3000/rest/categories/" + id;
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
    finally{
        if (data.errors) {
          const defaultCategory = {
            id: 0,
            name: "Sin categoría",
            description: "Sin descripción",
          };
          return {
            error: null,
            data: defaultCategory,
          };
        }
    }
}

/**
 * Get userDetail
 * @param {string} token auth
 * @returns
 */
export const getUserDetail = async (token) => {
    const url ="localhost:3000/rest/userDetail";
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
}


