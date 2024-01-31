import { Link } from "react-router-dom";
import HoverCarPage from "./HoverCarPage";
import ParticleSystemPage from "./ParticleSystemPage";

export const pages = [{
    name: 'hover-car',
    component: HoverCarPage,
}, {
    name: 'particle-system',
    component: ParticleSystemPage,
}];

const HomgePage = () => {
    return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
    }}>
        {pages.map((page) => (
            <Link to={`/${page.name}`} key={page.name} style={{
                padding: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                textDecoration: 'none',
            }}>
                {page.name}
            </Link>
        ))}
    </div>;
};

export default HomgePage;