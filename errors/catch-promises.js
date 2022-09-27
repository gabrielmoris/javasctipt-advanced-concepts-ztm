Promise.resolve("asyncfailure")
  .then((res) => {
    throw new Error("#1 Fail!");
    return res;
  })
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    return err;
  })
  .then((respo) => {
    console.log(respo.message);
  })
  .catch((err) => {
    console.log("this wont be reached!");
  });
