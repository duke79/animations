export const pathPrefix = process.env.NODE_ENV === 'production' ? '/animations/' : '/';
export const ASSETS = {
    hoverCar: pathPrefix + 'assets/3d/free_cyberpunk_hovercar.glb',
    raceTrack: pathPrefix + 'assets/3d/race_trackkarting_track_based_on_south_garda.glb',
};
