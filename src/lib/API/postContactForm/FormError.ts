type NameType = 'name' | 'email' | 'content'
export const NAME_TYPE: MappedConst<NameType> = {
  name: 'name',
  email: 'email',
  content: 'content',
}

export class FormError extends Error {
  name: NameType

  constructor(message: string, name: NameType) {
    super(message)
    this.name = name
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = new Error(message).stack
    }
  }
}
