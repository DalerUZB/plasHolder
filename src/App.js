import ContaniersUsers from './ContanersUsers/ContaniersUsers';
import ContaniersUser from './ContainerUser/ContainerUser'
import NotFound from './NotFound/NotFound';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';


function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<ContaniersUsers />} />
        <Route path='/user/:slug' element={<ContaniersUser />} />
      </Routes>
    </Wrapper>
  );
}
export default App;
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
`
