import axios from 'axios';

export default {
  async get(url: string) {
    const {data} = await axios.get(url);
    return data;
  },
};
