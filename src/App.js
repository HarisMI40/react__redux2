import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { update, getUser } from './redux/userSlice';
import { useState, useEffect } from 'react';






function App() {
  const dispatch = useDispatch();
  const {userInfo, isLoading} = useSelector((state) => state.user);
  const [user, setUser] = useState({name : "", title : ""});


  const updateUser = (e) => {
    e.preventDefault();
    dispatch(update({name : user.name, title : user.title}));
  }

  useEffect(() => {
    dispatch(getUser());
  }, [])
  
  
  if(isLoading) return <h1 className='text-center'>Loading ....</h1>
  return (
    <div className="App">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Hello {userInfo.name}</h1>
              <p>{userInfo.title}</p>
               {/* <button className="btn btn-primary btn-lg" type="button">Example button</button> */}
            </div>
          </div>
       

          <form onSubmit={updateUser}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" aria-describedby="nameHelp" onChange={(e) => setUser({...user, [e.target.name] : e.target.value})} />
              <div id="nameHelp" className="form-text">Something went wrong in Input Name</div>
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" aria-describedby="titleHelp" onChange={(e) => setUser({...user, [e.target.name] : e.target.value})}/>
              <div id="titleHelp" className="form-text">Something went wrong in Input Title</div>
            </div>
      
            <button className="btn btn-success" type='submit'>Save</button>
          </form>
        </div>
    </div>
  );
}

export default App;
