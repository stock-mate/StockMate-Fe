const fetchData = async (url: string) => {
  try {
    console.log(url);
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
  return data;
};

export const getSuggestions = async (query: string) => {
  if (!query) return []; // 왜 자꾸 호출되는거지?
  const url = `${process.env.API_URL}/find_ticker/?comname=${query}`;
  const data = await fetchData(url);
  const hasNoSuggestions = data === "Ticker not found for the given company name.";
  return hasNoSuggestions ? [] : data;
};
