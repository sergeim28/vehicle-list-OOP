import { useContext } from "react";

import { AppContext } from "../services/context";

export const useAppContext = () => useContext(AppContext);
