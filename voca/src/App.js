import logo from './logo.svg';
import { Header } from './component/Header';
import { DayList } from './component/DayList';
import { Day } from './component/Day';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { EmptyPage } from './component/EmptyPage';
import { CreateWord } from './component/CreateWord';
import { CreateDay } from './component/CreateDay';


function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Header></Header>
        <Switch>


          <Route exact path="/">
            <DayList></DayList>
          </Route>

          <Route path="/day/:day">
            <Day></Day>
          </Route>

          <Route path="/create_word">
            <CreateWord></CreateWord>
          </Route>

          <Route path="/create_day">
            <CreateDay></CreateDay>
          </Route>


          <Route>
            <EmptyPage />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>

  ); //return end

} //App end

export default App;
