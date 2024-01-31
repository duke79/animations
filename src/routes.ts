import HoverCarPage from "./pages/HoverCarPage";
import ParticleSystemPage from "./pages/ParticleSystemPage";

export const pathPrefix = process.env.NODE_ENV === 'production' ? '/animations/' : '/';

export const pages = [{
    name: 'hover-car',
    component: HoverCarPage,
}, {
    name: 'particle-system',
    component: ParticleSystemPage,
}];
