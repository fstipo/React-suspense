const fetchUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/ussers/1');

  if (response.status !== 200) {
    throw new Error("⛔ Can't fetch the data");
  }

  const data = await response.json();
  return data;
};

fetchUser()
  .then((data) => {
    console.log('Resolved:', data);
  })
  .catch((err) => console.log('Rejected:', err.message));

function App() {
  return (
    <div className="container my-5 text-danger">
      {/* <Suspense fallback={<h1>Loading user...</h1>}>
        <ProfileDetails />
      </Suspense> */}
      <h1>Hello 🐶</h1>
    </div>
  );
}

export default App;
