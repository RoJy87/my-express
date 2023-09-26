import { User } from './user-modal.js';
export const getUser = async (req, res) => {
  let users;
  if (req.params.id) {
    users = await User.findById(req.params.id);
  } else {
    users = await User.find();
  }
  res.send(users);
};

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.send(user);
};
