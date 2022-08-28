import { createContext } from "react";
import { Values, FormStore, fieldsObservable } from "./Store";

type FormContextType = {
  fieldStore: Values;
  formInstance: FormStore;
}

const store = new FormStore()

export const FormContext = createContext<FormContextType>({
  formInstance: store,
  fieldStore: store[fieldsObservable]
})
