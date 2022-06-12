const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const teater1 = await promiseTheaterIXX();
  const teater2 = await promiseTheaterVGC();

  const kumpulanData = [...teater1, ...teater2];
  const filterData = kumpulanData.filter((e) => e.hasil == emosi);
  return filterData.length;
};

module.exports = {
  promiseOutput,
};
