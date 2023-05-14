const baseUrl = 'https://coins-express-mysql-admin-panel.vercel.app'
// const baseUrl = 'http://localhost:3001'



const getCategories = async () => {
  const res = await fetch(`${baseUrl}/categories`);
  const data = await res.json();
  console.log(data )
  if (res.ok) {
    return data;
  } else {
    throw new Error('Failed to fetch categories');
  }
};

const getDetail = async (id, coinId) => {
  const res = await fetch(`${baseUrl}/categories/${id}/${coinId}`);
  const data = await res.json();
  if (res.ok) {
    console.log(data);
    return data;
  } else {
    throw new Error('Failed to fetch coin detail');
  }
};

const getCoin = async (id) => {
  const res = await fetch(`${baseUrl}/all/${id}`);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw new Error('Failed to fetch coin');
  }
};

const getAllCoins = async () => {
  const res = await fetch(`${baseUrl}/all`);
  const data = await res.json();
  return data
}
const getOptions = async () => {
  const res = await fetch(`${baseUrl}/options`);
  const data = await res.json();
  return data
}



const getSearch = async (categoryId, searchQuery) => {
  //get category
  if (categoryId) {
    const res = await fetch(`${baseUrl}/categories/${categoryId}`);
    const data = await res.json();
    return data
  }
  //get filteret coins
  else {
    const res = await fetch(`${baseUrl}/search?${searchQuery}`);
    const data = await res.json();
    return data;
  }
}


const deleteCoin = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/all/${id}`, {
      method: 'DELETE'
    })
    const data = await res.json()
    console.log(data)                                //___??????????????????
  } catch (error) {
    console.log(error)
  }
}

const putCoin = async (id, coin) => {
  console.log(id, coin)
  // const coinObject = coin[0]
  try {
    const res = await fetch(`${baseUrl}/all/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coin)
    });
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
}
const postCoin = async (coin) => {
  console.log(coin)

  try {
    const res = await fetch(`${baseUrl}/all`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coin)
    });
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
}


const postAcces = async (acces) => {
  console.log(acces)
  const res = await fetch(`${baseUrl}/acces`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(acces)
  });
  const data = await res.json();
  console.log(data)
  return data;
};

export { getAllCoins, getCategories, getCoin, getDetail, getSearch, deleteCoin, putCoin, postCoin, postAcces,getOptions }