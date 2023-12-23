// Profile.js
// Profile.js
import React, { useEffect, useState } from 'react';

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const userData = await response.json();

        if (response.ok) {
          setUser(userData);
        } else {
          console.error('Error fetching user details:', userData.error);
        }
      } catch (error) {
        console.error('Error during user details fetch:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <div>
      <h2>Profile Page</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default Profile;
