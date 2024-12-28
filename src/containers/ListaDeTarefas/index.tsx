import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'estudar',
    descricao: 'ver aula',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'treinar',
    descricao: 'ir à academia',
    prioridade: 'importante',
    status: 'concluída'
  },
  {
    titulo: 'descolorir a sobrancelha',
    descricao: 'pegar produtos',
    prioridade: 'normal',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&lquot; e &quot;termo&lquot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
