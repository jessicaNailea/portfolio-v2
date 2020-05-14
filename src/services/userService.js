import http from "./httpService";
import config from "../config.json";

export function getUserProfileData(id) {
  return http.get(`${config.apiEndpoint}api/profile/${id}`);
}

export function getEducData(id) {
  return http.get(`${config.apiEndpoint}api/education/${id}`);
}

export function getExperience(id) {
  return http.get(`${config.apiEndpoint}api/work-experience/${id}`);
}

export function getProjects(id) {
  return http.get(`${config.apiEndpoint}api/projects/${id}`);
}
