import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { selectIsAuth } from '../redux/auth/selectors';
import { fetchAuth } from '../redux/auth/asyncThunk';

import { Auth } from '../redux/auth/types';

const Signin: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const isAdmin = useAppSelector((state) => state.auth.data?.isAdmin);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Auth>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Auth> = async (values) => {
    await dispatch(fetchAuth(values));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isAuth && isAdmin) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="signin-screen">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <ul className="form__items">
            <li>
              <h1>Вход</h1>
            </li>
            <li className="form__item-input-group">
              <input type="email" {...register('email', { required: 'Укажите почту' })} />
              <label className="form__item-label">Email</label>
              {errors?.email && <p>{errors.email.message}</p>}
            </li>
            <li className="form__item-input-group">
              <input type="password" {...register('password', { required: 'Введите пароль' })} />
              <label className="form__item-label">Пароль</label>
              {errors?.password && <p>{errors.password.message}</p>}
            </li>
            <li>
              <button type="submit" className="button-primary button-secondary width-max">
                Войти
              </button>
            </li>
            <li>
              <p>Нет учетной записи?</p>
              <Link to="/register">
                <p>Зарегистируйтесь</p>
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Signin;
