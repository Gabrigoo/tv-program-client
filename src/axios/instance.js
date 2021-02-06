import axios from 'axios';
import moment from 'moment';

const instance = axios.create({
  baseURL: 'https://rigo-tv-program-server.herokuapp.com',
});
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

const getTVProgramData = async (selectedDate, source) => {
  try {
    const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
    const response = await instance.get(`/?date=${formattedDate}`, {
      cancelToken: source.token,
    });
    console.log('GET: data loaded');
    return response.data;
  } catch (error) {
    console.log('GET: fetch failed: ' + error);
    return null;
  }
};

export {
  instance, getTVProgramData,
};
