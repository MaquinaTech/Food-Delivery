

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

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
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
export const deleteToken = async (token) => {
  const url = "http://127.0.0.1:8080/FoodDelivery/rest/auth/delete";

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    if (data.error) {
      console.log(data.error);
      return {
        error: data.error,
        data: null,
      };
    } else {
      return {
        error: null,
        data: data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: error,
      data: null,
    };
  }
};


/**
 * Get restaurants
 * @param {string} token auth
 * @returns {object} Object with error or data properties
 */
export const getRestaurants = async (token) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/restaurants";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    if (data.error) {
      return {
        error: data.error,
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
}

/**
 * Get restaurants
 * @param {string} token auth
 * @param {float} id restaurant
 * @returns {object} Object with error or data properties
 */
export const getRestaurant = async (token, id) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/restaurants";
  try {
    const formData = new URLSearchParams();
    formData.append("idR", id);
    console.log("Id enviado: ");
    console.log(id);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
      body: formData.toString(),
    });
    const data = await response.json();
    if (data.error) {
      console.log(data.error);
      return {
        error: data.error,
        data: null,
      };
    } else {
      return {
        error: null,
        data: data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: error,
      data: null,
    };
  }
}


/**
 * Get user details
 * @param {string} token auth
 * @returns {object} Object with error or data properties
 */
export const getUser = async (token) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/users";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    if (data.error) {
      console.log(data.error);
      return {
        error: data.error,
        data: null,
      };
    } else {
      return {
        error: null,
        data: data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: error,
      data: null,
    };
  }
}

/**
 * Update user
 * @param {string} token auth
 * @param {object} values user data
 * @returns {object} Object with error or data properties
 */
export const updateUser = async (token, values) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/users/update";
  try {
    const formData = new URLSearchParams();
    formData.append("name", values.name);
    formData.append("surname", values.surname);
    formData.append("email", values.email);
    formData.append("token", token);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
      body: formData.toString(),
    });
    const data = await response.json();
    if (data.error) {
      console.log(data.error);
      return {
        error: data.error,
        data: null,
      };
    } else {
      return {
        error: null,
        data: data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: error,
      data: null,
    };
  }
}

/**
 * Update usr password
 * @param {string} token auth
 * @param {object} values user data
 * @returns {object} Object with error or data properties
 *
 */
export const updatePassword = async (token, values) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/users/password";
  try {
    const formData = new URLSearchParams();
    formData.append("password1", values.password1);
    formData.append("password2", values.password2);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
      body: formData.toString(),
    });
    const data = await response.json();
    if (data.error) {
      console.log(data.error);
      return {
        error: data.error,
        data: null,
      };
    } else {
      return {
        error: null,
        data: data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: error,
      data: null,
    };
  }
}

/**
 * Update user
 * @param {string} token auth
 * @param {object} values user data
 * @returns {object} Object with error or data properties
 */
export const deleteAccount = async (token) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/users/deleteAccount";
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    if (data.error) {
      console.log(data.error);
      return {
        error: data.error,
        data: null,
      };
    } else {
      return {
        error: null,
        data: data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: error,
      data: null,
    };
  }
}