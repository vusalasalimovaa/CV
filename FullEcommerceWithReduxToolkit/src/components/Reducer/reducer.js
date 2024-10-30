function reducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
        filteredProd: action.products,
      };

    case "SET_USERS":
      return {
        ...state,
        users: action.userDatas,
        filteredUsers: action.userDatas,
      };

    case "DELETE_PRODUCTS":
      return {
        ...state,
        products: state.products.filter((el) => el.id !== action.productId),
      };
    case "SEARCH_PRODUCTS": {
      let arr = state.products.filter((elem) =>
        elem.title.toUpperCase().includes(action.searchValue.toUpperCase())
      );

      return { ...state, filteredProd: arr };
    }

    case "SEARCH_USERS": {
      let arr = state.users.filter((elem) => {
        elem.username.toUpperCase().includes(action.searchValue.toUpperCase());
      });

      return { ...state, filteredUsers: arr };
    }

    case "AtoZ": {
      let arr = [...state.products].sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      return { ...state, filteredProd: arr };
    }

    case "AtoZusers": {
      let arr = [...state.users].sort((a, b) =>
        a.username.localeCompare(b.username)
      );
      return { ...state, filteredUsers: arr };
    }

    case "ZtoAusers": {
      let arr = [...state.users].sort((a, b) =>
        b.username.localeCompare(a.username)
      );
      return { ...state, filteredUsers: arr };
    }

    case "ZtoA": {
      let arr = [...state.products].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      return { ...state, filteredProd: arr };
    }

    case "lowToHigh": {
      let arr = [...state.products].sort((a, b) => a.price - b.price);
      return { ...state, filteredProd: arr };
    }

    case "highToLow": {
      let arr = [...state.products].sort((a, b) => b.price - a.price);
      return { ...state, filteredProd: arr };
    }

    case "lowToHighRate": {
      let arr = [...state.products].sort(
        (a, b) => a.rating.rate - b.rating.rate
      );
      return { ...state, filteredProd: arr };
    }

    case "highToLowRate": {
      let arr = [...state.products].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
      return { ...state, filteredProd: arr };
    }

    case "lowToHighCount": {
      let arr = [...state.products].sort(
        (a, b) => a.rating.count - b.rating.count
      );
      return { ...state, filteredProd: arr };
    }

    case "highToLowCount": {
      let arr = [...state.products].sort(
        (a, b) => b.rating.count - a.rating.count
      );
      return { ...state, filteredProd: arr };
    }

    default:
      state;
  }
}

export default reducer;
