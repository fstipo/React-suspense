import { fetchUser } from './Api';

let user;
user = fetchUser()
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

console.log(user.id);

const ProfileDetails = () => {
  return (
    <div className="card card-body my-3">
      <h1 className="large text-primary">{user.id}</h1>
      <ul>
        <li>Username:</li>
        <li>Email:</li>
        <li>City:</li>
      </ul>
    </div>
  );
};

export default ProfileDetails;
