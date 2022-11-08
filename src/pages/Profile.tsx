import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../redux/auth/selectors';
import { useAppSelector } from '../redux/store';

const Profile: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);

  // if (!isAuth) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div className="profile-screen">
      <div className="container">
        <h2>Мой профиль</h2>
      </div>
    </div>
  );
};

export default Profile;
