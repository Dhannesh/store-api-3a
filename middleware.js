export const ErrorHandler = async (err, req, res, next) => {
  return res.status(500).json({ msg: "something went wrong! try again" });
};

export const NotFound = async (req, res) => {
  return res.status(404).json({ msg: "Route doesn't exist" });
};
