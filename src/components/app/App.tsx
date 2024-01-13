import { Route, Routes } from 'react-router-dom';

import ToDo from '../../pages/toDo/toDo';
import NotFound from '../../pages/not-found';
import routesUrl from '../../utils/routes/routesUrl';

function App() {
  return (
    <Routes>
      <Route path={routesUrl.ToDoPage} element={<ToDo />}></Route>
      <Route path={routesUrl.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
