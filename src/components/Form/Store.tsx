import { observable, action } from 'mobx'

export type NamePath = string | string[]
export type Values = Record<string, any>

export const fieldsObservable = Symbol.for('fieldsObservable')

class FormStore {
  private fields: Values

  constructor() {
    this.fields = observable({})
  }

  private _fieldsStoreUpdater = action(
    (fieldsState: Values, namePath: NamePath, value: any) => {
      let indexKey = namePath
      // Indentify the namePath type. If Array, converts to string prior to update.
      if (Array.isArray(indexKey)) {
        indexKey = indexKey.join('.')
      }
      fieldsState[indexKey] = value
    }
  )

  setFieldValue(namePath: NamePath, value: any) {
    this._fieldsStoreUpdater(this.fields, namePath, value)
  }

  get [fieldsObservable]() {
    return this.fields
  }
}

export { FormStore }
