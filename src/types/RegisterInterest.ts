import { objectType } from '@nexus/schema'

export const RegisterInterest = objectType({
  name: 'RegisterInterest',
  definition(t) {
    t.model.id()
    t.model.email()
  },
})
