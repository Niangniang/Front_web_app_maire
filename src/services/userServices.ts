import axios from "axios";
import { baseUrlAuth } from "./settings";
import { storeUser } from "./authServices";
import { AddUser, UserType } from "../types/user";

export const getAllUsers = async (): Promise<UserType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlAuth}/users/`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};

export const addUser = async (newUser: AddUser): Promise<UserType> => {
  const jwtToken = storeUser.getState().session?.access;

  const { data, status } = await axios.post(
    `${baseUrlAuth}/user/register`,
    newUser,
    {}
  );

  return data;
};
