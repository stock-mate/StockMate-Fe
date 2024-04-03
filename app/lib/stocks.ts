const fetchData = async (url: string) => {
  try {
    // console.log(url);
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.error(e);
  }
};

export const getStock = async (ticker: string) => {
  const url = `${process.env.API_URL}/stocks/${ticker}`;
  const data = await fetchData(url);
  console.log(data);
  return data;
};
