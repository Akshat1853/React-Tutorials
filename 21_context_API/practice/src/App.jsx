import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile';
import Login from './components/Login';

// Earlier app steps were creation steps now here we use what we created.

// ab store jo humne bnaya tha UserContext me, uska access aap ya to directly main.jsx me ya
// app.jsx me de skte hai, to import kro here UserContexProvider 
const App = () => {
  return (
    // puri app ko wrap krdiya provider se to provider ko children mil gye jo hai login aur profile
    //  to ab login aur profile ke pass jo bhi humne data pass kra tha value property me unka
    // sara access hoga

    // ab jao login aur profile me bs aur us kro data ko.
    <UserContextProvider>
      <Login/>
      <Profile /> 
    </UserContextProvider>
  )
}

export default App
