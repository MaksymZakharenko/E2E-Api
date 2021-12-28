const userData = {
  name: "Max",
  job: "QA",
};

module.exports = {
  getUser: function (params = {}) {
    return {
      ...userData,
      ...params,
    };
  },
};
