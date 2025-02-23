import { isAuthenticatedVar, isLoadingVar } from "@/apollo/apolloVars";
import { redirect } from "react-router-dom";
import Loading from "@/components/custom/Loading";
export const userLoader = async () => {
  const isAuthenticated = isAuthenticatedVar();
  const loader = isLoadingVar();

  if (loader) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return null;
};
