import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomgePage, { pages } from './HomePage';

const Pages = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={HomgePage} />
                {pages.map((page) => (
                    <Route path={`/${page.name}`} key={page.name} Component={page.component} />
                ))}
            </Routes>
        </Router>
    );
};

export default Pages;