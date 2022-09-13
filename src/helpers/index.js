const checkID = (id) => {
  if (isNaN(id)) {
    response = {
      ok: false,
      meta: {
        status: 400,
      },
      msg: "número de ID incorrecto",
    };
    return response;
  }
  return false;
};

module.exports = {
    checkID
};
