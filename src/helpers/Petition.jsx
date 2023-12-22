export const Petition = async (url, method, dataSave = "", files = false) => {
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

    //let body = JSON.stringify(dataSave);

    if (files) {
      
      options = {
        method: method,
        body: dataSave
      };
    }else{

      options = {
        method: method,
        body: JSON.stringify(dataSave),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }

   
  }

  const petition = await fetch(url, options);

  const datas = await petition.json();
  loading = false;
  return {
    datas,
    loading,
  };
};
