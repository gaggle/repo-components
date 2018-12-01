import Layout from './components/page/Layout'
import Loading from './components/page/Loading'
import RepoCards from './components/repocards/RepoCards'
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
  },
  renderprops: {
    RenderIf,
    RenderIfElse,
  },
  repocards: {
    RepoCards
  },
}
