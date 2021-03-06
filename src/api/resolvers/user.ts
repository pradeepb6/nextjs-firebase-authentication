import { combineResolvers } from 'graphql-resolvers';

import { ResolverContext } from '@typeDefs/resolver';
import { isAuthenticated } from '@api/authorization/isAuthenticated';

export default {
  Query: {
    me: combineResolvers(
      isAuthenticated,
      (_, __, { me }: ResolverContext) => {
        return {
          email: me.email,
          uid: me.uid,
        };
      }
    ),
  },
};
