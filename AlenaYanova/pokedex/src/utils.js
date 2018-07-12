const moment = require('moment');

const getDateString = () => {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
};

export {getDateString};
