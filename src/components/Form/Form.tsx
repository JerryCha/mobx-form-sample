import React, { useRef } from 'react'
import { FormContext } from './Context'
import { fieldsObservable, FormStore } from './Store'

export function Form(props: React.PropsWithChildren<any>) {
  const store = useRef(new FormStore())
  return (
    <FormContext.Provider
      value={{
        formInstance: store.current,
        fieldStore: store.current[fieldsObservable],
      }}
    >
      <form>{props.children}</form>
    </FormContext.Provider>
  )
}
