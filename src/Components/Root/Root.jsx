import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet, useNavigation } from 'react-router';
import './Root.css';

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>

      <div className="root-main">
        <Sidebar></Sidebar>
        {isNavigating && <span>Loading...</span>}
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;

/**
 * 1.use: userPromise>suspense>promise>use(userPromise)
 *
 * 2.[less used so far] >useState + useEffect (()=>,[])
 *
 * 3.Set loader in the route definition: load data before router component is rendered
 *
 * **/
