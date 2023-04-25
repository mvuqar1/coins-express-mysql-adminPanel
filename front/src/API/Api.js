const baseUrl = 'http://localhost:3001'

 const getAllCoins = async () => {
    const res = await fetch(`${baseUrl}/all`);
    const data = await res.json();
    return data
}

 const getCategories = async () => {
    const res = await fetch(`${baseUrl}/categories`);
    const data = await res.json();
    return data
}

const getCoins = async (categoryId, searchQuery) => {
    if (categoryId) {
        const res = await fetch(`${baseUrl}/categories/${categoryId}`);
        const data = await res.json();
        return data
    }
}

 const getDetail = async (id,coinId) => {
    const res = await fetch(`${baseUrl}/categories/${id}/${coinId}`);
    const data = await res.json();
    return data
}

const getSearch = async (title) => {
    const res = await fetch(`${baseUrl}/all/${title}`);
    const data = await res.json();
    console.log(data)
    return data

}
export {getAllCoins,getCategories,getCoins,getDetail,getSearch}