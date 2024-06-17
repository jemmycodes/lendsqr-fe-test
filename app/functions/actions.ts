"use server";

import { cookies } from "next/headers";

export const storeUserCookies = async () => {
  cookies().set("isLoggedIn", JSON.stringify(true));
};

export const removeUserCookies = async () => {
  cookies().delete("isLoggedIn");
};
