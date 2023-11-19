export const API_BASE_URL =
  // "https://sihadir-backend-dot-sihadir-401613.et.r.appspot.com";
  "http://localhost:8000";

export const USER_URL = API_BASE_URL + "/user";
export const LOGIN_URL = USER_URL + "/login";

export const MAHASISWA_URL = API_BASE_URL + "/mahasiswa";
export const PROFILE_MAHASISWA_URL = (nim: string) =>
  MAHASISWA_URL + "/profile/" + nim;
export const JADWAL_URL = API_BASE_URL + "/jadwal";

export const DOSEN_URL = API_BASE_URL + "/dosen";
