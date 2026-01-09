export const getAllServices = async (searchParams) => {
  const getParams = new URLSearchParams(searchParams).toString();
  console.log(getParams);

  const res = await fetch(
    `https://care-house-server.vercel.app/services?${getParams}`,
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  return data;
};

export const getSingleService = async (id) => {
  const res = await fetch(
    `https://care-house-server.vercel.app/services/${id}`,
    {
      cache: "force-cache",
    }
  );
  const service = await res.json();
  return service;
};
