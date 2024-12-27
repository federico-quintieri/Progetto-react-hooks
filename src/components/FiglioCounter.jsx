import { useContext } from "react";
import { context } from "../App";

export function FiglioCounter() {
const var_context = useContext(context);

  return <p>{var_context}</p>;
}
