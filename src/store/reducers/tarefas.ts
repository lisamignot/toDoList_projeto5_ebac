/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'estudar JS',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Ver novas aulas do curso',
      1
    ),
    new Tarefa(
      'estudar TS',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Fazer exercício',
      2
    ),
    new Tarefa(
      'ir à academia',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Treino de superiores',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
