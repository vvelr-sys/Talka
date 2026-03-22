
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Platform
 * 
 */
export type Platform = $Result.DefaultSelection<Prisma.$PlatformPayload>
/**
 * Model CustomerSocialAccount
 * 
 */
export type CustomerSocialAccount = $Result.DefaultSelection<Prisma.$CustomerSocialAccountPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model CustomerTag
 * 
 */
export type CustomerTag = $Result.DefaultSelection<Prisma.$CustomerTagPayload>
/**
 * Model ChatTag
 * 
 */
export type ChatTag = $Result.DefaultSelection<Prisma.$ChatTagPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE',
  MANAGER: 'MANAGER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  AWAY: 'AWAY'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const SenderType: {
  CUSTOMER: 'CUSTOMER',
  AGENT: 'AGENT',
  BOT: 'BOT',
  SYSTEM: 'SYSTEM'
};

export type SenderType = (typeof SenderType)[keyof typeof SenderType]


export const MessageType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  FILE: 'FILE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const ChatStatus: {
  OPEN: 'OPEN',
  PENDING: 'PENDING',
  CLOSED: 'CLOSED',
  RESOLVED: 'RESOLVED'
};

export type ChatStatus = (typeof ChatStatus)[keyof typeof ChatStatus]


export const AssignmentStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type SenderType = $Enums.SenderType

export const SenderType: typeof $Enums.SenderType

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type ChatStatus = $Enums.ChatStatus

