import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomgePage, { pages } from './HomePage';

const pathPrefix = process.env.NODE_ENV === 'production' ? '/animations/' : '/';

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