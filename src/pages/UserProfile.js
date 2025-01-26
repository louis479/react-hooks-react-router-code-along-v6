import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserProfile() {
  const { id } = useParams();  // Get user ID from URL
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then(r => r.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!user.name) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>User Profile</h1>
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more user details here if available */}
        </div>
      </main>
    </>
  );
}

export default UserProfile;
