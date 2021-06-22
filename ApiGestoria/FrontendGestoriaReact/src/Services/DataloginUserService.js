class DataloginUserService {
  insertTokenLocalStorage = () => {
    debugger;
    localStorage.setItem(
      "token",
      window.location.search
        .substring(7, window.location.search.length)
        .split("&")[0]
    );
  };

  insertUserloginLocalStorage = () => {
    debugger;
    localStorage.setItem(
      "userLoginSAML",
      window.location.search
        .substring(7, window.location.search.length)
        .split("&")[1]
        .substring(
          9,
          window.location.search
            .substring(7, window.location.search.length)
            .split("&")[1].length
        )
    );
  };
}

export default DataloginUserService;
