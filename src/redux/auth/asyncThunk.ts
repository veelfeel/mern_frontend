import { createAsyncThunk } from '@reduxjs/toolkit';
import { Auth, AuthData } from './types';
import axios from '../../axios';
import { __String } from 'typescript';

export const fetchRegister = createAsyncThunk<AuthData, Auth, { rejectValue: string }>(
  'auth/fetchRegister',
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', obj);

      if (data) {
        window.localStorage.setItem('token', data.token);
      }

      return data as AuthData;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Не удалось зарегистрироваться');
    }
  },
);

export const fetchAuth = createAsyncThunk<AuthData, Auth, { rejectValue: string }>(
  'auth/fetchAuth',
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', obj);

      if (data) {
        window.localStorage.setItem('token', data.token);
      }

      return data as AuthData;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Не удалось авторизоваться');
    }
  },
);

export const fetchAuthMe = createAsyncThunk<AuthData, undefined, { rejectValue: string }>(
  'auth/fetchAuthMe',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/auth/me');

      return data as AuthData;
    } catch (error) {
      return rejectWithValue('Не удалось получить пользователя');
    }
  },
);
