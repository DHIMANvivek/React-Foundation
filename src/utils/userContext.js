import { createContext } from "react";

const userContext = createContext({
    user:{
    name: "Vivek",
    age: 20
    }
});

// this is just for body to check whether context is provider or not
userContext.displayName = "userContext";

export default userContext;