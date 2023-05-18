

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
 * @param {object} values restaurant values
 * @returns {object} Object with error or data properties
 */
export const registerUser = async (token, values) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/auth/register";
  try {
    const formData = new URLSearchParams();
    formData.append("name", values.name);
    formData.append("surname", values.surname);
    formData.append("email", values.email);
    formData.append("telephone", values.telephone);
    formData.append("password", values.password);
    
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
    console.log(error);
    return {
      error: error,
      data: null,
    };
  }
}


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
 * @param {object} values restaurant values
 * @returns {object} Object with error or data properties
 */
export const filterRestaurants = async (token, values) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/restaurants/filter";
  try {
    const formData = new URLSearchParams();
    if(values.id){
      formData.append("name", values.name);
    }
    if(values.name){
      formData.append("address", values.address);
    }
    if(values.address){
      formData.append("available", values.available);
    }
    if(values.telephone){
      formData.append("bikeFriendly", values.bikeFriendly);
    }
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
 * Delete restaurant
 * @param {string} token auth
 * @param {object} idR restaurant id
 * @returns {object} Object with error or data properties
 */
export const deleteRestaurant = async (token,idR) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/restaurants";
  const formData = new URLSearchParams();
  formData.append("idR", idR);
  try {
    const response = await fetch(url, {
      method: "DELETE",
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
 * Get restaurants
 * @param {string} token auth
 * @param {object} values restaurant values
 * @returns {object} Object with error or data properties
 */
export const updateRestaurant = async (token, values) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/restaurants/update";
  try {
    const formData = new URLSearchParams();
    if(values.id){
      formData.append("id", values.id);
    }
    if(values.name){
      formData.append("name", values.name);
    }
    if(values.address){
      formData.append("address", values.address);
    }
    if(values.telephone){
      formData.append("telephone", values.telephone);
    }
    if(values.gardesAverage){
      formData.append("gardesAverage", values.gardesAverage);
    }
    if(values.city){
      formData.append("city", values.city);
    }
    if(values.minPrice){
      formData.append("minPrice", values.minPrice);
    }
    if(values.maxPrice){
      formData.append("maxPrice", values.maxPrice);
    }
    if(values.bikeFriendly){
      formData.append("bikeFriendly", 1);
    }
    else{
      formData.append("bikeFriendly", 0);
    }
    if(values.available){
      formData.append("available", 1);
    }
    else{
      formData.append("available", 0);
    }
    if(values.contactEmail){
      formData.append("contactEmail", values.contactEmail);
    }
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
 * Add restaurants
 * @param {string} token auth
 * @param {object} values restaurant values
 * @returns {object} Object with error or data properties
 */
export const addRestaurants = async (token, values) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/restaurants/add";
  console.log(values);
  try {
    const formData = new URLSearchParams();
    if(values.name){
      formData.append("name", values.name);
    }
    if(values.address){
      formData.append("address", values.address);
    }
    if(values.telephone){
      formData.append("telephone", values.telephone);
    }
    if(values.gardesAverage){
      formData.append("gardesAverage", values.gardesAverage);
    }
    if(values.city){
      formData.append("city", values.city);
    }
    if(values.minPrice){
      formData.append("minPrice", values.minPrice);
    }
    if(values.maxPrice){
      formData.append("maxPrice", values.maxPrice);
    }
    if(values.bikeFriendly){
      formData.append("bikeFriendly", 1);
    }
    else{
      formData.append("bikeFriendly", 0);
    }
    if(values.available){
      formData.append("available", 1);
    }
    else{
      formData.append("available", 0);
    }
    if(values.contactEmail){
      formData.append("contactEmail", values.contactEmail);
    }
    if(values.category){
      formData.append("category", values.category);
    }
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
 * Add dish
 * @param {string} token auth
 * @param {object} values restaurant values
 * @returns {object} Object with error or data properties
 */
export const addDish = async (token, values, idR) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/restaurants/dish/add";
  console.log("Valores: ",values);
  try {
    const formData = new URLSearchParams();
    if(values.name){
      formData.append("name", values.name);
    }
    if(values.description){
      formData.append("description", values.description);
    }
    if(values.price){
      formData.append("price", values.price);
    }
    if(values.price){
      formData.append("idR", idR);
    }
    
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
 * Delete dish
 * @param {string} token auth
 * @param {integer} id dish id
 * @returns {object} Object with error or data properties
 */
export const deleteDish = async (token, id) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/restaurants/dish/delete";
  try {
    const formData = new URLSearchParams();
    if(id){
      formData.append("id", id);
    }
    
    const response = await fetch(url, {
      method: "DELETE",
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
 * Update dish
 * @param {string} token auth
 * @param {object} values dish data
 * @returns {object} Object with error or data properties
 */
export const updateDish = async (token, values) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/restaurants/dish/update";
  console.log("hollllaa");
  try {
    const formData = new URLSearchParams();
    formData.append("id", values.id);
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("description", values.description);
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
 * Get categories
 * @param {string} token auth
 * @returns {object} Object with error or data properties
 */
export const getCategories = async (token) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/restaurants/categories";
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

/**
 * Send order
 * @param {string} token auth
 * @param {object} values user data
 * @returns {object} Object with error or data properties
 */
export const sendOrder = async (token, values) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/orders";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(values),
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
 * Get reviews
 * @param {string} token auth
 * @returns {object} Object with error or data properties
 */
export const getReviews = async (token,idR) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/reviews";
  const formData = new URLSearchParams();
  formData.append("idR", idR);
  try {
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
 * Add review
 * @param {string} token auth
 * @param {object} values review data
 * @returns {object} Object with error or data properties
 */
export const addReviews = async (token, idR, comment, stars) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/reviews/add";
  const formData = new URLSearchParams();
  formData.append("idR", idR);
  formData.append("comment", comment);
  formData.append("stars", stars);
  try {
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
 * Delete review
 * @param {string} token auth
 * @param {integer} idR idRestaurant
 * @returns {object} Object with error or data properties
 */
export const deleteReviews = async (token, idR) => {
  const url ="http://127.0.0.1:8080/FoodDelivery/rest/reviews";
  const formData = new URLSearchParams();
  formData.append("idR", idR);
  try {
    const response = await fetch(url, {
      method: "DELETE",
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