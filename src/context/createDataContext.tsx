import React, { useReducer, Reducer } from 'react';

interface ActionCreators {
  [key: string]: Function;
}

function createDataContext<S, A>(
  reducer: Reducer<S, A>,
  actions: ActionCreators,
  defaultValue: S
) {
  const Context = React.createContext<{ state: S } & ActionCreators>({
    state: defaultValue,
  } as { state: S } & ActionCreators);

  const Provider = ({ children }: { children: React.ReactElement }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions: { [key: string]: Function } = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider
        value={{ state, ...boundActions } as { state: S } & ActionCreators}
      >
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}

export default createDataContext;
