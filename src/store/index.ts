/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'

const store = configureStore({
  reducer: {

  }
})

type RootReducer = ReturnType<typeof store.getState>
