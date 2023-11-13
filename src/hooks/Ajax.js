export const Ajax = async (url, method, dataSave = "") => {
  let datas = [];
  let loading = true;

  let options = {
    method: "GET",
  };

  if (method == "GET" || method == "DELETE") {
    options = {
      method: method,
    };
  }
  if (method == "POST" || method == "PUT") {
    options = {
      method: method,
      body: JSON.stringify(dataSave),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  const petition = await fetch(url, options);

  datas = await petition.json();
  loading = false;
  return {
    datas,
    loading,
  };
};
