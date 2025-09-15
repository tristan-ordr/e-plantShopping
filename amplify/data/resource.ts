import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
    Category: a
        .model({
            name: a.string()
        })
        .authorization((allow) => [allow.guest()]),
    Plant: a
        .model({
            name: a.string(),
            image: a.string(),
            description: a.string(),
            cost: a.string()
        })
        .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'identityPool',
    },
});