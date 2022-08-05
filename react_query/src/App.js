import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {ReactQueryDevtools} from 'react-query/devtools'
import "./App.css";
import Homepage from "./components/Homepage";
import RQSuperHeros from "./components/RQSuperHeros";
import SuperHeros from "./components/SuperHeros";
import SuperHero from "./components/SuperHero";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallel from "./components/DynamicParallel";
import DependentQueries from "./components/DependentQueries";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/super-heroes">Traditional SuperHeros</Link>
              </li>
              <li>
                {" "}
                <Link to="/rq-super-heroes">RQ SuperHeros</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path='/rq-dependent'>
            <DependentQueries email='venkat@gmail.com' />
          </Route>
          <Route path="/rq-dynamic-parallel">
              <DynamicParallel heroIds={[1,3]} />
          </Route>
          <Route path="/rq-parallel">
            <ParallelQueries />
          </Route>
          <Route path="/rq-super-heroes/:heroId">
            <SuperHero />
          </Route>
          <Route path="/super-heroes">
            <SuperHeros />
          </Route>
          <Route path="/rq-super-heroes">
            <RQSuperHeros />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
