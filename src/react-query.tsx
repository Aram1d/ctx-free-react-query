import { createContext } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();
export const context = createContext(queryClient);

export const useCustomQuery = () => {
  return useQuery({
    queryKey: "randomNumber",
    queryFn: () =>
      new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(Math.random());
        }, 1000);
      }),
    context,
  });
};
