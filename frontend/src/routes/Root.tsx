import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
export const Root = () => {
  return (
    <div>
      <div className='App'>
				<header id='header'>
					<Header/>
				</header>
			</div>
      <Outlet />
      <footer id='footer'>
				<Footer/>	
			</footer>
    </div>
  );
};
