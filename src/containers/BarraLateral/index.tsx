import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={2} />
        <FiltroCard legenda="concluídas" contador={2} />
        <FiltroCard legenda="urgentes" contador={2} />
        <FiltroCard legenda="importantes" contador={2} />
        <FiltroCard legenda="normal" contador={2} />
        <FiltroCard legenda="todas" contador={10} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