export const ChatStatus: typeof $Enums.ChatStatus

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platform`: Exposes CRUD operations for the **Platform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platform.findMany()
    * ```
    */
  get platform(): Prisma.PlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerSocialAccount`: Exposes CRUD operations for the **CustomerSocialAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerSocialAccounts
    * const customerSocialAccounts = await prisma.customerSocialAccount.findMany()
    * ```
    */
  get customerSocialAccount(): Prisma.CustomerSocialAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerTag`: Exposes CRUD operations for the **CustomerTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerTags
    * const customerTags = await prisma.customerTag.findMany()
    * ```
    */
  get customerTag(): Prisma.CustomerTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatTag`: Exposes CRUD operations for the **ChatTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatTags
    * const chatTags = await prisma.chatTag.findMany()
    * ```
    */
  get chatTag(): Prisma.ChatTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Team: 'Team',
    TeamMember: 'TeamMember',
    Customer: 'Customer',
    Platform: 'Platform',
    CustomerSocialAccount: 'CustomerSocialAccount',
    ChatSession: 'ChatSession',
    Message: 'Message',
    Note: 'Note',
    Assignment: 'Assignment',
    Tag: 'Tag',
    CustomerTag: 'CustomerTag',
    ChatTag: 'ChatTag',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "team" | "teamMember" | "customer" | "platform" | "customerSocialAccount" | "chatSession" | "message" | "note" | "assignment" | "tag" | "customerTag" | "chatTag" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Platform: {
        payload: Prisma.$PlatformPayload<ExtArgs>
        fields: Prisma.PlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findFirst: {
            args: Prisma.PlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findMany: {
            args: Prisma.PlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          create: {
            args: Prisma.PlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          createMany: {
            args: Prisma.PlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          update: {
            args: Prisma.PlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          deleteMany: {
            args: Prisma.PlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          aggregate: {
            args: Prisma.PlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatform>
          }
          groupBy: {
            args: Prisma.PlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformCountAggregateOutputType> | number
          }
        }
      }
      CustomerSocialAccount: {
        payload: Prisma.$CustomerSocialAccountPayload<ExtArgs>
        fields: Prisma.CustomerSocialAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerSocialAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerSocialAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerSocialAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerSocialAccountPayload>
          }
          findFirst: {
            args: Prisma.CustomerSocialAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerSocialAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerSocialAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerSocialAccountPayload>
          }
          findMany: {
            args: Prisma.CustomerSocialAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerSocialAccountPayload>[]
          }
          create: {
            args: Prisma.CustomerSocialAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerSocialAccountPayload>
          }
          createMany: {
            args: Prisma.CustomerSocialAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerSocialAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerSocialAccountPayload>
          }
          update: {
            args: Prisma.CustomerSocialAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerSocialAccountPayload>
          }
          deleteMany: {
            args: Prisma.CustomerSocialAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerSocialAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerSocialAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerSocialAccountPayload>
          }
          aggregate: {
            args: Prisma.CustomerSocialAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerSocialAccount>
          }
          groupBy: {
            args: Prisma.CustomerSocialAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerSocialAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerSocialAccountCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerSocialAccountCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      CustomerTag: {
        payload: Prisma.$CustomerTagPayload<ExtArgs>
        fields: Prisma.CustomerTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTagPayload>
          }
          findFirst: {
            args: Prisma.CustomerTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTagPayload>
          }
          findMany: {
            args: Prisma.CustomerTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTagPayload>[]
          }
          create: {
            args: Prisma.CustomerTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTagPayload>
          }
          createMany: {
            args: Prisma.CustomerTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTagPayload>
          }
          update: {
            args: Prisma.CustomerTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTagPayload>
          }
          deleteMany: {
            args: Prisma.CustomerTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTagPayload>
          }
          aggregate: {
            args: Prisma.CustomerTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerTag>
          }
          groupBy: {
            args: Prisma.CustomerTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerTagCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerTagCountAggregateOutputType> | number
          }
        }
      }
      ChatTag: {
        payload: Prisma.$ChatTagPayload<ExtArgs>
        fields: Prisma.ChatTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTagPayload>
          }
          findFirst: {
            args: Prisma.ChatTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTagPayload>
          }
          findMany: {
            args: Prisma.ChatTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTagPayload>[]
          }
          create: {
            args: Prisma.ChatTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTagPayload>
          }
          createMany: {
            args: Prisma.ChatTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTagPayload>
          }
          update: {
            args: Prisma.ChatTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTagPayload>
          }
          deleteMany: {
            args: Prisma.ChatTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTagPayload>
          }
          aggregate: {
            args: Prisma.ChatTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatTag>
          }
          groupBy: {
            args: Prisma.ChatTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatTagCountArgs<ExtArgs>
            result: $Utils.Optional<ChatTagCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    team?: TeamOmit
    teamMember?: TeamMemberOmit
    customer?: CustomerOmit
    platform?: PlatformOmit
    customerSocialAccount?: CustomerSocialAccountOmit
    chatSession?: ChatSessionOmit
    message?: MessageOmit
    note?: NoteOmit
    assignment?: AssignmentOmit
    tag?: TagOmit
    customerTag?: CustomerTagOmit
    chatTag?: ChatTagOmit
    activityLog?: ActivityLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    teams: number
    assignments: number
    notes: number
    activity_logs: number
    chat_sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    activity_logs?: boolean | UserCountOutputTypeCountActivity_logsArgs
    chat_sessions?: boolean | UserCountOutputTypeCountChat_sessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChat_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    social_accounts: number
    chat_sessions: number
    tags: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_accounts?: boolean | CustomerCountOutputTypeCountSocial_accountsArgs
    chat_sessions?: boolean | CustomerCountOutputTypeCountChat_sessionsArgs
    tags?: boolean | CustomerCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSocial_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerSocialAccountWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountChat_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerTagWhereInput
  }


  /**
   * Count Type PlatformCountOutputType
   */

  export type PlatformCountOutputType = {
    chat_sessions: number
    social_links: number
  }

  export type PlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_sessions?: boolean | PlatformCountOutputTypeCountChat_sessionsArgs
    social_links?: boolean | PlatformCountOutputTypeCountSocial_linksArgs
  }

  // Custom InputTypes
  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCountOutputType
     */
    select?: PlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeCountChat_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }

  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeCountSocial_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerSocialAccountWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
    notes: number
    assignments: number
    tags: number
    logs: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
    notes?: boolean | ChatSessionCountOutputTypeCountNotesArgs
    assignments?: boolean | ChatSessionCountOutputTypeCountAssignmentsArgs
    tags?: boolean | ChatSessionCountOutputTypeCountTagsArgs
    logs?: boolean | ChatSessionCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatTagWhereInput
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    customers: number
    chats: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | TagCountOutputTypeCountCustomersArgs
    chats?: boolean | TagCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    profile_image: string | null
    online_status: $Enums.UserStatus | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    profile_image: string | null
    online_status: $Enums.UserStatus | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    first_name: number
    last_name: number
    email: number
    password: number
    role: number
    profile_image: number
    online_status: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    role?: true
    profile_image?: true
    online_status?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    role?: true
    profile_image?: true
    online_status?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    role?: true
    profile_image?: true
    online_status?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    role: $Enums.Role
    profile_image: string | null
    online_status: $Enums.UserStatus
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_image?: boolean
    online_status?: boolean
    created_at?: boolean
    teams?: boolean | User$teamsArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    activity_logs?: boolean | User$activity_logsArgs<ExtArgs>
    chat_sessions?: boolean | User$chat_sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_image?: boolean
    online_status?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "first_name" | "last_name" | "email" | "password" | "role" | "profile_image" | "online_status" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | User$teamsArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    activity_logs?: boolean | User$activity_logsArgs<ExtArgs>
    chat_sessions?: boolean | User$chat_sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teams: Prisma.$TeamMemberPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      activity_logs: Prisma.$ActivityLogPayload<ExtArgs>[]
      chat_sessions: Prisma.$ChatSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      first_name: string
      last_name: string
      email: string
      password: string
      role: $Enums.Role
      profile_image: string | null
      online_status: $Enums.UserStatus
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activity_logs<T extends User$activity_logsArgs<ExtArgs> = {}>(args?: Subset<T, User$activity_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chat_sessions<T extends User$chat_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$chat_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profile_image: FieldRef<"User", 'String'>
    readonly online_status: FieldRef<"User", 'UserStatus'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.activity_logs
   */
  export type User$activity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.chat_sessions
   */
  export type User$chat_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    team_id: number | null
  }

  export type TeamSumAggregateOutputType = {
    team_id: number | null
  }

  export type TeamMinAggregateOutputType = {
    team_id: number | null
    team_name: string | null
    description: string | null
  }

  export type TeamMaxAggregateOutputType = {
    team_id: number | null
    team_name: string | null
    description: string | null
  }

  export type TeamCountAggregateOutputType = {
    team_id: number
    team_name: number
    description: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    team_id?: true
  }

  export type TeamSumAggregateInputType = {
    team_id?: true
  }

  export type TeamMinAggregateInputType = {
    team_id?: true
    team_name?: true
    description?: true
  }

  export type TeamMaxAggregateInputType = {
    team_id?: true
    team_name?: true
    description?: true
  }

  export type TeamCountAggregateInputType = {
    team_id?: true
    team_name?: true
    description?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    team_id: number
    team_name: string
    description: string | null
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    team_name?: boolean
    description?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>



  export type TeamSelectScalar = {
    team_id?: boolean
    team_name?: boolean
    description?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"team_id" | "team_name" | "description", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$TeamMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      team_id: number
      team_name: string
      description: string | null
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `team_id`
     * const teamWithTeam_idOnly = await prisma.team.findMany({ select: { team_id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly team_id: FieldRef<"Team", 'Int'>
    readonly team_name: FieldRef<"Team", 'String'>
    readonly description: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberAvgAggregateOutputType = {
    team_member_id: number | null
    team_id: number | null
    user_id: number | null
  }

  export type TeamMemberSumAggregateOutputType = {
    team_member_id: number | null
    team_id: number | null
    user_id: number | null
  }

  export type TeamMemberMinAggregateOutputType = {
    team_member_id: number | null
    team_id: number | null
    user_id: number | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    team_member_id: number | null
    team_id: number | null
    user_id: number | null
  }

  export type TeamMemberCountAggregateOutputType = {
    team_member_id: number
    team_id: number
    user_id: number
    _all: number
  }


  export type TeamMemberAvgAggregateInputType = {
    team_member_id?: true
    team_id?: true
    user_id?: true
  }

  export type TeamMemberSumAggregateInputType = {
    team_member_id?: true
    team_id?: true
    user_id?: true
  }

  export type TeamMemberMinAggregateInputType = {
    team_member_id?: true
    team_id?: true
    user_id?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    team_member_id?: true
    team_id?: true
    user_id?: true
  }

  export type TeamMemberCountAggregateInputType = {
    team_member_id?: true
    team_id?: true
    user_id?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _avg?: TeamMemberAvgAggregateInputType
    _sum?: TeamMemberSumAggregateInputType
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    team_member_id: number
    team_id: number
    user_id: number
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_member_id?: boolean
    team_id?: boolean
    user_id?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>



  export type TeamMemberSelectScalar = {
    team_member_id?: boolean
    team_id?: boolean
    user_id?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"team_member_id" | "team_id" | "user_id", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      team_member_id: number
      team_id: number
      user_id: number
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `team_member_id`
     * const teamMemberWithTeam_member_idOnly = await prisma.teamMember.findMany({ select: { team_member_id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly team_member_id: FieldRef<"TeamMember", 'Int'>
    readonly team_id: FieldRef<"TeamMember", 'Int'>
    readonly user_id: FieldRef<"TeamMember", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customer_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    company: string | null
    country: string | null
    created_at: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    customer_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    company: string | null
    country: string | null
    created_at: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    customer_id: number
    name: number
    email: number
    phone: number
    company: number
    country: number
    created_at: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customer_id?: true
  }

  export type CustomerSumAggregateInputType = {
    customer_id?: true
  }

  export type CustomerMinAggregateInputType = {
    customer_id?: true
    name?: true
    email?: true
    phone?: true
    company?: true
    country?: true
    created_at?: true
  }

  export type CustomerMaxAggregateInputType = {
    customer_id?: true
    name?: true
    email?: true
    phone?: true
    company?: true
    country?: true
    created_at?: true
  }

  export type CustomerCountAggregateInputType = {
    customer_id?: true
    name?: true
    email?: true
    phone?: true
    company?: true
    country?: true
    created_at?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customer_id: number
    name: string
    email: string | null
    phone: string | null
    company: string | null
    country: string | null
    created_at: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    country?: boolean
    created_at?: boolean
    social_accounts?: boolean | Customer$social_accountsArgs<ExtArgs>
    chat_sessions?: boolean | Customer$chat_sessionsArgs<ExtArgs>
    tags?: boolean | Customer$tagsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    customer_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    country?: boolean
    created_at?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_id" | "name" | "email" | "phone" | "company" | "country" | "created_at", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_accounts?: boolean | Customer$social_accountsArgs<ExtArgs>
    chat_sessions?: boolean | Customer$chat_sessionsArgs<ExtArgs>
    tags?: boolean | Customer$tagsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      social_accounts: Prisma.$CustomerSocialAccountPayload<ExtArgs>[]
      chat_sessions: Prisma.$ChatSessionPayload<ExtArgs>[]
      tags: Prisma.$CustomerTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_id: number
      name: string
      email: string | null
      phone: string | null
      company: string | null
      country: string | null
      created_at: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customerWithCustomer_idOnly = await prisma.customer.findMany({ select: { customer_id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    social_accounts<T extends Customer$social_accountsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$social_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chat_sessions<T extends Customer$chat_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$chat_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Customer$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly customer_id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly company: FieldRef<"Customer", 'String'>
    readonly country: FieldRef<"Customer", 'String'>
    readonly created_at: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.social_accounts
   */
  export type Customer$social_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    where?: CustomerSocialAccountWhereInput
    orderBy?: CustomerSocialAccountOrderByWithRelationInput | CustomerSocialAccountOrderByWithRelationInput[]
    cursor?: CustomerSocialAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerSocialAccountScalarFieldEnum | CustomerSocialAccountScalarFieldEnum[]
  }

  /**
   * Customer.chat_sessions
   */
  export type Customer$chat_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * Customer.tags
   */
  export type Customer$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    where?: CustomerTagWhereInput
    orderBy?: CustomerTagOrderByWithRelationInput | CustomerTagOrderByWithRelationInput[]
    cursor?: CustomerTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerTagScalarFieldEnum | CustomerTagScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Platform
   */

  export type AggregatePlatform = {
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  export type PlatformAvgAggregateOutputType = {
    platform_id: number | null
  }

  export type PlatformSumAggregateOutputType = {
    platform_id: number | null
  }

  export type PlatformMinAggregateOutputType = {
    platform_id: number | null
    platform_name: string | null
  }

  export type PlatformMaxAggregateOutputType = {
    platform_id: number | null
    platform_name: string | null
  }

  export type PlatformCountAggregateOutputType = {
    platform_id: number
    platform_name: number
    _all: number
  }


  export type PlatformAvgAggregateInputType = {
    platform_id?: true
  }

  export type PlatformSumAggregateInputType = {
    platform_id?: true
  }

  export type PlatformMinAggregateInputType = {
    platform_id?: true
    platform_name?: true
  }

  export type PlatformMaxAggregateInputType = {
    platform_id?: true
    platform_name?: true
  }

  export type PlatformCountAggregateInputType = {
    platform_id?: true
    platform_name?: true
    _all?: true
  }

  export type PlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platform to aggregate.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platforms
    **/
    _count?: true | PlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformMaxAggregateInputType
  }

  export type GetPlatformAggregateType<T extends PlatformAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatform[P]>
      : GetScalarType<T[P], AggregatePlatform[P]>
  }




  export type PlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithAggregationInput | PlatformOrderByWithAggregationInput[]
    by: PlatformScalarFieldEnum[] | PlatformScalarFieldEnum
    having?: PlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformCountAggregateInputType | true
    _avg?: PlatformAvgAggregateInputType
    _sum?: PlatformSumAggregateInputType
    _min?: PlatformMinAggregateInputType
    _max?: PlatformMaxAggregateInputType
  }

  export type PlatformGroupByOutputType = {
    platform_id: number
    platform_name: string
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  type GetPlatformGroupByPayload<T extends PlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    platform_id?: boolean
    platform_name?: boolean
    chat_sessions?: boolean | Platform$chat_sessionsArgs<ExtArgs>
    social_links?: boolean | Platform$social_linksArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platform"]>



  export type PlatformSelectScalar = {
    platform_id?: boolean
    platform_name?: boolean
  }

  export type PlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"platform_id" | "platform_name", ExtArgs["result"]["platform"]>
  export type PlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_sessions?: boolean | Platform$chat_sessionsArgs<ExtArgs>
    social_links?: boolean | Platform$social_linksArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platform"
    objects: {
      chat_sessions: Prisma.$ChatSessionPayload<ExtArgs>[]
      social_links: Prisma.$CustomerSocialAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      platform_id: number
      platform_name: string
    }, ExtArgs["result"]["platform"]>
    composites: {}
  }

  type PlatformGetPayload<S extends boolean | null | undefined | PlatformDefaultArgs> = $Result.GetResult<Prisma.$PlatformPayload, S>

  type PlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformCountAggregateInputType | true
    }

  export interface PlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platform'], meta: { name: 'Platform' } }
    /**
     * Find zero or one Platform that matches the filter.
     * @param {PlatformFindUniqueArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformFindUniqueArgs>(args: SelectSubset<T, PlatformFindUniqueArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformFindUniqueOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformFindFirstArgs>(args?: SelectSubset<T, PlatformFindFirstArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platform.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platform.findMany({ take: 10 })
     * 
     * // Only select the `platform_id`
     * const platformWithPlatform_idOnly = await prisma.platform.findMany({ select: { platform_id: true } })
     * 
     */
    findMany<T extends PlatformFindManyArgs>(args?: SelectSubset<T, PlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platform.
     * @param {PlatformCreateArgs} args - Arguments to create a Platform.
     * @example
     * // Create one Platform
     * const Platform = await prisma.platform.create({
     *   data: {
     *     // ... data to create a Platform
     *   }
     * })
     * 
     */
    create<T extends PlatformCreateArgs>(args: SelectSubset<T, PlatformCreateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platforms.
     * @param {PlatformCreateManyArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformCreateManyArgs>(args?: SelectSubset<T, PlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Platform.
     * @param {PlatformDeleteArgs} args - Arguments to delete one Platform.
     * @example
     * // Delete one Platform
     * const Platform = await prisma.platform.delete({
     *   where: {
     *     // ... filter to delete one Platform
     *   }
     * })
     * 
     */
    delete<T extends PlatformDeleteArgs>(args: SelectSubset<T, PlatformDeleteArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platform.
     * @param {PlatformUpdateArgs} args - Arguments to update one Platform.
     * @example
     * // Update one Platform
     * const platform = await prisma.platform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformUpdateArgs>(args: SelectSubset<T, PlatformUpdateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platforms.
     * @param {PlatformDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformDeleteManyArgs>(args?: SelectSubset<T, PlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformUpdateManyArgs>(args: SelectSubset<T, PlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Platform.
     * @param {PlatformUpsertArgs} args - Arguments to update or create a Platform.
     * @example
     * // Update or create a Platform
     * const platform = await prisma.platform.upsert({
     *   create: {
     *     // ... data to create a Platform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platform we want to update
     *   }
     * })
     */
    upsert<T extends PlatformUpsertArgs>(args: SelectSubset<T, PlatformUpsertArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platform.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends PlatformCountArgs>(
      args?: Subset<T, PlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformAggregateArgs>(args: Subset<T, PlatformAggregateArgs>): Prisma.PrismaPromise<GetPlatformAggregateType<T>>

    /**
     * Group by Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformGroupByArgs['orderBy'] }
        : { orderBy?: PlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platform model
   */
  readonly fields: PlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_sessions<T extends Platform$chat_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Platform$chat_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    social_links<T extends Platform$social_linksArgs<ExtArgs> = {}>(args?: Subset<T, Platform$social_linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Platform model
   */
  interface PlatformFieldRefs {
    readonly platform_id: FieldRef<"Platform", 'Int'>
    readonly platform_name: FieldRef<"Platform", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Platform findUnique
   */
  export type PlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findUniqueOrThrow
   */
  export type PlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findFirst
   */
  export type PlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findFirstOrThrow
   */
  export type PlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findMany
   */
  export type PlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform create
   */
  export type PlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a Platform.
     */
    data: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
  }

  /**
   * Platform createMany
   */
  export type PlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform update
   */
  export type PlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a Platform.
     */
    data: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
    /**
     * Choose, which Platform to update.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform updateMany
   */
  export type PlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform upsert
   */
  export type PlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the Platform to update in case it exists.
     */
    where: PlatformWhereUniqueInput
    /**
     * In case the Platform found by the `where` argument doesn't exist, create a new Platform with this data.
     */
    create: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
    /**
     * In case the Platform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
  }

  /**
   * Platform delete
   */
  export type PlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter which Platform to delete.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform deleteMany
   */
  export type PlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to delete
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to delete.
     */
    limit?: number
  }

  /**
   * Platform.chat_sessions
   */
  export type Platform$chat_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * Platform.social_links
   */
  export type Platform$social_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    where?: CustomerSocialAccountWhereInput
    orderBy?: CustomerSocialAccountOrderByWithRelationInput | CustomerSocialAccountOrderByWithRelationInput[]
    cursor?: CustomerSocialAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerSocialAccountScalarFieldEnum | CustomerSocialAccountScalarFieldEnum[]
  }

  /**
   * Platform without action
   */
  export type PlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
  }


  /**
   * Model CustomerSocialAccount
   */

  export type AggregateCustomerSocialAccount = {
    _count: CustomerSocialAccountCountAggregateOutputType | null
    _avg: CustomerSocialAccountAvgAggregateOutputType | null
    _sum: CustomerSocialAccountSumAggregateOutputType | null
    _min: CustomerSocialAccountMinAggregateOutputType | null
    _max: CustomerSocialAccountMaxAggregateOutputType | null
  }

  export type CustomerSocialAccountAvgAggregateOutputType = {
    social_account_id: number | null
    customer_id: number | null
    platform_id: number | null
  }

  export type CustomerSocialAccountSumAggregateOutputType = {
    social_account_id: number | null
    customer_id: number | null
    platform_id: number | null
  }

  export type CustomerSocialAccountMinAggregateOutputType = {
    social_account_id: number | null
    customer_id: number | null
    platform_id: number | null
    account_identifier: string | null
  }

  export type CustomerSocialAccountMaxAggregateOutputType = {
    social_account_id: number | null
    customer_id: number | null
    platform_id: number | null
    account_identifier: string | null
  }

  export type CustomerSocialAccountCountAggregateOutputType = {
    social_account_id: number
    customer_id: number
    platform_id: number
    account_identifier: number
    _all: number
  }


  export type CustomerSocialAccountAvgAggregateInputType = {
    social_account_id?: true
    customer_id?: true
    platform_id?: true
  }

  export type CustomerSocialAccountSumAggregateInputType = {
    social_account_id?: true
    customer_id?: true
    platform_id?: true
  }

  export type CustomerSocialAccountMinAggregateInputType = {
    social_account_id?: true
    customer_id?: true
    platform_id?: true
    account_identifier?: true
  }

  export type CustomerSocialAccountMaxAggregateInputType = {
    social_account_id?: true
    customer_id?: true
    platform_id?: true
    account_identifier?: true
  }

  export type CustomerSocialAccountCountAggregateInputType = {
    social_account_id?: true
    customer_id?: true
    platform_id?: true
    account_identifier?: true
    _all?: true
  }

  export type CustomerSocialAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerSocialAccount to aggregate.
     */
    where?: CustomerSocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerSocialAccounts to fetch.
     */
    orderBy?: CustomerSocialAccountOrderByWithRelationInput | CustomerSocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerSocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerSocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerSocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerSocialAccounts
    **/
    _count?: true | CustomerSocialAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerSocialAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSocialAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerSocialAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerSocialAccountMaxAggregateInputType
  }

  export type GetCustomerSocialAccountAggregateType<T extends CustomerSocialAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerSocialAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerSocialAccount[P]>
      : GetScalarType<T[P], AggregateCustomerSocialAccount[P]>
  }




  export type CustomerSocialAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerSocialAccountWhereInput
    orderBy?: CustomerSocialAccountOrderByWithAggregationInput | CustomerSocialAccountOrderByWithAggregationInput[]
    by: CustomerSocialAccountScalarFieldEnum[] | CustomerSocialAccountScalarFieldEnum
    having?: CustomerSocialAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerSocialAccountCountAggregateInputType | true
    _avg?: CustomerSocialAccountAvgAggregateInputType
    _sum?: CustomerSocialAccountSumAggregateInputType
    _min?: CustomerSocialAccountMinAggregateInputType
    _max?: CustomerSocialAccountMaxAggregateInputType
  }

  export type CustomerSocialAccountGroupByOutputType = {
    social_account_id: number
    customer_id: number
    platform_id: number
    account_identifier: string
    _count: CustomerSocialAccountCountAggregateOutputType | null
    _avg: CustomerSocialAccountAvgAggregateOutputType | null
    _sum: CustomerSocialAccountSumAggregateOutputType | null
    _min: CustomerSocialAccountMinAggregateOutputType | null
    _max: CustomerSocialAccountMaxAggregateOutputType | null
  }

  type GetCustomerSocialAccountGroupByPayload<T extends CustomerSocialAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerSocialAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerSocialAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerSocialAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerSocialAccountGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSocialAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    social_account_id?: boolean
    customer_id?: boolean
    platform_id?: boolean
    account_identifier?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerSocialAccount"]>



  export type CustomerSocialAccountSelectScalar = {
    social_account_id?: boolean
    customer_id?: boolean
    platform_id?: boolean
    account_identifier?: boolean
  }

  export type CustomerSocialAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"social_account_id" | "customer_id" | "platform_id" | "account_identifier", ExtArgs["result"]["customerSocialAccount"]>
  export type CustomerSocialAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }

  export type $CustomerSocialAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerSocialAccount"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      platform: Prisma.$PlatformPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      social_account_id: number
      customer_id: number
      platform_id: number
      account_identifier: string
    }, ExtArgs["result"]["customerSocialAccount"]>
    composites: {}
  }

  type CustomerSocialAccountGetPayload<S extends boolean | null | undefined | CustomerSocialAccountDefaultArgs> = $Result.GetResult<Prisma.$CustomerSocialAccountPayload, S>

  type CustomerSocialAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerSocialAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerSocialAccountCountAggregateInputType | true
    }

  export interface CustomerSocialAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerSocialAccount'], meta: { name: 'CustomerSocialAccount' } }
    /**
     * Find zero or one CustomerSocialAccount that matches the filter.
     * @param {CustomerSocialAccountFindUniqueArgs} args - Arguments to find a CustomerSocialAccount
     * @example
     * // Get one CustomerSocialAccount
     * const customerSocialAccount = await prisma.customerSocialAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerSocialAccountFindUniqueArgs>(args: SelectSubset<T, CustomerSocialAccountFindUniqueArgs<ExtArgs>>): Prisma__CustomerSocialAccountClient<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerSocialAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerSocialAccountFindUniqueOrThrowArgs} args - Arguments to find a CustomerSocialAccount
     * @example
     * // Get one CustomerSocialAccount
     * const customerSocialAccount = await prisma.customerSocialAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerSocialAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerSocialAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerSocialAccountClient<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerSocialAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerSocialAccountFindFirstArgs} args - Arguments to find a CustomerSocialAccount
     * @example
     * // Get one CustomerSocialAccount
     * const customerSocialAccount = await prisma.customerSocialAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerSocialAccountFindFirstArgs>(args?: SelectSubset<T, CustomerSocialAccountFindFirstArgs<ExtArgs>>): Prisma__CustomerSocialAccountClient<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerSocialAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerSocialAccountFindFirstOrThrowArgs} args - Arguments to find a CustomerSocialAccount
     * @example
     * // Get one CustomerSocialAccount
     * const customerSocialAccount = await prisma.customerSocialAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerSocialAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerSocialAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerSocialAccountClient<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerSocialAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerSocialAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerSocialAccounts
     * const customerSocialAccounts = await prisma.customerSocialAccount.findMany()
     * 
     * // Get first 10 CustomerSocialAccounts
     * const customerSocialAccounts = await prisma.customerSocialAccount.findMany({ take: 10 })
     * 
     * // Only select the `social_account_id`
     * const customerSocialAccountWithSocial_account_idOnly = await prisma.customerSocialAccount.findMany({ select: { social_account_id: true } })
     * 
     */
    findMany<T extends CustomerSocialAccountFindManyArgs>(args?: SelectSubset<T, CustomerSocialAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerSocialAccount.
     * @param {CustomerSocialAccountCreateArgs} args - Arguments to create a CustomerSocialAccount.
     * @example
     * // Create one CustomerSocialAccount
     * const CustomerSocialAccount = await prisma.customerSocialAccount.create({
     *   data: {
     *     // ... data to create a CustomerSocialAccount
     *   }
     * })
     * 
     */
    create<T extends CustomerSocialAccountCreateArgs>(args: SelectSubset<T, CustomerSocialAccountCreateArgs<ExtArgs>>): Prisma__CustomerSocialAccountClient<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerSocialAccounts.
     * @param {CustomerSocialAccountCreateManyArgs} args - Arguments to create many CustomerSocialAccounts.
     * @example
     * // Create many CustomerSocialAccounts
     * const customerSocialAccount = await prisma.customerSocialAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerSocialAccountCreateManyArgs>(args?: SelectSubset<T, CustomerSocialAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerSocialAccount.
     * @param {CustomerSocialAccountDeleteArgs} args - Arguments to delete one CustomerSocialAccount.
     * @example
     * // Delete one CustomerSocialAccount
     * const CustomerSocialAccount = await prisma.customerSocialAccount.delete({
     *   where: {
     *     // ... filter to delete one CustomerSocialAccount
     *   }
     * })
     * 
     */
    delete<T extends CustomerSocialAccountDeleteArgs>(args: SelectSubset<T, CustomerSocialAccountDeleteArgs<ExtArgs>>): Prisma__CustomerSocialAccountClient<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerSocialAccount.
     * @param {CustomerSocialAccountUpdateArgs} args - Arguments to update one CustomerSocialAccount.
     * @example
     * // Update one CustomerSocialAccount
     * const customerSocialAccount = await prisma.customerSocialAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerSocialAccountUpdateArgs>(args: SelectSubset<T, CustomerSocialAccountUpdateArgs<ExtArgs>>): Prisma__CustomerSocialAccountClient<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerSocialAccounts.
     * @param {CustomerSocialAccountDeleteManyArgs} args - Arguments to filter CustomerSocialAccounts to delete.
     * @example
     * // Delete a few CustomerSocialAccounts
     * const { count } = await prisma.customerSocialAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerSocialAccountDeleteManyArgs>(args?: SelectSubset<T, CustomerSocialAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerSocialAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerSocialAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerSocialAccounts
     * const customerSocialAccount = await prisma.customerSocialAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerSocialAccountUpdateManyArgs>(args: SelectSubset<T, CustomerSocialAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerSocialAccount.
     * @param {CustomerSocialAccountUpsertArgs} args - Arguments to update or create a CustomerSocialAccount.
     * @example
     * // Update or create a CustomerSocialAccount
     * const customerSocialAccount = await prisma.customerSocialAccount.upsert({
     *   create: {
     *     // ... data to create a CustomerSocialAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerSocialAccount we want to update
     *   }
     * })
     */
    upsert<T extends CustomerSocialAccountUpsertArgs>(args: SelectSubset<T, CustomerSocialAccountUpsertArgs<ExtArgs>>): Prisma__CustomerSocialAccountClient<$Result.GetResult<Prisma.$CustomerSocialAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerSocialAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerSocialAccountCountArgs} args - Arguments to filter CustomerSocialAccounts to count.
     * @example
     * // Count the number of CustomerSocialAccounts
     * const count = await prisma.customerSocialAccount.count({
     *   where: {
     *     // ... the filter for the CustomerSocialAccounts we want to count
     *   }
     * })
    **/
    count<T extends CustomerSocialAccountCountArgs>(
      args?: Subset<T, CustomerSocialAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerSocialAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerSocialAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerSocialAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerSocialAccountAggregateArgs>(args: Subset<T, CustomerSocialAccountAggregateArgs>): Prisma.PrismaPromise<GetCustomerSocialAccountAggregateType<T>>

    /**
     * Group by CustomerSocialAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerSocialAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerSocialAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerSocialAccountGroupByArgs['orderBy'] }
        : { orderBy?: CustomerSocialAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerSocialAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerSocialAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerSocialAccount model
   */
  readonly fields: CustomerSocialAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerSocialAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerSocialAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    platform<T extends PlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatformDefaultArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerSocialAccount model
   */
  interface CustomerSocialAccountFieldRefs {
    readonly social_account_id: FieldRef<"CustomerSocialAccount", 'Int'>
    readonly customer_id: FieldRef<"CustomerSocialAccount", 'Int'>
    readonly platform_id: FieldRef<"CustomerSocialAccount", 'Int'>
    readonly account_identifier: FieldRef<"CustomerSocialAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomerSocialAccount findUnique
   */
  export type CustomerSocialAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which CustomerSocialAccount to fetch.
     */
    where: CustomerSocialAccountWhereUniqueInput
  }

  /**
   * CustomerSocialAccount findUniqueOrThrow
   */
  export type CustomerSocialAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which CustomerSocialAccount to fetch.
     */
    where: CustomerSocialAccountWhereUniqueInput
  }

  /**
   * CustomerSocialAccount findFirst
   */
  export type CustomerSocialAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which CustomerSocialAccount to fetch.
     */
    where?: CustomerSocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerSocialAccounts to fetch.
     */
    orderBy?: CustomerSocialAccountOrderByWithRelationInput | CustomerSocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerSocialAccounts.
     */
    cursor?: CustomerSocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerSocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerSocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerSocialAccounts.
     */
    distinct?: CustomerSocialAccountScalarFieldEnum | CustomerSocialAccountScalarFieldEnum[]
  }

  /**
   * CustomerSocialAccount findFirstOrThrow
   */
  export type CustomerSocialAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which CustomerSocialAccount to fetch.
     */
    where?: CustomerSocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerSocialAccounts to fetch.
     */
    orderBy?: CustomerSocialAccountOrderByWithRelationInput | CustomerSocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerSocialAccounts.
     */
    cursor?: CustomerSocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerSocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerSocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerSocialAccounts.
     */
    distinct?: CustomerSocialAccountScalarFieldEnum | CustomerSocialAccountScalarFieldEnum[]
  }

  /**
   * CustomerSocialAccount findMany
   */
  export type CustomerSocialAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which CustomerSocialAccounts to fetch.
     */
    where?: CustomerSocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerSocialAccounts to fetch.
     */
    orderBy?: CustomerSocialAccountOrderByWithRelationInput | CustomerSocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerSocialAccounts.
     */
    cursor?: CustomerSocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerSocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerSocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerSocialAccounts.
     */
    distinct?: CustomerSocialAccountScalarFieldEnum | CustomerSocialAccountScalarFieldEnum[]
  }

  /**
   * CustomerSocialAccount create
   */
  export type CustomerSocialAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerSocialAccount.
     */
    data: XOR<CustomerSocialAccountCreateInput, CustomerSocialAccountUncheckedCreateInput>
  }

  /**
   * CustomerSocialAccount createMany
   */
  export type CustomerSocialAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerSocialAccounts.
     */
    data: CustomerSocialAccountCreateManyInput | CustomerSocialAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerSocialAccount update
   */
  export type CustomerSocialAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerSocialAccount.
     */
    data: XOR<CustomerSocialAccountUpdateInput, CustomerSocialAccountUncheckedUpdateInput>
    /**
     * Choose, which CustomerSocialAccount to update.
     */
    where: CustomerSocialAccountWhereUniqueInput
  }

  /**
   * CustomerSocialAccount updateMany
   */
  export type CustomerSocialAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerSocialAccounts.
     */
    data: XOR<CustomerSocialAccountUpdateManyMutationInput, CustomerSocialAccountUncheckedUpdateManyInput>
    /**
     * Filter which CustomerSocialAccounts to update
     */
    where?: CustomerSocialAccountWhereInput
    /**
     * Limit how many CustomerSocialAccounts to update.
     */
    limit?: number
  }

  /**
   * CustomerSocialAccount upsert
   */
  export type CustomerSocialAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerSocialAccount to update in case it exists.
     */
    where: CustomerSocialAccountWhereUniqueInput
    /**
     * In case the CustomerSocialAccount found by the `where` argument doesn't exist, create a new CustomerSocialAccount with this data.
     */
    create: XOR<CustomerSocialAccountCreateInput, CustomerSocialAccountUncheckedCreateInput>
    /**
     * In case the CustomerSocialAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerSocialAccountUpdateInput, CustomerSocialAccountUncheckedUpdateInput>
  }

  /**
   * CustomerSocialAccount delete
   */
  export type CustomerSocialAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
    /**
     * Filter which CustomerSocialAccount to delete.
     */
    where: CustomerSocialAccountWhereUniqueInput
  }

  /**
   * CustomerSocialAccount deleteMany
   */
  export type CustomerSocialAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerSocialAccounts to delete
     */
    where?: CustomerSocialAccountWhereInput
    /**
     * Limit how many CustomerSocialAccounts to delete.
     */
    limit?: number
  }

  /**
   * CustomerSocialAccount without action
   */
  export type CustomerSocialAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerSocialAccount
     */
    select?: CustomerSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerSocialAccount
     */
    omit?: CustomerSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerSocialAccountInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _avg: ChatSessionAvgAggregateOutputType | null
    _sum: ChatSessionSumAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionAvgAggregateOutputType = {
    chat_session_id: number | null
    customer_id: number | null
    platform_id: number | null
    assigned_user_id: number | null
  }

  export type ChatSessionSumAggregateOutputType = {
    chat_session_id: number | null
    customer_id: number | null
    platform_id: number | null
    assigned_user_id: number | null
  }

  export type ChatSessionMinAggregateOutputType = {
    chat_session_id: number | null
    customer_id: number | null
    platform_id: number | null
    assigned_user_id: number | null
    status: $Enums.ChatStatus | null
    start_time: Date | null
    end_time: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    chat_session_id: number | null
    customer_id: number | null
    platform_id: number | null
    assigned_user_id: number | null
    status: $Enums.ChatStatus | null
    start_time: Date | null
    end_time: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    chat_session_id: number
    customer_id: number
    platform_id: number
    assigned_user_id: number
    status: number
    start_time: number
    end_time: number
    _all: number
  }


  export type ChatSessionAvgAggregateInputType = {
    chat_session_id?: true
    customer_id?: true
    platform_id?: true
    assigned_user_id?: true
  }

  export type ChatSessionSumAggregateInputType = {
    chat_session_id?: true
    customer_id?: true
    platform_id?: true
    assigned_user_id?: true
  }

  export type ChatSessionMinAggregateInputType = {
    chat_session_id?: true
    customer_id?: true
    platform_id?: true
    assigned_user_id?: true
    status?: true
    start_time?: true
    end_time?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    chat_session_id?: true
    customer_id?: true
    platform_id?: true
    assigned_user_id?: true
    status?: true
    start_time?: true
    end_time?: true
  }

  export type ChatSessionCountAggregateInputType = {
    chat_session_id?: true
    customer_id?: true
    platform_id?: true
    assigned_user_id?: true
    status?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _avg?: ChatSessionAvgAggregateInputType
    _sum?: ChatSessionSumAggregateInputType
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    chat_session_id: number
    customer_id: number
    platform_id: number
    assigned_user_id: number | null
    status: $Enums.ChatStatus
    start_time: Date
    end_time: Date | null
    _count: ChatSessionCountAggregateOutputType | null
    _avg: ChatSessionAvgAggregateOutputType | null
    _sum: ChatSessionSumAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chat_session_id?: boolean
    customer_id?: boolean
    platform_id?: boolean
    assigned_user_id?: boolean
    status?: boolean
    start_time?: boolean
    end_time?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
    assigned_user?: boolean | ChatSession$assigned_userArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    notes?: boolean | ChatSession$notesArgs<ExtArgs>
    assignments?: boolean | ChatSession$assignmentsArgs<ExtArgs>
    tags?: boolean | ChatSession$tagsArgs<ExtArgs>
    logs?: boolean | ChatSession$logsArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>



  export type ChatSessionSelectScalar = {
    chat_session_id?: boolean
    customer_id?: boolean
    platform_id?: boolean
    assigned_user_id?: boolean
    status?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chat_session_id" | "customer_id" | "platform_id" | "assigned_user_id" | "status" | "start_time" | "end_time", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
    assigned_user?: boolean | ChatSession$assigned_userArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    notes?: boolean | ChatSession$notesArgs<ExtArgs>
    assignments?: boolean | ChatSession$assignmentsArgs<ExtArgs>
    tags?: boolean | ChatSession$tagsArgs<ExtArgs>
    logs?: boolean | ChatSession$logsArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      platform: Prisma.$PlatformPayload<ExtArgs>
      assigned_user: Prisma.$UserPayload<ExtArgs> | null
      messages: Prisma.$MessagePayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      tags: Prisma.$ChatTagPayload<ExtArgs>[]
      logs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      chat_session_id: number
      customer_id: number
      platform_id: number
      assigned_user_id: number | null
      status: $Enums.ChatStatus
      start_time: Date
      end_time: Date | null
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `chat_session_id`
     * const chatSessionWithChat_session_idOnly = await prisma.chatSession.findMany({ select: { chat_session_id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    platform<T extends PlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatformDefaultArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assigned_user<T extends ChatSession$assigned_userArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$assigned_userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends ChatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends ChatSession$notesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends ChatSession$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends ChatSession$tagsArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends ChatSession$logsArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly chat_session_id: FieldRef<"ChatSession", 'Int'>
    readonly customer_id: FieldRef<"ChatSession", 'Int'>
    readonly platform_id: FieldRef<"ChatSession", 'Int'>
    readonly assigned_user_id: FieldRef<"ChatSession", 'Int'>
    readonly status: FieldRef<"ChatSession", 'ChatStatus'>
    readonly start_time: FieldRef<"ChatSession", 'DateTime'>
    readonly end_time: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession.assigned_user
   */
  export type ChatSession$assigned_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ChatSession.messages
   */
  export type ChatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * ChatSession.notes
   */
  export type ChatSession$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * ChatSession.assignments
   */
  export type ChatSession$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * ChatSession.tags
   */
  export type ChatSession$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    where?: ChatTagWhereInput
    orderBy?: ChatTagOrderByWithRelationInput | ChatTagOrderByWithRelationInput[]
    cursor?: ChatTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatTagScalarFieldEnum | ChatTagScalarFieldEnum[]
  }

  /**
   * ChatSession.logs
   */
  export type ChatSession$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    message_id: number | null
    chat_session_id: number | null
    sender_id: number | null
  }

  export type MessageSumAggregateOutputType = {
    message_id: number | null
    chat_session_id: number | null
    sender_id: number | null
  }

  export type MessageMinAggregateOutputType = {
    message_id: number | null
    chat_session_id: number | null
    sender_type: $Enums.SenderType | null
    sender_id: number | null
    message_type: $Enums.MessageType | null
    content: string | null
    attachment_url: string | null
    created_at: Date | null
    read_at: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    message_id: number | null
    chat_session_id: number | null
    sender_type: $Enums.SenderType | null
    sender_id: number | null
    message_type: $Enums.MessageType | null
    content: string | null
    attachment_url: string | null
    created_at: Date | null
    read_at: Date | null
  }

  export type MessageCountAggregateOutputType = {
    message_id: number
    chat_session_id: number
    sender_type: number
    sender_id: number
    message_type: number
    content: number
    attachment_url: number
    created_at: number
    read_at: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    message_id?: true
    chat_session_id?: true
    sender_id?: true
  }

  export type MessageSumAggregateInputType = {
    message_id?: true
    chat_session_id?: true
    sender_id?: true
  }

  export type MessageMinAggregateInputType = {
    message_id?: true
    chat_session_id?: true
    sender_type?: true
    sender_id?: true
    message_type?: true
    content?: true
    attachment_url?: true
    created_at?: true
    read_at?: true
  }

  export type MessageMaxAggregateInputType = {
    message_id?: true
    chat_session_id?: true
    sender_type?: true
    sender_id?: true
    message_type?: true
    content?: true
    attachment_url?: true
    created_at?: true
    read_at?: true
  }

  export type MessageCountAggregateInputType = {
    message_id?: true
    chat_session_id?: true
    sender_type?: true
    sender_id?: true
    message_type?: true
    content?: true
    attachment_url?: true
    created_at?: true
    read_at?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    message_id: number
    chat_session_id: number
    sender_type: $Enums.SenderType
    sender_id: number | null
    message_type: $Enums.MessageType
    content: string | null
    attachment_url: string | null
    created_at: Date
    read_at: Date | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    chat_session_id?: boolean
    sender_type?: boolean
    sender_id?: boolean
    message_type?: boolean
    content?: boolean
    attachment_url?: boolean
    created_at?: boolean
    read_at?: boolean
    chat_session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    message_id?: boolean
    chat_session_id?: boolean
    sender_type?: boolean
    sender_id?: boolean
    message_type?: boolean
    content?: boolean
    attachment_url?: boolean
    created_at?: boolean
    read_at?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"message_id" | "chat_session_id" | "sender_type" | "sender_id" | "message_type" | "content" | "attachment_url" | "created_at" | "read_at", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chat_session: Prisma.$ChatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      message_id: number
      chat_session_id: number
      sender_type: $Enums.SenderType
      sender_id: number | null
      message_type: $Enums.MessageType
      content: string | null
      attachment_url: string | null
      created_at: Date
      read_at: Date | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `message_id`
     * const messageWithMessage_idOnly = await prisma.message.findMany({ select: { message_id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_session<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly message_id: FieldRef<"Message", 'Int'>
    readonly chat_session_id: FieldRef<"Message", 'Int'>
    readonly sender_type: FieldRef<"Message", 'SenderType'>
    readonly sender_id: FieldRef<"Message", 'Int'>
    readonly message_type: FieldRef<"Message", 'MessageType'>
    readonly content: FieldRef<"Message", 'String'>
    readonly attachment_url: FieldRef<"Message", 'String'>
    readonly created_at: FieldRef<"Message", 'DateTime'>
    readonly read_at: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    note_id: number | null
    chat_session_id: number | null
    user_id: number | null
  }

  export type NoteSumAggregateOutputType = {
    note_id: number | null
    chat_session_id: number | null
    user_id: number | null
  }

  export type NoteMinAggregateOutputType = {
    note_id: number | null
    chat_session_id: number | null
    user_id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    note_id: number | null
    chat_session_id: number | null
    user_id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
  }

  export type NoteCountAggregateOutputType = {
    note_id: number
    chat_session_id: number
    user_id: number
    title: number
    content: number
    created_at: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    note_id?: true
    chat_session_id?: true
    user_id?: true
  }

  export type NoteSumAggregateInputType = {
    note_id?: true
    chat_session_id?: true
    user_id?: true
  }

  export type NoteMinAggregateInputType = {
    note_id?: true
    chat_session_id?: true
    user_id?: true
    title?: true
    content?: true
    created_at?: true
  }

  export type NoteMaxAggregateInputType = {
    note_id?: true
    chat_session_id?: true
    user_id?: true
    title?: true
    content?: true
    created_at?: true
  }

  export type NoteCountAggregateInputType = {
    note_id?: true
    chat_session_id?: true
    user_id?: true
    title?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    note_id: number
    chat_session_id: number
    user_id: number
    title: string | null
    content: string
    created_at: Date
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    chat_session_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    chat_session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>



  export type NoteSelectScalar = {
    note_id?: boolean
    chat_session_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"note_id" | "chat_session_id" | "user_id" | "title" | "content" | "created_at", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      chat_session: Prisma.$ChatSessionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      note_id: number
      chat_session_id: number
      user_id: number
      title: string | null
      content: string
      created_at: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `note_id`
     * const noteWithNote_idOnly = await prisma.note.findMany({ select: { note_id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_session<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly note_id: FieldRef<"Note", 'Int'>
    readonly chat_session_id: FieldRef<"Note", 'Int'>
    readonly user_id: FieldRef<"Note", 'Int'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly created_at: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    assignment_id: number | null
    chat_session_id: number | null
    user_id: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    assignment_id: number | null
    chat_session_id: number | null
    user_id: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    assignment_id: number | null
    chat_session_id: number | null
    user_id: number | null
    topic: string | null
    detail: string | null
    deadline: Date | null
    status: $Enums.AssignmentStatus | null
  }

  export type AssignmentMaxAggregateOutputType = {
    assignment_id: number | null
    chat_session_id: number | null
    user_id: number | null
    topic: string | null
    detail: string | null
    deadline: Date | null
    status: $Enums.AssignmentStatus | null
  }

  export type AssignmentCountAggregateOutputType = {
    assignment_id: number
    chat_session_id: number
    user_id: number
    topic: number
    detail: number
    deadline: number
    status: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    assignment_id?: true
    chat_session_id?: true
    user_id?: true
  }

  export type AssignmentSumAggregateInputType = {
    assignment_id?: true
    chat_session_id?: true
    user_id?: true
  }

  export type AssignmentMinAggregateInputType = {
    assignment_id?: true
    chat_session_id?: true
    user_id?: true
    topic?: true
    detail?: true
    deadline?: true
    status?: true
  }

  export type AssignmentMaxAggregateInputType = {
    assignment_id?: true
    chat_session_id?: true
    user_id?: true
    topic?: true
    detail?: true
    deadline?: true
    status?: true
  }

  export type AssignmentCountAggregateInputType = {
    assignment_id?: true
    chat_session_id?: true
    user_id?: true
    topic?: true
    detail?: true
    deadline?: true
    status?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    assignment_id: number
    chat_session_id: number
    user_id: number
    topic: string | null
    detail: string | null
    deadline: Date | null
    status: $Enums.AssignmentStatus
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignment_id?: boolean
    chat_session_id?: boolean
    user_id?: boolean
    topic?: boolean
    detail?: boolean
    deadline?: boolean
    status?: boolean
    chat_session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>



  export type AssignmentSelectScalar = {
    assignment_id?: boolean
    chat_session_id?: boolean
    user_id?: boolean
    topic?: boolean
    detail?: boolean
    deadline?: boolean
    status?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assignment_id" | "chat_session_id" | "user_id" | "topic" | "detail" | "deadline" | "status", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      chat_session: Prisma.$ChatSessionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      assignment_id: number
      chat_session_id: number
      user_id: number
      topic: string | null
      detail: string | null
      deadline: Date | null
      status: $Enums.AssignmentStatus
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `assignment_id`
     * const assignmentWithAssignment_idOnly = await prisma.assignment.findMany({ select: { assignment_id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_session<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly assignment_id: FieldRef<"Assignment", 'Int'>
    readonly chat_session_id: FieldRef<"Assignment", 'Int'>
    readonly user_id: FieldRef<"Assignment", 'Int'>
    readonly topic: FieldRef<"Assignment", 'String'>
    readonly detail: FieldRef<"Assignment", 'String'>
    readonly deadline: FieldRef<"Assignment", 'DateTime'>
    readonly status: FieldRef<"Assignment", 'AssignmentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    tag_id: number | null
  }

  export type TagSumAggregateOutputType = {
    tag_id: number | null
  }

  export type TagMinAggregateOutputType = {
    tag_id: number | null
    tag_name: string | null
    color: string | null
    description: string | null
  }

  export type TagMaxAggregateOutputType = {
    tag_id: number | null
    tag_name: string | null
    color: string | null
    description: string | null
  }

  export type TagCountAggregateOutputType = {
    tag_id: number
    tag_name: number
    color: number
    description: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    tag_id?: true
  }

  export type TagSumAggregateInputType = {
    tag_id?: true
  }

  export type TagMinAggregateInputType = {
    tag_id?: true
    tag_name?: true
    color?: true
    description?: true
  }

  export type TagMaxAggregateInputType = {
    tag_id?: true
    tag_name?: true
    color?: true
    description?: true
  }

  export type TagCountAggregateInputType = {
    tag_id?: true
    tag_name?: true
    color?: true
    description?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    tag_id: number
    tag_name: string
    color: string | null
    description: string | null
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    tag_name?: boolean
    color?: boolean
    description?: boolean
    customers?: boolean | Tag$customersArgs<ExtArgs>
    chats?: boolean | Tag$chatsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type TagSelectScalar = {
    tag_id?: boolean
    tag_name?: boolean
    color?: boolean
    description?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_id" | "tag_name" | "color" | "description", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | Tag$customersArgs<ExtArgs>
    chats?: boolean | Tag$chatsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      customers: Prisma.$CustomerTagPayload<ExtArgs>[]
      chats: Prisma.$ChatTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_id: number
      tag_name: string
      color: string | null
      description: string | null
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `tag_id`
     * const tagWithTag_idOnly = await prisma.tag.findMany({ select: { tag_id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends Tag$customersArgs<ExtArgs> = {}>(args?: Subset<T, Tag$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends Tag$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly tag_id: FieldRef<"Tag", 'Int'>
    readonly tag_name: FieldRef<"Tag", 'String'>
    readonly color: FieldRef<"Tag", 'String'>
    readonly description: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.customers
   */
  export type Tag$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    where?: CustomerTagWhereInput
    orderBy?: CustomerTagOrderByWithRelationInput | CustomerTagOrderByWithRelationInput[]
    cursor?: CustomerTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerTagScalarFieldEnum | CustomerTagScalarFieldEnum[]
  }

  /**
   * Tag.chats
   */
  export type Tag$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    where?: ChatTagWhereInput
    orderBy?: ChatTagOrderByWithRelationInput | ChatTagOrderByWithRelationInput[]
    cursor?: ChatTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatTagScalarFieldEnum | ChatTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model CustomerTag
   */

  export type AggregateCustomerTag = {
    _count: CustomerTagCountAggregateOutputType | null
    _avg: CustomerTagAvgAggregateOutputType | null
    _sum: CustomerTagSumAggregateOutputType | null
    _min: CustomerTagMinAggregateOutputType | null
    _max: CustomerTagMaxAggregateOutputType | null
  }

  export type CustomerTagAvgAggregateOutputType = {
    customer_tag_id: number | null
    customer_id: number | null
    tag_id: number | null
  }

  export type CustomerTagSumAggregateOutputType = {
    customer_tag_id: number | null
    customer_id: number | null
    tag_id: number | null
  }

  export type CustomerTagMinAggregateOutputType = {
    customer_tag_id: number | null
    customer_id: number | null
    tag_id: number | null
  }

  export type CustomerTagMaxAggregateOutputType = {
    customer_tag_id: number | null
    customer_id: number | null
    tag_id: number | null
  }

  export type CustomerTagCountAggregateOutputType = {
    customer_tag_id: number
    customer_id: number
    tag_id: number
    _all: number
  }


  export type CustomerTagAvgAggregateInputType = {
    customer_tag_id?: true
    customer_id?: true
    tag_id?: true
  }

  export type CustomerTagSumAggregateInputType = {
    customer_tag_id?: true
    customer_id?: true
    tag_id?: true
  }

  export type CustomerTagMinAggregateInputType = {
    customer_tag_id?: true
    customer_id?: true
    tag_id?: true
  }

  export type CustomerTagMaxAggregateInputType = {
    customer_tag_id?: true
    customer_id?: true
    tag_id?: true
  }

  export type CustomerTagCountAggregateInputType = {
    customer_tag_id?: true
    customer_id?: true
    tag_id?: true
    _all?: true
  }

  export type CustomerTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerTag to aggregate.
     */
    where?: CustomerTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTags to fetch.
     */
    orderBy?: CustomerTagOrderByWithRelationInput | CustomerTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerTags
    **/
    _count?: true | CustomerTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerTagMaxAggregateInputType
  }

  export type GetCustomerTagAggregateType<T extends CustomerTagAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerTag[P]>
      : GetScalarType<T[P], AggregateCustomerTag[P]>
  }




  export type CustomerTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerTagWhereInput
    orderBy?: CustomerTagOrderByWithAggregationInput | CustomerTagOrderByWithAggregationInput[]
    by: CustomerTagScalarFieldEnum[] | CustomerTagScalarFieldEnum
    having?: CustomerTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerTagCountAggregateInputType | true
    _avg?: CustomerTagAvgAggregateInputType
    _sum?: CustomerTagSumAggregateInputType
    _min?: CustomerTagMinAggregateInputType
    _max?: CustomerTagMaxAggregateInputType
  }

  export type CustomerTagGroupByOutputType = {
    customer_tag_id: number
    customer_id: number
    tag_id: number
    _count: CustomerTagCountAggregateOutputType | null
    _avg: CustomerTagAvgAggregateOutputType | null
    _sum: CustomerTagSumAggregateOutputType | null
    _min: CustomerTagMinAggregateOutputType | null
    _max: CustomerTagMaxAggregateOutputType | null
  }

  type GetCustomerTagGroupByPayload<T extends CustomerTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerTagGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerTagGroupByOutputType[P]>
        }
      >
    >


  export type CustomerTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_tag_id?: boolean
    customer_id?: boolean
    tag_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerTag"]>



  export type CustomerTagSelectScalar = {
    customer_tag_id?: boolean
    customer_id?: boolean
    tag_id?: boolean
  }

  export type CustomerTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_tag_id" | "customer_id" | "tag_id", ExtArgs["result"]["customerTag"]>
  export type CustomerTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $CustomerTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerTag"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_tag_id: number
      customer_id: number
      tag_id: number
    }, ExtArgs["result"]["customerTag"]>
    composites: {}
  }

  type CustomerTagGetPayload<S extends boolean | null | undefined | CustomerTagDefaultArgs> = $Result.GetResult<Prisma.$CustomerTagPayload, S>

  type CustomerTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerTagCountAggregateInputType | true
    }

  export interface CustomerTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerTag'], meta: { name: 'CustomerTag' } }
    /**
     * Find zero or one CustomerTag that matches the filter.
     * @param {CustomerTagFindUniqueArgs} args - Arguments to find a CustomerTag
     * @example
     * // Get one CustomerTag
     * const customerTag = await prisma.customerTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerTagFindUniqueArgs>(args: SelectSubset<T, CustomerTagFindUniqueArgs<ExtArgs>>): Prisma__CustomerTagClient<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerTagFindUniqueOrThrowArgs} args - Arguments to find a CustomerTag
     * @example
     * // Get one CustomerTag
     * const customerTag = await prisma.customerTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerTagFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerTagClient<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTagFindFirstArgs} args - Arguments to find a CustomerTag
     * @example
     * // Get one CustomerTag
     * const customerTag = await prisma.customerTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerTagFindFirstArgs>(args?: SelectSubset<T, CustomerTagFindFirstArgs<ExtArgs>>): Prisma__CustomerTagClient<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTagFindFirstOrThrowArgs} args - Arguments to find a CustomerTag
     * @example
     * // Get one CustomerTag
     * const customerTag = await prisma.customerTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerTagFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerTagClient<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerTags
     * const customerTags = await prisma.customerTag.findMany()
     * 
     * // Get first 10 CustomerTags
     * const customerTags = await prisma.customerTag.findMany({ take: 10 })
     * 
     * // Only select the `customer_tag_id`
     * const customerTagWithCustomer_tag_idOnly = await prisma.customerTag.findMany({ select: { customer_tag_id: true } })
     * 
     */
    findMany<T extends CustomerTagFindManyArgs>(args?: SelectSubset<T, CustomerTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerTag.
     * @param {CustomerTagCreateArgs} args - Arguments to create a CustomerTag.
     * @example
     * // Create one CustomerTag
     * const CustomerTag = await prisma.customerTag.create({
     *   data: {
     *     // ... data to create a CustomerTag
     *   }
     * })
     * 
     */
    create<T extends CustomerTagCreateArgs>(args: SelectSubset<T, CustomerTagCreateArgs<ExtArgs>>): Prisma__CustomerTagClient<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerTags.
     * @param {CustomerTagCreateManyArgs} args - Arguments to create many CustomerTags.
     * @example
     * // Create many CustomerTags
     * const customerTag = await prisma.customerTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerTagCreateManyArgs>(args?: SelectSubset<T, CustomerTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerTag.
     * @param {CustomerTagDeleteArgs} args - Arguments to delete one CustomerTag.
     * @example
     * // Delete one CustomerTag
     * const CustomerTag = await prisma.customerTag.delete({
     *   where: {
     *     // ... filter to delete one CustomerTag
     *   }
     * })
     * 
     */
    delete<T extends CustomerTagDeleteArgs>(args: SelectSubset<T, CustomerTagDeleteArgs<ExtArgs>>): Prisma__CustomerTagClient<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerTag.
     * @param {CustomerTagUpdateArgs} args - Arguments to update one CustomerTag.
     * @example
     * // Update one CustomerTag
     * const customerTag = await prisma.customerTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerTagUpdateArgs>(args: SelectSubset<T, CustomerTagUpdateArgs<ExtArgs>>): Prisma__CustomerTagClient<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerTags.
     * @param {CustomerTagDeleteManyArgs} args - Arguments to filter CustomerTags to delete.
     * @example
     * // Delete a few CustomerTags
     * const { count } = await prisma.customerTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerTagDeleteManyArgs>(args?: SelectSubset<T, CustomerTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerTags
     * const customerTag = await prisma.customerTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerTagUpdateManyArgs>(args: SelectSubset<T, CustomerTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerTag.
     * @param {CustomerTagUpsertArgs} args - Arguments to update or create a CustomerTag.
     * @example
     * // Update or create a CustomerTag
     * const customerTag = await prisma.customerTag.upsert({
     *   create: {
     *     // ... data to create a CustomerTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerTag we want to update
     *   }
     * })
     */
    upsert<T extends CustomerTagUpsertArgs>(args: SelectSubset<T, CustomerTagUpsertArgs<ExtArgs>>): Prisma__CustomerTagClient<$Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTagCountArgs} args - Arguments to filter CustomerTags to count.
     * @example
     * // Count the number of CustomerTags
     * const count = await prisma.customerTag.count({
     *   where: {
     *     // ... the filter for the CustomerTags we want to count
     *   }
     * })
    **/
    count<T extends CustomerTagCountArgs>(
      args?: Subset<T, CustomerTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerTagAggregateArgs>(args: Subset<T, CustomerTagAggregateArgs>): Prisma.PrismaPromise<GetCustomerTagAggregateType<T>>

    /**
     * Group by CustomerTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerTagGroupByArgs['orderBy'] }
        : { orderBy?: CustomerTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerTag model
   */
  readonly fields: CustomerTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerTag model
   */
  interface CustomerTagFieldRefs {
    readonly customer_tag_id: FieldRef<"CustomerTag", 'Int'>
    readonly customer_id: FieldRef<"CustomerTag", 'Int'>
    readonly tag_id: FieldRef<"CustomerTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CustomerTag findUnique
   */
  export type CustomerTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTag to fetch.
     */
    where: CustomerTagWhereUniqueInput
  }

  /**
   * CustomerTag findUniqueOrThrow
   */
  export type CustomerTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTag to fetch.
     */
    where: CustomerTagWhereUniqueInput
  }

  /**
   * CustomerTag findFirst
   */
  export type CustomerTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTag to fetch.
     */
    where?: CustomerTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTags to fetch.
     */
    orderBy?: CustomerTagOrderByWithRelationInput | CustomerTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerTags.
     */
    cursor?: CustomerTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerTags.
     */
    distinct?: CustomerTagScalarFieldEnum | CustomerTagScalarFieldEnum[]
  }

  /**
   * CustomerTag findFirstOrThrow
   */
  export type CustomerTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTag to fetch.
     */
    where?: CustomerTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTags to fetch.
     */
    orderBy?: CustomerTagOrderByWithRelationInput | CustomerTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerTags.
     */
    cursor?: CustomerTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerTags.
     */
    distinct?: CustomerTagScalarFieldEnum | CustomerTagScalarFieldEnum[]
  }

  /**
   * CustomerTag findMany
   */
  export type CustomerTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTags to fetch.
     */
    where?: CustomerTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTags to fetch.
     */
    orderBy?: CustomerTagOrderByWithRelationInput | CustomerTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerTags.
     */
    cursor?: CustomerTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerTags.
     */
    distinct?: CustomerTagScalarFieldEnum | CustomerTagScalarFieldEnum[]
  }

  /**
   * CustomerTag create
   */
  export type CustomerTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerTag.
     */
    data: XOR<CustomerTagCreateInput, CustomerTagUncheckedCreateInput>
  }

  /**
   * CustomerTag createMany
   */
  export type CustomerTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerTags.
     */
    data: CustomerTagCreateManyInput | CustomerTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerTag update
   */
  export type CustomerTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerTag.
     */
    data: XOR<CustomerTagUpdateInput, CustomerTagUncheckedUpdateInput>
    /**
     * Choose, which CustomerTag to update.
     */
    where: CustomerTagWhereUniqueInput
  }

  /**
   * CustomerTag updateMany
   */
  export type CustomerTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerTags.
     */
    data: XOR<CustomerTagUpdateManyMutationInput, CustomerTagUncheckedUpdateManyInput>
    /**
     * Filter which CustomerTags to update
     */
    where?: CustomerTagWhereInput
    /**
     * Limit how many CustomerTags to update.
     */
    limit?: number
  }

  /**
   * CustomerTag upsert
   */
  export type CustomerTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerTag to update in case it exists.
     */
    where: CustomerTagWhereUniqueInput
    /**
     * In case the CustomerTag found by the `where` argument doesn't exist, create a new CustomerTag with this data.
     */
    create: XOR<CustomerTagCreateInput, CustomerTagUncheckedCreateInput>
    /**
     * In case the CustomerTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerTagUpdateInput, CustomerTagUncheckedUpdateInput>
  }

  /**
   * CustomerTag delete
   */
  export type CustomerTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
    /**
     * Filter which CustomerTag to delete.
     */
    where: CustomerTagWhereUniqueInput
  }

  /**
   * CustomerTag deleteMany
   */
  export type CustomerTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerTags to delete
     */
    where?: CustomerTagWhereInput
    /**
     * Limit how many CustomerTags to delete.
     */
    limit?: number
  }

  /**
   * CustomerTag without action
   */
  export type CustomerTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTag
     */
    select?: CustomerTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTag
     */
    omit?: CustomerTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTagInclude<ExtArgs> | null
  }


  /**
   * Model ChatTag
   */

  export type AggregateChatTag = {
    _count: ChatTagCountAggregateOutputType | null
    _avg: ChatTagAvgAggregateOutputType | null
    _sum: ChatTagSumAggregateOutputType | null
    _min: ChatTagMinAggregateOutputType | null
    _max: ChatTagMaxAggregateOutputType | null
  }

  export type ChatTagAvgAggregateOutputType = {
    chat_tag_id: number | null
    chat_session_id: number | null
    tag_id: number | null
  }

  export type ChatTagSumAggregateOutputType = {
    chat_tag_id: number | null
    chat_session_id: number | null
    tag_id: number | null
  }

  export type ChatTagMinAggregateOutputType = {
    chat_tag_id: number | null
    chat_session_id: number | null
    tag_id: number | null
  }

  export type ChatTagMaxAggregateOutputType = {
    chat_tag_id: number | null
    chat_session_id: number | null
    tag_id: number | null
  }

  export type ChatTagCountAggregateOutputType = {
    chat_tag_id: number
    chat_session_id: number
    tag_id: number
    _all: number
  }


  export type ChatTagAvgAggregateInputType = {
    chat_tag_id?: true
    chat_session_id?: true
    tag_id?: true
  }

  export type ChatTagSumAggregateInputType = {
    chat_tag_id?: true
    chat_session_id?: true
    tag_id?: true
  }

  export type ChatTagMinAggregateInputType = {
    chat_tag_id?: true
    chat_session_id?: true
    tag_id?: true
  }

  export type ChatTagMaxAggregateInputType = {
    chat_tag_id?: true
    chat_session_id?: true
    tag_id?: true
  }

  export type ChatTagCountAggregateInputType = {
    chat_tag_id?: true
    chat_session_id?: true
    tag_id?: true
    _all?: true
  }

  export type ChatTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatTag to aggregate.
     */
    where?: ChatTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatTags to fetch.
     */
    orderBy?: ChatTagOrderByWithRelationInput | ChatTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatTags
    **/
    _count?: true | ChatTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatTagMaxAggregateInputType
  }

  export type GetChatTagAggregateType<T extends ChatTagAggregateArgs> = {
        [P in keyof T & keyof AggregateChatTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatTag[P]>
      : GetScalarType<T[P], AggregateChatTag[P]>
  }




  export type ChatTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatTagWhereInput
    orderBy?: ChatTagOrderByWithAggregationInput | ChatTagOrderByWithAggregationInput[]
    by: ChatTagScalarFieldEnum[] | ChatTagScalarFieldEnum
    having?: ChatTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatTagCountAggregateInputType | true
    _avg?: ChatTagAvgAggregateInputType
    _sum?: ChatTagSumAggregateInputType
    _min?: ChatTagMinAggregateInputType
    _max?: ChatTagMaxAggregateInputType
  }

  export type ChatTagGroupByOutputType = {
    chat_tag_id: number
    chat_session_id: number
    tag_id: number
    _count: ChatTagCountAggregateOutputType | null
    _avg: ChatTagAvgAggregateOutputType | null
    _sum: ChatTagSumAggregateOutputType | null
    _min: ChatTagMinAggregateOutputType | null
    _max: ChatTagMaxAggregateOutputType | null
  }

  type GetChatTagGroupByPayload<T extends ChatTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatTagGroupByOutputType[P]>
            : GetScalarType<T[P], ChatTagGroupByOutputType[P]>
        }
      >
    >


  export type ChatTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chat_tag_id?: boolean
    chat_session_id?: boolean
    tag_id?: boolean
    chat?: boolean | ChatSessionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatTag"]>



  export type ChatTagSelectScalar = {
    chat_tag_id?: boolean
    chat_session_id?: boolean
    tag_id?: boolean
  }

  export type ChatTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chat_tag_id" | "chat_session_id" | "tag_id", ExtArgs["result"]["chatTag"]>
  export type ChatTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatSessionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $ChatTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatTag"
    objects: {
      chat: Prisma.$ChatSessionPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      chat_tag_id: number
      chat_session_id: number
      tag_id: number
    }, ExtArgs["result"]["chatTag"]>
    composites: {}
  }

  type ChatTagGetPayload<S extends boolean | null | undefined | ChatTagDefaultArgs> = $Result.GetResult<Prisma.$ChatTagPayload, S>

  type ChatTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatTagCountAggregateInputType | true
    }

  export interface ChatTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatTag'], meta: { name: 'ChatTag' } }
    /**
     * Find zero or one ChatTag that matches the filter.
     * @param {ChatTagFindUniqueArgs} args - Arguments to find a ChatTag
     * @example
     * // Get one ChatTag
     * const chatTag = await prisma.chatTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatTagFindUniqueArgs>(args: SelectSubset<T, ChatTagFindUniqueArgs<ExtArgs>>): Prisma__ChatTagClient<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatTagFindUniqueOrThrowArgs} args - Arguments to find a ChatTag
     * @example
     * // Get one ChatTag
     * const chatTag = await prisma.chatTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatTagClient<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTagFindFirstArgs} args - Arguments to find a ChatTag
     * @example
     * // Get one ChatTag
     * const chatTag = await prisma.chatTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatTagFindFirstArgs>(args?: SelectSubset<T, ChatTagFindFirstArgs<ExtArgs>>): Prisma__ChatTagClient<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTagFindFirstOrThrowArgs} args - Arguments to find a ChatTag
     * @example
     * // Get one ChatTag
     * const chatTag = await prisma.chatTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatTagClient<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatTags
     * const chatTags = await prisma.chatTag.findMany()
     * 
     * // Get first 10 ChatTags
     * const chatTags = await prisma.chatTag.findMany({ take: 10 })
     * 
     * // Only select the `chat_tag_id`
     * const chatTagWithChat_tag_idOnly = await prisma.chatTag.findMany({ select: { chat_tag_id: true } })
     * 
     */
    findMany<T extends ChatTagFindManyArgs>(args?: SelectSubset<T, ChatTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatTag.
     * @param {ChatTagCreateArgs} args - Arguments to create a ChatTag.
     * @example
     * // Create one ChatTag
     * const ChatTag = await prisma.chatTag.create({
     *   data: {
     *     // ... data to create a ChatTag
     *   }
     * })
     * 
     */
    create<T extends ChatTagCreateArgs>(args: SelectSubset<T, ChatTagCreateArgs<ExtArgs>>): Prisma__ChatTagClient<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatTags.
     * @param {ChatTagCreateManyArgs} args - Arguments to create many ChatTags.
     * @example
     * // Create many ChatTags
     * const chatTag = await prisma.chatTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatTagCreateManyArgs>(args?: SelectSubset<T, ChatTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatTag.
     * @param {ChatTagDeleteArgs} args - Arguments to delete one ChatTag.
     * @example
     * // Delete one ChatTag
     * const ChatTag = await prisma.chatTag.delete({
     *   where: {
     *     // ... filter to delete one ChatTag
     *   }
     * })
     * 
     */
    delete<T extends ChatTagDeleteArgs>(args: SelectSubset<T, ChatTagDeleteArgs<ExtArgs>>): Prisma__ChatTagClient<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatTag.
     * @param {ChatTagUpdateArgs} args - Arguments to update one ChatTag.
     * @example
     * // Update one ChatTag
     * const chatTag = await prisma.chatTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatTagUpdateArgs>(args: SelectSubset<T, ChatTagUpdateArgs<ExtArgs>>): Prisma__ChatTagClient<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatTags.
     * @param {ChatTagDeleteManyArgs} args - Arguments to filter ChatTags to delete.
     * @example
     * // Delete a few ChatTags
     * const { count } = await prisma.chatTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatTagDeleteManyArgs>(args?: SelectSubset<T, ChatTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatTags
     * const chatTag = await prisma.chatTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatTagUpdateManyArgs>(args: SelectSubset<T, ChatTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatTag.
     * @param {ChatTagUpsertArgs} args - Arguments to update or create a ChatTag.
     * @example
     * // Update or create a ChatTag
     * const chatTag = await prisma.chatTag.upsert({
     *   create: {
     *     // ... data to create a ChatTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatTag we want to update
     *   }
     * })
     */
    upsert<T extends ChatTagUpsertArgs>(args: SelectSubset<T, ChatTagUpsertArgs<ExtArgs>>): Prisma__ChatTagClient<$Result.GetResult<Prisma.$ChatTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTagCountArgs} args - Arguments to filter ChatTags to count.
     * @example
     * // Count the number of ChatTags
     * const count = await prisma.chatTag.count({
     *   where: {
     *     // ... the filter for the ChatTags we want to count
     *   }
     * })
    **/
    count<T extends ChatTagCountArgs>(
      args?: Subset<T, ChatTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatTagAggregateArgs>(args: Subset<T, ChatTagAggregateArgs>): Prisma.PrismaPromise<GetChatTagAggregateType<T>>

    /**
     * Group by ChatTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatTagGroupByArgs['orderBy'] }
        : { orderBy?: ChatTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatTag model
   */
  readonly fields: ChatTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatTag model
   */
  interface ChatTagFieldRefs {
    readonly chat_tag_id: FieldRef<"ChatTag", 'Int'>
    readonly chat_session_id: FieldRef<"ChatTag", 'Int'>
    readonly tag_id: FieldRef<"ChatTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChatTag findUnique
   */
  export type ChatTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    /**
     * Filter, which ChatTag to fetch.
     */
    where: ChatTagWhereUniqueInput
  }

  /**
   * ChatTag findUniqueOrThrow
   */
  export type ChatTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    /**
     * Filter, which ChatTag to fetch.
     */
    where: ChatTagWhereUniqueInput
  }

  /**
   * ChatTag findFirst
   */
  export type ChatTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    /**
     * Filter, which ChatTag to fetch.
     */
    where?: ChatTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatTags to fetch.
     */
    orderBy?: ChatTagOrderByWithRelationInput | ChatTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatTags.
     */
    cursor?: ChatTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatTags.
     */
    distinct?: ChatTagScalarFieldEnum | ChatTagScalarFieldEnum[]
  }

  /**
   * ChatTag findFirstOrThrow
   */
  export type ChatTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    /**
     * Filter, which ChatTag to fetch.
     */
    where?: ChatTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatTags to fetch.
     */
    orderBy?: ChatTagOrderByWithRelationInput | ChatTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatTags.
     */
    cursor?: ChatTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatTags.
     */
    distinct?: ChatTagScalarFieldEnum | ChatTagScalarFieldEnum[]
  }

  /**
   * ChatTag findMany
   */
  export type ChatTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    /**
     * Filter, which ChatTags to fetch.
     */
    where?: ChatTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatTags to fetch.
     */
    orderBy?: ChatTagOrderByWithRelationInput | ChatTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatTags.
     */
    cursor?: ChatTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatTags.
     */
    distinct?: ChatTagScalarFieldEnum | ChatTagScalarFieldEnum[]
  }

  /**
   * ChatTag create
   */
  export type ChatTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatTag.
     */
    data: XOR<ChatTagCreateInput, ChatTagUncheckedCreateInput>
  }

  /**
   * ChatTag createMany
   */
  export type ChatTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatTags.
     */
    data: ChatTagCreateManyInput | ChatTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatTag update
   */
  export type ChatTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatTag.
     */
    data: XOR<ChatTagUpdateInput, ChatTagUncheckedUpdateInput>
    /**
     * Choose, which ChatTag to update.
     */
    where: ChatTagWhereUniqueInput
  }

  /**
   * ChatTag updateMany
   */
  export type ChatTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatTags.
     */
    data: XOR<ChatTagUpdateManyMutationInput, ChatTagUncheckedUpdateManyInput>
    /**
     * Filter which ChatTags to update
     */
    where?: ChatTagWhereInput
    /**
     * Limit how many ChatTags to update.
     */
    limit?: number
  }

  /**
   * ChatTag upsert
   */
  export type ChatTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatTag to update in case it exists.
     */
    where: ChatTagWhereUniqueInput
    /**
     * In case the ChatTag found by the `where` argument doesn't exist, create a new ChatTag with this data.
     */
    create: XOR<ChatTagCreateInput, ChatTagUncheckedCreateInput>
    /**
     * In case the ChatTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatTagUpdateInput, ChatTagUncheckedUpdateInput>
  }

  /**
   * ChatTag delete
   */
  export type ChatTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
    /**
     * Filter which ChatTag to delete.
     */
    where: ChatTagWhereUniqueInput
  }

  /**
   * ChatTag deleteMany
   */
  export type ChatTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatTags to delete
     */
    where?: ChatTagWhereInput
    /**
     * Limit how many ChatTags to delete.
     */
    limit?: number
  }

  /**
   * ChatTag without action
   */
  export type ChatTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTag
     */
    select?: ChatTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTag
     */
    omit?: ChatTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatTagInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    chat_session_id: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    chat_session_id: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    chat_session_id: number | null
    action: string | null
    old_value: string | null
    new_value: string | null
    created_at: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    chat_session_id: number | null
    action: string | null
    old_value: string | null
    new_value: string | null
    created_at: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    log_id: number
    user_id: number
    chat_session_id: number
    action: number
    old_value: number
    new_value: number
    created_at: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    log_id?: true
    user_id?: true
    chat_session_id?: true
  }

  export type ActivityLogSumAggregateInputType = {
    log_id?: true
    user_id?: true
    chat_session_id?: true
  }

  export type ActivityLogMinAggregateInputType = {
    log_id?: true
    user_id?: true
    chat_session_id?: true
    action?: true
    old_value?: true
    new_value?: true
    created_at?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    log_id?: true
    user_id?: true
    chat_session_id?: true
    action?: true
    old_value?: true
    new_value?: true
    created_at?: true
  }

  export type ActivityLogCountAggregateInputType = {
    log_id?: true
    user_id?: true
    chat_session_id?: true
    action?: true
    old_value?: true
    new_value?: true
    created_at?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    log_id: number
    user_id: number | null
    chat_session_id: number | null
    action: string
    old_value: string | null
    new_value: string | null
    created_at: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    chat_session_id?: boolean
    action?: boolean
    old_value?: boolean
    new_value?: boolean
    created_at?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
    chat?: boolean | ActivityLog$chatArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>



  export type ActivityLogSelectScalar = {
    log_id?: boolean
    user_id?: boolean
    chat_session_id?: boolean
    action?: boolean
    old_value?: boolean
    new_value?: boolean
    created_at?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "user_id" | "chat_session_id" | "action" | "old_value" | "new_value" | "created_at", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
    chat?: boolean | ActivityLog$chatArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      chat: Prisma.$ChatSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: number
      user_id: number | null
      chat_session_id: number | null
      action: string
      old_value: string | null
      new_value: string | null
      created_at: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const activityLogWithLog_idOnly = await prisma.activityLog.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chat<T extends ActivityLog$chatArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$chatArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly log_id: FieldRef<"ActivityLog", 'Int'>
    readonly user_id: FieldRef<"ActivityLog", 'Int'>
    readonly chat_session_id: FieldRef<"ActivityLog", 'Int'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly old_value: FieldRef<"ActivityLog", 'String'>
    readonly new_value: FieldRef<"ActivityLog", 'String'>
    readonly created_at: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog.chat
   */
  export type ActivityLog$chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    role: 'role',
    profile_image: 'profile_image',
    online_status: 'online_status',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    team_id: 'team_id',
    team_name: 'team_name',
    description: 'description'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    team_member_id: 'team_member_id',
    team_id: 'team_id',
    user_id: 'user_id'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    customer_id: 'customer_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    company: 'company',
    country: 'country',
    created_at: 'created_at'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const PlatformScalarFieldEnum: {
    platform_id: 'platform_id',
    platform_name: 'platform_name'
  };

  export type PlatformScalarFieldEnum = (typeof PlatformScalarFieldEnum)[keyof typeof PlatformScalarFieldEnum]


  export const CustomerSocialAccountScalarFieldEnum: {
    social_account_id: 'social_account_id',
    customer_id: 'customer_id',
    platform_id: 'platform_id',
    account_identifier: 'account_identifier'
  };

  export type CustomerSocialAccountScalarFieldEnum = (typeof CustomerSocialAccountScalarFieldEnum)[keyof typeof CustomerSocialAccountScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    chat_session_id: 'chat_session_id',
    customer_id: 'customer_id',
    platform_id: 'platform_id',
    assigned_user_id: 'assigned_user_id',
    status: 'status',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    message_id: 'message_id',
    chat_session_id: 'chat_session_id',
    sender_type: 'sender_type',
    sender_id: 'sender_id',
    message_type: 'message_type',
    content: 'content',
    attachment_url: 'attachment_url',
    created_at: 'created_at',
    read_at: 'read_at'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    note_id: 'note_id',
    chat_session_id: 'chat_session_id',
    user_id: 'user_id',
    title: 'title',
    content: 'content',
    created_at: 'created_at'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    assignment_id: 'assignment_id',
    chat_session_id: 'chat_session_id',
    user_id: 'user_id',
    topic: 'topic',
    detail: 'detail',
    deadline: 'deadline',
    status: 'status'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const TagScalarFieldEnum: {
    tag_id: 'tag_id',
    tag_name: 'tag_name',
    color: 'color',
    description: 'description'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CustomerTagScalarFieldEnum: {
    customer_tag_id: 'customer_tag_id',
    customer_id: 'customer_id',
    tag_id: 'tag_id'
  };

  export type CustomerTagScalarFieldEnum = (typeof CustomerTagScalarFieldEnum)[keyof typeof CustomerTagScalarFieldEnum]


  export const ChatTagScalarFieldEnum: {
    chat_tag_id: 'chat_tag_id',
    chat_session_id: 'chat_session_id',
    tag_id: 'tag_id'
  };

  export type ChatTagScalarFieldEnum = (typeof ChatTagScalarFieldEnum)[keyof typeof ChatTagScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    log_id: 'log_id',
    user_id: 'user_id',
    chat_session_id: 'chat_session_id',
    action: 'action',
    old_value: 'old_value',
    new_value: 'new_value',
    created_at: 'created_at'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    profile_image: 'profile_image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TeamOrderByRelevanceFieldEnum: {
    team_name: 'team_name',
    description: 'description'
  };

  export type TeamOrderByRelevanceFieldEnum = (typeof TeamOrderByRelevanceFieldEnum)[keyof typeof TeamOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    company: 'company',
    country: 'country'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const PlatformOrderByRelevanceFieldEnum: {
    platform_name: 'platform_name'
  };

  export type PlatformOrderByRelevanceFieldEnum = (typeof PlatformOrderByRelevanceFieldEnum)[keyof typeof PlatformOrderByRelevanceFieldEnum]


  export const CustomerSocialAccountOrderByRelevanceFieldEnum: {
    account_identifier: 'account_identifier'
  };

  export type CustomerSocialAccountOrderByRelevanceFieldEnum = (typeof CustomerSocialAccountOrderByRelevanceFieldEnum)[keyof typeof CustomerSocialAccountOrderByRelevanceFieldEnum]


  export const MessageOrderByRelevanceFieldEnum: {
    content: 'content',
    attachment_url: 'attachment_url'
  };

  export type MessageOrderByRelevanceFieldEnum = (typeof MessageOrderByRelevanceFieldEnum)[keyof typeof MessageOrderByRelevanceFieldEnum]


  export const NoteOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type NoteOrderByRelevanceFieldEnum = (typeof NoteOrderByRelevanceFieldEnum)[keyof typeof NoteOrderByRelevanceFieldEnum]


  export const AssignmentOrderByRelevanceFieldEnum: {
    topic: 'topic',
    detail: 'detail'
  };

  export type AssignmentOrderByRelevanceFieldEnum = (typeof AssignmentOrderByRelevanceFieldEnum)[keyof typeof AssignmentOrderByRelevanceFieldEnum]


  export const TagOrderByRelevanceFieldEnum: {
    tag_name: 'tag_name',
    color: 'color',
    description: 'description'
  };

  export type TagOrderByRelevanceFieldEnum = (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]


  export const ActivityLogOrderByRelevanceFieldEnum: {
    action: 'action',
    old_value: 'old_value',
    new_value: 'new_value'
  };

  export type ActivityLogOrderByRelevanceFieldEnum = (typeof ActivityLogOrderByRelevanceFieldEnum)[keyof typeof ActivityLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ChatStatus'
   */
  export type EnumChatStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatStatus'>
    


  /**
   * Reference to a field of type 'SenderType'
   */
  export type EnumSenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SenderType'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile_image?: StringNullableFilter<"User"> | string | null
    online_status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    created_at?: DateTimeFilter<"User"> | Date | string
    teams?: TeamMemberListRelationFilter
    assignments?: AssignmentListRelationFilter
    notes?: NoteListRelationFilter
    activity_logs?: ActivityLogListRelationFilter
    chat_sessions?: ChatSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    online_status?: SortOrder
    created_at?: SortOrder
    teams?: TeamMemberOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    activity_logs?: ActivityLogOrderByRelationAggregateInput
    chat_sessions?: ChatSessionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile_image?: StringNullableFilter<"User"> | string | null
    online_status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    created_at?: DateTimeFilter<"User"> | Date | string
    teams?: TeamMemberListRelationFilter
    assignments?: AssignmentListRelationFilter
    notes?: NoteListRelationFilter
    activity_logs?: ActivityLogListRelationFilter
    chat_sessions?: ChatSessionListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    online_status?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profile_image?: StringNullableWithAggregatesFilter<"User"> | string | null
    online_status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    team_id?: IntFilter<"Team"> | number
    team_name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    members?: TeamMemberListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    team_id?: SortOrder
    team_name?: SortOrder
    description?: SortOrderInput | SortOrder
    members?: TeamMemberOrderByRelationAggregateInput
    _relevance?: TeamOrderByRelevanceInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    team_id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    team_name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    members?: TeamMemberListRelationFilter
  }, "team_id">

  export type TeamOrderByWithAggregationInput = {
    team_id?: SortOrder
    team_name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    team_id?: IntWithAggregatesFilter<"Team"> | number
    team_name?: StringWithAggregatesFilter<"Team"> | string
    description?: StringNullableWithAggregatesFilter<"Team"> | string | null
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    team_member_id?: IntFilter<"TeamMember"> | number
    team_id?: IntFilter<"TeamMember"> | number
    user_id?: IntFilter<"TeamMember"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    team_member_id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    team?: TeamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    team_member_id?: number
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    team_id?: IntFilter<"TeamMember"> | number
    user_id?: IntFilter<"TeamMember"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "team_member_id">

  export type TeamMemberOrderByWithAggregationInput = {
    team_member_id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _avg?: TeamMemberAvgOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
    _sum?: TeamMemberSumOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    team_member_id?: IntWithAggregatesFilter<"TeamMember"> | number
    team_id?: IntWithAggregatesFilter<"TeamMember"> | number
    user_id?: IntWithAggregatesFilter<"TeamMember"> | number
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customer_id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    company?: StringNullableFilter<"Customer"> | string | null
    country?: StringNullableFilter<"Customer"> | string | null
    created_at?: DateTimeFilter<"Customer"> | Date | string
    social_accounts?: CustomerSocialAccountListRelationFilter
    chat_sessions?: ChatSessionListRelationFilter
    tags?: CustomerTagListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    created_at?: SortOrder
    social_accounts?: CustomerSocialAccountOrderByRelationAggregateInput
    chat_sessions?: ChatSessionOrderByRelationAggregateInput
    tags?: CustomerTagOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    company?: StringNullableFilter<"Customer"> | string | null
    country?: StringNullableFilter<"Customer"> | string | null
    created_at?: DateTimeFilter<"Customer"> | Date | string
    social_accounts?: CustomerSocialAccountListRelationFilter
    chat_sessions?: ChatSessionListRelationFilter
    tags?: CustomerTagListRelationFilter
  }, "customer_id">

  export type CustomerOrderByWithAggregationInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    customer_id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    company?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    country?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type PlatformWhereInput = {
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    platform_id?: IntFilter<"Platform"> | number
    platform_name?: StringFilter<"Platform"> | string
    chat_sessions?: ChatSessionListRelationFilter
    social_links?: CustomerSocialAccountListRelationFilter
  }

  export type PlatformOrderByWithRelationInput = {
    platform_id?: SortOrder
    platform_name?: SortOrder
    chat_sessions?: ChatSessionOrderByRelationAggregateInput
    social_links?: CustomerSocialAccountOrderByRelationAggregateInput
    _relevance?: PlatformOrderByRelevanceInput
  }

  export type PlatformWhereUniqueInput = Prisma.AtLeast<{
    platform_id?: number
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    platform_name?: StringFilter<"Platform"> | string
    chat_sessions?: ChatSessionListRelationFilter
    social_links?: CustomerSocialAccountListRelationFilter
  }, "platform_id">

  export type PlatformOrderByWithAggregationInput = {
    platform_id?: SortOrder
    platform_name?: SortOrder
    _count?: PlatformCountOrderByAggregateInput
    _avg?: PlatformAvgOrderByAggregateInput
    _max?: PlatformMaxOrderByAggregateInput
    _min?: PlatformMinOrderByAggregateInput
    _sum?: PlatformSumOrderByAggregateInput
  }

  export type PlatformScalarWhereWithAggregatesInput = {
    AND?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    OR?: PlatformScalarWhereWithAggregatesInput[]
    NOT?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    platform_id?: IntWithAggregatesFilter<"Platform"> | number
    platform_name?: StringWithAggregatesFilter<"Platform"> | string
  }

  export type CustomerSocialAccountWhereInput = {
    AND?: CustomerSocialAccountWhereInput | CustomerSocialAccountWhereInput[]
    OR?: CustomerSocialAccountWhereInput[]
    NOT?: CustomerSocialAccountWhereInput | CustomerSocialAccountWhereInput[]
    social_account_id?: IntFilter<"CustomerSocialAccount"> | number
    customer_id?: IntFilter<"CustomerSocialAccount"> | number
    platform_id?: IntFilter<"CustomerSocialAccount"> | number
    account_identifier?: StringFilter<"CustomerSocialAccount"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
  }

  export type CustomerSocialAccountOrderByWithRelationInput = {
    social_account_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    account_identifier?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    platform?: PlatformOrderByWithRelationInput
    _relevance?: CustomerSocialAccountOrderByRelevanceInput
  }

  export type CustomerSocialAccountWhereUniqueInput = Prisma.AtLeast<{
    social_account_id?: number
    AND?: CustomerSocialAccountWhereInput | CustomerSocialAccountWhereInput[]
    OR?: CustomerSocialAccountWhereInput[]
    NOT?: CustomerSocialAccountWhereInput | CustomerSocialAccountWhereInput[]
    customer_id?: IntFilter<"CustomerSocialAccount"> | number
    platform_id?: IntFilter<"CustomerSocialAccount"> | number
    account_identifier?: StringFilter<"CustomerSocialAccount"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
  }, "social_account_id">

  export type CustomerSocialAccountOrderByWithAggregationInput = {
    social_account_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    account_identifier?: SortOrder
    _count?: CustomerSocialAccountCountOrderByAggregateInput
    _avg?: CustomerSocialAccountAvgOrderByAggregateInput
    _max?: CustomerSocialAccountMaxOrderByAggregateInput
    _min?: CustomerSocialAccountMinOrderByAggregateInput
    _sum?: CustomerSocialAccountSumOrderByAggregateInput
  }

  export type CustomerSocialAccountScalarWhereWithAggregatesInput = {
    AND?: CustomerSocialAccountScalarWhereWithAggregatesInput | CustomerSocialAccountScalarWhereWithAggregatesInput[]
    OR?: CustomerSocialAccountScalarWhereWithAggregatesInput[]
    NOT?: CustomerSocialAccountScalarWhereWithAggregatesInput | CustomerSocialAccountScalarWhereWithAggregatesInput[]
    social_account_id?: IntWithAggregatesFilter<"CustomerSocialAccount"> | number
    customer_id?: IntWithAggregatesFilter<"CustomerSocialAccount"> | number
    platform_id?: IntWithAggregatesFilter<"CustomerSocialAccount"> | number
    account_identifier?: StringWithAggregatesFilter<"CustomerSocialAccount"> | string
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    chat_session_id?: IntFilter<"ChatSession"> | number
    customer_id?: IntFilter<"ChatSession"> | number
    platform_id?: IntFilter<"ChatSession"> | number
    assigned_user_id?: IntNullableFilter<"ChatSession"> | number | null
    status?: EnumChatStatusFilter<"ChatSession"> | $Enums.ChatStatus
    start_time?: DateTimeFilter<"ChatSession"> | Date | string
    end_time?: DateTimeNullableFilter<"ChatSession"> | Date | string | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
    assigned_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    messages?: MessageListRelationFilter
    notes?: NoteListRelationFilter
    assignments?: AssignmentListRelationFilter
    tags?: ChatTagListRelationFilter
    logs?: ActivityLogListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    chat_session_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    assigned_user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
    platform?: PlatformOrderByWithRelationInput
    assigned_user?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    tags?: ChatTagOrderByRelationAggregateInput
    logs?: ActivityLogOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    chat_session_id?: number
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    customer_id?: IntFilter<"ChatSession"> | number
    platform_id?: IntFilter<"ChatSession"> | number
    assigned_user_id?: IntNullableFilter<"ChatSession"> | number | null
    status?: EnumChatStatusFilter<"ChatSession"> | $Enums.ChatStatus
    start_time?: DateTimeFilter<"ChatSession"> | Date | string
    end_time?: DateTimeNullableFilter<"ChatSession"> | Date | string | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
    assigned_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    messages?: MessageListRelationFilter
    notes?: NoteListRelationFilter
    assignments?: AssignmentListRelationFilter
    tags?: ChatTagListRelationFilter
    logs?: ActivityLogListRelationFilter
  }, "chat_session_id">

  export type ChatSessionOrderByWithAggregationInput = {
    chat_session_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    assigned_user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _avg?: ChatSessionAvgOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
    _sum?: ChatSessionSumOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    chat_session_id?: IntWithAggregatesFilter<"ChatSession"> | number
    customer_id?: IntWithAggregatesFilter<"ChatSession"> | number
    platform_id?: IntWithAggregatesFilter<"ChatSession"> | number
    assigned_user_id?: IntNullableWithAggregatesFilter<"ChatSession"> | number | null
    status?: EnumChatStatusWithAggregatesFilter<"ChatSession"> | $Enums.ChatStatus
    start_time?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    end_time?: DateTimeNullableWithAggregatesFilter<"ChatSession"> | Date | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    message_id?: IntFilter<"Message"> | number
    chat_session_id?: IntFilter<"Message"> | number
    sender_type?: EnumSenderTypeFilter<"Message"> | $Enums.SenderType
    sender_id?: IntNullableFilter<"Message"> | number | null
    message_type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    content?: StringNullableFilter<"Message"> | string | null
    attachment_url?: StringNullableFilter<"Message"> | string | null
    created_at?: DateTimeFilter<"Message"> | Date | string
    read_at?: DateTimeNullableFilter<"Message"> | Date | string | null
    chat_session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    message_id?: SortOrder
    chat_session_id?: SortOrder
    sender_type?: SortOrder
    sender_id?: SortOrderInput | SortOrder
    message_type?: SortOrder
    content?: SortOrderInput | SortOrder
    attachment_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    read_at?: SortOrderInput | SortOrder
    chat_session?: ChatSessionOrderByWithRelationInput
    _relevance?: MessageOrderByRelevanceInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    message_id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    chat_session_id?: IntFilter<"Message"> | number
    sender_type?: EnumSenderTypeFilter<"Message"> | $Enums.SenderType
    sender_id?: IntNullableFilter<"Message"> | number | null
    message_type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    content?: StringNullableFilter<"Message"> | string | null
    attachment_url?: StringNullableFilter<"Message"> | string | null
    created_at?: DateTimeFilter<"Message"> | Date | string
    read_at?: DateTimeNullableFilter<"Message"> | Date | string | null
    chat_session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }, "message_id">

  export type MessageOrderByWithAggregationInput = {
    message_id?: SortOrder
    chat_session_id?: SortOrder
    sender_type?: SortOrder
    sender_id?: SortOrderInput | SortOrder
    message_type?: SortOrder
    content?: SortOrderInput | SortOrder
    attachment_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    read_at?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    message_id?: IntWithAggregatesFilter<"Message"> | number
    chat_session_id?: IntWithAggregatesFilter<"Message"> | number
    sender_type?: EnumSenderTypeWithAggregatesFilter<"Message"> | $Enums.SenderType
    sender_id?: IntNullableWithAggregatesFilter<"Message"> | number | null
    message_type?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    content?: StringNullableWithAggregatesFilter<"Message"> | string | null
    attachment_url?: StringNullableWithAggregatesFilter<"Message"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    read_at?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    note_id?: IntFilter<"Note"> | number
    chat_session_id?: IntFilter<"Note"> | number
    user_id?: IntFilter<"Note"> | number
    title?: StringNullableFilter<"Note"> | string | null
    content?: StringFilter<"Note"> | string
    created_at?: DateTimeFilter<"Note"> | Date | string
    chat_session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    note_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrder
    chat_session?: ChatSessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: NoteOrderByRelevanceInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    note_id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    chat_session_id?: IntFilter<"Note"> | number
    user_id?: IntFilter<"Note"> | number
    title?: StringNullableFilter<"Note"> | string | null
    content?: StringFilter<"Note"> | string
    created_at?: DateTimeFilter<"Note"> | Date | string
    chat_session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "note_id">

  export type NoteOrderByWithAggregationInput = {
    note_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    note_id?: IntWithAggregatesFilter<"Note"> | number
    chat_session_id?: IntWithAggregatesFilter<"Note"> | number
    user_id?: IntWithAggregatesFilter<"Note"> | number
    title?: StringNullableWithAggregatesFilter<"Note"> | string | null
    content?: StringWithAggregatesFilter<"Note"> | string
    created_at?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    assignment_id?: IntFilter<"Assignment"> | number
    chat_session_id?: IntFilter<"Assignment"> | number
    user_id?: IntFilter<"Assignment"> | number
    topic?: StringNullableFilter<"Assignment"> | string | null
    detail?: StringNullableFilter<"Assignment"> | string | null
    deadline?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    chat_session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AssignmentOrderByWithRelationInput = {
    assignment_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
    topic?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    chat_session?: ChatSessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: AssignmentOrderByRelevanceInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    assignment_id?: number
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    chat_session_id?: IntFilter<"Assignment"> | number
    user_id?: IntFilter<"Assignment"> | number
    topic?: StringNullableFilter<"Assignment"> | string | null
    detail?: StringNullableFilter<"Assignment"> | string | null
    deadline?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    chat_session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "assignment_id">

  export type AssignmentOrderByWithAggregationInput = {
    assignment_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
    topic?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    assignment_id?: IntWithAggregatesFilter<"Assignment"> | number
    chat_session_id?: IntWithAggregatesFilter<"Assignment"> | number
    user_id?: IntWithAggregatesFilter<"Assignment"> | number
    topic?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    detail?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"Assignment"> | Date | string | null
    status?: EnumAssignmentStatusWithAggregatesFilter<"Assignment"> | $Enums.AssignmentStatus
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    tag_id?: IntFilter<"Tag"> | number
    tag_name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    description?: StringNullableFilter<"Tag"> | string | null
    customers?: CustomerTagListRelationFilter
    chats?: ChatTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    customers?: CustomerTagOrderByRelationAggregateInput
    chats?: ChatTagOrderByRelationAggregateInput
    _relevance?: TagOrderByRelevanceInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    tag_name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    description?: StringNullableFilter<"Tag"> | string | null
    customers?: CustomerTagListRelationFilter
    chats?: ChatTagListRelationFilter
  }, "tag_id">

  export type TagOrderByWithAggregationInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    tag_id?: IntWithAggregatesFilter<"Tag"> | number
    tag_name?: StringWithAggregatesFilter<"Tag"> | string
    color?: StringNullableWithAggregatesFilter<"Tag"> | string | null
    description?: StringNullableWithAggregatesFilter<"Tag"> | string | null
  }

  export type CustomerTagWhereInput = {
    AND?: CustomerTagWhereInput | CustomerTagWhereInput[]
    OR?: CustomerTagWhereInput[]
    NOT?: CustomerTagWhereInput | CustomerTagWhereInput[]
    customer_tag_id?: IntFilter<"CustomerTag"> | number
    customer_id?: IntFilter<"CustomerTag"> | number
    tag_id?: IntFilter<"CustomerTag"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type CustomerTagOrderByWithRelationInput = {
    customer_tag_id?: SortOrder
    customer_id?: SortOrder
    tag_id?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type CustomerTagWhereUniqueInput = Prisma.AtLeast<{
    customer_tag_id?: number
    AND?: CustomerTagWhereInput | CustomerTagWhereInput[]
    OR?: CustomerTagWhereInput[]
    NOT?: CustomerTagWhereInput | CustomerTagWhereInput[]
    customer_id?: IntFilter<"CustomerTag"> | number
    tag_id?: IntFilter<"CustomerTag"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "customer_tag_id">

  export type CustomerTagOrderByWithAggregationInput = {
    customer_tag_id?: SortOrder
    customer_id?: SortOrder
    tag_id?: SortOrder
    _count?: CustomerTagCountOrderByAggregateInput
    _avg?: CustomerTagAvgOrderByAggregateInput
    _max?: CustomerTagMaxOrderByAggregateInput
    _min?: CustomerTagMinOrderByAggregateInput
    _sum?: CustomerTagSumOrderByAggregateInput
  }

  export type CustomerTagScalarWhereWithAggregatesInput = {
    AND?: CustomerTagScalarWhereWithAggregatesInput | CustomerTagScalarWhereWithAggregatesInput[]
    OR?: CustomerTagScalarWhereWithAggregatesInput[]
    NOT?: CustomerTagScalarWhereWithAggregatesInput | CustomerTagScalarWhereWithAggregatesInput[]
    customer_tag_id?: IntWithAggregatesFilter<"CustomerTag"> | number
    customer_id?: IntWithAggregatesFilter<"CustomerTag"> | number
    tag_id?: IntWithAggregatesFilter<"CustomerTag"> | number
  }

  export type ChatTagWhereInput = {
    AND?: ChatTagWhereInput | ChatTagWhereInput[]
    OR?: ChatTagWhereInput[]
    NOT?: ChatTagWhereInput | ChatTagWhereInput[]
    chat_tag_id?: IntFilter<"ChatTag"> | number
    chat_session_id?: IntFilter<"ChatTag"> | number
    tag_id?: IntFilter<"ChatTag"> | number
    chat?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type ChatTagOrderByWithRelationInput = {
    chat_tag_id?: SortOrder
    chat_session_id?: SortOrder
    tag_id?: SortOrder
    chat?: ChatSessionOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type ChatTagWhereUniqueInput = Prisma.AtLeast<{
    chat_tag_id?: number
    AND?: ChatTagWhereInput | ChatTagWhereInput[]
    OR?: ChatTagWhereInput[]
    NOT?: ChatTagWhereInput | ChatTagWhereInput[]
    chat_session_id?: IntFilter<"ChatTag"> | number
    tag_id?: IntFilter<"ChatTag"> | number
    chat?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "chat_tag_id">

  export type ChatTagOrderByWithAggregationInput = {
    chat_tag_id?: SortOrder
    chat_session_id?: SortOrder
    tag_id?: SortOrder
    _count?: ChatTagCountOrderByAggregateInput
    _avg?: ChatTagAvgOrderByAggregateInput
    _max?: ChatTagMaxOrderByAggregateInput
    _min?: ChatTagMinOrderByAggregateInput
    _sum?: ChatTagSumOrderByAggregateInput
  }

  export type ChatTagScalarWhereWithAggregatesInput = {
    AND?: ChatTagScalarWhereWithAggregatesInput | ChatTagScalarWhereWithAggregatesInput[]
    OR?: ChatTagScalarWhereWithAggregatesInput[]
    NOT?: ChatTagScalarWhereWithAggregatesInput | ChatTagScalarWhereWithAggregatesInput[]
    chat_tag_id?: IntWithAggregatesFilter<"ChatTag"> | number
    chat_session_id?: IntWithAggregatesFilter<"ChatTag"> | number
    tag_id?: IntWithAggregatesFilter<"ChatTag"> | number
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    log_id?: IntFilter<"ActivityLog"> | number
    user_id?: IntNullableFilter<"ActivityLog"> | number | null
    chat_session_id?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    old_value?: StringNullableFilter<"ActivityLog"> | string | null
    new_value?: StringNullableFilter<"ActivityLog"> | string | null
    created_at?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    chat?: XOR<ChatSessionNullableScalarRelationFilter, ChatSessionWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    log_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    chat_session_id?: SortOrderInput | SortOrder
    action?: SortOrder
    old_value?: SortOrderInput | SortOrder
    new_value?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    chat?: ChatSessionOrderByWithRelationInput
    _relevance?: ActivityLogOrderByRelevanceInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    log_id?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    user_id?: IntNullableFilter<"ActivityLog"> | number | null
    chat_session_id?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    old_value?: StringNullableFilter<"ActivityLog"> | string | null
    new_value?: StringNullableFilter<"ActivityLog"> | string | null
    created_at?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    chat?: XOR<ChatSessionNullableScalarRelationFilter, ChatSessionWhereInput> | null
  }, "log_id">

  export type ActivityLogOrderByWithAggregationInput = {
    log_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    chat_session_id?: SortOrderInput | SortOrder
    action?: SortOrder
    old_value?: SortOrderInput | SortOrder
    new_value?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    log_id?: IntWithAggregatesFilter<"ActivityLog"> | number
    user_id?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    chat_session_id?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    old_value?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    new_value?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    teams?: TeamMemberCreateNestedManyWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    activity_logs?: ActivityLogCreateNestedManyWithoutUserInput
    chat_sessions?: ChatSessionCreateNestedManyWithoutAssigned_userInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    activity_logs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    chat_sessions?: ChatSessionUncheckedCreateNestedManyWithoutAssigned_userInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    activity_logs?: ActivityLogUpdateManyWithoutUserNestedInput
    chat_sessions?: ChatSessionUpdateManyWithoutAssigned_userNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    activity_logs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    chat_sessions?: ChatSessionUncheckedUpdateManyWithoutAssigned_userNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    team_name: string
    description?: string | null
    members?: TeamMemberCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    team_id?: number
    team_name: string
    description?: string | null
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    team_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    team_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    team_id?: number
    team_name: string
    description?: string | null
  }

  export type TeamUpdateManyMutationInput = {
    team_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamUncheckedUpdateManyInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    team_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamMemberCreateInput = {
    team: TeamCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutTeamsInput
  }

  export type TeamMemberUncheckedCreateInput = {
    team_member_id?: number
    team_id: number
    user_id: number
  }

  export type TeamMemberUpdateInput = {
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    team_member_id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeamMemberCreateManyInput = {
    team_member_id?: number
    team_id: number
    user_id: number
  }

  export type TeamMemberUpdateManyMutationInput = {

  }

  export type TeamMemberUncheckedUpdateManyInput = {
    team_member_id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    country?: string | null
    created_at?: Date | string
    social_accounts?: CustomerSocialAccountCreateNestedManyWithoutCustomerInput
    chat_sessions?: ChatSessionCreateNestedManyWithoutCustomerInput
    tags?: CustomerTagCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    customer_id?: number
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    country?: string | null
    created_at?: Date | string
    social_accounts?: CustomerSocialAccountUncheckedCreateNestedManyWithoutCustomerInput
    chat_sessions?: ChatSessionUncheckedCreateNestedManyWithoutCustomerInput
    tags?: CustomerTagUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_accounts?: CustomerSocialAccountUpdateManyWithoutCustomerNestedInput
    chat_sessions?: ChatSessionUpdateManyWithoutCustomerNestedInput
    tags?: CustomerTagUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_accounts?: CustomerSocialAccountUncheckedUpdateManyWithoutCustomerNestedInput
    chat_sessions?: ChatSessionUncheckedUpdateManyWithoutCustomerNestedInput
    tags?: CustomerTagUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    customer_id?: number
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    country?: string | null
    created_at?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformCreateInput = {
    platform_name: string
    chat_sessions?: ChatSessionCreateNestedManyWithoutPlatformInput
    social_links?: CustomerSocialAccountCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUncheckedCreateInput = {
    platform_id?: number
    platform_name: string
    chat_sessions?: ChatSessionUncheckedCreateNestedManyWithoutPlatformInput
    social_links?: CustomerSocialAccountUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUpdateInput = {
    platform_name?: StringFieldUpdateOperationsInput | string
    chat_sessions?: ChatSessionUpdateManyWithoutPlatformNestedInput
    social_links?: CustomerSocialAccountUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateInput = {
    platform_id?: IntFieldUpdateOperationsInput | number
    platform_name?: StringFieldUpdateOperationsInput | string
    chat_sessions?: ChatSessionUncheckedUpdateManyWithoutPlatformNestedInput
    social_links?: CustomerSocialAccountUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformCreateManyInput = {
    platform_id?: number
    platform_name: string
  }

  export type PlatformUpdateManyMutationInput = {
    platform_name?: StringFieldUpdateOperationsInput | string
  }

  export type PlatformUncheckedUpdateManyInput = {
    platform_id?: IntFieldUpdateOperationsInput | number
    platform_name?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerSocialAccountCreateInput = {
    account_identifier: string
    customer: CustomerCreateNestedOneWithoutSocial_accountsInput
    platform: PlatformCreateNestedOneWithoutSocial_linksInput
  }

  export type CustomerSocialAccountUncheckedCreateInput = {
    social_account_id?: number
    customer_id: number
    platform_id: number
    account_identifier: string
  }

  export type CustomerSocialAccountUpdateInput = {
    account_identifier?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutSocial_accountsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutSocial_linksNestedInput
  }

  export type CustomerSocialAccountUncheckedUpdateInput = {
    social_account_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    account_identifier?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerSocialAccountCreateManyInput = {
    social_account_id?: number
    customer_id: number
    platform_id: number
    account_identifier: string
  }

  export type CustomerSocialAccountUpdateManyMutationInput = {
    account_identifier?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerSocialAccountUncheckedUpdateManyInput = {
    social_account_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    account_identifier?: StringFieldUpdateOperationsInput | string
  }

  export type ChatSessionCreateInput = {
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    customer: CustomerCreateNestedOneWithoutChat_sessionsInput
    platform: PlatformCreateNestedOneWithoutChat_sessionsInput
    assigned_user?: UserCreateNestedOneWithoutChat_sessionsInput
    messages?: MessageCreateNestedManyWithoutChat_sessionInput
    notes?: NoteCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagCreateNestedManyWithoutChatInput
    logs?: ActivityLogCreateNestedManyWithoutChatInput
  }

  export type ChatSessionUncheckedCreateInput = {
    chat_session_id?: number
    customer_id: number
    platform_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChat_sessionInput
    notes?: NoteUncheckedCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagUncheckedCreateNestedManyWithoutChatInput
    logs?: ActivityLogUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatSessionUpdateInput = {
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutChat_sessionsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutChat_sessionsNestedInput
    assigned_user?: UserUpdateOneWithoutChat_sessionsNestedInput
    messages?: MessageUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUncheckedUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionCreateManyInput = {
    chat_session_id?: number
    customer_id: number
    platform_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
  }

  export type ChatSessionUpdateManyMutationInput = {
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateInput = {
    sender_type: $Enums.SenderType
    sender_id?: number | null
    message_type: $Enums.MessageType
    content?: string | null
    attachment_url?: string | null
    created_at?: Date | string
    read_at?: Date | string | null
    chat_session: ChatSessionCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    message_id?: number
    chat_session_id: number
    sender_type: $Enums.SenderType
    sender_id?: number | null
    message_type: $Enums.MessageType
    content?: string | null
    attachment_url?: string | null
    created_at?: Date | string
    read_at?: Date | string | null
  }

  export type MessageUpdateInput = {
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_session?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateManyInput = {
    message_id?: number
    chat_session_id: number
    sender_type: $Enums.SenderType
    sender_id?: number | null
    message_type: $Enums.MessageType
    content?: string | null
    attachment_url?: string | null
    created_at?: Date | string
    read_at?: Date | string | null
  }

  export type MessageUpdateManyMutationInput = {
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NoteCreateInput = {
    title?: string | null
    content: string
    created_at?: Date | string
    chat_session: ChatSessionCreateNestedOneWithoutNotesInput
    user: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    note_id?: number
    chat_session_id: number
    user_id: number
    title?: string | null
    content: string
    created_at?: Date | string
  }

  export type NoteUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_session?: ChatSessionUpdateOneRequiredWithoutNotesNestedInput
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    note_id?: number
    chat_session_id: number
    user_id: number
    title?: string | null
    content: string
    created_at?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    topic?: string | null
    detail?: string | null
    deadline?: Date | string | null
    status?: $Enums.AssignmentStatus
    chat_session: ChatSessionCreateNestedOneWithoutAssignmentsInput
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateInput = {
    assignment_id?: number
    chat_session_id: number
    user_id: number
    topic?: string | null
    detail?: string | null
    deadline?: Date | string | null
    status?: $Enums.AssignmentStatus
  }

  export type AssignmentUpdateInput = {
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    chat_session?: ChatSessionUpdateOneRequiredWithoutAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type AssignmentCreateManyInput = {
    assignment_id?: number
    chat_session_id: number
    user_id: number
    topic?: string | null
    detail?: string | null
    deadline?: Date | string | null
    status?: $Enums.AssignmentStatus
  }

  export type AssignmentUpdateManyMutationInput = {
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type AssignmentUncheckedUpdateManyInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type TagCreateInput = {
    tag_name: string
    color?: string | null
    description?: string | null
    customers?: CustomerTagCreateNestedManyWithoutTagInput
    chats?: ChatTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    tag_id?: number
    tag_name: string
    color?: string | null
    description?: string | null
    customers?: CustomerTagUncheckedCreateNestedManyWithoutTagInput
    chats?: ChatTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerTagUpdateManyWithoutTagNestedInput
    chats?: ChatTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerTagUncheckedUpdateManyWithoutTagNestedInput
    chats?: ChatTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    tag_id?: number
    tag_name: string
    color?: string | null
    description?: string | null
  }

  export type TagUpdateManyMutationInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUncheckedUpdateManyInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerTagCreateInput = {
    customer: CustomerCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutCustomersInput
  }

  export type CustomerTagUncheckedCreateInput = {
    customer_tag_id?: number
    customer_id: number
    tag_id: number
  }

  export type CustomerTagUpdateInput = {
    customer?: CustomerUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerTagUncheckedUpdateInput = {
    customer_tag_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerTagCreateManyInput = {
    customer_tag_id?: number
    customer_id: number
    tag_id: number
  }

  export type CustomerTagUpdateManyMutationInput = {

  }

  export type CustomerTagUncheckedUpdateManyInput = {
    customer_tag_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChatTagCreateInput = {
    chat: ChatSessionCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutChatsInput
  }

  export type ChatTagUncheckedCreateInput = {
    chat_tag_id?: number
    chat_session_id: number
    tag_id: number
  }

  export type ChatTagUpdateInput = {
    chat?: ChatSessionUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatTagUncheckedUpdateInput = {
    chat_tag_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChatTagCreateManyInput = {
    chat_tag_id?: number
    chat_session_id: number
    tag_id: number
  }

  export type ChatTagUpdateManyMutationInput = {

  }

  export type ChatTagUncheckedUpdateManyInput = {
    chat_tag_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityLogCreateInput = {
    action: string
    old_value?: string | null
    new_value?: string | null
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutActivity_logsInput
    chat?: ChatSessionCreateNestedOneWithoutLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    log_id?: number
    user_id?: number | null
    chat_session_id?: number | null
    action: string
    old_value?: string | null
    new_value?: string | null
    created_at?: Date | string
  }

  export type ActivityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivity_logsNestedInput
    chat?: ChatSessionUpdateOneWithoutLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    chat_session_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    log_id?: number
    user_id?: number | null
    chat_session_id?: number | null
    action: string
    old_value?: string | null
    new_value?: string | null
    created_at?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    chat_session_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    online_status?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    online_status?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    online_status?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TeamOrderByRelevanceInput = {
    fields: TeamOrderByRelevanceFieldEnum | TeamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeamCountOrderByAggregateInput = {
    team_id?: SortOrder
    team_name?: SortOrder
    description?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    team_id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    team_id?: SortOrder
    team_name?: SortOrder
    description?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    team_id?: SortOrder
    team_name?: SortOrder
    description?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    team_id?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeamMemberCountOrderByAggregateInput = {
    team_member_id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type TeamMemberAvgOrderByAggregateInput = {
    team_member_id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    team_member_id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    team_member_id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type TeamMemberSumOrderByAggregateInput = {
    team_member_id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type CustomerSocialAccountListRelationFilter = {
    every?: CustomerSocialAccountWhereInput
    some?: CustomerSocialAccountWhereInput
    none?: CustomerSocialAccountWhereInput
  }

  export type CustomerTagListRelationFilter = {
    every?: CustomerTagWhereInput
    some?: CustomerTagWhereInput
    none?: CustomerTagWhereInput
  }

  export type CustomerSocialAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type PlatformOrderByRelevanceInput = {
    fields: PlatformOrderByRelevanceFieldEnum | PlatformOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlatformCountOrderByAggregateInput = {
    platform_id?: SortOrder
    platform_name?: SortOrder
  }

  export type PlatformAvgOrderByAggregateInput = {
    platform_id?: SortOrder
  }

  export type PlatformMaxOrderByAggregateInput = {
    platform_id?: SortOrder
    platform_name?: SortOrder
  }

  export type PlatformMinOrderByAggregateInput = {
    platform_id?: SortOrder
    platform_name?: SortOrder
  }

  export type PlatformSumOrderByAggregateInput = {
    platform_id?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type PlatformScalarRelationFilter = {
    is?: PlatformWhereInput
    isNot?: PlatformWhereInput
  }

  export type CustomerSocialAccountOrderByRelevanceInput = {
    fields: CustomerSocialAccountOrderByRelevanceFieldEnum | CustomerSocialAccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerSocialAccountCountOrderByAggregateInput = {
    social_account_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    account_identifier?: SortOrder
  }

  export type CustomerSocialAccountAvgOrderByAggregateInput = {
    social_account_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
  }

  export type CustomerSocialAccountMaxOrderByAggregateInput = {
    social_account_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    account_identifier?: SortOrder
  }

  export type CustomerSocialAccountMinOrderByAggregateInput = {
    social_account_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    account_identifier?: SortOrder
  }

  export type CustomerSocialAccountSumOrderByAggregateInput = {
    social_account_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumChatStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[]
    notIn?: $Enums.ChatStatus[]
    not?: NestedEnumChatStatusFilter<$PrismaModel> | $Enums.ChatStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ChatTagListRelationFilter = {
    every?: ChatTagWhereInput
    some?: ChatTagWhereInput
    none?: ChatTagWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionCountOrderByAggregateInput = {
    chat_session_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    assigned_user_id?: SortOrder
    status?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type ChatSessionAvgOrderByAggregateInput = {
    chat_session_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    assigned_user_id?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    chat_session_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    assigned_user_id?: SortOrder
    status?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    chat_session_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    assigned_user_id?: SortOrder
    status?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type ChatSessionSumOrderByAggregateInput = {
    chat_session_id?: SortOrder
    customer_id?: SortOrder
    platform_id?: SortOrder
    assigned_user_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumChatStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[]
    notIn?: $Enums.ChatStatus[]
    not?: NestedEnumChatStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChatStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatStatusFilter<$PrismaModel>
    _max?: NestedEnumChatStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSenderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[]
    notIn?: $Enums.SenderType[]
    not?: NestedEnumSenderTypeFilter<$PrismaModel> | $Enums.SenderType
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[]
    notIn?: $Enums.MessageType[]
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type ChatSessionScalarRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type MessageOrderByRelevanceInput = {
    fields: MessageOrderByRelevanceFieldEnum | MessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MessageCountOrderByAggregateInput = {
    message_id?: SortOrder
    chat_session_id?: SortOrder
    sender_type?: SortOrder
    sender_id?: SortOrder
    message_type?: SortOrder
    content?: SortOrder
    attachment_url?: SortOrder
    created_at?: SortOrder
    read_at?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    message_id?: SortOrder
    chat_session_id?: SortOrder
    sender_id?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    message_id?: SortOrder
    chat_session_id?: SortOrder
    sender_type?: SortOrder
    sender_id?: SortOrder
    message_type?: SortOrder
    content?: SortOrder
    attachment_url?: SortOrder
    created_at?: SortOrder
    read_at?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    message_id?: SortOrder
    chat_session_id?: SortOrder
    sender_type?: SortOrder
    sender_id?: SortOrder
    message_type?: SortOrder
    content?: SortOrder
    attachment_url?: SortOrder
    created_at?: SortOrder
    read_at?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    message_id?: SortOrder
    chat_session_id?: SortOrder
    sender_id?: SortOrder
  }

  export type EnumSenderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[]
    notIn?: $Enums.SenderType[]
    not?: NestedEnumSenderTypeWithAggregatesFilter<$PrismaModel> | $Enums.SenderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSenderTypeFilter<$PrismaModel>
    _max?: NestedEnumSenderTypeFilter<$PrismaModel>
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[]
    notIn?: $Enums.MessageType[]
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NoteOrderByRelevanceInput = {
    fields: NoteOrderByRelevanceFieldEnum | NoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NoteCountOrderByAggregateInput = {
    note_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    note_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    note_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    note_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    note_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type AssignmentOrderByRelevanceInput = {
    fields: AssignmentOrderByRelevanceFieldEnum | AssignmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssignmentCountOrderByAggregateInput = {
    assignment_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
    topic?: SortOrder
    detail?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    assignment_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    assignment_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
    topic?: SortOrder
    detail?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    assignment_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
    topic?: SortOrder
    detail?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    assignment_id?: SortOrder
    chat_session_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type TagOrderByRelevanceInput = {
    fields: TagOrderByRelevanceFieldEnum | TagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagCountOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color?: SortOrder
    description?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color?: SortOrder
    description?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color?: SortOrder
    description?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type CustomerTagCountOrderByAggregateInput = {
    customer_tag_id?: SortOrder
    customer_id?: SortOrder
    tag_id?: SortOrder
  }

  export type CustomerTagAvgOrderByAggregateInput = {
    customer_tag_id?: SortOrder
    customer_id?: SortOrder
    tag_id?: SortOrder
  }

  export type CustomerTagMaxOrderByAggregateInput = {
    customer_tag_id?: SortOrder
    customer_id?: SortOrder
    tag_id?: SortOrder
  }

  export type CustomerTagMinOrderByAggregateInput = {
    customer_tag_id?: SortOrder
    customer_id?: SortOrder
    tag_id?: SortOrder
  }

  export type CustomerTagSumOrderByAggregateInput = {
    customer_tag_id?: SortOrder
    customer_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ChatTagCountOrderByAggregateInput = {
    chat_tag_id?: SortOrder
    chat_session_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ChatTagAvgOrderByAggregateInput = {
    chat_tag_id?: SortOrder
    chat_session_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ChatTagMaxOrderByAggregateInput = {
    chat_tag_id?: SortOrder
    chat_session_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ChatTagMinOrderByAggregateInput = {
    chat_tag_id?: SortOrder
    chat_session_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ChatTagSumOrderByAggregateInput = {
    chat_tag_id?: SortOrder
    chat_session_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ChatSessionNullableScalarRelationFilter = {
    is?: ChatSessionWhereInput | null
    isNot?: ChatSessionWhereInput | null
  }

  export type ActivityLogOrderByRelevanceInput = {
    fields: ActivityLogOrderByRelevanceFieldEnum | ActivityLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityLogCountOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    chat_session_id?: SortOrder
    action?: SortOrder
    old_value?: SortOrder
    new_value?: SortOrder
    created_at?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    chat_session_id?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    chat_session_id?: SortOrder
    action?: SortOrder
    old_value?: SortOrder
    new_value?: SortOrder
    created_at?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    chat_session_id?: SortOrder
    action?: SortOrder
    old_value?: SortOrder
    new_value?: SortOrder
    created_at?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    chat_session_id?: SortOrder
  }

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ChatSessionCreateNestedManyWithoutAssigned_userInput = {
    create?: XOR<ChatSessionCreateWithoutAssigned_userInput, ChatSessionUncheckedCreateWithoutAssigned_userInput> | ChatSessionCreateWithoutAssigned_userInput[] | ChatSessionUncheckedCreateWithoutAssigned_userInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutAssigned_userInput | ChatSessionCreateOrConnectWithoutAssigned_userInput[]
    createMany?: ChatSessionCreateManyAssigned_userInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutAssigned_userInput = {
    create?: XOR<ChatSessionCreateWithoutAssigned_userInput, ChatSessionUncheckedCreateWithoutAssigned_userInput> | ChatSessionCreateWithoutAssigned_userInput[] | ChatSessionUncheckedCreateWithoutAssigned_userInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutAssigned_userInput | ChatSessionCreateOrConnectWithoutAssigned_userInput[]
    createMany?: ChatSessionCreateManyAssigned_userInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutUserInput | AssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutUserInput | AssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutUserInput | AssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ChatSessionUpdateManyWithoutAssigned_userNestedInput = {
    create?: XOR<ChatSessionCreateWithoutAssigned_userInput, ChatSessionUncheckedCreateWithoutAssigned_userInput> | ChatSessionCreateWithoutAssigned_userInput[] | ChatSessionUncheckedCreateWithoutAssigned_userInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutAssigned_userInput | ChatSessionCreateOrConnectWithoutAssigned_userInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutAssigned_userInput | ChatSessionUpsertWithWhereUniqueWithoutAssigned_userInput[]
    createMany?: ChatSessionCreateManyAssigned_userInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutAssigned_userInput | ChatSessionUpdateWithWhereUniqueWithoutAssigned_userInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutAssigned_userInput | ChatSessionUpdateManyWithWhereWithoutAssigned_userInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutUserInput | AssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutUserInput | AssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutUserInput | AssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutAssigned_userNestedInput = {
    create?: XOR<ChatSessionCreateWithoutAssigned_userInput, ChatSessionUncheckedCreateWithoutAssigned_userInput> | ChatSessionCreateWithoutAssigned_userInput[] | ChatSessionUncheckedCreateWithoutAssigned_userInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutAssigned_userInput | ChatSessionCreateOrConnectWithoutAssigned_userInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutAssigned_userInput | ChatSessionUpsertWithWhereUniqueWithoutAssigned_userInput[]
    createMany?: ChatSessionCreateManyAssigned_userInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutAssigned_userInput | ChatSessionUpdateWithWhereUniqueWithoutAssigned_userInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutAssigned_userInput | ChatSessionUpdateManyWithWhereWithoutAssigned_userInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    upsert?: UserUpsertWithoutTeamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamsInput, UserUpdateWithoutTeamsInput>, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type CustomerSocialAccountCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerSocialAccountCreateWithoutCustomerInput, CustomerSocialAccountUncheckedCreateWithoutCustomerInput> | CustomerSocialAccountCreateWithoutCustomerInput[] | CustomerSocialAccountUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerSocialAccountCreateOrConnectWithoutCustomerInput | CustomerSocialAccountCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerSocialAccountCreateManyCustomerInputEnvelope
    connect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
  }

  export type ChatSessionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ChatSessionCreateWithoutCustomerInput, ChatSessionUncheckedCreateWithoutCustomerInput> | ChatSessionCreateWithoutCustomerInput[] | ChatSessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutCustomerInput | ChatSessionCreateOrConnectWithoutCustomerInput[]
    createMany?: ChatSessionCreateManyCustomerInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type CustomerTagCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerTagCreateWithoutCustomerInput, CustomerTagUncheckedCreateWithoutCustomerInput> | CustomerTagCreateWithoutCustomerInput[] | CustomerTagUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTagCreateOrConnectWithoutCustomerInput | CustomerTagCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerTagCreateManyCustomerInputEnvelope
    connect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
  }

  export type CustomerSocialAccountUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerSocialAccountCreateWithoutCustomerInput, CustomerSocialAccountUncheckedCreateWithoutCustomerInput> | CustomerSocialAccountCreateWithoutCustomerInput[] | CustomerSocialAccountUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerSocialAccountCreateOrConnectWithoutCustomerInput | CustomerSocialAccountCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerSocialAccountCreateManyCustomerInputEnvelope
    connect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ChatSessionCreateWithoutCustomerInput, ChatSessionUncheckedCreateWithoutCustomerInput> | ChatSessionCreateWithoutCustomerInput[] | ChatSessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutCustomerInput | ChatSessionCreateOrConnectWithoutCustomerInput[]
    createMany?: ChatSessionCreateManyCustomerInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type CustomerTagUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerTagCreateWithoutCustomerInput, CustomerTagUncheckedCreateWithoutCustomerInput> | CustomerTagCreateWithoutCustomerInput[] | CustomerTagUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTagCreateOrConnectWithoutCustomerInput | CustomerTagCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerTagCreateManyCustomerInputEnvelope
    connect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
  }

  export type CustomerSocialAccountUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerSocialAccountCreateWithoutCustomerInput, CustomerSocialAccountUncheckedCreateWithoutCustomerInput> | CustomerSocialAccountCreateWithoutCustomerInput[] | CustomerSocialAccountUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerSocialAccountCreateOrConnectWithoutCustomerInput | CustomerSocialAccountCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerSocialAccountUpsertWithWhereUniqueWithoutCustomerInput | CustomerSocialAccountUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerSocialAccountCreateManyCustomerInputEnvelope
    set?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    disconnect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    delete?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    connect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    update?: CustomerSocialAccountUpdateWithWhereUniqueWithoutCustomerInput | CustomerSocialAccountUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerSocialAccountUpdateManyWithWhereWithoutCustomerInput | CustomerSocialAccountUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerSocialAccountScalarWhereInput | CustomerSocialAccountScalarWhereInput[]
  }

  export type ChatSessionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ChatSessionCreateWithoutCustomerInput, ChatSessionUncheckedCreateWithoutCustomerInput> | ChatSessionCreateWithoutCustomerInput[] | ChatSessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutCustomerInput | ChatSessionCreateOrConnectWithoutCustomerInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutCustomerInput | ChatSessionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ChatSessionCreateManyCustomerInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutCustomerInput | ChatSessionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutCustomerInput | ChatSessionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type CustomerTagUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerTagCreateWithoutCustomerInput, CustomerTagUncheckedCreateWithoutCustomerInput> | CustomerTagCreateWithoutCustomerInput[] | CustomerTagUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTagCreateOrConnectWithoutCustomerInput | CustomerTagCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerTagUpsertWithWhereUniqueWithoutCustomerInput | CustomerTagUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerTagCreateManyCustomerInputEnvelope
    set?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    disconnect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    delete?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    connect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    update?: CustomerTagUpdateWithWhereUniqueWithoutCustomerInput | CustomerTagUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerTagUpdateManyWithWhereWithoutCustomerInput | CustomerTagUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerTagScalarWhereInput | CustomerTagScalarWhereInput[]
  }

  export type CustomerSocialAccountUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerSocialAccountCreateWithoutCustomerInput, CustomerSocialAccountUncheckedCreateWithoutCustomerInput> | CustomerSocialAccountCreateWithoutCustomerInput[] | CustomerSocialAccountUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerSocialAccountCreateOrConnectWithoutCustomerInput | CustomerSocialAccountCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerSocialAccountUpsertWithWhereUniqueWithoutCustomerInput | CustomerSocialAccountUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerSocialAccountCreateManyCustomerInputEnvelope
    set?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    disconnect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    delete?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    connect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    update?: CustomerSocialAccountUpdateWithWhereUniqueWithoutCustomerInput | CustomerSocialAccountUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerSocialAccountUpdateManyWithWhereWithoutCustomerInput | CustomerSocialAccountUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerSocialAccountScalarWhereInput | CustomerSocialAccountScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ChatSessionCreateWithoutCustomerInput, ChatSessionUncheckedCreateWithoutCustomerInput> | ChatSessionCreateWithoutCustomerInput[] | ChatSessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutCustomerInput | ChatSessionCreateOrConnectWithoutCustomerInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutCustomerInput | ChatSessionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ChatSessionCreateManyCustomerInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutCustomerInput | ChatSessionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutCustomerInput | ChatSessionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type CustomerTagUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerTagCreateWithoutCustomerInput, CustomerTagUncheckedCreateWithoutCustomerInput> | CustomerTagCreateWithoutCustomerInput[] | CustomerTagUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTagCreateOrConnectWithoutCustomerInput | CustomerTagCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerTagUpsertWithWhereUniqueWithoutCustomerInput | CustomerTagUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerTagCreateManyCustomerInputEnvelope
    set?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    disconnect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    delete?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    connect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    update?: CustomerTagUpdateWithWhereUniqueWithoutCustomerInput | CustomerTagUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerTagUpdateManyWithWhereWithoutCustomerInput | CustomerTagUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerTagScalarWhereInput | CustomerTagScalarWhereInput[]
  }

  export type ChatSessionCreateNestedManyWithoutPlatformInput = {
    create?: XOR<ChatSessionCreateWithoutPlatformInput, ChatSessionUncheckedCreateWithoutPlatformInput> | ChatSessionCreateWithoutPlatformInput[] | ChatSessionUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutPlatformInput | ChatSessionCreateOrConnectWithoutPlatformInput[]
    createMany?: ChatSessionCreateManyPlatformInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type CustomerSocialAccountCreateNestedManyWithoutPlatformInput = {
    create?: XOR<CustomerSocialAccountCreateWithoutPlatformInput, CustomerSocialAccountUncheckedCreateWithoutPlatformInput> | CustomerSocialAccountCreateWithoutPlatformInput[] | CustomerSocialAccountUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CustomerSocialAccountCreateOrConnectWithoutPlatformInput | CustomerSocialAccountCreateOrConnectWithoutPlatformInput[]
    createMany?: CustomerSocialAccountCreateManyPlatformInputEnvelope
    connect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<ChatSessionCreateWithoutPlatformInput, ChatSessionUncheckedCreateWithoutPlatformInput> | ChatSessionCreateWithoutPlatformInput[] | ChatSessionUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutPlatformInput | ChatSessionCreateOrConnectWithoutPlatformInput[]
    createMany?: ChatSessionCreateManyPlatformInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type CustomerSocialAccountUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<CustomerSocialAccountCreateWithoutPlatformInput, CustomerSocialAccountUncheckedCreateWithoutPlatformInput> | CustomerSocialAccountCreateWithoutPlatformInput[] | CustomerSocialAccountUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CustomerSocialAccountCreateOrConnectWithoutPlatformInput | CustomerSocialAccountCreateOrConnectWithoutPlatformInput[]
    createMany?: CustomerSocialAccountCreateManyPlatformInputEnvelope
    connect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
  }

  export type ChatSessionUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<ChatSessionCreateWithoutPlatformInput, ChatSessionUncheckedCreateWithoutPlatformInput> | ChatSessionCreateWithoutPlatformInput[] | ChatSessionUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutPlatformInput | ChatSessionCreateOrConnectWithoutPlatformInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutPlatformInput | ChatSessionUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: ChatSessionCreateManyPlatformInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutPlatformInput | ChatSessionUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutPlatformInput | ChatSessionUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type CustomerSocialAccountUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<CustomerSocialAccountCreateWithoutPlatformInput, CustomerSocialAccountUncheckedCreateWithoutPlatformInput> | CustomerSocialAccountCreateWithoutPlatformInput[] | CustomerSocialAccountUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CustomerSocialAccountCreateOrConnectWithoutPlatformInput | CustomerSocialAccountCreateOrConnectWithoutPlatformInput[]
    upsert?: CustomerSocialAccountUpsertWithWhereUniqueWithoutPlatformInput | CustomerSocialAccountUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: CustomerSocialAccountCreateManyPlatformInputEnvelope
    set?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    disconnect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    delete?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    connect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    update?: CustomerSocialAccountUpdateWithWhereUniqueWithoutPlatformInput | CustomerSocialAccountUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: CustomerSocialAccountUpdateManyWithWhereWithoutPlatformInput | CustomerSocialAccountUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: CustomerSocialAccountScalarWhereInput | CustomerSocialAccountScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<ChatSessionCreateWithoutPlatformInput, ChatSessionUncheckedCreateWithoutPlatformInput> | ChatSessionCreateWithoutPlatformInput[] | ChatSessionUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutPlatformInput | ChatSessionCreateOrConnectWithoutPlatformInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutPlatformInput | ChatSessionUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: ChatSessionCreateManyPlatformInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutPlatformInput | ChatSessionUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutPlatformInput | ChatSessionUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type CustomerSocialAccountUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<CustomerSocialAccountCreateWithoutPlatformInput, CustomerSocialAccountUncheckedCreateWithoutPlatformInput> | CustomerSocialAccountCreateWithoutPlatformInput[] | CustomerSocialAccountUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CustomerSocialAccountCreateOrConnectWithoutPlatformInput | CustomerSocialAccountCreateOrConnectWithoutPlatformInput[]
    upsert?: CustomerSocialAccountUpsertWithWhereUniqueWithoutPlatformInput | CustomerSocialAccountUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: CustomerSocialAccountCreateManyPlatformInputEnvelope
    set?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    disconnect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    delete?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    connect?: CustomerSocialAccountWhereUniqueInput | CustomerSocialAccountWhereUniqueInput[]
    update?: CustomerSocialAccountUpdateWithWhereUniqueWithoutPlatformInput | CustomerSocialAccountUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: CustomerSocialAccountUpdateManyWithWhereWithoutPlatformInput | CustomerSocialAccountUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: CustomerSocialAccountScalarWhereInput | CustomerSocialAccountScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutSocial_accountsInput = {
    create?: XOR<CustomerCreateWithoutSocial_accountsInput, CustomerUncheckedCreateWithoutSocial_accountsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSocial_accountsInput
    connect?: CustomerWhereUniqueInput
  }

  export type PlatformCreateNestedOneWithoutSocial_linksInput = {
    create?: XOR<PlatformCreateWithoutSocial_linksInput, PlatformUncheckedCreateWithoutSocial_linksInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutSocial_linksInput
    connect?: PlatformWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutSocial_accountsNestedInput = {
    create?: XOR<CustomerCreateWithoutSocial_accountsInput, CustomerUncheckedCreateWithoutSocial_accountsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSocial_accountsInput
    upsert?: CustomerUpsertWithoutSocial_accountsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSocial_accountsInput, CustomerUpdateWithoutSocial_accountsInput>, CustomerUncheckedUpdateWithoutSocial_accountsInput>
  }

  export type PlatformUpdateOneRequiredWithoutSocial_linksNestedInput = {
    create?: XOR<PlatformCreateWithoutSocial_linksInput, PlatformUncheckedCreateWithoutSocial_linksInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutSocial_linksInput
    upsert?: PlatformUpsertWithoutSocial_linksInput
    connect?: PlatformWhereUniqueInput
    update?: XOR<XOR<PlatformUpdateToOneWithWhereWithoutSocial_linksInput, PlatformUpdateWithoutSocial_linksInput>, PlatformUncheckedUpdateWithoutSocial_linksInput>
  }

  export type CustomerCreateNestedOneWithoutChat_sessionsInput = {
    create?: XOR<CustomerCreateWithoutChat_sessionsInput, CustomerUncheckedCreateWithoutChat_sessionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutChat_sessionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type PlatformCreateNestedOneWithoutChat_sessionsInput = {
    create?: XOR<PlatformCreateWithoutChat_sessionsInput, PlatformUncheckedCreateWithoutChat_sessionsInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutChat_sessionsInput
    connect?: PlatformWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChat_sessionsInput = {
    create?: XOR<UserCreateWithoutChat_sessionsInput, UserUncheckedCreateWithoutChat_sessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChat_sessionsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChat_sessionInput = {
    create?: XOR<MessageCreateWithoutChat_sessionInput, MessageUncheckedCreateWithoutChat_sessionInput> | MessageCreateWithoutChat_sessionInput[] | MessageUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChat_sessionInput | MessageCreateOrConnectWithoutChat_sessionInput[]
    createMany?: MessageCreateManyChat_sessionInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutChat_sessionInput = {
    create?: XOR<NoteCreateWithoutChat_sessionInput, NoteUncheckedCreateWithoutChat_sessionInput> | NoteCreateWithoutChat_sessionInput[] | NoteUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutChat_sessionInput | NoteCreateOrConnectWithoutChat_sessionInput[]
    createMany?: NoteCreateManyChat_sessionInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutChat_sessionInput = {
    create?: XOR<AssignmentCreateWithoutChat_sessionInput, AssignmentUncheckedCreateWithoutChat_sessionInput> | AssignmentCreateWithoutChat_sessionInput[] | AssignmentUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutChat_sessionInput | AssignmentCreateOrConnectWithoutChat_sessionInput[]
    createMany?: AssignmentCreateManyChat_sessionInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ChatTagCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatTagCreateWithoutChatInput, ChatTagUncheckedCreateWithoutChatInput> | ChatTagCreateWithoutChatInput[] | ChatTagUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatTagCreateOrConnectWithoutChatInput | ChatTagCreateOrConnectWithoutChatInput[]
    createMany?: ChatTagCreateManyChatInputEnvelope
    connect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutChatInput = {
    create?: XOR<ActivityLogCreateWithoutChatInput, ActivityLogUncheckedCreateWithoutChatInput> | ActivityLogCreateWithoutChatInput[] | ActivityLogUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutChatInput | ActivityLogCreateOrConnectWithoutChatInput[]
    createMany?: ActivityLogCreateManyChatInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChat_sessionInput = {
    create?: XOR<MessageCreateWithoutChat_sessionInput, MessageUncheckedCreateWithoutChat_sessionInput> | MessageCreateWithoutChat_sessionInput[] | MessageUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChat_sessionInput | MessageCreateOrConnectWithoutChat_sessionInput[]
    createMany?: MessageCreateManyChat_sessionInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutChat_sessionInput = {
    create?: XOR<NoteCreateWithoutChat_sessionInput, NoteUncheckedCreateWithoutChat_sessionInput> | NoteCreateWithoutChat_sessionInput[] | NoteUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutChat_sessionInput | NoteCreateOrConnectWithoutChat_sessionInput[]
    createMany?: NoteCreateManyChat_sessionInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutChat_sessionInput = {
    create?: XOR<AssignmentCreateWithoutChat_sessionInput, AssignmentUncheckedCreateWithoutChat_sessionInput> | AssignmentCreateWithoutChat_sessionInput[] | AssignmentUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutChat_sessionInput | AssignmentCreateOrConnectWithoutChat_sessionInput[]
    createMany?: AssignmentCreateManyChat_sessionInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ChatTagUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatTagCreateWithoutChatInput, ChatTagUncheckedCreateWithoutChatInput> | ChatTagCreateWithoutChatInput[] | ChatTagUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatTagCreateOrConnectWithoutChatInput | ChatTagCreateOrConnectWithoutChatInput[]
    createMany?: ChatTagCreateManyChatInputEnvelope
    connect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ActivityLogCreateWithoutChatInput, ActivityLogUncheckedCreateWithoutChatInput> | ActivityLogCreateWithoutChatInput[] | ActivityLogUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutChatInput | ActivityLogCreateOrConnectWithoutChatInput[]
    createMany?: ActivityLogCreateManyChatInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type EnumChatStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChatStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateOneRequiredWithoutChat_sessionsNestedInput = {
    create?: XOR<CustomerCreateWithoutChat_sessionsInput, CustomerUncheckedCreateWithoutChat_sessionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutChat_sessionsInput
    upsert?: CustomerUpsertWithoutChat_sessionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutChat_sessionsInput, CustomerUpdateWithoutChat_sessionsInput>, CustomerUncheckedUpdateWithoutChat_sessionsInput>
  }

  export type PlatformUpdateOneRequiredWithoutChat_sessionsNestedInput = {
    create?: XOR<PlatformCreateWithoutChat_sessionsInput, PlatformUncheckedCreateWithoutChat_sessionsInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutChat_sessionsInput
    upsert?: PlatformUpsertWithoutChat_sessionsInput
    connect?: PlatformWhereUniqueInput
    update?: XOR<XOR<PlatformUpdateToOneWithWhereWithoutChat_sessionsInput, PlatformUpdateWithoutChat_sessionsInput>, PlatformUncheckedUpdateWithoutChat_sessionsInput>
  }

  export type UserUpdateOneWithoutChat_sessionsNestedInput = {
    create?: XOR<UserCreateWithoutChat_sessionsInput, UserUncheckedCreateWithoutChat_sessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChat_sessionsInput
    upsert?: UserUpsertWithoutChat_sessionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChat_sessionsInput, UserUpdateWithoutChat_sessionsInput>, UserUncheckedUpdateWithoutChat_sessionsInput>
  }

  export type MessageUpdateManyWithoutChat_sessionNestedInput = {
    create?: XOR<MessageCreateWithoutChat_sessionInput, MessageUncheckedCreateWithoutChat_sessionInput> | MessageCreateWithoutChat_sessionInput[] | MessageUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChat_sessionInput | MessageCreateOrConnectWithoutChat_sessionInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChat_sessionInput | MessageUpsertWithWhereUniqueWithoutChat_sessionInput[]
    createMany?: MessageCreateManyChat_sessionInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChat_sessionInput | MessageUpdateWithWhereUniqueWithoutChat_sessionInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChat_sessionInput | MessageUpdateManyWithWhereWithoutChat_sessionInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutChat_sessionNestedInput = {
    create?: XOR<NoteCreateWithoutChat_sessionInput, NoteUncheckedCreateWithoutChat_sessionInput> | NoteCreateWithoutChat_sessionInput[] | NoteUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutChat_sessionInput | NoteCreateOrConnectWithoutChat_sessionInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutChat_sessionInput | NoteUpsertWithWhereUniqueWithoutChat_sessionInput[]
    createMany?: NoteCreateManyChat_sessionInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutChat_sessionInput | NoteUpdateWithWhereUniqueWithoutChat_sessionInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutChat_sessionInput | NoteUpdateManyWithWhereWithoutChat_sessionInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutChat_sessionNestedInput = {
    create?: XOR<AssignmentCreateWithoutChat_sessionInput, AssignmentUncheckedCreateWithoutChat_sessionInput> | AssignmentCreateWithoutChat_sessionInput[] | AssignmentUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutChat_sessionInput | AssignmentCreateOrConnectWithoutChat_sessionInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutChat_sessionInput | AssignmentUpsertWithWhereUniqueWithoutChat_sessionInput[]
    createMany?: AssignmentCreateManyChat_sessionInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutChat_sessionInput | AssignmentUpdateWithWhereUniqueWithoutChat_sessionInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutChat_sessionInput | AssignmentUpdateManyWithWhereWithoutChat_sessionInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ChatTagUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatTagCreateWithoutChatInput, ChatTagUncheckedCreateWithoutChatInput> | ChatTagCreateWithoutChatInput[] | ChatTagUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatTagCreateOrConnectWithoutChatInput | ChatTagCreateOrConnectWithoutChatInput[]
    upsert?: ChatTagUpsertWithWhereUniqueWithoutChatInput | ChatTagUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatTagCreateManyChatInputEnvelope
    set?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    disconnect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    delete?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    connect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    update?: ChatTagUpdateWithWhereUniqueWithoutChatInput | ChatTagUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatTagUpdateManyWithWhereWithoutChatInput | ChatTagUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatTagScalarWhereInput | ChatTagScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutChatNestedInput = {
    create?: XOR<ActivityLogCreateWithoutChatInput, ActivityLogUncheckedCreateWithoutChatInput> | ActivityLogCreateWithoutChatInput[] | ActivityLogUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutChatInput | ActivityLogCreateOrConnectWithoutChatInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutChatInput | ActivityLogUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ActivityLogCreateManyChatInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutChatInput | ActivityLogUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutChatInput | ActivityLogUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MessageUncheckedUpdateManyWithoutChat_sessionNestedInput = {
    create?: XOR<MessageCreateWithoutChat_sessionInput, MessageUncheckedCreateWithoutChat_sessionInput> | MessageCreateWithoutChat_sessionInput[] | MessageUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChat_sessionInput | MessageCreateOrConnectWithoutChat_sessionInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChat_sessionInput | MessageUpsertWithWhereUniqueWithoutChat_sessionInput[]
    createMany?: MessageCreateManyChat_sessionInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChat_sessionInput | MessageUpdateWithWhereUniqueWithoutChat_sessionInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChat_sessionInput | MessageUpdateManyWithWhereWithoutChat_sessionInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutChat_sessionNestedInput = {
    create?: XOR<NoteCreateWithoutChat_sessionInput, NoteUncheckedCreateWithoutChat_sessionInput> | NoteCreateWithoutChat_sessionInput[] | NoteUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutChat_sessionInput | NoteCreateOrConnectWithoutChat_sessionInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutChat_sessionInput | NoteUpsertWithWhereUniqueWithoutChat_sessionInput[]
    createMany?: NoteCreateManyChat_sessionInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutChat_sessionInput | NoteUpdateWithWhereUniqueWithoutChat_sessionInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutChat_sessionInput | NoteUpdateManyWithWhereWithoutChat_sessionInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutChat_sessionNestedInput = {
    create?: XOR<AssignmentCreateWithoutChat_sessionInput, AssignmentUncheckedCreateWithoutChat_sessionInput> | AssignmentCreateWithoutChat_sessionInput[] | AssignmentUncheckedCreateWithoutChat_sessionInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutChat_sessionInput | AssignmentCreateOrConnectWithoutChat_sessionInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutChat_sessionInput | AssignmentUpsertWithWhereUniqueWithoutChat_sessionInput[]
    createMany?: AssignmentCreateManyChat_sessionInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutChat_sessionInput | AssignmentUpdateWithWhereUniqueWithoutChat_sessionInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutChat_sessionInput | AssignmentUpdateManyWithWhereWithoutChat_sessionInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ChatTagUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatTagCreateWithoutChatInput, ChatTagUncheckedCreateWithoutChatInput> | ChatTagCreateWithoutChatInput[] | ChatTagUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatTagCreateOrConnectWithoutChatInput | ChatTagCreateOrConnectWithoutChatInput[]
    upsert?: ChatTagUpsertWithWhereUniqueWithoutChatInput | ChatTagUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatTagCreateManyChatInputEnvelope
    set?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    disconnect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    delete?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    connect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    update?: ChatTagUpdateWithWhereUniqueWithoutChatInput | ChatTagUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatTagUpdateManyWithWhereWithoutChatInput | ChatTagUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatTagScalarWhereInput | ChatTagScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ActivityLogCreateWithoutChatInput, ActivityLogUncheckedCreateWithoutChatInput> | ActivityLogCreateWithoutChatInput[] | ActivityLogUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutChatInput | ActivityLogCreateOrConnectWithoutChatInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutChatInput | ActivityLogUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ActivityLogCreateManyChatInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutChatInput | ActivityLogUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutChatInput | ActivityLogUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type EnumSenderTypeFieldUpdateOperationsInput = {
    set?: $Enums.SenderType
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    upsert?: ChatSessionUpsertWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutMessagesInput, ChatSessionUpdateWithoutMessagesInput>, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionCreateNestedOneWithoutNotesInput = {
    create?: XOR<ChatSessionCreateWithoutNotesInput, ChatSessionUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutNotesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatSessionUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutNotesInput, ChatSessionUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutNotesInput
    upsert?: ChatSessionUpsertWithoutNotesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutNotesInput, ChatSessionUpdateWithoutNotesInput>, ChatSessionUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type ChatSessionCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ChatSessionCreateWithoutAssignmentsInput, ChatSessionUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutAssignmentsInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type ChatSessionUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ChatSessionCreateWithoutAssignmentsInput, ChatSessionUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutAssignmentsInput
    upsert?: ChatSessionUpsertWithoutAssignmentsInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutAssignmentsInput, ChatSessionUpdateWithoutAssignmentsInput>, ChatSessionUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type CustomerTagCreateNestedManyWithoutTagInput = {
    create?: XOR<CustomerTagCreateWithoutTagInput, CustomerTagUncheckedCreateWithoutTagInput> | CustomerTagCreateWithoutTagInput[] | CustomerTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CustomerTagCreateOrConnectWithoutTagInput | CustomerTagCreateOrConnectWithoutTagInput[]
    createMany?: CustomerTagCreateManyTagInputEnvelope
    connect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
  }

  export type ChatTagCreateNestedManyWithoutTagInput = {
    create?: XOR<ChatTagCreateWithoutTagInput, ChatTagUncheckedCreateWithoutTagInput> | ChatTagCreateWithoutTagInput[] | ChatTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ChatTagCreateOrConnectWithoutTagInput | ChatTagCreateOrConnectWithoutTagInput[]
    createMany?: ChatTagCreateManyTagInputEnvelope
    connect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
  }

  export type CustomerTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<CustomerTagCreateWithoutTagInput, CustomerTagUncheckedCreateWithoutTagInput> | CustomerTagCreateWithoutTagInput[] | CustomerTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CustomerTagCreateOrConnectWithoutTagInput | CustomerTagCreateOrConnectWithoutTagInput[]
    createMany?: CustomerTagCreateManyTagInputEnvelope
    connect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
  }

  export type ChatTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ChatTagCreateWithoutTagInput, ChatTagUncheckedCreateWithoutTagInput> | ChatTagCreateWithoutTagInput[] | ChatTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ChatTagCreateOrConnectWithoutTagInput | ChatTagCreateOrConnectWithoutTagInput[]
    createMany?: ChatTagCreateManyTagInputEnvelope
    connect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
  }

  export type CustomerTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<CustomerTagCreateWithoutTagInput, CustomerTagUncheckedCreateWithoutTagInput> | CustomerTagCreateWithoutTagInput[] | CustomerTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CustomerTagCreateOrConnectWithoutTagInput | CustomerTagCreateOrConnectWithoutTagInput[]
    upsert?: CustomerTagUpsertWithWhereUniqueWithoutTagInput | CustomerTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CustomerTagCreateManyTagInputEnvelope
    set?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    disconnect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    delete?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    connect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    update?: CustomerTagUpdateWithWhereUniqueWithoutTagInput | CustomerTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CustomerTagUpdateManyWithWhereWithoutTagInput | CustomerTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CustomerTagScalarWhereInput | CustomerTagScalarWhereInput[]
  }

  export type ChatTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<ChatTagCreateWithoutTagInput, ChatTagUncheckedCreateWithoutTagInput> | ChatTagCreateWithoutTagInput[] | ChatTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ChatTagCreateOrConnectWithoutTagInput | ChatTagCreateOrConnectWithoutTagInput[]
    upsert?: ChatTagUpsertWithWhereUniqueWithoutTagInput | ChatTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ChatTagCreateManyTagInputEnvelope
    set?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    disconnect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    delete?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    connect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    update?: ChatTagUpdateWithWhereUniqueWithoutTagInput | ChatTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ChatTagUpdateManyWithWhereWithoutTagInput | ChatTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ChatTagScalarWhereInput | ChatTagScalarWhereInput[]
  }

  export type CustomerTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<CustomerTagCreateWithoutTagInput, CustomerTagUncheckedCreateWithoutTagInput> | CustomerTagCreateWithoutTagInput[] | CustomerTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CustomerTagCreateOrConnectWithoutTagInput | CustomerTagCreateOrConnectWithoutTagInput[]
    upsert?: CustomerTagUpsertWithWhereUniqueWithoutTagInput | CustomerTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CustomerTagCreateManyTagInputEnvelope
    set?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    disconnect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    delete?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    connect?: CustomerTagWhereUniqueInput | CustomerTagWhereUniqueInput[]
    update?: CustomerTagUpdateWithWhereUniqueWithoutTagInput | CustomerTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CustomerTagUpdateManyWithWhereWithoutTagInput | CustomerTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CustomerTagScalarWhereInput | CustomerTagScalarWhereInput[]
  }

  export type ChatTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ChatTagCreateWithoutTagInput, ChatTagUncheckedCreateWithoutTagInput> | ChatTagCreateWithoutTagInput[] | ChatTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ChatTagCreateOrConnectWithoutTagInput | ChatTagCreateOrConnectWithoutTagInput[]
    upsert?: ChatTagUpsertWithWhereUniqueWithoutTagInput | ChatTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ChatTagCreateManyTagInputEnvelope
    set?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    disconnect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    delete?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    connect?: ChatTagWhereUniqueInput | ChatTagWhereUniqueInput[]
    update?: ChatTagUpdateWithWhereUniqueWithoutTagInput | ChatTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ChatTagUpdateManyWithWhereWithoutTagInput | ChatTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ChatTagScalarWhereInput | ChatTagScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutTagsInput = {
    create?: XOR<CustomerCreateWithoutTagsInput, CustomerUncheckedCreateWithoutTagsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTagsInput
    connect?: CustomerWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutCustomersInput = {
    create?: XOR<TagCreateWithoutCustomersInput, TagUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: TagCreateOrConnectWithoutCustomersInput
    connect?: TagWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<CustomerCreateWithoutTagsInput, CustomerUncheckedCreateWithoutTagsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTagsInput
    upsert?: CustomerUpsertWithoutTagsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTagsInput, CustomerUpdateWithoutTagsInput>, CustomerUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<TagCreateWithoutCustomersInput, TagUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: TagCreateOrConnectWithoutCustomersInput
    upsert?: TagUpsertWithoutCustomersInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutCustomersInput, TagUpdateWithoutCustomersInput>, TagUncheckedUpdateWithoutCustomersInput>
  }

  export type ChatSessionCreateNestedOneWithoutTagsInput = {
    create?: XOR<ChatSessionCreateWithoutTagsInput, ChatSessionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutTagsInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutChatsInput = {
    create?: XOR<TagCreateWithoutChatsInput, TagUncheckedCreateWithoutChatsInput>
    connectOrCreate?: TagCreateOrConnectWithoutChatsInput
    connect?: TagWhereUniqueInput
  }

  export type ChatSessionUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ChatSessionCreateWithoutTagsInput, ChatSessionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutTagsInput
    upsert?: ChatSessionUpsertWithoutTagsInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutTagsInput, ChatSessionUpdateWithoutTagsInput>, ChatSessionUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<TagCreateWithoutChatsInput, TagUncheckedCreateWithoutChatsInput>
    connectOrCreate?: TagCreateOrConnectWithoutChatsInput
    upsert?: TagUpsertWithoutChatsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutChatsInput, TagUpdateWithoutChatsInput>, TagUncheckedUpdateWithoutChatsInput>
  }

  export type UserCreateNestedOneWithoutActivity_logsInput = {
    create?: XOR<UserCreateWithoutActivity_logsInput, UserUncheckedCreateWithoutActivity_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivity_logsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatSessionCreateNestedOneWithoutLogsInput = {
    create?: XOR<ChatSessionCreateWithoutLogsInput, ChatSessionUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutLogsInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type UserUpdateOneWithoutActivity_logsNestedInput = {
    create?: XOR<UserCreateWithoutActivity_logsInput, UserUncheckedCreateWithoutActivity_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivity_logsInput
    upsert?: UserUpsertWithoutActivity_logsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivity_logsInput, UserUpdateWithoutActivity_logsInput>, UserUncheckedUpdateWithoutActivity_logsInput>
  }

  export type ChatSessionUpdateOneWithoutLogsNestedInput = {
    create?: XOR<ChatSessionCreateWithoutLogsInput, ChatSessionUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutLogsInput
    upsert?: ChatSessionUpsertWithoutLogsInput
    disconnect?: ChatSessionWhereInput | boolean
    delete?: ChatSessionWhereInput | boolean
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutLogsInput, ChatSessionUpdateWithoutLogsInput>, ChatSessionUncheckedUpdateWithoutLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumChatStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[]
    notIn?: $Enums.ChatStatus[]
    not?: NestedEnumChatStatusFilter<$PrismaModel> | $Enums.ChatStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumChatStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[]
    notIn?: $Enums.ChatStatus[]
    not?: NestedEnumChatStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChatStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatStatusFilter<$PrismaModel>
    _max?: NestedEnumChatStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSenderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[]
    notIn?: $Enums.SenderType[]
    not?: NestedEnumSenderTypeFilter<$PrismaModel> | $Enums.SenderType
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[]
    notIn?: $Enums.MessageType[]
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumSenderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[]
    notIn?: $Enums.SenderType[]
    not?: NestedEnumSenderTypeWithAggregatesFilter<$PrismaModel> | $Enums.SenderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSenderTypeFilter<$PrismaModel>
    _max?: NestedEnumSenderTypeFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[]
    notIn?: $Enums.MessageType[]
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type TeamMemberCreateWithoutUserInput = {
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    team_member_id?: number
    team_id: number
  }

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutUserInput = {
    topic?: string | null
    detail?: string | null
    deadline?: Date | string | null
    status?: $Enums.AssignmentStatus
    chat_session: ChatSessionCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutUserInput = {
    assignment_id?: number
    chat_session_id: number
    topic?: string | null
    detail?: string | null
    deadline?: Date | string | null
    status?: $Enums.AssignmentStatus
  }

  export type AssignmentCreateOrConnectWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput>
  }

  export type AssignmentCreateManyUserInputEnvelope = {
    data: AssignmentCreateManyUserInput | AssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutUserInput = {
    title?: string | null
    content: string
    created_at?: Date | string
    chat_session: ChatSessionCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutUserInput = {
    note_id?: number
    chat_session_id: number
    title?: string | null
    content: string
    created_at?: Date | string
  }

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteCreateManyUserInputEnvelope = {
    data: NoteCreateManyUserInput | NoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    action: string
    old_value?: string | null
    new_value?: string | null
    created_at?: Date | string
    chat?: ChatSessionCreateNestedOneWithoutLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    log_id?: number
    chat_session_id?: number | null
    action: string
    old_value?: string | null
    new_value?: string | null
    created_at?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionCreateWithoutAssigned_userInput = {
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    customer: CustomerCreateNestedOneWithoutChat_sessionsInput
    platform: PlatformCreateNestedOneWithoutChat_sessionsInput
    messages?: MessageCreateNestedManyWithoutChat_sessionInput
    notes?: NoteCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagCreateNestedManyWithoutChatInput
    logs?: ActivityLogCreateNestedManyWithoutChatInput
  }

  export type ChatSessionUncheckedCreateWithoutAssigned_userInput = {
    chat_session_id?: number
    customer_id: number
    platform_id: number
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChat_sessionInput
    notes?: NoteUncheckedCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagUncheckedCreateNestedManyWithoutChatInput
    logs?: ActivityLogUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatSessionCreateOrConnectWithoutAssigned_userInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutAssigned_userInput, ChatSessionUncheckedCreateWithoutAssigned_userInput>
  }

  export type ChatSessionCreateManyAssigned_userInputEnvelope = {
    data: ChatSessionCreateManyAssigned_userInput | ChatSessionCreateManyAssigned_userInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    team_member_id?: IntFilter<"TeamMember"> | number
    team_id?: IntFilter<"TeamMember"> | number
    user_id?: IntFilter<"TeamMember"> | number
  }

  export type AssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutUserInput, AssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutUserInput, AssignmentUncheckedUpdateWithoutUserInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutUserInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    assignment_id?: IntFilter<"Assignment"> | number
    chat_session_id?: IntFilter<"Assignment"> | number
    user_id?: IntFilter<"Assignment"> | number
    topic?: StringNullableFilter<"Assignment"> | string | null
    detail?: StringNullableFilter<"Assignment"> | string | null
    deadline?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
  }

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
  }

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    note_id?: IntFilter<"Note"> | number
    chat_session_id?: IntFilter<"Note"> | number
    user_id?: IntFilter<"Note"> | number
    title?: StringNullableFilter<"Note"> | string | null
    content?: StringFilter<"Note"> | string
    created_at?: DateTimeFilter<"Note"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    log_id?: IntFilter<"ActivityLog"> | number
    user_id?: IntNullableFilter<"ActivityLog"> | number | null
    chat_session_id?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    old_value?: StringNullableFilter<"ActivityLog"> | string | null
    new_value?: StringNullableFilter<"ActivityLog"> | string | null
    created_at?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutAssigned_userInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutAssigned_userInput, ChatSessionUncheckedUpdateWithoutAssigned_userInput>
    create: XOR<ChatSessionCreateWithoutAssigned_userInput, ChatSessionUncheckedCreateWithoutAssigned_userInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutAssigned_userInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutAssigned_userInput, ChatSessionUncheckedUpdateWithoutAssigned_userInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutAssigned_userInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutAssigned_userInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    chat_session_id?: IntFilter<"ChatSession"> | number
    customer_id?: IntFilter<"ChatSession"> | number
    platform_id?: IntFilter<"ChatSession"> | number
    assigned_user_id?: IntNullableFilter<"ChatSession"> | number | null
    status?: EnumChatStatusFilter<"ChatSession"> | $Enums.ChatStatus
    start_time?: DateTimeFilter<"ChatSession"> | Date | string
    end_time?: DateTimeNullableFilter<"ChatSession"> | Date | string | null
  }

  export type TeamMemberCreateWithoutTeamInput = {
    user: UserCreateNestedOneWithoutTeamsInput
  }

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    team_member_id?: number
    user_id: number
  }

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamCreateWithoutMembersInput = {
    team_name: string
    description?: string | null
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    team_id?: number
    team_name: string
    description?: string | null
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutTeamsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    activity_logs?: ActivityLogCreateNestedManyWithoutUserInput
    chat_sessions?: ChatSessionCreateNestedManyWithoutAssigned_userInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    activity_logs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    chat_sessions?: ChatSessionUncheckedCreateNestedManyWithoutAssigned_userInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    team_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    team_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutTeamsInput = {
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateWithoutTeamsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    activity_logs?: ActivityLogUpdateManyWithoutUserNestedInput
    chat_sessions?: ChatSessionUpdateManyWithoutAssigned_userNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    activity_logs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    chat_sessions?: ChatSessionUncheckedUpdateManyWithoutAssigned_userNestedInput
  }

  export type CustomerSocialAccountCreateWithoutCustomerInput = {
    account_identifier: string
    platform: PlatformCreateNestedOneWithoutSocial_linksInput
  }

  export type CustomerSocialAccountUncheckedCreateWithoutCustomerInput = {
    social_account_id?: number
    platform_id: number
    account_identifier: string
  }

  export type CustomerSocialAccountCreateOrConnectWithoutCustomerInput = {
    where: CustomerSocialAccountWhereUniqueInput
    create: XOR<CustomerSocialAccountCreateWithoutCustomerInput, CustomerSocialAccountUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerSocialAccountCreateManyCustomerInputEnvelope = {
    data: CustomerSocialAccountCreateManyCustomerInput | CustomerSocialAccountCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionCreateWithoutCustomerInput = {
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    platform: PlatformCreateNestedOneWithoutChat_sessionsInput
    assigned_user?: UserCreateNestedOneWithoutChat_sessionsInput
    messages?: MessageCreateNestedManyWithoutChat_sessionInput
    notes?: NoteCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagCreateNestedManyWithoutChatInput
    logs?: ActivityLogCreateNestedManyWithoutChatInput
  }

  export type ChatSessionUncheckedCreateWithoutCustomerInput = {
    chat_session_id?: number
    platform_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChat_sessionInput
    notes?: NoteUncheckedCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagUncheckedCreateNestedManyWithoutChatInput
    logs?: ActivityLogUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatSessionCreateOrConnectWithoutCustomerInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutCustomerInput, ChatSessionUncheckedCreateWithoutCustomerInput>
  }

  export type ChatSessionCreateManyCustomerInputEnvelope = {
    data: ChatSessionCreateManyCustomerInput | ChatSessionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerTagCreateWithoutCustomerInput = {
    tag: TagCreateNestedOneWithoutCustomersInput
  }

  export type CustomerTagUncheckedCreateWithoutCustomerInput = {
    customer_tag_id?: number
    tag_id: number
  }

  export type CustomerTagCreateOrConnectWithoutCustomerInput = {
    where: CustomerTagWhereUniqueInput
    create: XOR<CustomerTagCreateWithoutCustomerInput, CustomerTagUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerTagCreateManyCustomerInputEnvelope = {
    data: CustomerTagCreateManyCustomerInput | CustomerTagCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerSocialAccountUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerSocialAccountWhereUniqueInput
    update: XOR<CustomerSocialAccountUpdateWithoutCustomerInput, CustomerSocialAccountUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerSocialAccountCreateWithoutCustomerInput, CustomerSocialAccountUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerSocialAccountUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerSocialAccountWhereUniqueInput
    data: XOR<CustomerSocialAccountUpdateWithoutCustomerInput, CustomerSocialAccountUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerSocialAccountUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerSocialAccountScalarWhereInput
    data: XOR<CustomerSocialAccountUpdateManyMutationInput, CustomerSocialAccountUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerSocialAccountScalarWhereInput = {
    AND?: CustomerSocialAccountScalarWhereInput | CustomerSocialAccountScalarWhereInput[]
    OR?: CustomerSocialAccountScalarWhereInput[]
    NOT?: CustomerSocialAccountScalarWhereInput | CustomerSocialAccountScalarWhereInput[]
    social_account_id?: IntFilter<"CustomerSocialAccount"> | number
    customer_id?: IntFilter<"CustomerSocialAccount"> | number
    platform_id?: IntFilter<"CustomerSocialAccount"> | number
    account_identifier?: StringFilter<"CustomerSocialAccount"> | string
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutCustomerInput, ChatSessionUncheckedUpdateWithoutCustomerInput>
    create: XOR<ChatSessionCreateWithoutCustomerInput, ChatSessionUncheckedCreateWithoutCustomerInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutCustomerInput, ChatSessionUncheckedUpdateWithoutCustomerInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutCustomerInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerTagUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerTagWhereUniqueInput
    update: XOR<CustomerTagUpdateWithoutCustomerInput, CustomerTagUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerTagCreateWithoutCustomerInput, CustomerTagUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerTagUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerTagWhereUniqueInput
    data: XOR<CustomerTagUpdateWithoutCustomerInput, CustomerTagUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerTagUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerTagScalarWhereInput
    data: XOR<CustomerTagUpdateManyMutationInput, CustomerTagUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerTagScalarWhereInput = {
    AND?: CustomerTagScalarWhereInput | CustomerTagScalarWhereInput[]
    OR?: CustomerTagScalarWhereInput[]
    NOT?: CustomerTagScalarWhereInput | CustomerTagScalarWhereInput[]
    customer_tag_id?: IntFilter<"CustomerTag"> | number
    customer_id?: IntFilter<"CustomerTag"> | number
    tag_id?: IntFilter<"CustomerTag"> | number
  }

  export type ChatSessionCreateWithoutPlatformInput = {
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    customer: CustomerCreateNestedOneWithoutChat_sessionsInput
    assigned_user?: UserCreateNestedOneWithoutChat_sessionsInput
    messages?: MessageCreateNestedManyWithoutChat_sessionInput
    notes?: NoteCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagCreateNestedManyWithoutChatInput
    logs?: ActivityLogCreateNestedManyWithoutChatInput
  }

  export type ChatSessionUncheckedCreateWithoutPlatformInput = {
    chat_session_id?: number
    customer_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChat_sessionInput
    notes?: NoteUncheckedCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagUncheckedCreateNestedManyWithoutChatInput
    logs?: ActivityLogUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatSessionCreateOrConnectWithoutPlatformInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutPlatformInput, ChatSessionUncheckedCreateWithoutPlatformInput>
  }

  export type ChatSessionCreateManyPlatformInputEnvelope = {
    data: ChatSessionCreateManyPlatformInput | ChatSessionCreateManyPlatformInput[]
    skipDuplicates?: boolean
  }

  export type CustomerSocialAccountCreateWithoutPlatformInput = {
    account_identifier: string
    customer: CustomerCreateNestedOneWithoutSocial_accountsInput
  }

  export type CustomerSocialAccountUncheckedCreateWithoutPlatformInput = {
    social_account_id?: number
    customer_id: number
    account_identifier: string
  }

  export type CustomerSocialAccountCreateOrConnectWithoutPlatformInput = {
    where: CustomerSocialAccountWhereUniqueInput
    create: XOR<CustomerSocialAccountCreateWithoutPlatformInput, CustomerSocialAccountUncheckedCreateWithoutPlatformInput>
  }

  export type CustomerSocialAccountCreateManyPlatformInputEnvelope = {
    data: CustomerSocialAccountCreateManyPlatformInput | CustomerSocialAccountCreateManyPlatformInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutPlatformInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutPlatformInput, ChatSessionUncheckedUpdateWithoutPlatformInput>
    create: XOR<ChatSessionCreateWithoutPlatformInput, ChatSessionUncheckedCreateWithoutPlatformInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutPlatformInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutPlatformInput, ChatSessionUncheckedUpdateWithoutPlatformInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutPlatformInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutPlatformInput>
  }

  export type CustomerSocialAccountUpsertWithWhereUniqueWithoutPlatformInput = {
    where: CustomerSocialAccountWhereUniqueInput
    update: XOR<CustomerSocialAccountUpdateWithoutPlatformInput, CustomerSocialAccountUncheckedUpdateWithoutPlatformInput>
    create: XOR<CustomerSocialAccountCreateWithoutPlatformInput, CustomerSocialAccountUncheckedCreateWithoutPlatformInput>
  }

  export type CustomerSocialAccountUpdateWithWhereUniqueWithoutPlatformInput = {
    where: CustomerSocialAccountWhereUniqueInput
    data: XOR<CustomerSocialAccountUpdateWithoutPlatformInput, CustomerSocialAccountUncheckedUpdateWithoutPlatformInput>
  }

  export type CustomerSocialAccountUpdateManyWithWhereWithoutPlatformInput = {
    where: CustomerSocialAccountScalarWhereInput
    data: XOR<CustomerSocialAccountUpdateManyMutationInput, CustomerSocialAccountUncheckedUpdateManyWithoutPlatformInput>
  }

  export type CustomerCreateWithoutSocial_accountsInput = {
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    country?: string | null
    created_at?: Date | string
    chat_sessions?: ChatSessionCreateNestedManyWithoutCustomerInput
    tags?: CustomerTagCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSocial_accountsInput = {
    customer_id?: number
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    country?: string | null
    created_at?: Date | string
    chat_sessions?: ChatSessionUncheckedCreateNestedManyWithoutCustomerInput
    tags?: CustomerTagUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutSocial_accountsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSocial_accountsInput, CustomerUncheckedCreateWithoutSocial_accountsInput>
  }

  export type PlatformCreateWithoutSocial_linksInput = {
    platform_name: string
    chat_sessions?: ChatSessionCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUncheckedCreateWithoutSocial_linksInput = {
    platform_id?: number
    platform_name: string
    chat_sessions?: ChatSessionUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type PlatformCreateOrConnectWithoutSocial_linksInput = {
    where: PlatformWhereUniqueInput
    create: XOR<PlatformCreateWithoutSocial_linksInput, PlatformUncheckedCreateWithoutSocial_linksInput>
  }

  export type CustomerUpsertWithoutSocial_accountsInput = {
    update: XOR<CustomerUpdateWithoutSocial_accountsInput, CustomerUncheckedUpdateWithoutSocial_accountsInput>
    create: XOR<CustomerCreateWithoutSocial_accountsInput, CustomerUncheckedCreateWithoutSocial_accountsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSocial_accountsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSocial_accountsInput, CustomerUncheckedUpdateWithoutSocial_accountsInput>
  }

  export type CustomerUpdateWithoutSocial_accountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_sessions?: ChatSessionUpdateManyWithoutCustomerNestedInput
    tags?: CustomerTagUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSocial_accountsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_sessions?: ChatSessionUncheckedUpdateManyWithoutCustomerNestedInput
    tags?: CustomerTagUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type PlatformUpsertWithoutSocial_linksInput = {
    update: XOR<PlatformUpdateWithoutSocial_linksInput, PlatformUncheckedUpdateWithoutSocial_linksInput>
    create: XOR<PlatformCreateWithoutSocial_linksInput, PlatformUncheckedCreateWithoutSocial_linksInput>
    where?: PlatformWhereInput
  }

  export type PlatformUpdateToOneWithWhereWithoutSocial_linksInput = {
    where?: PlatformWhereInput
    data: XOR<PlatformUpdateWithoutSocial_linksInput, PlatformUncheckedUpdateWithoutSocial_linksInput>
  }

  export type PlatformUpdateWithoutSocial_linksInput = {
    platform_name?: StringFieldUpdateOperationsInput | string
    chat_sessions?: ChatSessionUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateWithoutSocial_linksInput = {
    platform_id?: IntFieldUpdateOperationsInput | number
    platform_name?: StringFieldUpdateOperationsInput | string
    chat_sessions?: ChatSessionUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type CustomerCreateWithoutChat_sessionsInput = {
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    country?: string | null
    created_at?: Date | string
    social_accounts?: CustomerSocialAccountCreateNestedManyWithoutCustomerInput
    tags?: CustomerTagCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutChat_sessionsInput = {
    customer_id?: number
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    country?: string | null
    created_at?: Date | string
    social_accounts?: CustomerSocialAccountUncheckedCreateNestedManyWithoutCustomerInput
    tags?: CustomerTagUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutChat_sessionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutChat_sessionsInput, CustomerUncheckedCreateWithoutChat_sessionsInput>
  }

  export type PlatformCreateWithoutChat_sessionsInput = {
    platform_name: string
    social_links?: CustomerSocialAccountCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUncheckedCreateWithoutChat_sessionsInput = {
    platform_id?: number
    platform_name: string
    social_links?: CustomerSocialAccountUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type PlatformCreateOrConnectWithoutChat_sessionsInput = {
    where: PlatformWhereUniqueInput
    create: XOR<PlatformCreateWithoutChat_sessionsInput, PlatformUncheckedCreateWithoutChat_sessionsInput>
  }

  export type UserCreateWithoutChat_sessionsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    teams?: TeamMemberCreateNestedManyWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    activity_logs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChat_sessionsInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    activity_logs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChat_sessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChat_sessionsInput, UserUncheckedCreateWithoutChat_sessionsInput>
  }

  export type MessageCreateWithoutChat_sessionInput = {
    sender_type: $Enums.SenderType
    sender_id?: number | null
    message_type: $Enums.MessageType
    content?: string | null
    attachment_url?: string | null
    created_at?: Date | string
    read_at?: Date | string | null
  }

  export type MessageUncheckedCreateWithoutChat_sessionInput = {
    message_id?: number
    sender_type: $Enums.SenderType
    sender_id?: number | null
    message_type: $Enums.MessageType
    content?: string | null
    attachment_url?: string | null
    created_at?: Date | string
    read_at?: Date | string | null
  }

  export type MessageCreateOrConnectWithoutChat_sessionInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChat_sessionInput, MessageUncheckedCreateWithoutChat_sessionInput>
  }

  export type MessageCreateManyChat_sessionInputEnvelope = {
    data: MessageCreateManyChat_sessionInput | MessageCreateManyChat_sessionInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutChat_sessionInput = {
    title?: string | null
    content: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutChat_sessionInput = {
    note_id?: number
    user_id: number
    title?: string | null
    content: string
    created_at?: Date | string
  }

  export type NoteCreateOrConnectWithoutChat_sessionInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutChat_sessionInput, NoteUncheckedCreateWithoutChat_sessionInput>
  }

  export type NoteCreateManyChat_sessionInputEnvelope = {
    data: NoteCreateManyChat_sessionInput | NoteCreateManyChat_sessionInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutChat_sessionInput = {
    topic?: string | null
    detail?: string | null
    deadline?: Date | string | null
    status?: $Enums.AssignmentStatus
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutChat_sessionInput = {
    assignment_id?: number
    user_id: number
    topic?: string | null
    detail?: string | null
    deadline?: Date | string | null
    status?: $Enums.AssignmentStatus
  }

  export type AssignmentCreateOrConnectWithoutChat_sessionInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutChat_sessionInput, AssignmentUncheckedCreateWithoutChat_sessionInput>
  }

  export type AssignmentCreateManyChat_sessionInputEnvelope = {
    data: AssignmentCreateManyChat_sessionInput | AssignmentCreateManyChat_sessionInput[]
    skipDuplicates?: boolean
  }

  export type ChatTagCreateWithoutChatInput = {
    tag: TagCreateNestedOneWithoutChatsInput
  }

  export type ChatTagUncheckedCreateWithoutChatInput = {
    chat_tag_id?: number
    tag_id: number
  }

  export type ChatTagCreateOrConnectWithoutChatInput = {
    where: ChatTagWhereUniqueInput
    create: XOR<ChatTagCreateWithoutChatInput, ChatTagUncheckedCreateWithoutChatInput>
  }

  export type ChatTagCreateManyChatInputEnvelope = {
    data: ChatTagCreateManyChatInput | ChatTagCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutChatInput = {
    action: string
    old_value?: string | null
    new_value?: string | null
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutActivity_logsInput
  }

  export type ActivityLogUncheckedCreateWithoutChatInput = {
    log_id?: number
    user_id?: number | null
    action: string
    old_value?: string | null
    new_value?: string | null
    created_at?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutChatInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutChatInput, ActivityLogUncheckedCreateWithoutChatInput>
  }

  export type ActivityLogCreateManyChatInputEnvelope = {
    data: ActivityLogCreateManyChatInput | ActivityLogCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutChat_sessionsInput = {
    update: XOR<CustomerUpdateWithoutChat_sessionsInput, CustomerUncheckedUpdateWithoutChat_sessionsInput>
    create: XOR<CustomerCreateWithoutChat_sessionsInput, CustomerUncheckedCreateWithoutChat_sessionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutChat_sessionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutChat_sessionsInput, CustomerUncheckedUpdateWithoutChat_sessionsInput>
  }

  export type CustomerUpdateWithoutChat_sessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_accounts?: CustomerSocialAccountUpdateManyWithoutCustomerNestedInput
    tags?: CustomerTagUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutChat_sessionsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_accounts?: CustomerSocialAccountUncheckedUpdateManyWithoutCustomerNestedInput
    tags?: CustomerTagUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type PlatformUpsertWithoutChat_sessionsInput = {
    update: XOR<PlatformUpdateWithoutChat_sessionsInput, PlatformUncheckedUpdateWithoutChat_sessionsInput>
    create: XOR<PlatformCreateWithoutChat_sessionsInput, PlatformUncheckedCreateWithoutChat_sessionsInput>
    where?: PlatformWhereInput
  }

  export type PlatformUpdateToOneWithWhereWithoutChat_sessionsInput = {
    where?: PlatformWhereInput
    data: XOR<PlatformUpdateWithoutChat_sessionsInput, PlatformUncheckedUpdateWithoutChat_sessionsInput>
  }

  export type PlatformUpdateWithoutChat_sessionsInput = {
    platform_name?: StringFieldUpdateOperationsInput | string
    social_links?: CustomerSocialAccountUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateWithoutChat_sessionsInput = {
    platform_id?: IntFieldUpdateOperationsInput | number
    platform_name?: StringFieldUpdateOperationsInput | string
    social_links?: CustomerSocialAccountUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type UserUpsertWithoutChat_sessionsInput = {
    update: XOR<UserUpdateWithoutChat_sessionsInput, UserUncheckedUpdateWithoutChat_sessionsInput>
    create: XOR<UserCreateWithoutChat_sessionsInput, UserUncheckedCreateWithoutChat_sessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChat_sessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChat_sessionsInput, UserUncheckedUpdateWithoutChat_sessionsInput>
  }

  export type UserUpdateWithoutChat_sessionsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    activity_logs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChat_sessionsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    activity_logs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChat_sessionInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChat_sessionInput, MessageUncheckedUpdateWithoutChat_sessionInput>
    create: XOR<MessageCreateWithoutChat_sessionInput, MessageUncheckedCreateWithoutChat_sessionInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChat_sessionInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChat_sessionInput, MessageUncheckedUpdateWithoutChat_sessionInput>
  }

  export type MessageUpdateManyWithWhereWithoutChat_sessionInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChat_sessionInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    message_id?: IntFilter<"Message"> | number
    chat_session_id?: IntFilter<"Message"> | number
    sender_type?: EnumSenderTypeFilter<"Message"> | $Enums.SenderType
    sender_id?: IntNullableFilter<"Message"> | number | null
    message_type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    content?: StringNullableFilter<"Message"> | string | null
    attachment_url?: StringNullableFilter<"Message"> | string | null
    created_at?: DateTimeFilter<"Message"> | Date | string
    read_at?: DateTimeNullableFilter<"Message"> | Date | string | null
  }

  export type NoteUpsertWithWhereUniqueWithoutChat_sessionInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutChat_sessionInput, NoteUncheckedUpdateWithoutChat_sessionInput>
    create: XOR<NoteCreateWithoutChat_sessionInput, NoteUncheckedCreateWithoutChat_sessionInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutChat_sessionInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutChat_sessionInput, NoteUncheckedUpdateWithoutChat_sessionInput>
  }

  export type NoteUpdateManyWithWhereWithoutChat_sessionInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutChat_sessionInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutChat_sessionInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutChat_sessionInput, AssignmentUncheckedUpdateWithoutChat_sessionInput>
    create: XOR<AssignmentCreateWithoutChat_sessionInput, AssignmentUncheckedCreateWithoutChat_sessionInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutChat_sessionInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutChat_sessionInput, AssignmentUncheckedUpdateWithoutChat_sessionInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutChat_sessionInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutChat_sessionInput>
  }

  export type ChatTagUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatTagWhereUniqueInput
    update: XOR<ChatTagUpdateWithoutChatInput, ChatTagUncheckedUpdateWithoutChatInput>
    create: XOR<ChatTagCreateWithoutChatInput, ChatTagUncheckedCreateWithoutChatInput>
  }

  export type ChatTagUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatTagWhereUniqueInput
    data: XOR<ChatTagUpdateWithoutChatInput, ChatTagUncheckedUpdateWithoutChatInput>
  }

  export type ChatTagUpdateManyWithWhereWithoutChatInput = {
    where: ChatTagScalarWhereInput
    data: XOR<ChatTagUpdateManyMutationInput, ChatTagUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatTagScalarWhereInput = {
    AND?: ChatTagScalarWhereInput | ChatTagScalarWhereInput[]
    OR?: ChatTagScalarWhereInput[]
    NOT?: ChatTagScalarWhereInput | ChatTagScalarWhereInput[]
    chat_tag_id?: IntFilter<"ChatTag"> | number
    chat_session_id?: IntFilter<"ChatTag"> | number
    tag_id?: IntFilter<"ChatTag"> | number
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutChatInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutChatInput, ActivityLogUncheckedUpdateWithoutChatInput>
    create: XOR<ActivityLogCreateWithoutChatInput, ActivityLogUncheckedCreateWithoutChatInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutChatInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutChatInput, ActivityLogUncheckedUpdateWithoutChatInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutChatInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatSessionCreateWithoutMessagesInput = {
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    customer: CustomerCreateNestedOneWithoutChat_sessionsInput
    platform: PlatformCreateNestedOneWithoutChat_sessionsInput
    assigned_user?: UserCreateNestedOneWithoutChat_sessionsInput
    notes?: NoteCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagCreateNestedManyWithoutChatInput
    logs?: ActivityLogCreateNestedManyWithoutChatInput
  }

  export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    chat_session_id?: number
    customer_id: number
    platform_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    notes?: NoteUncheckedCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagUncheckedCreateNestedManyWithoutChatInput
    logs?: ActivityLogUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type ChatSessionUpsertWithoutMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionUpdateWithoutMessagesInput = {
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutChat_sessionsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutChat_sessionsNestedInput
    assigned_user?: UserUpdateOneWithoutChat_sessionsNestedInput
    notes?: NoteUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NoteUncheckedUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUncheckedUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionCreateWithoutNotesInput = {
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    customer: CustomerCreateNestedOneWithoutChat_sessionsInput
    platform: PlatformCreateNestedOneWithoutChat_sessionsInput
    assigned_user?: UserCreateNestedOneWithoutChat_sessionsInput
    messages?: MessageCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagCreateNestedManyWithoutChatInput
    logs?: ActivityLogCreateNestedManyWithoutChatInput
  }

  export type ChatSessionUncheckedCreateWithoutNotesInput = {
    chat_session_id?: number
    customer_id: number
    platform_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagUncheckedCreateNestedManyWithoutChatInput
    logs?: ActivityLogUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatSessionCreateOrConnectWithoutNotesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutNotesInput, ChatSessionUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutNotesInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    teams?: TeamMemberCreateNestedManyWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    activity_logs?: ActivityLogCreateNestedManyWithoutUserInput
    chat_sessions?: ChatSessionCreateNestedManyWithoutAssigned_userInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    activity_logs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    chat_sessions?: ChatSessionUncheckedCreateNestedManyWithoutAssigned_userInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type ChatSessionUpsertWithoutNotesInput = {
    update: XOR<ChatSessionUpdateWithoutNotesInput, ChatSessionUncheckedUpdateWithoutNotesInput>
    create: XOR<ChatSessionCreateWithoutNotesInput, ChatSessionUncheckedCreateWithoutNotesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutNotesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutNotesInput, ChatSessionUncheckedUpdateWithoutNotesInput>
  }

  export type ChatSessionUpdateWithoutNotesInput = {
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutChat_sessionsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutChat_sessionsNestedInput
    assigned_user?: UserUpdateOneWithoutChat_sessionsNestedInput
    messages?: MessageUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutNotesInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUncheckedUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    activity_logs?: ActivityLogUpdateManyWithoutUserNestedInput
    chat_sessions?: ChatSessionUpdateManyWithoutAssigned_userNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    activity_logs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    chat_sessions?: ChatSessionUncheckedUpdateManyWithoutAssigned_userNestedInput
  }

  export type ChatSessionCreateWithoutAssignmentsInput = {
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    customer: CustomerCreateNestedOneWithoutChat_sessionsInput
    platform: PlatformCreateNestedOneWithoutChat_sessionsInput
    assigned_user?: UserCreateNestedOneWithoutChat_sessionsInput
    messages?: MessageCreateNestedManyWithoutChat_sessionInput
    notes?: NoteCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagCreateNestedManyWithoutChatInput
    logs?: ActivityLogCreateNestedManyWithoutChatInput
  }

  export type ChatSessionUncheckedCreateWithoutAssignmentsInput = {
    chat_session_id?: number
    customer_id: number
    platform_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChat_sessionInput
    notes?: NoteUncheckedCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagUncheckedCreateNestedManyWithoutChatInput
    logs?: ActivityLogUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatSessionCreateOrConnectWithoutAssignmentsInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutAssignmentsInput, ChatSessionUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    teams?: TeamMemberCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    activity_logs?: ActivityLogCreateNestedManyWithoutUserInput
    chat_sessions?: ChatSessionCreateNestedManyWithoutAssigned_userInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    activity_logs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    chat_sessions?: ChatSessionUncheckedCreateNestedManyWithoutAssigned_userInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type ChatSessionUpsertWithoutAssignmentsInput = {
    update: XOR<ChatSessionUpdateWithoutAssignmentsInput, ChatSessionUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ChatSessionCreateWithoutAssignmentsInput, ChatSessionUncheckedCreateWithoutAssignmentsInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutAssignmentsInput, ChatSessionUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ChatSessionUpdateWithoutAssignmentsInput = {
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutChat_sessionsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutChat_sessionsNestedInput
    assigned_user?: UserUpdateOneWithoutChat_sessionsNestedInput
    messages?: MessageUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutAssignmentsInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUncheckedUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    activity_logs?: ActivityLogUpdateManyWithoutUserNestedInput
    chat_sessions?: ChatSessionUpdateManyWithoutAssigned_userNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    activity_logs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    chat_sessions?: ChatSessionUncheckedUpdateManyWithoutAssigned_userNestedInput
  }

  export type CustomerTagCreateWithoutTagInput = {
    customer: CustomerCreateNestedOneWithoutTagsInput
  }

  export type CustomerTagUncheckedCreateWithoutTagInput = {
    customer_tag_id?: number
    customer_id: number
  }

  export type CustomerTagCreateOrConnectWithoutTagInput = {
    where: CustomerTagWhereUniqueInput
    create: XOR<CustomerTagCreateWithoutTagInput, CustomerTagUncheckedCreateWithoutTagInput>
  }

  export type CustomerTagCreateManyTagInputEnvelope = {
    data: CustomerTagCreateManyTagInput | CustomerTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type ChatTagCreateWithoutTagInput = {
    chat: ChatSessionCreateNestedOneWithoutTagsInput
  }

  export type ChatTagUncheckedCreateWithoutTagInput = {
    chat_tag_id?: number
    chat_session_id: number
  }

  export type ChatTagCreateOrConnectWithoutTagInput = {
    where: ChatTagWhereUniqueInput
    create: XOR<ChatTagCreateWithoutTagInput, ChatTagUncheckedCreateWithoutTagInput>
  }

  export type ChatTagCreateManyTagInputEnvelope = {
    data: ChatTagCreateManyTagInput | ChatTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type CustomerTagUpsertWithWhereUniqueWithoutTagInput = {
    where: CustomerTagWhereUniqueInput
    update: XOR<CustomerTagUpdateWithoutTagInput, CustomerTagUncheckedUpdateWithoutTagInput>
    create: XOR<CustomerTagCreateWithoutTagInput, CustomerTagUncheckedCreateWithoutTagInput>
  }

  export type CustomerTagUpdateWithWhereUniqueWithoutTagInput = {
    where: CustomerTagWhereUniqueInput
    data: XOR<CustomerTagUpdateWithoutTagInput, CustomerTagUncheckedUpdateWithoutTagInput>
  }

  export type CustomerTagUpdateManyWithWhereWithoutTagInput = {
    where: CustomerTagScalarWhereInput
    data: XOR<CustomerTagUpdateManyMutationInput, CustomerTagUncheckedUpdateManyWithoutTagInput>
  }

  export type ChatTagUpsertWithWhereUniqueWithoutTagInput = {
    where: ChatTagWhereUniqueInput
    update: XOR<ChatTagUpdateWithoutTagInput, ChatTagUncheckedUpdateWithoutTagInput>
    create: XOR<ChatTagCreateWithoutTagInput, ChatTagUncheckedCreateWithoutTagInput>
  }

  export type ChatTagUpdateWithWhereUniqueWithoutTagInput = {
    where: ChatTagWhereUniqueInput
    data: XOR<ChatTagUpdateWithoutTagInput, ChatTagUncheckedUpdateWithoutTagInput>
  }

  export type ChatTagUpdateManyWithWhereWithoutTagInput = {
    where: ChatTagScalarWhereInput
    data: XOR<ChatTagUpdateManyMutationInput, ChatTagUncheckedUpdateManyWithoutTagInput>
  }

  export type CustomerCreateWithoutTagsInput = {
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    country?: string | null
    created_at?: Date | string
    social_accounts?: CustomerSocialAccountCreateNestedManyWithoutCustomerInput
    chat_sessions?: ChatSessionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTagsInput = {
    customer_id?: number
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    country?: string | null
    created_at?: Date | string
    social_accounts?: CustomerSocialAccountUncheckedCreateNestedManyWithoutCustomerInput
    chat_sessions?: ChatSessionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTagsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTagsInput, CustomerUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutCustomersInput = {
    tag_name: string
    color?: string | null
    description?: string | null
    chats?: ChatTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutCustomersInput = {
    tag_id?: number
    tag_name: string
    color?: string | null
    description?: string | null
    chats?: ChatTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutCustomersInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutCustomersInput, TagUncheckedCreateWithoutCustomersInput>
  }

  export type CustomerUpsertWithoutTagsInput = {
    update: XOR<CustomerUpdateWithoutTagsInput, CustomerUncheckedUpdateWithoutTagsInput>
    create: XOR<CustomerCreateWithoutTagsInput, CustomerUncheckedCreateWithoutTagsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTagsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTagsInput, CustomerUncheckedUpdateWithoutTagsInput>
  }

  export type CustomerUpdateWithoutTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_accounts?: CustomerSocialAccountUpdateManyWithoutCustomerNestedInput
    chat_sessions?: ChatSessionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTagsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_accounts?: CustomerSocialAccountUncheckedUpdateManyWithoutCustomerNestedInput
    chat_sessions?: ChatSessionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TagUpsertWithoutCustomersInput = {
    update: XOR<TagUpdateWithoutCustomersInput, TagUncheckedUpdateWithoutCustomersInput>
    create: XOR<TagCreateWithoutCustomersInput, TagUncheckedCreateWithoutCustomersInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutCustomersInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutCustomersInput, TagUncheckedUpdateWithoutCustomersInput>
  }

  export type TagUpdateWithoutCustomersInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chats?: ChatTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutCustomersInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chats?: ChatTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type ChatSessionCreateWithoutTagsInput = {
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    customer: CustomerCreateNestedOneWithoutChat_sessionsInput
    platform: PlatformCreateNestedOneWithoutChat_sessionsInput
    assigned_user?: UserCreateNestedOneWithoutChat_sessionsInput
    messages?: MessageCreateNestedManyWithoutChat_sessionInput
    notes?: NoteCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentCreateNestedManyWithoutChat_sessionInput
    logs?: ActivityLogCreateNestedManyWithoutChatInput
  }

  export type ChatSessionUncheckedCreateWithoutTagsInput = {
    chat_session_id?: number
    customer_id: number
    platform_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChat_sessionInput
    notes?: NoteUncheckedCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutChat_sessionInput
    logs?: ActivityLogUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatSessionCreateOrConnectWithoutTagsInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutTagsInput, ChatSessionUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutChatsInput = {
    tag_name: string
    color?: string | null
    description?: string | null
    customers?: CustomerTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutChatsInput = {
    tag_id?: number
    tag_name: string
    color?: string | null
    description?: string | null
    customers?: CustomerTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutChatsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutChatsInput, TagUncheckedCreateWithoutChatsInput>
  }

  export type ChatSessionUpsertWithoutTagsInput = {
    update: XOR<ChatSessionUpdateWithoutTagsInput, ChatSessionUncheckedUpdateWithoutTagsInput>
    create: XOR<ChatSessionCreateWithoutTagsInput, ChatSessionUncheckedCreateWithoutTagsInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutTagsInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutTagsInput, ChatSessionUncheckedUpdateWithoutTagsInput>
  }

  export type ChatSessionUpdateWithoutTagsInput = {
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutChat_sessionsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutChat_sessionsNestedInput
    assigned_user?: UserUpdateOneWithoutChat_sessionsNestedInput
    messages?: MessageUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUpdateManyWithoutChat_sessionNestedInput
    logs?: ActivityLogUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutTagsInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutChat_sessionNestedInput
    logs?: ActivityLogUncheckedUpdateManyWithoutChatNestedInput
  }

  export type TagUpsertWithoutChatsInput = {
    update: XOR<TagUpdateWithoutChatsInput, TagUncheckedUpdateWithoutChatsInput>
    create: XOR<TagCreateWithoutChatsInput, TagUncheckedCreateWithoutChatsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutChatsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutChatsInput, TagUncheckedUpdateWithoutChatsInput>
  }

  export type TagUpdateWithoutChatsInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutChatsInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type UserCreateWithoutActivity_logsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    teams?: TeamMemberCreateNestedManyWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    chat_sessions?: ChatSessionCreateNestedManyWithoutAssigned_userInput
  }

  export type UserUncheckedCreateWithoutActivity_logsInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.Role
    profile_image?: string | null
    online_status?: $Enums.UserStatus
    created_at?: Date | string
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    chat_sessions?: ChatSessionUncheckedCreateNestedManyWithoutAssigned_userInput
  }

  export type UserCreateOrConnectWithoutActivity_logsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivity_logsInput, UserUncheckedCreateWithoutActivity_logsInput>
  }

  export type ChatSessionCreateWithoutLogsInput = {
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    customer: CustomerCreateNestedOneWithoutChat_sessionsInput
    platform: PlatformCreateNestedOneWithoutChat_sessionsInput
    assigned_user?: UserCreateNestedOneWithoutChat_sessionsInput
    messages?: MessageCreateNestedManyWithoutChat_sessionInput
    notes?: NoteCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagCreateNestedManyWithoutChatInput
  }

  export type ChatSessionUncheckedCreateWithoutLogsInput = {
    chat_session_id?: number
    customer_id: number
    platform_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChat_sessionInput
    notes?: NoteUncheckedCreateNestedManyWithoutChat_sessionInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutChat_sessionInput
    tags?: ChatTagUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatSessionCreateOrConnectWithoutLogsInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutLogsInput, ChatSessionUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutActivity_logsInput = {
    update: XOR<UserUpdateWithoutActivity_logsInput, UserUncheckedUpdateWithoutActivity_logsInput>
    create: XOR<UserCreateWithoutActivity_logsInput, UserUncheckedCreateWithoutActivity_logsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivity_logsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivity_logsInput, UserUncheckedUpdateWithoutActivity_logsInput>
  }

  export type UserUpdateWithoutActivity_logsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    chat_sessions?: ChatSessionUpdateManyWithoutAssigned_userNestedInput
  }

  export type UserUncheckedUpdateWithoutActivity_logsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    online_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    chat_sessions?: ChatSessionUncheckedUpdateManyWithoutAssigned_userNestedInput
  }

  export type ChatSessionUpsertWithoutLogsInput = {
    update: XOR<ChatSessionUpdateWithoutLogsInput, ChatSessionUncheckedUpdateWithoutLogsInput>
    create: XOR<ChatSessionCreateWithoutLogsInput, ChatSessionUncheckedCreateWithoutLogsInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutLogsInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutLogsInput, ChatSessionUncheckedUpdateWithoutLogsInput>
  }

  export type ChatSessionUpdateWithoutLogsInput = {
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutChat_sessionsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutChat_sessionsNestedInput
    assigned_user?: UserUpdateOneWithoutChat_sessionsNestedInput
    messages?: MessageUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutLogsInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUncheckedUpdateManyWithoutChatNestedInput
  }

  export type TeamMemberCreateManyUserInput = {
    team_member_id?: number
    team_id: number
  }

  export type AssignmentCreateManyUserInput = {
    assignment_id?: number
    chat_session_id: number
    topic?: string | null
    detail?: string | null
    deadline?: Date | string | null
    status?: $Enums.AssignmentStatus
  }

  export type NoteCreateManyUserInput = {
    note_id?: number
    chat_session_id: number
    title?: string | null
    content: string
    created_at?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    log_id?: number
    chat_session_id?: number | null
    action: string
    old_value?: string | null
    new_value?: string | null
    created_at?: Date | string
  }

  export type ChatSessionCreateManyAssigned_userInput = {
    chat_session_id?: number
    customer_id: number
    platform_id: number
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
  }

  export type TeamMemberUpdateWithoutUserInput = {
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    team_member_id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    team_member_id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
  }

  export type AssignmentUpdateWithoutUserInput = {
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    chat_session?: ChatSessionUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutUserInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type AssignmentUncheckedUpdateManyWithoutUserInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type NoteUpdateWithoutUserInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_session?: ChatSessionUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutUserInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutUserInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatSessionUpdateOneWithoutLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUpdateWithoutAssigned_userInput = {
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutChat_sessionsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutChat_sessionsNestedInput
    messages?: MessageUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutAssigned_userInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUncheckedUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutAssigned_userInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamMemberCreateManyTeamInput = {
    team_member_id?: number
    user_id: number
  }

  export type TeamMemberUpdateWithoutTeamInput = {
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    team_member_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    team_member_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerSocialAccountCreateManyCustomerInput = {
    social_account_id?: number
    platform_id: number
    account_identifier: string
  }

  export type ChatSessionCreateManyCustomerInput = {
    chat_session_id?: number
    platform_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
  }

  export type CustomerTagCreateManyCustomerInput = {
    customer_tag_id?: number
    tag_id: number
  }

  export type CustomerSocialAccountUpdateWithoutCustomerInput = {
    account_identifier?: StringFieldUpdateOperationsInput | string
    platform?: PlatformUpdateOneRequiredWithoutSocial_linksNestedInput
  }

  export type CustomerSocialAccountUncheckedUpdateWithoutCustomerInput = {
    social_account_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    account_identifier?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerSocialAccountUncheckedUpdateManyWithoutCustomerInput = {
    social_account_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    account_identifier?: StringFieldUpdateOperationsInput | string
  }

  export type ChatSessionUpdateWithoutCustomerInput = {
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: PlatformUpdateOneRequiredWithoutChat_sessionsNestedInput
    assigned_user?: UserUpdateOneWithoutChat_sessionsNestedInput
    messages?: MessageUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutCustomerInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUncheckedUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutCustomerInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerTagUpdateWithoutCustomerInput = {
    tag?: TagUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerTagUncheckedUpdateWithoutCustomerInput = {
    customer_tag_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerTagUncheckedUpdateManyWithoutCustomerInput = {
    customer_tag_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChatSessionCreateManyPlatformInput = {
    chat_session_id?: number
    customer_id: number
    assigned_user_id?: number | null
    status?: $Enums.ChatStatus
    start_time?: Date | string
    end_time?: Date | string | null
  }

  export type CustomerSocialAccountCreateManyPlatformInput = {
    social_account_id?: number
    customer_id: number
    account_identifier: string
  }

  export type ChatSessionUpdateWithoutPlatformInput = {
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutChat_sessionsNestedInput
    assigned_user?: UserUpdateOneWithoutChat_sessionsNestedInput
    messages?: MessageUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutPlatformInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutChat_sessionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutChat_sessionNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutChat_sessionNestedInput
    tags?: ChatTagUncheckedUpdateManyWithoutChatNestedInput
    logs?: ActivityLogUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutPlatformInput = {
    chat_session_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    assigned_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerSocialAccountUpdateWithoutPlatformInput = {
    account_identifier?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutSocial_accountsNestedInput
  }

  export type CustomerSocialAccountUncheckedUpdateWithoutPlatformInput = {
    social_account_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    account_identifier?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerSocialAccountUncheckedUpdateManyWithoutPlatformInput = {
    social_account_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    account_identifier?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyChat_sessionInput = {
    message_id?: number
    sender_type: $Enums.SenderType
    sender_id?: number | null
    message_type: $Enums.MessageType
    content?: string | null
    attachment_url?: string | null
    created_at?: Date | string
    read_at?: Date | string | null
  }

  export type NoteCreateManyChat_sessionInput = {
    note_id?: number
    user_id: number
    title?: string | null
    content: string
    created_at?: Date | string
  }

  export type AssignmentCreateManyChat_sessionInput = {
    assignment_id?: number
    user_id: number
    topic?: string | null
    detail?: string | null
    deadline?: Date | string | null
    status?: $Enums.AssignmentStatus
  }

  export type ChatTagCreateManyChatInput = {
    chat_tag_id?: number
    tag_id: number
  }

  export type ActivityLogCreateManyChatInput = {
    log_id?: number
    user_id?: number | null
    action: string
    old_value?: string | null
    new_value?: string | null
    created_at?: Date | string
  }

  export type MessageUpdateWithoutChat_sessionInput = {
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateWithoutChat_sessionInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyWithoutChat_sessionInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NoteUpdateWithoutChat_sessionInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutChat_sessionInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutChat_sessionInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutChat_sessionInput = {
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutChat_sessionInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type AssignmentUncheckedUpdateManyWithoutChat_sessionInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type ChatTagUpdateWithoutChatInput = {
    tag?: TagUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatTagUncheckedUpdateWithoutChatInput = {
    chat_tag_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChatTagUncheckedUpdateManyWithoutChatInput = {
    chat_tag_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityLogUpdateWithoutChatInput = {
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivity_logsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutChatInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutChatInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerTagCreateManyTagInput = {
    customer_tag_id?: number
    customer_id: number
  }

  export type ChatTagCreateManyTagInput = {
    chat_tag_id?: number
    chat_session_id: number
  }

  export type CustomerTagUpdateWithoutTagInput = {
    customer?: CustomerUpdateOneRequiredWithoutTagsNestedInput
  }

  export type CustomerTagUncheckedUpdateWithoutTagInput = {
    customer_tag_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerTagUncheckedUpdateManyWithoutTagInput = {
    customer_tag_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChatTagUpdateWithoutTagInput = {
    chat?: ChatSessionUpdateOneRequiredWithoutTagsNestedInput
  }

  export type ChatTagUncheckedUpdateWithoutTagInput = {
    chat_tag_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChatTagUncheckedUpdateManyWithoutTagInput = {
    chat_tag_id?: IntFieldUpdateOperationsInput | number
    chat_session_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}