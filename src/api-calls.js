export const getAllPhotographers = async () => {
  const url = `http://localhost:8080/api/v1/photographers`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Unable to retrieve photographers');
  }

  const data = await response.json();
  return data;
};

export const getPhotographer = async (userId) => {
  const url = `http://localhost:8080/api/v1/photographers/${userId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unable to locate photographer id# ${userId}`);
  }

  const data = await response.json();
  return data;
};

export const sendNewPhotographer = async (submittedPhotographer) => {
  const url = `http://localhost:8080/api/v1/photographers`;
  const options = {
    method: 'POST',
    body: JSON.stringify(submittedPhotographer),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    const { message: errorMessage } = await response.json();
    throw new Error(`Unable to add new user`);
  }

  const data = await response.json();
  return data;
};

export const updatePhotographer = async (userId, submittedPhotographer) => {
  const url = `http://localhost:8080/api/v1/photographers/${userId}`;
  const options = {
    method: 'PUT',
    body: JSON.stringify(submittedPhotographer),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Unable to update user id# ${userId}`);
  }

  const data = await response.json();
  return data;
};

export const deletePhotographer = async (userId) => {
  const url = `http://localhost:8080/api/v1/photographers/${userId}`;
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Unable to delete user id# ${userId}`);
  }

  const data = await response.json();
  return data;
};
