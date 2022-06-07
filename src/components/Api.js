export const fetchUser = async () => {
  console.log('Fetching user...');
  const response = await fetch('https://jsonplaceholder.typicode.com/users/10');
  const data = await response.json();
  return data;
};

// const fetchPosts = async () => {
//   console.log('Fetching posts...');
//   await axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.data)
//     .catch((err) => console.log(err));
// };
