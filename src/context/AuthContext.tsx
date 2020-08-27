import createDataContext from './createDataContext';
import externalApi from '../api/external';
import * as SecureStore from 'expo-secure-store';

enum Actions {
  'signup',
  'signin',
  'signout',
  'restore',
  'setError',
  'clearErrorMessage',
}
interface IAuth {
  token: string | null;
  errorMessage: string;
}
interface ISignUp {
  type: Actions.signup;
  payload: string;
}
interface ISignIn {
  type: Actions.signin;
  payload: string;
}
interface ISignOut {
  type: Actions.signout;
}
interface IRestore {
  type: Actions.restore;
  payload: string | null;
}
interface ISetError {
  type: Actions.setError;
  payload: string;
}
interface IClearErrorMessage {
  type: Actions.clearErrorMessage;
}
type AuthActions =
  | ISignUp
  | ISignIn
  | ISignOut
  | IRestore
  | ISetError
  | IClearErrorMessage;

const initialAuthState = { token: null, errorMessage: '' };

const authReducer = (state: IAuth, action: AuthActions) => {
  switch (action.type) {
    case Actions.setError: {
      return { ...state, errorMessage: action.payload };
    }
    case Actions.signin: {
      return { token: action.payload, errorMessage: '' };
    }
    case Actions.signup: {
      return { token: action.payload, errorMessage: '' };
    }
    case Actions.restore: {
      return { ...state, token: action.payload };
    }
    case Actions.signout: {
      return initialAuthState;
    }
    case Actions.clearErrorMessage: {
      return { ...state, errorMessage: '' };
    }
    default:
      return state;
  }
};

const signup = (dispatch: React.Dispatch<ISignUp | ISetError>) => async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await externalApi.post('/signup', { email, password });
    await SecureStore.setItemAsync('token', response.data.token);
    dispatch({ type: Actions.signup, payload: response.data.token });
  } catch (err) {
    dispatch({
      type: Actions.setError,
      payload: 'Something went wrong with signup',
    });
  }
};

const signin = (dispatch: React.Dispatch<ISignIn | ISetError>) => async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    //const {data: {token}} = await externalApi.post('/signin', { email, password });
    let token = 'MY_TOKEN';
    await SecureStore.setItemAsync('token', token);
    dispatch({ type: Actions.signin, payload: token });
  } catch (err) {
    dispatch({
      type: Actions.setError,
      payload: 'Something went wrong with sign in',
    });
  }
};

const signout = (dispatch: React.Dispatch<ISignOut>) => async () => {
  try {
    await SecureStore.deleteItemAsync('token');
    dispatch({ type: Actions.signout });
  } catch (err) {
    console.log('err');
  }
};

const clearErrorMessage = (
  dispatch: React.Dispatch<IClearErrorMessage>
) => () => {
  dispatch({ type: Actions.clearErrorMessage });
};

const localSignin = (
  dispatch: React.Dispatch<IRestore | ISignOut>
) => async () => {
  try {
    const token = await SecureStore.getItemAsync('token');
    dispatch({ type: Actions.restore, payload: token });
  } catch (err) {
    await SecureStore.deleteItemAsync('token');
    dispatch({ type: Actions.signout });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, localSignin, clearErrorMessage },
  initialAuthState
);
