export const profile = {
  id: 0,
  name: 'Almas',
  age: 19,
  country: 'United Kazakh Juzes',
  imageUrl: '',
};

export const friends = [
  {
    id: 1,
    name: 'Alex',
    age: 35,
    country: 'United States',
    imageUrl: 'https://via.placeholder.com/350x150?text=Alex',
  },
  {
    id: 2,
    name: 'John',
    age: 21,
    country: 'Netherlands',
    imageUrl: 'https://via.placeholder.com/350x150?text=John',
  },
  {
    id: 3,
    name: 'Martha',
    age: 25,
    country: 'United Kingdom',
    imageUrl: 'https://via.placeholder.com/350x150?text=Martha',
  },
];

export function obtainFriend(name) {
  return friends.find((friend) => friend.name === name);
}