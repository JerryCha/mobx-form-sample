import { observer } from 'mobx-react'
import React from 'react'
import { useContext } from 'react'
import { FormContext } from './Context'

type ItemRenderProps<T = any> = (
  value: T,
  onChange: (value: T) => void,
  form: any
) => React.ReactElement

export type ItemProps<T = any> = {
  name: string | string[]
  children: ItemRenderProps<T>
}

export const Item = observer((props: ItemProps) => {
  const { name, children } = props
  const { formInstance, fieldStore } = useContext(FormContext)
  const indexKey = Array.isArray(name) ? name.join('.') : name
  const changeHandler = (value: any) => formInstance.setFieldValue(name, value)

  console.log(
    `[Form.Item] reading value for field ${indexKey}, which is ${fieldStore[indexKey]}`
  )

  return children(fieldStore[indexKey], changeHandler, formInstance)
})
