import './App.css'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Departures from 'views/Departures'
import Options from 'views/Options'
import NotFound from 'views/NotFound'
import StartPage from 'views/StartPage'
import Menu from 'Menu'
import Dialog from 'components/Dialog'
import { saveTripList } from 'utils/localStorage'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { showIntroDialog } from 'redux/dialogSlice'

// Todo: use Browser router when not hosting on github pages
function App() {
  const tripList = useAppSelector((state) => state.tripList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (tripList?.trips.length === 0) {
      dispatch(showIntroDialog())
    } else {
      saveTripList(tripList)
    }
  }, [tripList, dispatch])

  return (
    <div className='App'>
      <HashRouter>
        <div className='Content'>
          <Switch>
            <Route exact path='/'>
              <StartPage />
            </Route>
            <Route path='/venturi'>
              <StartPage />
            </Route>
            <Route path='/departures'>
              <Departures />
            </Route>
            <Route path='/options'>
              <Options />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Menu />
        <Dialog />
      </HashRouter>
    </div>
  )
}

export default App
