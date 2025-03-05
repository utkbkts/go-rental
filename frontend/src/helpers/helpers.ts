import { toast } from "@/hooks/use-toast";

export const updateSearchParams = (
  searchParams: URLSearchParams,
  key: string,
  value: string
) => {
  if (searchParams.has(key)) {
    searchParams.set(key, value);
  } else {
    searchParams.append(key, value);
  }

  return searchParams;
};

export const toastNotification = (err: any) => {
  let errMessage =
    err?.cause?.result?.errors?.[0]?.message ||
    err?.message ||
    "An error occurred";

  if (errMessage.includes("Not Authorised")) {
    errMessage = "Invalid credentials!";
  }

  toast({
    variant: "destructive",
    title: "Authentication Error",
    description: errMessage,
    duration: 1500,
  });
};

export const getUserName = (fullName: any) => {
  const nameSplice = fullName
    ?.split(" ")
    .map((item: string) => item.charAt(0))
    .join("");
  return nameSplice;
};
