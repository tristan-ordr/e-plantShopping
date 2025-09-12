import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename: 'Category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  plants: Maybe<Array<Plant>>;
};

export type EditPlantInput = {
  category_id?: InputMaybe<Scalars['ID']['input']>;
  cost?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename: 'Mutation';
  createCategory: Category;
  createPlant: Plant;
  deleteCategories: Maybe<Array<Category>>;
  deletePlant: Maybe<Array<Plant>>;
  updatePlant: Plant;
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreatePlantArgs = {
  plant: PlantInput;
};


export type MutationDeleteCategoriesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationDeletePlantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdatePlantArgs = {
  edits: EditPlantInput;
  id: Scalars['ID']['input'];
};

export type Plant = {
  __typename: 'Plant';
  category: Category;
  cost: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type PlantInput = {
  category_id: Scalars['ID']['input'];
  cost?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type Query = {
  __typename: 'Query';
  categories: Maybe<Array<Category>>;
  category: Maybe<Category>;
  plant: Maybe<Plant>;
  plants: Maybe<Array<Plant>>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlantArgs = {
  id: Scalars['ID']['input'];
};

export type DeletePlantMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePlantMutation = { deletePlant: Array<{ __typename: 'Plant', id: string }> | null };

export type GetPlantQueryVariables = Exact<{
  plantId: Scalars['ID']['input'];
}>;


export type GetPlantQuery = { plant: { __typename: 'Plant', id: string, name: string, cost: string | null, description: string | null, image: string | null, category: { __typename: 'Category', id: string, name: string } } | null, categories: Array<{ __typename: 'Category', id: string, name: string }> | null };

export type InsertPlantMutationVariables = Exact<{
  plant: PlantInput;
}>;


export type InsertPlantMutation = { createPlant: { __typename: 'Plant', id: string } };

export type GetPlantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlantsQuery = { plants: Array<{ __typename: 'Plant', id: string, name: string, cost: string | null, description: string | null, image: string | null, category: { __typename: 'Category', name: string, id: string } }> | null, categories: Array<{ __typename: 'Category', id: string, name: string, plants: Array<{ __typename: 'Plant', id: string }> | null }> | null };

export type InsertCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type InsertCategoryMutation = { createCategory: { __typename: 'Category', id: string, name: string } };

export type UpdatePlantMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  edits: EditPlantInput;
}>;


export type UpdatePlantMutation = { updatePlant: { __typename: 'Plant', id: string, name: string } };

export type DeleteCategoriesMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type DeleteCategoriesMutation = { deleteCategories: Array<{ __typename: 'Category', id: string }> | null };

export type GetProductListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductListQuery = { categories: Array<{ __typename: 'Category', name: string, plants: Array<{ __typename: 'Plant', id: string, name: string, cost: string | null, description: string | null, image: string | null }> | null }> | null };


export const DeletePlantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePlant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePlant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePlantMutation, DeletePlantMutationVariables>;
export const GetPlantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"plantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"plant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"plantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetPlantQuery, GetPlantQueryVariables>;
export const InsertPlantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertPlant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"plant"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"plant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"plant"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertPlantMutation, InsertPlantMutationVariables>;
export const GetPlantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"plants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"plants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlantsQuery, GetPlantsQueryVariables>;
export const InsertCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<InsertCategoryMutation, InsertCategoryMutationVariables>;
export const UpdatePlantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePlant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"edits"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditPlantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"edits"},"value":{"kind":"Variable","name":{"kind":"Name","value":"edits"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdatePlantMutation, UpdatePlantMutationVariables>;
export const DeleteCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteCategoriesMutation, DeleteCategoriesMutationVariables>;
export const GetProductListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"plants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductListQuery, GetProductListQueryVariables>;