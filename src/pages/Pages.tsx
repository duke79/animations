import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomgePage from './HomePage';
import { pages, pathPrefix } from '../routes';

const Pages = () => {
    return (
        <Router>
            <Routes>
                <Route path={pathPrefix} Component={HomgePage} />
                {pages.map((page) => (
                    <Route path={`${pathPrefix}${page.name}`} key={page.name} Component={page.component} />
                ))}
            </Routes>
        </Router>
    );
};

export default Pages;