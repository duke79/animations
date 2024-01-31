import { Link } from "react-router-dom";
import { pages, pathPrefix } from "../routes";

const HomgePage = () => {
    return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
    }}>
        {pages.map((page) => (
            <Link to={`${pathPrefix}${page.name}`} key={page.name} style={{
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