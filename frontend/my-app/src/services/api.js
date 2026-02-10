import axios from "axios";

const API = axios.create({
  baseURL: "https://naradhye-guruji.onrender.com",
});

export const createBooking = (data) =>
  API.post("/bookings", data);

export const fetchClientByName = (name) =>
  API.get(`/users/${name}`);
