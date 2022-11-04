import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchRegister } from '../redux/auth/asyncThunk';
import { selectIsAuth } from '../redux/auth/selectors';
import { Auth } from '../redux/auth/types';

import { useForm, SubmitHandler } from 'react-hook-form';

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm<Auth>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Auth> = async (values) => {
    await dispatch(fetchRegister(values));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="register-screen">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <ul className="form__items form__items-register">
            <li>
              <h1>Регистрация</h1>
            </li>
            <li className="form__item-input-group">
              <input type="text" {...register('fullName', { required: 'Укажите имя' })} />
              <label className="form__item-label">Имя</label>
              {errors?.fullName && <p>{errors.fullName.message}</p>}
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
            <li className="form__item-input-group">
              <input
                type="password"
                {...register('password_repeat', { required: 'Введите пароль повторно' })}
              />
              <label className="form__item-label">Повторите пароль</label>
              {errors?.password_repeat && <p>{errors.password_repeat.message}</p>}
            </li>
            {watch('password_repeat') !== watch('password') && getValues('password_repeat') ? (
              <p>password not match</p>
            ) : null}
            <li>
              <button type="submit" className="button-primary button-secondary width-max">
                Зарегистрироваться
              </button>
            </li>
            <li>
              <p>Уже есть учетная запись?</p>
              <Link to="/signin">
                <p>Войдите в аккаунт</p>
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Register;
