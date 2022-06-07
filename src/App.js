import React, { Suspense } from 'react';
import { fetchUser } from './components/Api';
import ProfileDetails from './components/ProfileDetails';

function App() {
  return (
    <div className="container my-5 text-dark">
      <h1>Hello 🐶</h1>
      <Suspense fallback={<h1>Loading user...</h1>}>
        <ProfileDetails />
      </Suspense>
    </div>
  );
}

export default App;
