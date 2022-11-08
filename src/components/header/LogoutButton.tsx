import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { logout } from '../../redux/auth/slice';
import { useNavigate } from 'react-router-dom';

export const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <button onClick={onClickLogout} className="logout-button">
      <svg width="24" height="24" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 4H36C39.3137 4 42 6.68629 42 10V36C42 39.3137 39.3137 42 36 42H22C18.6863 42 16 39.3137 16 36V34H12V36C12 41.5228 16.4772 46 22 46H36C41.5228 46 46 41.5228 46 36V10C46 4.47715 41.5228 0 36 0H22C16.4772 0 12 4.47715 12 10V12H16V10C16 6.68629 18.6863 4 22 4Z"
        />
        <line x1="11.5" y1="22.5" x2="24.5" y2="22.5" strokeWidth="7" strokeLinecap="round" />
        <path d="M0 23L12 14.3397L12 31.6603L0 23Z" />
      </svg>
      <span>Выход</span>
    </button>
  );
};
