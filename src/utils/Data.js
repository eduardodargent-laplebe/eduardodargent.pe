// export const SERVER_URL = 'http://reconstruccion.pe'; // server
// export const SERVER_URL = "http://localhost/revistaquehacer.pe"; // local
// export const API_URL = SERVER_URL + '/adm/api/1.1/tables';

const windowGlobal = typeof window !== 'undefined' && window

export const BP_PHONE_PHABLET = windowGlobal.matchMedia('(max-width: 600px)')
export const BP_PHABLET_TABLET = windowGlobal.matchMedia('(max-width: 900px)')
export const BP_TABLET_HD = windowGlobal.matchMedia('(max-width: 1200px)')
export const BP_HD_FULLHD = windowGlobal.matchMedia('(max-width: 1800px)')
