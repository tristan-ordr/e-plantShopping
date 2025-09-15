# Creating the Backend Environment

To create the backend environment, the following command was used with aws amplify cli. User was amplify-admin.

```
e-plantShopping % aws amplify create-backend-environment --app-id d2u0njvm4vcw95 --environment-name paradise --region us-east-2
{
    "backendEnvironment": {
        "backendEnvironmentArn": "arn:aws:amplify:us-east-2:460474850694:apps/d2u0njvm4vcw95/backendenvironments/paradise",
        "environmentName": "paradise",
        "stackName": "amplify-e-plantShopp-paradise-161629",
        "deploymentArtifacts": "e-plantshopp-paradise-161629-deployment",
        "createTime": "2025-09-15T10:16:29.402000-06:00",
        "updateTime": "2025-09-15T10:16:29.402000-06:00"
    }
}
```

Next, I'm following the documentation found here: https://docs.amplify.aws/gen1/javascript/build-a-backend/graphqlapi/set-up-graphql-api/
to set up graphQL