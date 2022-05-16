import { GraphQLResolveInfo } from 'graphql';
import { RealtimeResponse } from './Realtime';
import { Context } from './Context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BaseResponse = {
  api_status?: Maybe<Scalars['String']>;
  api_version?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  location?: Maybe<Array<Maybe<Scalars['Float']>>>;
  server_time?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  tzshift?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getRealtime?: Maybe<Realtime>;
};

export type Realtime = BaseResponse & {
  __typename?: 'Realtime';
  api_status?: Maybe<Scalars['String']>;
  api_version?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  location?: Maybe<Array<Maybe<Scalars['Float']>>>;
  result?: Maybe<RealtimeResult>;
  server_time?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  tzshift?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type RealtimeResult = {
  __typename?: 'RealtimeResult';
  primary?: Maybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BaseResponse: ResolversTypes['Realtime'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Realtime: ResolverTypeWrapper<RealtimeResponse>;
  RealtimeResult: ResolverTypeWrapper<RealtimeResult>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BaseResponse: ResolversParentTypes['Realtime'];
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Query: {};
  Realtime: RealtimeResponse;
  RealtimeResult: RealtimeResult;
  String: Scalars['String'];
}>;

export type BaseResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BaseResponse'] = ResolversParentTypes['BaseResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Realtime', ParentType, ContextType>;
  api_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  api_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  server_time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tzshift?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getRealtime?: Resolver<Maybe<ResolversTypes['Realtime']>, ParentType, ContextType>;
}>;

export type RealtimeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Realtime'] = ResolversParentTypes['Realtime']> = ResolversObject<{
  api_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  api_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['RealtimeResult']>, ParentType, ContextType>;
  server_time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tzshift?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RealtimeResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RealtimeResult'] = ResolversParentTypes['RealtimeResult']> = ResolversObject<{
  primary?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  BaseResponse?: BaseResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Realtime?: RealtimeResolvers<ContextType>;
  RealtimeResult?: RealtimeResultResolvers<ContextType>;
}>;

