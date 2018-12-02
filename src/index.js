import Layout from './components/page/Layout'
import Loading from './components/page/Loading'
import Masonry from './components/page/Masonry'
import RepoCard from './components/repocards/RepoCard'
import Timestamp from './components/Timestamp'

import RenderIfElse from './renderprops/RenderIfElse'
import RenderIf from './renderprops/RenderIf'

module.exports = {
  misc: {
    Timestamp,
  },
  page: {
    Layout,
    Loading,
    Masonry,
  },
  renderprops: {
    RenderIf,
    RenderIfElse,
  },
  repocards: {
    RepoCard
  },
}
