import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/';
const CLIENT_ID: string = 'Q2hM1G5KyKyybz-9LTYPRyf9PfuatQNAioXNUYORBjE';

export const fetchPhotos = async <T>(
  searchQuery: string,
  currentPage: number
): Promise<T> => {
  const responce = await axios.get('/photos', {
    params: {
      client_id: CLIENT_ID,
      query: searchQuery,
      per_page: 20,
      page: currentPage,
    },
  });
  console.log(responce.data.results);
  return responce.data.results;
};
