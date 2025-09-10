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

export type Mutation = {
  __typename: 'Mutation';
  createCategory: Category;
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String']['input'];
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

export type GetPlantQueryVariables = Exact<{
  plantId: Scalars['ID']['input'];
}>;


export type GetPlantQuery = { plant: { __typename: 'Plant', name: string, cost: string | null, description: string | null, image: string | null, category: { __typename: 'Category', id: string, name: string } } | null, categories: Array<{ __typename: 'Category', id: string, name: string }> | null };

export type InsertCategoryMutationVariables = Exact<{
  categoryName: Scalars['String']['input'];
}>;


export type InsertCategoryMutation = { createCategory: { __typename: 'Category', id: string, name: string } };

export type GetPlantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlantsQuery = { plants: Array<{ __typename: 'Plant', id: string, name: string, cost: string | null, description: string | null, image: string | null, category: { __typename: 'Category', name: string } }> | null, categories: Array<{ __typename: 'Category', id: string, name: string }> | null };

export type GetProductListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductListQuery = { categories: Array<{ __typename: 'Category', plants: Array<{ __typename: 'Plant', id: string, name: string, cost: string | null, description: string | null, image: string | null }> | null }> | null };
