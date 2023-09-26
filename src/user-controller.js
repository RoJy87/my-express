const users = [
  { id: 1, name: 'Danil' },
  { id: 2, name: 'Denis' },
];

export const getUser = (req, res) => {
  if (req.params.id)
    return res.send(users.find((user) => user.id.toString() === req.params.id));
  res.send(users);
};

export const createUser = (req, res) => {
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.send(users);
};
