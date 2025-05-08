
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Invite
 * 
 */
export type Invite = $Result.DefaultSelection<Prisma.$InvitePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model SecurityStatus
 * 
 */
export type SecurityStatus = $Result.DefaultSelection<Prisma.$SecurityStatusPayload>
/**
 * Model DeviceDetail
 * 
 */
export type DeviceDetail = $Result.DefaultSelection<Prisma.$DeviceDetailPayload>
/**
 * Model SecurityEvent
 * 
 */
export type SecurityEvent = $Result.DefaultSelection<Prisma.$SecurityEventPayload>
/**
 * Model Recomendation
 * 
 */
export type Recomendation = $Result.DefaultSelection<Prisma.$RecomendationPayload>
/**
 * Model Disclaimer
 * 
 */
export type Disclaimer = $Result.DefaultSelection<Prisma.$DisclaimerPayload>
/**
 * Model BusinessUnit
 * 
 */
export type BusinessUnit = $Result.DefaultSelection<Prisma.$BusinessUnitPayload>
/**
 * Model MicrosoftSku
 * 
 */
export type MicrosoftSku = $Result.DefaultSelection<Prisma.$MicrosoftSkuPayload>
/**
 * Model MicrosoftAccount
 * 
 */
export type MicrosoftAccount = $Result.DefaultSelection<Prisma.$MicrosoftAccountPayload>
/**
 * Model MicrosoftSubscribedSku
 * 
 */
export type MicrosoftSubscribedSku = $Result.DefaultSelection<Prisma.$MicrosoftSubscribedSkuPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.invite`: Exposes CRUD operations for the **Invite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invites
    * const invites = await prisma.invite.findMany()
    * ```
    */
  get invite(): Prisma.InviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityStatus`: Exposes CRUD operations for the **SecurityStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityStatuses
    * const securityStatuses = await prisma.securityStatus.findMany()
    * ```
    */
  get securityStatus(): Prisma.SecurityStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceDetail`: Exposes CRUD operations for the **DeviceDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceDetails
    * const deviceDetails = await prisma.deviceDetail.findMany()
    * ```
    */
  get deviceDetail(): Prisma.DeviceDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityEvent`: Exposes CRUD operations for the **SecurityEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityEvents
    * const securityEvents = await prisma.securityEvent.findMany()
    * ```
    */
  get securityEvent(): Prisma.SecurityEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recomendation`: Exposes CRUD operations for the **Recomendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recomendations
    * const recomendations = await prisma.recomendation.findMany()
    * ```
    */
  get recomendation(): Prisma.RecomendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disclaimer`: Exposes CRUD operations for the **Disclaimer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disclaimers
    * const disclaimers = await prisma.disclaimer.findMany()
    * ```
    */
  get disclaimer(): Prisma.DisclaimerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessUnit`: Exposes CRUD operations for the **BusinessUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessUnits
    * const businessUnits = await prisma.businessUnit.findMany()
    * ```
    */
  get businessUnit(): Prisma.BusinessUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.microsoftSku`: Exposes CRUD operations for the **MicrosoftSku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MicrosoftSkus
    * const microsoftSkus = await prisma.microsoftSku.findMany()
    * ```
    */
  get microsoftSku(): Prisma.MicrosoftSkuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.microsoftAccount`: Exposes CRUD operations for the **MicrosoftAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MicrosoftAccounts
    * const microsoftAccounts = await prisma.microsoftAccount.findMany()
    * ```
    */
  get microsoftAccount(): Prisma.MicrosoftAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.microsoftSubscribedSku`: Exposes CRUD operations for the **MicrosoftSubscribedSku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MicrosoftSubscribedSkus
    * const microsoftSubscribedSkus = await prisma.microsoftSubscribedSku.findMany()
    * ```
    */
  get microsoftSubscribedSku(): Prisma.MicrosoftSubscribedSkuDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Invite: 'Invite',
    Client: 'Client',
    Device: 'Device',
    SecurityStatus: 'SecurityStatus',
    DeviceDetail: 'DeviceDetail',
    SecurityEvent: 'SecurityEvent',
    Recomendation: 'Recomendation',
    Disclaimer: 'Disclaimer',
    BusinessUnit: 'BusinessUnit',
    MicrosoftSku: 'MicrosoftSku',
    MicrosoftAccount: 'MicrosoftAccount',
    MicrosoftSubscribedSku: 'MicrosoftSubscribedSku'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "invite" | "client" | "device" | "securityStatus" | "deviceDetail" | "securityEvent" | "recomendation" | "disclaimer" | "businessUnit" | "microsoftSku" | "microsoftAccount" | "microsoftSubscribedSku"
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
      Invite: {
        payload: Prisma.$InvitePayload<ExtArgs>
        fields: Prisma.InviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findFirst: {
            args: Prisma.InviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findMany: {
            args: Prisma.InviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          create: {
            args: Prisma.InviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          createMany: {
            args: Prisma.InviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          update: {
            args: Prisma.InviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          deleteMany: {
            args: Prisma.InviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          aggregate: {
            args: Prisma.InviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvite>
          }
          groupBy: {
            args: Prisma.InviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCountArgs<ExtArgs>
            result: $Utils.Optional<InviteCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      SecurityStatus: {
        payload: Prisma.$SecurityStatusPayload<ExtArgs>
        fields: Prisma.SecurityStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityStatusPayload>
          }
          findFirst: {
            args: Prisma.SecurityStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityStatusPayload>
          }
          findMany: {
            args: Prisma.SecurityStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityStatusPayload>[]
          }
          create: {
            args: Prisma.SecurityStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityStatusPayload>
          }
          createMany: {
            args: Prisma.SecurityStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SecurityStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityStatusPayload>
          }
          update: {
            args: Prisma.SecurityStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityStatusPayload>
          }
          deleteMany: {
            args: Prisma.SecurityStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SecurityStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityStatusPayload>
          }
          aggregate: {
            args: Prisma.SecurityStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityStatus>
          }
          groupBy: {
            args: Prisma.SecurityStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityStatusCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityStatusCountAggregateOutputType> | number
          }
        }
      }
      DeviceDetail: {
        payload: Prisma.$DeviceDetailPayload<ExtArgs>
        fields: Prisma.DeviceDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceDetailPayload>
          }
          findFirst: {
            args: Prisma.DeviceDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceDetailPayload>
          }
          findMany: {
            args: Prisma.DeviceDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceDetailPayload>[]
          }
          create: {
            args: Prisma.DeviceDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceDetailPayload>
          }
          createMany: {
            args: Prisma.DeviceDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeviceDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceDetailPayload>
          }
          update: {
            args: Prisma.DeviceDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceDetailPayload>
          }
          deleteMany: {
            args: Prisma.DeviceDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceDetailPayload>
          }
          aggregate: {
            args: Prisma.DeviceDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceDetail>
          }
          groupBy: {
            args: Prisma.DeviceDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceDetailCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceDetailCountAggregateOutputType> | number
          }
        }
      }
      SecurityEvent: {
        payload: Prisma.$SecurityEventPayload<ExtArgs>
        fields: Prisma.SecurityEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          findFirst: {
            args: Prisma.SecurityEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          findMany: {
            args: Prisma.SecurityEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>[]
          }
          create: {
            args: Prisma.SecurityEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          createMany: {
            args: Prisma.SecurityEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SecurityEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          update: {
            args: Prisma.SecurityEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          deleteMany: {
            args: Prisma.SecurityEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SecurityEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          aggregate: {
            args: Prisma.SecurityEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityEvent>
          }
          groupBy: {
            args: Prisma.SecurityEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityEventCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityEventCountAggregateOutputType> | number
          }
        }
      }
      Recomendation: {
        payload: Prisma.$RecomendationPayload<ExtArgs>
        fields: Prisma.RecomendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecomendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecomendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecomendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecomendationPayload>
          }
          findFirst: {
            args: Prisma.RecomendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecomendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecomendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecomendationPayload>
          }
          findMany: {
            args: Prisma.RecomendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecomendationPayload>[]
          }
          create: {
            args: Prisma.RecomendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecomendationPayload>
          }
          createMany: {
            args: Prisma.RecomendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RecomendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecomendationPayload>
          }
          update: {
            args: Prisma.RecomendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecomendationPayload>
          }
          deleteMany: {
            args: Prisma.RecomendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecomendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecomendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecomendationPayload>
          }
          aggregate: {
            args: Prisma.RecomendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecomendation>
          }
          groupBy: {
            args: Prisma.RecomendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecomendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecomendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecomendationCountAggregateOutputType> | number
          }
        }
      }
      Disclaimer: {
        payload: Prisma.$DisclaimerPayload<ExtArgs>
        fields: Prisma.DisclaimerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisclaimerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclaimerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisclaimerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclaimerPayload>
          }
          findFirst: {
            args: Prisma.DisclaimerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclaimerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisclaimerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclaimerPayload>
          }
          findMany: {
            args: Prisma.DisclaimerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclaimerPayload>[]
          }
          create: {
            args: Prisma.DisclaimerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclaimerPayload>
          }
          createMany: {
            args: Prisma.DisclaimerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DisclaimerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclaimerPayload>
          }
          update: {
            args: Prisma.DisclaimerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclaimerPayload>
          }
          deleteMany: {
            args: Prisma.DisclaimerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisclaimerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DisclaimerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclaimerPayload>
          }
          aggregate: {
            args: Prisma.DisclaimerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisclaimer>
          }
          groupBy: {
            args: Prisma.DisclaimerGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisclaimerGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisclaimerCountArgs<ExtArgs>
            result: $Utils.Optional<DisclaimerCountAggregateOutputType> | number
          }
        }
      }
      BusinessUnit: {
        payload: Prisma.$BusinessUnitPayload<ExtArgs>
        fields: Prisma.BusinessUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUnitPayload>
          }
          findFirst: {
            args: Prisma.BusinessUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUnitPayload>
          }
          findMany: {
            args: Prisma.BusinessUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUnitPayload>[]
          }
          create: {
            args: Prisma.BusinessUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUnitPayload>
          }
          createMany: {
            args: Prisma.BusinessUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusinessUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUnitPayload>
          }
          update: {
            args: Prisma.BusinessUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUnitPayload>
          }
          deleteMany: {
            args: Prisma.BusinessUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUnitPayload>
          }
          aggregate: {
            args: Prisma.BusinessUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessUnit>
          }
          groupBy: {
            args: Prisma.BusinessUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessUnitCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessUnitCountAggregateOutputType> | number
          }
        }
      }
      MicrosoftSku: {
        payload: Prisma.$MicrosoftSkuPayload<ExtArgs>
        fields: Prisma.MicrosoftSkuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MicrosoftSkuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSkuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MicrosoftSkuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSkuPayload>
          }
          findFirst: {
            args: Prisma.MicrosoftSkuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSkuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MicrosoftSkuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSkuPayload>
          }
          findMany: {
            args: Prisma.MicrosoftSkuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSkuPayload>[]
          }
          create: {
            args: Prisma.MicrosoftSkuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSkuPayload>
          }
          createMany: {
            args: Prisma.MicrosoftSkuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MicrosoftSkuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSkuPayload>
          }
          update: {
            args: Prisma.MicrosoftSkuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSkuPayload>
          }
          deleteMany: {
            args: Prisma.MicrosoftSkuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MicrosoftSkuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MicrosoftSkuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSkuPayload>
          }
          aggregate: {
            args: Prisma.MicrosoftSkuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMicrosoftSku>
          }
          groupBy: {
            args: Prisma.MicrosoftSkuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MicrosoftSkuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MicrosoftSkuCountArgs<ExtArgs>
            result: $Utils.Optional<MicrosoftSkuCountAggregateOutputType> | number
          }
        }
      }
      MicrosoftAccount: {
        payload: Prisma.$MicrosoftAccountPayload<ExtArgs>
        fields: Prisma.MicrosoftAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MicrosoftAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MicrosoftAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftAccountPayload>
          }
          findFirst: {
            args: Prisma.MicrosoftAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MicrosoftAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftAccountPayload>
          }
          findMany: {
            args: Prisma.MicrosoftAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftAccountPayload>[]
          }
          create: {
            args: Prisma.MicrosoftAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftAccountPayload>
          }
          createMany: {
            args: Prisma.MicrosoftAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MicrosoftAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftAccountPayload>
          }
          update: {
            args: Prisma.MicrosoftAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftAccountPayload>
          }
          deleteMany: {
            args: Prisma.MicrosoftAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MicrosoftAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MicrosoftAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftAccountPayload>
          }
          aggregate: {
            args: Prisma.MicrosoftAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMicrosoftAccount>
          }
          groupBy: {
            args: Prisma.MicrosoftAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<MicrosoftAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.MicrosoftAccountCountArgs<ExtArgs>
            result: $Utils.Optional<MicrosoftAccountCountAggregateOutputType> | number
          }
        }
      }
      MicrosoftSubscribedSku: {
        payload: Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>
        fields: Prisma.MicrosoftSubscribedSkuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MicrosoftSubscribedSkuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSubscribedSkuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MicrosoftSubscribedSkuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSubscribedSkuPayload>
          }
          findFirst: {
            args: Prisma.MicrosoftSubscribedSkuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSubscribedSkuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MicrosoftSubscribedSkuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSubscribedSkuPayload>
          }
          findMany: {
            args: Prisma.MicrosoftSubscribedSkuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSubscribedSkuPayload>[]
          }
          create: {
            args: Prisma.MicrosoftSubscribedSkuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSubscribedSkuPayload>
          }
          createMany: {
            args: Prisma.MicrosoftSubscribedSkuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MicrosoftSubscribedSkuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSubscribedSkuPayload>
          }
          update: {
            args: Prisma.MicrosoftSubscribedSkuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSubscribedSkuPayload>
          }
          deleteMany: {
            args: Prisma.MicrosoftSubscribedSkuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MicrosoftSubscribedSkuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MicrosoftSubscribedSkuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicrosoftSubscribedSkuPayload>
          }
          aggregate: {
            args: Prisma.MicrosoftSubscribedSkuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMicrosoftSubscribedSku>
          }
          groupBy: {
            args: Prisma.MicrosoftSubscribedSkuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MicrosoftSubscribedSkuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MicrosoftSubscribedSkuCountArgs<ExtArgs>
            result: $Utils.Optional<MicrosoftSubscribedSkuCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    invite?: InviteOmit
    client?: ClientOmit
    device?: DeviceOmit
    securityStatus?: SecurityStatusOmit
    deviceDetail?: DeviceDetailOmit
    securityEvent?: SecurityEventOmit
    recomendation?: RecomendationOmit
    disclaimer?: DisclaimerOmit
    businessUnit?: BusinessUnitOmit
    microsoftSku?: MicrosoftSkuOmit
    microsoftAccount?: MicrosoftAccountOmit
    microsoftSubscribedSku?: MicrosoftSubscribedSkuOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    clients: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | UserCountOutputTypeCountClientsArgs
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
  export type UserCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }


  /**
   * Count Type InviteCountOutputType
   */

  export type InviteCountOutputType = {
    clients: number
  }

  export type InviteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | InviteCountOutputTypeCountClientsArgs
  }

  // Custom InputTypes
  /**
   * InviteCountOutputType without action
   */
  export type InviteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCountOutputType
     */
    select?: InviteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InviteCountOutputType without action
   */
  export type InviteCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    businessUnits: number
    devices: number
    recomendations: number
    disclaimers: number
    microsoftAccounts: number
    microsoftSubscribedSkus: number
    invites: number
    users: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessUnits?: boolean | ClientCountOutputTypeCountBusinessUnitsArgs
    devices?: boolean | ClientCountOutputTypeCountDevicesArgs
    recomendations?: boolean | ClientCountOutputTypeCountRecomendationsArgs
    disclaimers?: boolean | ClientCountOutputTypeCountDisclaimersArgs
    microsoftAccounts?: boolean | ClientCountOutputTypeCountMicrosoftAccountsArgs
    microsoftSubscribedSkus?: boolean | ClientCountOutputTypeCountMicrosoftSubscribedSkusArgs
    invites?: boolean | ClientCountOutputTypeCountInvitesArgs
    users?: boolean | ClientCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountBusinessUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessUnitWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountRecomendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecomendationWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDisclaimersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisclaimerWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountMicrosoftAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicrosoftAccountWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountMicrosoftSubscribedSkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicrosoftSubscribedSkuWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    securityStatus: number
    securityEvents: number
    DeviceDetail: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    securityStatus?: boolean | DeviceCountOutputTypeCountSecurityStatusArgs
    securityEvents?: boolean | DeviceCountOutputTypeCountSecurityEventsArgs
    DeviceDetail?: boolean | DeviceCountOutputTypeCountDeviceDetailArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountSecurityStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityStatusWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountSecurityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityEventWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountDeviceDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceDetailWhereInput
  }


  /**
   * Count Type BusinessUnitCountOutputType
   */

  export type BusinessUnitCountOutputType = {
    deviceDetails: number
  }

  export type BusinessUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceDetails?: boolean | BusinessUnitCountOutputTypeCountDeviceDetailsArgs
  }

  // Custom InputTypes
  /**
   * BusinessUnitCountOutputType without action
   */
  export type BusinessUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnitCountOutputType
     */
    select?: BusinessUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessUnitCountOutputType without action
   */
  export type BusinessUnitCountOutputTypeCountDeviceDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceDetailWhereInput
  }


  /**
   * Count Type MicrosoftSkuCountOutputType
   */

  export type MicrosoftSkuCountOutputType = {
    microsoftAccounts: number
    microsoftSubscribedSkus: number
  }

  export type MicrosoftSkuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microsoftAccounts?: boolean | MicrosoftSkuCountOutputTypeCountMicrosoftAccountsArgs
    microsoftSubscribedSkus?: boolean | MicrosoftSkuCountOutputTypeCountMicrosoftSubscribedSkusArgs
  }

  // Custom InputTypes
  /**
   * MicrosoftSkuCountOutputType without action
   */
  export type MicrosoftSkuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSkuCountOutputType
     */
    select?: MicrosoftSkuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MicrosoftSkuCountOutputType without action
   */
  export type MicrosoftSkuCountOutputTypeCountMicrosoftAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicrosoftAccountWhereInput
  }

  /**
   * MicrosoftSkuCountOutputType without action
   */
  export type MicrosoftSkuCountOutputTypeCountMicrosoftSubscribedSkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicrosoftSubscribedSkuWhereInput
  }


  /**
   * Count Type MicrosoftAccountCountOutputType
   */

  export type MicrosoftAccountCountOutputType = {
    microsoftSkus: number
  }

  export type MicrosoftAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microsoftSkus?: boolean | MicrosoftAccountCountOutputTypeCountMicrosoftSkusArgs
  }

  // Custom InputTypes
  /**
   * MicrosoftAccountCountOutputType without action
   */
  export type MicrosoftAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccountCountOutputType
     */
    select?: MicrosoftAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MicrosoftAccountCountOutputType without action
   */
  export type MicrosoftAccountCountOutputTypeCountMicrosoftSkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicrosoftSkuWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    isActive: boolean | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    isActive: boolean | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    isActive: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    isActive?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    isActive?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    isActive?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: string
    isActive: boolean
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | User$clientsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "isActive" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | User$clientsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: string
      isActive: boolean
      password: string
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
    clients<T extends User$clientsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.clients
   */
  export type User$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
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
   * Model Invite
   */

  export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  export type InviteMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    role: string | null
    usedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
  }

  export type InviteMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    role: string | null
    usedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
  }

  export type InviteCountAggregateOutputType = {
    id: number
    email: number
    token: number
    role: number
    usedAt: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    _all: number
  }


  export type InviteMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    role?: true
    usedAt?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
  }

  export type InviteMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    role?: true
    usedAt?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
  }

  export type InviteCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    role?: true
    usedAt?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type InviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invite to aggregate.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invites
    **/
    _count?: true | InviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteMaxAggregateInputType
  }

  export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
        [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvite[P]>
      : GetScalarType<T[P], AggregateInvite[P]>
  }




  export type InviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithAggregationInput | InviteOrderByWithAggregationInput[]
    by: InviteScalarFieldEnum[] | InviteScalarFieldEnum
    having?: InviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCountAggregateInputType | true
    _min?: InviteMinAggregateInputType
    _max?: InviteMaxAggregateInputType
  }

  export type InviteGroupByOutputType = {
    id: string
    email: string
    token: string
    role: string
    usedAt: Date | null
    createdAt: Date
    updatedAt: Date
    expiresAt: Date
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  type GetInviteGroupByPayload<T extends InviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteGroupByOutputType[P]>
            : GetScalarType<T[P], InviteGroupByOutputType[P]>
        }
      >
    >


  export type InviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    role?: boolean
    usedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    clients?: boolean | Invite$clientsArgs<ExtArgs>
    _count?: boolean | InviteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>



  export type InviteSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    role?: boolean
    usedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
  }

  export type InviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "role" | "usedAt" | "createdAt" | "updatedAt" | "expiresAt", ExtArgs["result"]["invite"]>
  export type InviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | Invite$clientsArgs<ExtArgs>
    _count?: boolean | InviteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invite"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      role: string
      usedAt: Date | null
      createdAt: Date
      updatedAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["invite"]>
    composites: {}
  }

  type InviteGetPayload<S extends boolean | null | undefined | InviteDefaultArgs> = $Result.GetResult<Prisma.$InvitePayload, S>

  type InviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InviteCountAggregateInputType | true
    }

  export interface InviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invite'], meta: { name: 'Invite' } }
    /**
     * Find zero or one Invite that matches the filter.
     * @param {InviteFindUniqueArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InviteFindUniqueArgs>(args: SelectSubset<T, InviteFindUniqueArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InviteFindUniqueOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InviteFindUniqueOrThrowArgs>(args: SelectSubset<T, InviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InviteFindFirstArgs>(args?: SelectSubset<T, InviteFindFirstArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InviteFindFirstOrThrowArgs>(args?: SelectSubset<T, InviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invite.findMany()
     * 
     * // Get first 10 Invites
     * const invites = await prisma.invite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inviteWithIdOnly = await prisma.invite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InviteFindManyArgs>(args?: SelectSubset<T, InviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invite.
     * @param {InviteCreateArgs} args - Arguments to create a Invite.
     * @example
     * // Create one Invite
     * const Invite = await prisma.invite.create({
     *   data: {
     *     // ... data to create a Invite
     *   }
     * })
     * 
     */
    create<T extends InviteCreateArgs>(args: SelectSubset<T, InviteCreateArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invites.
     * @param {InviteCreateManyArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InviteCreateManyArgs>(args?: SelectSubset<T, InviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invite.
     * @param {InviteDeleteArgs} args - Arguments to delete one Invite.
     * @example
     * // Delete one Invite
     * const Invite = await prisma.invite.delete({
     *   where: {
     *     // ... filter to delete one Invite
     *   }
     * })
     * 
     */
    delete<T extends InviteDeleteArgs>(args: SelectSubset<T, InviteDeleteArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invite.
     * @param {InviteUpdateArgs} args - Arguments to update one Invite.
     * @example
     * // Update one Invite
     * const invite = await prisma.invite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InviteUpdateArgs>(args: SelectSubset<T, InviteUpdateArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invites.
     * @param {InviteDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InviteDeleteManyArgs>(args?: SelectSubset<T, InviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InviteUpdateManyArgs>(args: SelectSubset<T, InviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invite.
     * @param {InviteUpsertArgs} args - Arguments to update or create a Invite.
     * @example
     * // Update or create a Invite
     * const invite = await prisma.invite.upsert({
     *   create: {
     *     // ... data to create a Invite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invite we want to update
     *   }
     * })
     */
    upsert<T extends InviteUpsertArgs>(args: SelectSubset<T, InviteUpsertArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invite.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends InviteCountArgs>(
      args?: Subset<T, InviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InviteAggregateArgs>(args: Subset<T, InviteAggregateArgs>): Prisma.PrismaPromise<GetInviteAggregateType<T>>

    /**
     * Group by Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteGroupByArgs} args - Group by arguments.
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
      T extends InviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteGroupByArgs['orderBy'] }
        : { orderBy?: InviteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invite model
   */
  readonly fields: InviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends Invite$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Invite$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Invite model
   */
  interface InviteFieldRefs {
    readonly id: FieldRef<"Invite", 'String'>
    readonly email: FieldRef<"Invite", 'String'>
    readonly token: FieldRef<"Invite", 'String'>
    readonly role: FieldRef<"Invite", 'String'>
    readonly usedAt: FieldRef<"Invite", 'DateTime'>
    readonly createdAt: FieldRef<"Invite", 'DateTime'>
    readonly updatedAt: FieldRef<"Invite", 'DateTime'>
    readonly expiresAt: FieldRef<"Invite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invite findUnique
   */
  export type InviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite findUniqueOrThrow
   */
  export type InviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite findFirst
   */
  export type InviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite findFirstOrThrow
   */
  export type InviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite findMany
   */
  export type InviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite create
   */
  export type InviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The data needed to create a Invite.
     */
    data: XOR<InviteCreateInput, InviteUncheckedCreateInput>
  }

  /**
   * Invite createMany
   */
  export type InviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invites.
     */
    data: InviteCreateManyInput | InviteCreateManyInput[]
  }

  /**
   * Invite update
   */
  export type InviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The data needed to update a Invite.
     */
    data: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
    /**
     * Choose, which Invite to update.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite updateMany
   */
  export type InviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invites.
     */
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to update.
     */
    limit?: number
  }

  /**
   * Invite upsert
   */
  export type InviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The filter to search for the Invite to update in case it exists.
     */
    where: InviteWhereUniqueInput
    /**
     * In case the Invite found by the `where` argument doesn't exist, create a new Invite with this data.
     */
    create: XOR<InviteCreateInput, InviteUncheckedCreateInput>
    /**
     * In case the Invite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
  }

  /**
   * Invite delete
   */
  export type InviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter which Invite to delete.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite deleteMany
   */
  export type InviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invites to delete
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to delete.
     */
    limit?: number
  }

  /**
   * Invite.clients
   */
  export type Invite$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Invite without action
   */
  export type InviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    contractDeviceQty: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
    contractDeviceQty: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    companyName: string | null
    category: string | null
    cnpj: string | null
    isActive: boolean | null
    contractDeviceQty: number | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    companyName: string | null
    category: string | null
    cnpj: string | null
    isActive: boolean | null
    contractDeviceQty: number | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    companyName: number
    category: number
    cnpj: number
    isActive: number
    contractDeviceQty: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    contractDeviceQty?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    contractDeviceQty?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    companyName?: true
    category?: true
    cnpj?: true
    isActive?: true
    contractDeviceQty?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    companyName?: true
    category?: true
    cnpj?: true
    isActive?: true
    contractDeviceQty?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    companyName?: true
    category?: true
    cnpj?: true
    isActive?: true
    contractDeviceQty?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    companyName: string
    category: string
    cnpj: string
    isActive: boolean
    contractDeviceQty: number
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyName?: boolean
    category?: boolean
    cnpj?: boolean
    isActive?: boolean
    contractDeviceQty?: boolean
    updatedAt?: boolean
    businessUnits?: boolean | Client$businessUnitsArgs<ExtArgs>
    devices?: boolean | Client$devicesArgs<ExtArgs>
    recomendations?: boolean | Client$recomendationsArgs<ExtArgs>
    disclaimers?: boolean | Client$disclaimersArgs<ExtArgs>
    microsoftAccounts?: boolean | Client$microsoftAccountsArgs<ExtArgs>
    microsoftSubscribedSkus?: boolean | Client$microsoftSubscribedSkusArgs<ExtArgs>
    invites?: boolean | Client$invitesArgs<ExtArgs>
    users?: boolean | Client$usersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>



  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    companyName?: boolean
    category?: boolean
    cnpj?: boolean
    isActive?: boolean
    contractDeviceQty?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyName" | "category" | "cnpj" | "isActive" | "contractDeviceQty" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessUnits?: boolean | Client$businessUnitsArgs<ExtArgs>
    devices?: boolean | Client$devicesArgs<ExtArgs>
    recomendations?: boolean | Client$recomendationsArgs<ExtArgs>
    disclaimers?: boolean | Client$disclaimersArgs<ExtArgs>
    microsoftAccounts?: boolean | Client$microsoftAccountsArgs<ExtArgs>
    microsoftSubscribedSkus?: boolean | Client$microsoftSubscribedSkusArgs<ExtArgs>
    invites?: boolean | Client$invitesArgs<ExtArgs>
    users?: boolean | Client$usersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      businessUnits: Prisma.$BusinessUnitPayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
      recomendations: Prisma.$RecomendationPayload<ExtArgs>[]
      disclaimers: Prisma.$DisclaimerPayload<ExtArgs>[]
      microsoftAccounts: Prisma.$MicrosoftAccountPayload<ExtArgs>[]
      microsoftSubscribedSkus: Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>[]
      invites: Prisma.$InvitePayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      companyName: string
      category: string
      cnpj: string
      isActive: boolean
      contractDeviceQty: number
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessUnits<T extends Client$businessUnitsArgs<ExtArgs> = {}>(args?: Subset<T, Client$businessUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends Client$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Client$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recomendations<T extends Client$recomendationsArgs<ExtArgs> = {}>(args?: Subset<T, Client$recomendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecomendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disclaimers<T extends Client$disclaimersArgs<ExtArgs> = {}>(args?: Subset<T, Client$disclaimersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisclaimerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    microsoftAccounts<T extends Client$microsoftAccountsArgs<ExtArgs> = {}>(args?: Subset<T, Client$microsoftAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    microsoftSubscribedSkus<T extends Client$microsoftSubscribedSkusArgs<ExtArgs> = {}>(args?: Subset<T, Client$microsoftSubscribedSkusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invites<T extends Client$invitesArgs<ExtArgs> = {}>(args?: Subset<T, Client$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Client$usersArgs<ExtArgs> = {}>(args?: Subset<T, Client$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly companyName: FieldRef<"Client", 'String'>
    readonly category: FieldRef<"Client", 'String'>
    readonly cnpj: FieldRef<"Client", 'String'>
    readonly isActive: FieldRef<"Client", 'Boolean'>
    readonly contractDeviceQty: FieldRef<"Client", 'Int'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.businessUnits
   */
  export type Client$businessUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    where?: BusinessUnitWhereInput
    orderBy?: BusinessUnitOrderByWithRelationInput | BusinessUnitOrderByWithRelationInput[]
    cursor?: BusinessUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessUnitScalarFieldEnum | BusinessUnitScalarFieldEnum[]
  }

  /**
   * Client.devices
   */
  export type Client$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Client.recomendations
   */
  export type Client$recomendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
    where?: RecomendationWhereInput
    orderBy?: RecomendationOrderByWithRelationInput | RecomendationOrderByWithRelationInput[]
    cursor?: RecomendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecomendationScalarFieldEnum | RecomendationScalarFieldEnum[]
  }

  /**
   * Client.disclaimers
   */
  export type Client$disclaimersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
    where?: DisclaimerWhereInput
    orderBy?: DisclaimerOrderByWithRelationInput | DisclaimerOrderByWithRelationInput[]
    cursor?: DisclaimerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisclaimerScalarFieldEnum | DisclaimerScalarFieldEnum[]
  }

  /**
   * Client.microsoftAccounts
   */
  export type Client$microsoftAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    where?: MicrosoftAccountWhereInput
    orderBy?: MicrosoftAccountOrderByWithRelationInput | MicrosoftAccountOrderByWithRelationInput[]
    cursor?: MicrosoftAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MicrosoftAccountScalarFieldEnum | MicrosoftAccountScalarFieldEnum[]
  }

  /**
   * Client.microsoftSubscribedSkus
   */
  export type Client$microsoftSubscribedSkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    where?: MicrosoftSubscribedSkuWhereInput
    orderBy?: MicrosoftSubscribedSkuOrderByWithRelationInput | MicrosoftSubscribedSkuOrderByWithRelationInput[]
    cursor?: MicrosoftSubscribedSkuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MicrosoftSubscribedSkuScalarFieldEnum | MicrosoftSubscribedSkuScalarFieldEnum[]
  }

  /**
   * Client.invites
   */
  export type Client$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Client.users
   */
  export type Client$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    name: string | null
    nickname: string | null
    mac: string | null
    brand: string | null
    os: string | null
    processor: string | null
    username: string | null
    serial: string | null
    model: string | null
    type: string | null
    isActive: boolean | null
    updatedAt: Date | null
    syncedAt: Date | null
    clientId: number | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nickname: string | null
    mac: string | null
    brand: string | null
    os: string | null
    processor: string | null
    username: string | null
    serial: string | null
    model: string | null
    type: string | null
    isActive: boolean | null
    updatedAt: Date | null
    syncedAt: Date | null
    clientId: number | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    nickname: number
    mac: number
    brand: number
    os: number
    processor: number
    username: number
    serial: number
    model: number
    type: number
    isActive: number
    updatedAt: number
    syncedAt: number
    clientId: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    mac?: true
    brand?: true
    os?: true
    processor?: true
    username?: true
    serial?: true
    model?: true
    type?: true
    isActive?: true
    updatedAt?: true
    syncedAt?: true
    clientId?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    mac?: true
    brand?: true
    os?: true
    processor?: true
    username?: true
    serial?: true
    model?: true
    type?: true
    isActive?: true
    updatedAt?: true
    syncedAt?: true
    clientId?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    mac?: true
    brand?: true
    os?: true
    processor?: true
    username?: true
    serial?: true
    model?: true
    type?: true
    isActive?: true
    updatedAt?: true
    syncedAt?: true
    clientId?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt: Date
    syncedAt: Date
    clientId: number
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickname?: boolean
    mac?: boolean
    brand?: boolean
    os?: boolean
    processor?: boolean
    username?: boolean
    serial?: boolean
    model?: boolean
    type?: boolean
    isActive?: boolean
    updatedAt?: boolean
    syncedAt?: boolean
    clientId?: boolean
    securityStatus?: boolean | Device$securityStatusArgs<ExtArgs>
    securityEvents?: boolean | Device$securityEventsArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    DeviceDetail?: boolean | Device$DeviceDetailArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>



  export type DeviceSelectScalar = {
    id?: boolean
    name?: boolean
    nickname?: boolean
    mac?: boolean
    brand?: boolean
    os?: boolean
    processor?: boolean
    username?: boolean
    serial?: boolean
    model?: boolean
    type?: boolean
    isActive?: boolean
    updatedAt?: boolean
    syncedAt?: boolean
    clientId?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nickname" | "mac" | "brand" | "os" | "processor" | "username" | "serial" | "model" | "type" | "isActive" | "updatedAt" | "syncedAt" | "clientId", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    securityStatus?: boolean | Device$securityStatusArgs<ExtArgs>
    securityEvents?: boolean | Device$securityEventsArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    DeviceDetail?: boolean | Device$DeviceDetailArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      securityStatus: Prisma.$SecurityStatusPayload<ExtArgs>[]
      securityEvents: Prisma.$SecurityEventPayload<ExtArgs>[]
      client: Prisma.$ClientPayload<ExtArgs>
      DeviceDetail: Prisma.$DeviceDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nickname: string
      mac: string
      brand: string
      os: string
      processor: string
      username: string
      serial: string
      model: string
      type: string
      isActive: boolean
      updatedAt: Date
      syncedAt: Date
      clientId: number
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    securityStatus<T extends Device$securityStatusArgs<ExtArgs> = {}>(args?: Subset<T, Device$securityStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    securityEvents<T extends Device$securityEventsArgs<ExtArgs> = {}>(args?: Subset<T, Device$securityEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DeviceDetail<T extends Device$DeviceDetailArgs<ExtArgs> = {}>(args?: Subset<T, Device$DeviceDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly name: FieldRef<"Device", 'String'>
    readonly nickname: FieldRef<"Device", 'String'>
    readonly mac: FieldRef<"Device", 'String'>
    readonly brand: FieldRef<"Device", 'String'>
    readonly os: FieldRef<"Device", 'String'>
    readonly processor: FieldRef<"Device", 'String'>
    readonly username: FieldRef<"Device", 'String'>
    readonly serial: FieldRef<"Device", 'String'>
    readonly model: FieldRef<"Device", 'String'>
    readonly type: FieldRef<"Device", 'String'>
    readonly isActive: FieldRef<"Device", 'Boolean'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
    readonly syncedAt: FieldRef<"Device", 'DateTime'>
    readonly clientId: FieldRef<"Device", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.securityStatus
   */
  export type Device$securityStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
    where?: SecurityStatusWhereInput
    orderBy?: SecurityStatusOrderByWithRelationInput | SecurityStatusOrderByWithRelationInput[]
    cursor?: SecurityStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecurityStatusScalarFieldEnum | SecurityStatusScalarFieldEnum[]
  }

  /**
   * Device.securityEvents
   */
  export type Device$securityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    where?: SecurityEventWhereInput
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    cursor?: SecurityEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * Device.DeviceDetail
   */
  export type Device$DeviceDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    where?: DeviceDetailWhereInput
    orderBy?: DeviceDetailOrderByWithRelationInput | DeviceDetailOrderByWithRelationInput[]
    cursor?: DeviceDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceDetailScalarFieldEnum | DeviceDetailScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model SecurityStatus
   */

  export type AggregateSecurityStatus = {
    _count: SecurityStatusCountAggregateOutputType | null
    _avg: SecurityStatusAvgAggregateOutputType | null
    _sum: SecurityStatusSumAggregateOutputType | null
    _min: SecurityStatusMinAggregateOutputType | null
    _max: SecurityStatusMaxAggregateOutputType | null
  }

  export type SecurityStatusAvgAggregateOutputType = {
    deviceId: number | null
  }

  export type SecurityStatusSumAggregateOutputType = {
    deviceId: number | null
  }

  export type SecurityStatusMinAggregateOutputType = {
    id: string | null
    name: string | null
    mac: string | null
    group: string | null
    isManaged: boolean | null
    isManagedWithBest: boolean | null
    syncedAt: Date | null
    deviceId: number | null
  }

  export type SecurityStatusMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mac: string | null
    group: string | null
    isManaged: boolean | null
    isManagedWithBest: boolean | null
    syncedAt: Date | null
    deviceId: number | null
  }

  export type SecurityStatusCountAggregateOutputType = {
    id: number
    name: number
    mac: number
    group: number
    isManaged: number
    isManagedWithBest: number
    syncedAt: number
    deviceId: number
    _all: number
  }


  export type SecurityStatusAvgAggregateInputType = {
    deviceId?: true
  }

  export type SecurityStatusSumAggregateInputType = {
    deviceId?: true
  }

  export type SecurityStatusMinAggregateInputType = {
    id?: true
    name?: true
    mac?: true
    group?: true
    isManaged?: true
    isManagedWithBest?: true
    syncedAt?: true
    deviceId?: true
  }

  export type SecurityStatusMaxAggregateInputType = {
    id?: true
    name?: true
    mac?: true
    group?: true
    isManaged?: true
    isManagedWithBest?: true
    syncedAt?: true
    deviceId?: true
  }

  export type SecurityStatusCountAggregateInputType = {
    id?: true
    name?: true
    mac?: true
    group?: true
    isManaged?: true
    isManagedWithBest?: true
    syncedAt?: true
    deviceId?: true
    _all?: true
  }

  export type SecurityStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityStatus to aggregate.
     */
    where?: SecurityStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityStatuses to fetch.
     */
    orderBy?: SecurityStatusOrderByWithRelationInput | SecurityStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityStatuses
    **/
    _count?: true | SecurityStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecurityStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityStatusMaxAggregateInputType
  }

  export type GetSecurityStatusAggregateType<T extends SecurityStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityStatus[P]>
      : GetScalarType<T[P], AggregateSecurityStatus[P]>
  }




  export type SecurityStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityStatusWhereInput
    orderBy?: SecurityStatusOrderByWithAggregationInput | SecurityStatusOrderByWithAggregationInput[]
    by: SecurityStatusScalarFieldEnum[] | SecurityStatusScalarFieldEnum
    having?: SecurityStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityStatusCountAggregateInputType | true
    _avg?: SecurityStatusAvgAggregateInputType
    _sum?: SecurityStatusSumAggregateInputType
    _min?: SecurityStatusMinAggregateInputType
    _max?: SecurityStatusMaxAggregateInputType
  }

  export type SecurityStatusGroupByOutputType = {
    id: string
    name: string
    mac: string
    group: string
    isManaged: boolean
    isManagedWithBest: boolean
    syncedAt: Date
    deviceId: number | null
    _count: SecurityStatusCountAggregateOutputType | null
    _avg: SecurityStatusAvgAggregateOutputType | null
    _sum: SecurityStatusSumAggregateOutputType | null
    _min: SecurityStatusMinAggregateOutputType | null
    _max: SecurityStatusMaxAggregateOutputType | null
  }

  type GetSecurityStatusGroupByPayload<T extends SecurityStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityStatusGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityStatusGroupByOutputType[P]>
        }
      >
    >


  export type SecurityStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mac?: boolean
    group?: boolean
    isManaged?: boolean
    isManagedWithBest?: boolean
    syncedAt?: boolean
    deviceId?: boolean
    device?: boolean | SecurityStatus$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["securityStatus"]>



  export type SecurityStatusSelectScalar = {
    id?: boolean
    name?: boolean
    mac?: boolean
    group?: boolean
    isManaged?: boolean
    isManagedWithBest?: boolean
    syncedAt?: boolean
    deviceId?: boolean
  }

  export type SecurityStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mac" | "group" | "isManaged" | "isManagedWithBest" | "syncedAt" | "deviceId", ExtArgs["result"]["securityStatus"]>
  export type SecurityStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | SecurityStatus$deviceArgs<ExtArgs>
  }

  export type $SecurityStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityStatus"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mac: string
      group: string
      isManaged: boolean
      isManagedWithBest: boolean
      syncedAt: Date
      deviceId: number | null
    }, ExtArgs["result"]["securityStatus"]>
    composites: {}
  }

  type SecurityStatusGetPayload<S extends boolean | null | undefined | SecurityStatusDefaultArgs> = $Result.GetResult<Prisma.$SecurityStatusPayload, S>

  type SecurityStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityStatusCountAggregateInputType | true
    }

  export interface SecurityStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityStatus'], meta: { name: 'SecurityStatus' } }
    /**
     * Find zero or one SecurityStatus that matches the filter.
     * @param {SecurityStatusFindUniqueArgs} args - Arguments to find a SecurityStatus
     * @example
     * // Get one SecurityStatus
     * const securityStatus = await prisma.securityStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityStatusFindUniqueArgs>(args: SelectSubset<T, SecurityStatusFindUniqueArgs<ExtArgs>>): Prisma__SecurityStatusClient<$Result.GetResult<Prisma.$SecurityStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityStatusFindUniqueOrThrowArgs} args - Arguments to find a SecurityStatus
     * @example
     * // Get one SecurityStatus
     * const securityStatus = await prisma.securityStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityStatusClient<$Result.GetResult<Prisma.$SecurityStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityStatusFindFirstArgs} args - Arguments to find a SecurityStatus
     * @example
     * // Get one SecurityStatus
     * const securityStatus = await prisma.securityStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityStatusFindFirstArgs>(args?: SelectSubset<T, SecurityStatusFindFirstArgs<ExtArgs>>): Prisma__SecurityStatusClient<$Result.GetResult<Prisma.$SecurityStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityStatusFindFirstOrThrowArgs} args - Arguments to find a SecurityStatus
     * @example
     * // Get one SecurityStatus
     * const securityStatus = await prisma.securityStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityStatusClient<$Result.GetResult<Prisma.$SecurityStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityStatuses
     * const securityStatuses = await prisma.securityStatus.findMany()
     * 
     * // Get first 10 SecurityStatuses
     * const securityStatuses = await prisma.securityStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityStatusWithIdOnly = await prisma.securityStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityStatusFindManyArgs>(args?: SelectSubset<T, SecurityStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityStatus.
     * @param {SecurityStatusCreateArgs} args - Arguments to create a SecurityStatus.
     * @example
     * // Create one SecurityStatus
     * const SecurityStatus = await prisma.securityStatus.create({
     *   data: {
     *     // ... data to create a SecurityStatus
     *   }
     * })
     * 
     */
    create<T extends SecurityStatusCreateArgs>(args: SelectSubset<T, SecurityStatusCreateArgs<ExtArgs>>): Prisma__SecurityStatusClient<$Result.GetResult<Prisma.$SecurityStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityStatuses.
     * @param {SecurityStatusCreateManyArgs} args - Arguments to create many SecurityStatuses.
     * @example
     * // Create many SecurityStatuses
     * const securityStatus = await prisma.securityStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityStatusCreateManyArgs>(args?: SelectSubset<T, SecurityStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SecurityStatus.
     * @param {SecurityStatusDeleteArgs} args - Arguments to delete one SecurityStatus.
     * @example
     * // Delete one SecurityStatus
     * const SecurityStatus = await prisma.securityStatus.delete({
     *   where: {
     *     // ... filter to delete one SecurityStatus
     *   }
     * })
     * 
     */
    delete<T extends SecurityStatusDeleteArgs>(args: SelectSubset<T, SecurityStatusDeleteArgs<ExtArgs>>): Prisma__SecurityStatusClient<$Result.GetResult<Prisma.$SecurityStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityStatus.
     * @param {SecurityStatusUpdateArgs} args - Arguments to update one SecurityStatus.
     * @example
     * // Update one SecurityStatus
     * const securityStatus = await prisma.securityStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityStatusUpdateArgs>(args: SelectSubset<T, SecurityStatusUpdateArgs<ExtArgs>>): Prisma__SecurityStatusClient<$Result.GetResult<Prisma.$SecurityStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityStatuses.
     * @param {SecurityStatusDeleteManyArgs} args - Arguments to filter SecurityStatuses to delete.
     * @example
     * // Delete a few SecurityStatuses
     * const { count } = await prisma.securityStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityStatusDeleteManyArgs>(args?: SelectSubset<T, SecurityStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityStatuses
     * const securityStatus = await prisma.securityStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityStatusUpdateManyArgs>(args: SelectSubset<T, SecurityStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SecurityStatus.
     * @param {SecurityStatusUpsertArgs} args - Arguments to update or create a SecurityStatus.
     * @example
     * // Update or create a SecurityStatus
     * const securityStatus = await prisma.securityStatus.upsert({
     *   create: {
     *     // ... data to create a SecurityStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityStatus we want to update
     *   }
     * })
     */
    upsert<T extends SecurityStatusUpsertArgs>(args: SelectSubset<T, SecurityStatusUpsertArgs<ExtArgs>>): Prisma__SecurityStatusClient<$Result.GetResult<Prisma.$SecurityStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityStatusCountArgs} args - Arguments to filter SecurityStatuses to count.
     * @example
     * // Count the number of SecurityStatuses
     * const count = await prisma.securityStatus.count({
     *   where: {
     *     // ... the filter for the SecurityStatuses we want to count
     *   }
     * })
    **/
    count<T extends SecurityStatusCountArgs>(
      args?: Subset<T, SecurityStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecurityStatusAggregateArgs>(args: Subset<T, SecurityStatusAggregateArgs>): Prisma.PrismaPromise<GetSecurityStatusAggregateType<T>>

    /**
     * Group by SecurityStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityStatusGroupByArgs} args - Group by arguments.
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
      T extends SecurityStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityStatusGroupByArgs['orderBy'] }
        : { orderBy?: SecurityStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecurityStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityStatus model
   */
  readonly fields: SecurityStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends SecurityStatus$deviceArgs<ExtArgs> = {}>(args?: Subset<T, SecurityStatus$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SecurityStatus model
   */
  interface SecurityStatusFieldRefs {
    readonly id: FieldRef<"SecurityStatus", 'String'>
    readonly name: FieldRef<"SecurityStatus", 'String'>
    readonly mac: FieldRef<"SecurityStatus", 'String'>
    readonly group: FieldRef<"SecurityStatus", 'String'>
    readonly isManaged: FieldRef<"SecurityStatus", 'Boolean'>
    readonly isManagedWithBest: FieldRef<"SecurityStatus", 'Boolean'>
    readonly syncedAt: FieldRef<"SecurityStatus", 'DateTime'>
    readonly deviceId: FieldRef<"SecurityStatus", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SecurityStatus findUnique
   */
  export type SecurityStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
    /**
     * Filter, which SecurityStatus to fetch.
     */
    where: SecurityStatusWhereUniqueInput
  }

  /**
   * SecurityStatus findUniqueOrThrow
   */
  export type SecurityStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
    /**
     * Filter, which SecurityStatus to fetch.
     */
    where: SecurityStatusWhereUniqueInput
  }

  /**
   * SecurityStatus findFirst
   */
  export type SecurityStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
    /**
     * Filter, which SecurityStatus to fetch.
     */
    where?: SecurityStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityStatuses to fetch.
     */
    orderBy?: SecurityStatusOrderByWithRelationInput | SecurityStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityStatuses.
     */
    cursor?: SecurityStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityStatuses.
     */
    distinct?: SecurityStatusScalarFieldEnum | SecurityStatusScalarFieldEnum[]
  }

  /**
   * SecurityStatus findFirstOrThrow
   */
  export type SecurityStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
    /**
     * Filter, which SecurityStatus to fetch.
     */
    where?: SecurityStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityStatuses to fetch.
     */
    orderBy?: SecurityStatusOrderByWithRelationInput | SecurityStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityStatuses.
     */
    cursor?: SecurityStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityStatuses.
     */
    distinct?: SecurityStatusScalarFieldEnum | SecurityStatusScalarFieldEnum[]
  }

  /**
   * SecurityStatus findMany
   */
  export type SecurityStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
    /**
     * Filter, which SecurityStatuses to fetch.
     */
    where?: SecurityStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityStatuses to fetch.
     */
    orderBy?: SecurityStatusOrderByWithRelationInput | SecurityStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityStatuses.
     */
    cursor?: SecurityStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityStatuses.
     */
    skip?: number
    distinct?: SecurityStatusScalarFieldEnum | SecurityStatusScalarFieldEnum[]
  }

  /**
   * SecurityStatus create
   */
  export type SecurityStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityStatus.
     */
    data: XOR<SecurityStatusCreateInput, SecurityStatusUncheckedCreateInput>
  }

  /**
   * SecurityStatus createMany
   */
  export type SecurityStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityStatuses.
     */
    data: SecurityStatusCreateManyInput | SecurityStatusCreateManyInput[]
  }

  /**
   * SecurityStatus update
   */
  export type SecurityStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityStatus.
     */
    data: XOR<SecurityStatusUpdateInput, SecurityStatusUncheckedUpdateInput>
    /**
     * Choose, which SecurityStatus to update.
     */
    where: SecurityStatusWhereUniqueInput
  }

  /**
   * SecurityStatus updateMany
   */
  export type SecurityStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityStatuses.
     */
    data: XOR<SecurityStatusUpdateManyMutationInput, SecurityStatusUncheckedUpdateManyInput>
    /**
     * Filter which SecurityStatuses to update
     */
    where?: SecurityStatusWhereInput
    /**
     * Limit how many SecurityStatuses to update.
     */
    limit?: number
  }

  /**
   * SecurityStatus upsert
   */
  export type SecurityStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityStatus to update in case it exists.
     */
    where: SecurityStatusWhereUniqueInput
    /**
     * In case the SecurityStatus found by the `where` argument doesn't exist, create a new SecurityStatus with this data.
     */
    create: XOR<SecurityStatusCreateInput, SecurityStatusUncheckedCreateInput>
    /**
     * In case the SecurityStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityStatusUpdateInput, SecurityStatusUncheckedUpdateInput>
  }

  /**
   * SecurityStatus delete
   */
  export type SecurityStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
    /**
     * Filter which SecurityStatus to delete.
     */
    where: SecurityStatusWhereUniqueInput
  }

  /**
   * SecurityStatus deleteMany
   */
  export type SecurityStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityStatuses to delete
     */
    where?: SecurityStatusWhereInput
    /**
     * Limit how many SecurityStatuses to delete.
     */
    limit?: number
  }

  /**
   * SecurityStatus.device
   */
  export type SecurityStatus$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * SecurityStatus without action
   */
  export type SecurityStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityStatus
     */
    select?: SecurityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityStatus
     */
    omit?: SecurityStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityStatusInclude<ExtArgs> | null
  }


  /**
   * Model DeviceDetail
   */

  export type AggregateDeviceDetail = {
    _count: DeviceDetailCountAggregateOutputType | null
    _avg: DeviceDetailAvgAggregateOutputType | null
    _sum: DeviceDetailSumAggregateOutputType | null
    _min: DeviceDetailMinAggregateOutputType | null
    _max: DeviceDetailMaxAggregateOutputType | null
  }

  export type DeviceDetailAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
    businessUnitId: number | null
    deviceId: number | null
  }

  export type DeviceDetailSumAggregateOutputType = {
    id: number | null
    groupId: number | null
    businessUnitId: number | null
    deviceId: number | null
  }

  export type DeviceDetailMinAggregateOutputType = {
    id: number | null
    groupId: number | null
    ramal: string | null
    imei1: string | null
    imei2: string | null
    domain: string | null
    totalRam: string | null
    totalStorage: string | null
    usedStorage: string | null
    purchaseDate: Date | null
    warrantyDate: Date | null
    clientVersion: string | null
    businessUnitId: number | null
    updatedAt: Date | null
    deviceId: number | null
  }

  export type DeviceDetailMaxAggregateOutputType = {
    id: number | null
    groupId: number | null
    ramal: string | null
    imei1: string | null
    imei2: string | null
    domain: string | null
    totalRam: string | null
    totalStorage: string | null
    usedStorage: string | null
    purchaseDate: Date | null
    warrantyDate: Date | null
    clientVersion: string | null
    businessUnitId: number | null
    updatedAt: Date | null
    deviceId: number | null
  }

  export type DeviceDetailCountAggregateOutputType = {
    id: number
    groupId: number
    ramal: number
    imei1: number
    imei2: number
    domain: number
    totalRam: number
    totalStorage: number
    usedStorage: number
    purchaseDate: number
    warrantyDate: number
    clientVersion: number
    businessUnitId: number
    updatedAt: number
    deviceId: number
    _all: number
  }


  export type DeviceDetailAvgAggregateInputType = {
    id?: true
    groupId?: true
    businessUnitId?: true
    deviceId?: true
  }

  export type DeviceDetailSumAggregateInputType = {
    id?: true
    groupId?: true
    businessUnitId?: true
    deviceId?: true
  }

  export type DeviceDetailMinAggregateInputType = {
    id?: true
    groupId?: true
    ramal?: true
    imei1?: true
    imei2?: true
    domain?: true
    totalRam?: true
    totalStorage?: true
    usedStorage?: true
    purchaseDate?: true
    warrantyDate?: true
    clientVersion?: true
    businessUnitId?: true
    updatedAt?: true
    deviceId?: true
  }

  export type DeviceDetailMaxAggregateInputType = {
    id?: true
    groupId?: true
    ramal?: true
    imei1?: true
    imei2?: true
    domain?: true
    totalRam?: true
    totalStorage?: true
    usedStorage?: true
    purchaseDate?: true
    warrantyDate?: true
    clientVersion?: true
    businessUnitId?: true
    updatedAt?: true
    deviceId?: true
  }

  export type DeviceDetailCountAggregateInputType = {
    id?: true
    groupId?: true
    ramal?: true
    imei1?: true
    imei2?: true
    domain?: true
    totalRam?: true
    totalStorage?: true
    usedStorage?: true
    purchaseDate?: true
    warrantyDate?: true
    clientVersion?: true
    businessUnitId?: true
    updatedAt?: true
    deviceId?: true
    _all?: true
  }

  export type DeviceDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceDetail to aggregate.
     */
    where?: DeviceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceDetails to fetch.
     */
    orderBy?: DeviceDetailOrderByWithRelationInput | DeviceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceDetails
    **/
    _count?: true | DeviceDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceDetailMaxAggregateInputType
  }

  export type GetDeviceDetailAggregateType<T extends DeviceDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceDetail[P]>
      : GetScalarType<T[P], AggregateDeviceDetail[P]>
  }




  export type DeviceDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceDetailWhereInput
    orderBy?: DeviceDetailOrderByWithAggregationInput | DeviceDetailOrderByWithAggregationInput[]
    by: DeviceDetailScalarFieldEnum[] | DeviceDetailScalarFieldEnum
    having?: DeviceDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceDetailCountAggregateInputType | true
    _avg?: DeviceDetailAvgAggregateInputType
    _sum?: DeviceDetailSumAggregateInputType
    _min?: DeviceDetailMinAggregateInputType
    _max?: DeviceDetailMaxAggregateInputType
  }

  export type DeviceDetailGroupByOutputType = {
    id: number
    groupId: number | null
    ramal: string
    imei1: string
    imei2: string
    domain: string
    totalRam: string
    totalStorage: string
    usedStorage: string
    purchaseDate: Date | null
    warrantyDate: Date | null
    clientVersion: string
    businessUnitId: number | null
    updatedAt: Date
    deviceId: number | null
    _count: DeviceDetailCountAggregateOutputType | null
    _avg: DeviceDetailAvgAggregateOutputType | null
    _sum: DeviceDetailSumAggregateOutputType | null
    _min: DeviceDetailMinAggregateOutputType | null
    _max: DeviceDetailMaxAggregateOutputType | null
  }

  type GetDeviceDetailGroupByPayload<T extends DeviceDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceDetailGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceDetailGroupByOutputType[P]>
        }
      >
    >


  export type DeviceDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    ramal?: boolean
    imei1?: boolean
    imei2?: boolean
    domain?: boolean
    totalRam?: boolean
    totalStorage?: boolean
    usedStorage?: boolean
    purchaseDate?: boolean
    warrantyDate?: boolean
    clientVersion?: boolean
    businessUnitId?: boolean
    updatedAt?: boolean
    deviceId?: boolean
    businessUnit?: boolean | DeviceDetail$businessUnitArgs<ExtArgs>
    device?: boolean | DeviceDetail$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["deviceDetail"]>



  export type DeviceDetailSelectScalar = {
    id?: boolean
    groupId?: boolean
    ramal?: boolean
    imei1?: boolean
    imei2?: boolean
    domain?: boolean
    totalRam?: boolean
    totalStorage?: boolean
    usedStorage?: boolean
    purchaseDate?: boolean
    warrantyDate?: boolean
    clientVersion?: boolean
    businessUnitId?: boolean
    updatedAt?: boolean
    deviceId?: boolean
  }

  export type DeviceDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "ramal" | "imei1" | "imei2" | "domain" | "totalRam" | "totalStorage" | "usedStorage" | "purchaseDate" | "warrantyDate" | "clientVersion" | "businessUnitId" | "updatedAt" | "deviceId", ExtArgs["result"]["deviceDetail"]>
  export type DeviceDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessUnit?: boolean | DeviceDetail$businessUnitArgs<ExtArgs>
    device?: boolean | DeviceDetail$deviceArgs<ExtArgs>
  }

  export type $DeviceDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceDetail"
    objects: {
      businessUnit: Prisma.$BusinessUnitPayload<ExtArgs> | null
      device: Prisma.$DevicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupId: number | null
      ramal: string
      imei1: string
      imei2: string
      domain: string
      totalRam: string
      totalStorage: string
      usedStorage: string
      purchaseDate: Date | null
      warrantyDate: Date | null
      clientVersion: string
      businessUnitId: number | null
      updatedAt: Date
      deviceId: number | null
    }, ExtArgs["result"]["deviceDetail"]>
    composites: {}
  }

  type DeviceDetailGetPayload<S extends boolean | null | undefined | DeviceDetailDefaultArgs> = $Result.GetResult<Prisma.$DeviceDetailPayload, S>

  type DeviceDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceDetailCountAggregateInputType | true
    }

  export interface DeviceDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceDetail'], meta: { name: 'DeviceDetail' } }
    /**
     * Find zero or one DeviceDetail that matches the filter.
     * @param {DeviceDetailFindUniqueArgs} args - Arguments to find a DeviceDetail
     * @example
     * // Get one DeviceDetail
     * const deviceDetail = await prisma.deviceDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceDetailFindUniqueArgs>(args: SelectSubset<T, DeviceDetailFindUniqueArgs<ExtArgs>>): Prisma__DeviceDetailClient<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceDetailFindUniqueOrThrowArgs} args - Arguments to find a DeviceDetail
     * @example
     * // Get one DeviceDetail
     * const deviceDetail = await prisma.deviceDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceDetailClient<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDetailFindFirstArgs} args - Arguments to find a DeviceDetail
     * @example
     * // Get one DeviceDetail
     * const deviceDetail = await prisma.deviceDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceDetailFindFirstArgs>(args?: SelectSubset<T, DeviceDetailFindFirstArgs<ExtArgs>>): Prisma__DeviceDetailClient<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDetailFindFirstOrThrowArgs} args - Arguments to find a DeviceDetail
     * @example
     * // Get one DeviceDetail
     * const deviceDetail = await prisma.deviceDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceDetailClient<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceDetails
     * const deviceDetails = await prisma.deviceDetail.findMany()
     * 
     * // Get first 10 DeviceDetails
     * const deviceDetails = await prisma.deviceDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceDetailWithIdOnly = await prisma.deviceDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceDetailFindManyArgs>(args?: SelectSubset<T, DeviceDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceDetail.
     * @param {DeviceDetailCreateArgs} args - Arguments to create a DeviceDetail.
     * @example
     * // Create one DeviceDetail
     * const DeviceDetail = await prisma.deviceDetail.create({
     *   data: {
     *     // ... data to create a DeviceDetail
     *   }
     * })
     * 
     */
    create<T extends DeviceDetailCreateArgs>(args: SelectSubset<T, DeviceDetailCreateArgs<ExtArgs>>): Prisma__DeviceDetailClient<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceDetails.
     * @param {DeviceDetailCreateManyArgs} args - Arguments to create many DeviceDetails.
     * @example
     * // Create many DeviceDetails
     * const deviceDetail = await prisma.deviceDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceDetailCreateManyArgs>(args?: SelectSubset<T, DeviceDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeviceDetail.
     * @param {DeviceDetailDeleteArgs} args - Arguments to delete one DeviceDetail.
     * @example
     * // Delete one DeviceDetail
     * const DeviceDetail = await prisma.deviceDetail.delete({
     *   where: {
     *     // ... filter to delete one DeviceDetail
     *   }
     * })
     * 
     */
    delete<T extends DeviceDetailDeleteArgs>(args: SelectSubset<T, DeviceDetailDeleteArgs<ExtArgs>>): Prisma__DeviceDetailClient<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceDetail.
     * @param {DeviceDetailUpdateArgs} args - Arguments to update one DeviceDetail.
     * @example
     * // Update one DeviceDetail
     * const deviceDetail = await prisma.deviceDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceDetailUpdateArgs>(args: SelectSubset<T, DeviceDetailUpdateArgs<ExtArgs>>): Prisma__DeviceDetailClient<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceDetails.
     * @param {DeviceDetailDeleteManyArgs} args - Arguments to filter DeviceDetails to delete.
     * @example
     * // Delete a few DeviceDetails
     * const { count } = await prisma.deviceDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDetailDeleteManyArgs>(args?: SelectSubset<T, DeviceDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceDetails
     * const deviceDetail = await prisma.deviceDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceDetailUpdateManyArgs>(args: SelectSubset<T, DeviceDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceDetail.
     * @param {DeviceDetailUpsertArgs} args - Arguments to update or create a DeviceDetail.
     * @example
     * // Update or create a DeviceDetail
     * const deviceDetail = await prisma.deviceDetail.upsert({
     *   create: {
     *     // ... data to create a DeviceDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceDetail we want to update
     *   }
     * })
     */
    upsert<T extends DeviceDetailUpsertArgs>(args: SelectSubset<T, DeviceDetailUpsertArgs<ExtArgs>>): Prisma__DeviceDetailClient<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDetailCountArgs} args - Arguments to filter DeviceDetails to count.
     * @example
     * // Count the number of DeviceDetails
     * const count = await prisma.deviceDetail.count({
     *   where: {
     *     // ... the filter for the DeviceDetails we want to count
     *   }
     * })
    **/
    count<T extends DeviceDetailCountArgs>(
      args?: Subset<T, DeviceDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceDetailAggregateArgs>(args: Subset<T, DeviceDetailAggregateArgs>): Prisma.PrismaPromise<GetDeviceDetailAggregateType<T>>

    /**
     * Group by DeviceDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDetailGroupByArgs} args - Group by arguments.
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
      T extends DeviceDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceDetailGroupByArgs['orderBy'] }
        : { orderBy?: DeviceDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceDetail model
   */
  readonly fields: DeviceDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessUnit<T extends DeviceDetail$businessUnitArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDetail$businessUnitArgs<ExtArgs>>): Prisma__BusinessUnitClient<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    device<T extends DeviceDetail$deviceArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDetail$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DeviceDetail model
   */
  interface DeviceDetailFieldRefs {
    readonly id: FieldRef<"DeviceDetail", 'Int'>
    readonly groupId: FieldRef<"DeviceDetail", 'Int'>
    readonly ramal: FieldRef<"DeviceDetail", 'String'>
    readonly imei1: FieldRef<"DeviceDetail", 'String'>
    readonly imei2: FieldRef<"DeviceDetail", 'String'>
    readonly domain: FieldRef<"DeviceDetail", 'String'>
    readonly totalRam: FieldRef<"DeviceDetail", 'String'>
    readonly totalStorage: FieldRef<"DeviceDetail", 'String'>
    readonly usedStorage: FieldRef<"DeviceDetail", 'String'>
    readonly purchaseDate: FieldRef<"DeviceDetail", 'DateTime'>
    readonly warrantyDate: FieldRef<"DeviceDetail", 'DateTime'>
    readonly clientVersion: FieldRef<"DeviceDetail", 'String'>
    readonly businessUnitId: FieldRef<"DeviceDetail", 'Int'>
    readonly updatedAt: FieldRef<"DeviceDetail", 'DateTime'>
    readonly deviceId: FieldRef<"DeviceDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeviceDetail findUnique
   */
  export type DeviceDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    /**
     * Filter, which DeviceDetail to fetch.
     */
    where: DeviceDetailWhereUniqueInput
  }

  /**
   * DeviceDetail findUniqueOrThrow
   */
  export type DeviceDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    /**
     * Filter, which DeviceDetail to fetch.
     */
    where: DeviceDetailWhereUniqueInput
  }

  /**
   * DeviceDetail findFirst
   */
  export type DeviceDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    /**
     * Filter, which DeviceDetail to fetch.
     */
    where?: DeviceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceDetails to fetch.
     */
    orderBy?: DeviceDetailOrderByWithRelationInput | DeviceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceDetails.
     */
    cursor?: DeviceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceDetails.
     */
    distinct?: DeviceDetailScalarFieldEnum | DeviceDetailScalarFieldEnum[]
  }

  /**
   * DeviceDetail findFirstOrThrow
   */
  export type DeviceDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    /**
     * Filter, which DeviceDetail to fetch.
     */
    where?: DeviceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceDetails to fetch.
     */
    orderBy?: DeviceDetailOrderByWithRelationInput | DeviceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceDetails.
     */
    cursor?: DeviceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceDetails.
     */
    distinct?: DeviceDetailScalarFieldEnum | DeviceDetailScalarFieldEnum[]
  }

  /**
   * DeviceDetail findMany
   */
  export type DeviceDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    /**
     * Filter, which DeviceDetails to fetch.
     */
    where?: DeviceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceDetails to fetch.
     */
    orderBy?: DeviceDetailOrderByWithRelationInput | DeviceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceDetails.
     */
    cursor?: DeviceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceDetails.
     */
    skip?: number
    distinct?: DeviceDetailScalarFieldEnum | DeviceDetailScalarFieldEnum[]
  }

  /**
   * DeviceDetail create
   */
  export type DeviceDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceDetail.
     */
    data: XOR<DeviceDetailCreateInput, DeviceDetailUncheckedCreateInput>
  }

  /**
   * DeviceDetail createMany
   */
  export type DeviceDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceDetails.
     */
    data: DeviceDetailCreateManyInput | DeviceDetailCreateManyInput[]
  }

  /**
   * DeviceDetail update
   */
  export type DeviceDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceDetail.
     */
    data: XOR<DeviceDetailUpdateInput, DeviceDetailUncheckedUpdateInput>
    /**
     * Choose, which DeviceDetail to update.
     */
    where: DeviceDetailWhereUniqueInput
  }

  /**
   * DeviceDetail updateMany
   */
  export type DeviceDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceDetails.
     */
    data: XOR<DeviceDetailUpdateManyMutationInput, DeviceDetailUncheckedUpdateManyInput>
    /**
     * Filter which DeviceDetails to update
     */
    where?: DeviceDetailWhereInput
    /**
     * Limit how many DeviceDetails to update.
     */
    limit?: number
  }

  /**
   * DeviceDetail upsert
   */
  export type DeviceDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceDetail to update in case it exists.
     */
    where: DeviceDetailWhereUniqueInput
    /**
     * In case the DeviceDetail found by the `where` argument doesn't exist, create a new DeviceDetail with this data.
     */
    create: XOR<DeviceDetailCreateInput, DeviceDetailUncheckedCreateInput>
    /**
     * In case the DeviceDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceDetailUpdateInput, DeviceDetailUncheckedUpdateInput>
  }

  /**
   * DeviceDetail delete
   */
  export type DeviceDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    /**
     * Filter which DeviceDetail to delete.
     */
    where: DeviceDetailWhereUniqueInput
  }

  /**
   * DeviceDetail deleteMany
   */
  export type DeviceDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceDetails to delete
     */
    where?: DeviceDetailWhereInput
    /**
     * Limit how many DeviceDetails to delete.
     */
    limit?: number
  }

  /**
   * DeviceDetail.businessUnit
   */
  export type DeviceDetail$businessUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    where?: BusinessUnitWhereInput
  }

  /**
   * DeviceDetail.device
   */
  export type DeviceDetail$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * DeviceDetail without action
   */
  export type DeviceDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
  }


  /**
   * Model SecurityEvent
   */

  export type AggregateSecurityEvent = {
    _count: SecurityEventCountAggregateOutputType | null
    _avg: SecurityEventAvgAggregateOutputType | null
    _sum: SecurityEventSumAggregateOutputType | null
    _min: SecurityEventMinAggregateOutputType | null
    _max: SecurityEventMaxAggregateOutputType | null
  }

  export type SecurityEventAvgAggregateOutputType = {
    id: number | null
    occurrences: number | null
    deviceId: number | null
  }

  export type SecurityEventSumAggregateOutputType = {
    id: number | null
    occurrences: number | null
    deviceId: number | null
  }

  export type SecurityEventMinAggregateOutputType = {
    id: number | null
    deviceName: string | null
    endpoint: string | null
    username: string | null
    occurrences: number | null
    lastOccurrence: Date | null
    module: string | null
    type: string | null
    companyName: string | null
    deviceId: number | null
  }

  export type SecurityEventMaxAggregateOutputType = {
    id: number | null
    deviceName: string | null
    endpoint: string | null
    username: string | null
    occurrences: number | null
    lastOccurrence: Date | null
    module: string | null
    type: string | null
    companyName: string | null
    deviceId: number | null
  }

  export type SecurityEventCountAggregateOutputType = {
    id: number
    deviceName: number
    endpoint: number
    username: number
    occurrences: number
    lastOccurrence: number
    module: number
    type: number
    companyName: number
    deviceId: number
    _all: number
  }


  export type SecurityEventAvgAggregateInputType = {
    id?: true
    occurrences?: true
    deviceId?: true
  }

  export type SecurityEventSumAggregateInputType = {
    id?: true
    occurrences?: true
    deviceId?: true
  }

  export type SecurityEventMinAggregateInputType = {
    id?: true
    deviceName?: true
    endpoint?: true
    username?: true
    occurrences?: true
    lastOccurrence?: true
    module?: true
    type?: true
    companyName?: true
    deviceId?: true
  }

  export type SecurityEventMaxAggregateInputType = {
    id?: true
    deviceName?: true
    endpoint?: true
    username?: true
    occurrences?: true
    lastOccurrence?: true
    module?: true
    type?: true
    companyName?: true
    deviceId?: true
  }

  export type SecurityEventCountAggregateInputType = {
    id?: true
    deviceName?: true
    endpoint?: true
    username?: true
    occurrences?: true
    lastOccurrence?: true
    module?: true
    type?: true
    companyName?: true
    deviceId?: true
    _all?: true
  }

  export type SecurityEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityEvent to aggregate.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityEvents
    **/
    _count?: true | SecurityEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecurityEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityEventMaxAggregateInputType
  }

  export type GetSecurityEventAggregateType<T extends SecurityEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityEvent[P]>
      : GetScalarType<T[P], AggregateSecurityEvent[P]>
  }




  export type SecurityEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityEventWhereInput
    orderBy?: SecurityEventOrderByWithAggregationInput | SecurityEventOrderByWithAggregationInput[]
    by: SecurityEventScalarFieldEnum[] | SecurityEventScalarFieldEnum
    having?: SecurityEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityEventCountAggregateInputType | true
    _avg?: SecurityEventAvgAggregateInputType
    _sum?: SecurityEventSumAggregateInputType
    _min?: SecurityEventMinAggregateInputType
    _max?: SecurityEventMaxAggregateInputType
  }

  export type SecurityEventGroupByOutputType = {
    id: number
    deviceName: string
    endpoint: string
    username: string
    occurrences: number
    lastOccurrence: Date
    module: string
    type: string
    companyName: string
    deviceId: number | null
    _count: SecurityEventCountAggregateOutputType | null
    _avg: SecurityEventAvgAggregateOutputType | null
    _sum: SecurityEventSumAggregateOutputType | null
    _min: SecurityEventMinAggregateOutputType | null
    _max: SecurityEventMaxAggregateOutputType | null
  }

  type GetSecurityEventGroupByPayload<T extends SecurityEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityEventGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityEventGroupByOutputType[P]>
        }
      >
    >


  export type SecurityEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceName?: boolean
    endpoint?: boolean
    username?: boolean
    occurrences?: boolean
    lastOccurrence?: boolean
    module?: boolean
    type?: boolean
    companyName?: boolean
    deviceId?: boolean
    device?: boolean | SecurityEvent$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["securityEvent"]>



  export type SecurityEventSelectScalar = {
    id?: boolean
    deviceName?: boolean
    endpoint?: boolean
    username?: boolean
    occurrences?: boolean
    lastOccurrence?: boolean
    module?: boolean
    type?: boolean
    companyName?: boolean
    deviceId?: boolean
  }

  export type SecurityEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceName" | "endpoint" | "username" | "occurrences" | "lastOccurrence" | "module" | "type" | "companyName" | "deviceId", ExtArgs["result"]["securityEvent"]>
  export type SecurityEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | SecurityEvent$deviceArgs<ExtArgs>
  }

  export type $SecurityEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityEvent"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deviceName: string
      endpoint: string
      username: string
      occurrences: number
      lastOccurrence: Date
      module: string
      type: string
      companyName: string
      deviceId: number | null
    }, ExtArgs["result"]["securityEvent"]>
    composites: {}
  }

  type SecurityEventGetPayload<S extends boolean | null | undefined | SecurityEventDefaultArgs> = $Result.GetResult<Prisma.$SecurityEventPayload, S>

  type SecurityEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityEventCountAggregateInputType | true
    }

  export interface SecurityEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityEvent'], meta: { name: 'SecurityEvent' } }
    /**
     * Find zero or one SecurityEvent that matches the filter.
     * @param {SecurityEventFindUniqueArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityEventFindUniqueArgs>(args: SelectSubset<T, SecurityEventFindUniqueArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityEventFindUniqueOrThrowArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindFirstArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityEventFindFirstArgs>(args?: SelectSubset<T, SecurityEventFindFirstArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindFirstOrThrowArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityEvents
     * const securityEvents = await prisma.securityEvent.findMany()
     * 
     * // Get first 10 SecurityEvents
     * const securityEvents = await prisma.securityEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityEventWithIdOnly = await prisma.securityEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityEventFindManyArgs>(args?: SelectSubset<T, SecurityEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityEvent.
     * @param {SecurityEventCreateArgs} args - Arguments to create a SecurityEvent.
     * @example
     * // Create one SecurityEvent
     * const SecurityEvent = await prisma.securityEvent.create({
     *   data: {
     *     // ... data to create a SecurityEvent
     *   }
     * })
     * 
     */
    create<T extends SecurityEventCreateArgs>(args: SelectSubset<T, SecurityEventCreateArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityEvents.
     * @param {SecurityEventCreateManyArgs} args - Arguments to create many SecurityEvents.
     * @example
     * // Create many SecurityEvents
     * const securityEvent = await prisma.securityEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityEventCreateManyArgs>(args?: SelectSubset<T, SecurityEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SecurityEvent.
     * @param {SecurityEventDeleteArgs} args - Arguments to delete one SecurityEvent.
     * @example
     * // Delete one SecurityEvent
     * const SecurityEvent = await prisma.securityEvent.delete({
     *   where: {
     *     // ... filter to delete one SecurityEvent
     *   }
     * })
     * 
     */
    delete<T extends SecurityEventDeleteArgs>(args: SelectSubset<T, SecurityEventDeleteArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityEvent.
     * @param {SecurityEventUpdateArgs} args - Arguments to update one SecurityEvent.
     * @example
     * // Update one SecurityEvent
     * const securityEvent = await prisma.securityEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityEventUpdateArgs>(args: SelectSubset<T, SecurityEventUpdateArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityEvents.
     * @param {SecurityEventDeleteManyArgs} args - Arguments to filter SecurityEvents to delete.
     * @example
     * // Delete a few SecurityEvents
     * const { count } = await prisma.securityEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityEventDeleteManyArgs>(args?: SelectSubset<T, SecurityEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityEvents
     * const securityEvent = await prisma.securityEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityEventUpdateManyArgs>(args: SelectSubset<T, SecurityEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SecurityEvent.
     * @param {SecurityEventUpsertArgs} args - Arguments to update or create a SecurityEvent.
     * @example
     * // Update or create a SecurityEvent
     * const securityEvent = await prisma.securityEvent.upsert({
     *   create: {
     *     // ... data to create a SecurityEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityEvent we want to update
     *   }
     * })
     */
    upsert<T extends SecurityEventUpsertArgs>(args: SelectSubset<T, SecurityEventUpsertArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventCountArgs} args - Arguments to filter SecurityEvents to count.
     * @example
     * // Count the number of SecurityEvents
     * const count = await prisma.securityEvent.count({
     *   where: {
     *     // ... the filter for the SecurityEvents we want to count
     *   }
     * })
    **/
    count<T extends SecurityEventCountArgs>(
      args?: Subset<T, SecurityEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecurityEventAggregateArgs>(args: Subset<T, SecurityEventAggregateArgs>): Prisma.PrismaPromise<GetSecurityEventAggregateType<T>>

    /**
     * Group by SecurityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventGroupByArgs} args - Group by arguments.
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
      T extends SecurityEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityEventGroupByArgs['orderBy'] }
        : { orderBy?: SecurityEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecurityEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityEvent model
   */
  readonly fields: SecurityEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends SecurityEvent$deviceArgs<ExtArgs> = {}>(args?: Subset<T, SecurityEvent$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SecurityEvent model
   */
  interface SecurityEventFieldRefs {
    readonly id: FieldRef<"SecurityEvent", 'Int'>
    readonly deviceName: FieldRef<"SecurityEvent", 'String'>
    readonly endpoint: FieldRef<"SecurityEvent", 'String'>
    readonly username: FieldRef<"SecurityEvent", 'String'>
    readonly occurrences: FieldRef<"SecurityEvent", 'Int'>
    readonly lastOccurrence: FieldRef<"SecurityEvent", 'DateTime'>
    readonly module: FieldRef<"SecurityEvent", 'String'>
    readonly type: FieldRef<"SecurityEvent", 'String'>
    readonly companyName: FieldRef<"SecurityEvent", 'String'>
    readonly deviceId: FieldRef<"SecurityEvent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SecurityEvent findUnique
   */
  export type SecurityEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent findUniqueOrThrow
   */
  export type SecurityEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent findFirst
   */
  export type SecurityEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityEvents.
     */
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent findFirstOrThrow
   */
  export type SecurityEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityEvents.
     */
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent findMany
   */
  export type SecurityEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvents to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent create
   */
  export type SecurityEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityEvent.
     */
    data: XOR<SecurityEventCreateInput, SecurityEventUncheckedCreateInput>
  }

  /**
   * SecurityEvent createMany
   */
  export type SecurityEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityEvents.
     */
    data: SecurityEventCreateManyInput | SecurityEventCreateManyInput[]
  }

  /**
   * SecurityEvent update
   */
  export type SecurityEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityEvent.
     */
    data: XOR<SecurityEventUpdateInput, SecurityEventUncheckedUpdateInput>
    /**
     * Choose, which SecurityEvent to update.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent updateMany
   */
  export type SecurityEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityEvents.
     */
    data: XOR<SecurityEventUpdateManyMutationInput, SecurityEventUncheckedUpdateManyInput>
    /**
     * Filter which SecurityEvents to update
     */
    where?: SecurityEventWhereInput
    /**
     * Limit how many SecurityEvents to update.
     */
    limit?: number
  }

  /**
   * SecurityEvent upsert
   */
  export type SecurityEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityEvent to update in case it exists.
     */
    where: SecurityEventWhereUniqueInput
    /**
     * In case the SecurityEvent found by the `where` argument doesn't exist, create a new SecurityEvent with this data.
     */
    create: XOR<SecurityEventCreateInput, SecurityEventUncheckedCreateInput>
    /**
     * In case the SecurityEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityEventUpdateInput, SecurityEventUncheckedUpdateInput>
  }

  /**
   * SecurityEvent delete
   */
  export type SecurityEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter which SecurityEvent to delete.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent deleteMany
   */
  export type SecurityEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityEvents to delete
     */
    where?: SecurityEventWhereInput
    /**
     * Limit how many SecurityEvents to delete.
     */
    limit?: number
  }

  /**
   * SecurityEvent.device
   */
  export type SecurityEvent$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * SecurityEvent without action
   */
  export type SecurityEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
  }


  /**
   * Model Recomendation
   */

  export type AggregateRecomendation = {
    _count: RecomendationCountAggregateOutputType | null
    _avg: RecomendationAvgAggregateOutputType | null
    _sum: RecomendationSumAggregateOutputType | null
    _min: RecomendationMinAggregateOutputType | null
    _max: RecomendationMaxAggregateOutputType | null
  }

  export type RecomendationAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type RecomendationSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type RecomendationMinAggregateOutputType = {
    id: number | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type RecomendationMaxAggregateOutputType = {
    id: number | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type RecomendationCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type RecomendationAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type RecomendationSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type RecomendationMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type RecomendationMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type RecomendationCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type RecomendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recomendation to aggregate.
     */
    where?: RecomendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recomendations to fetch.
     */
    orderBy?: RecomendationOrderByWithRelationInput | RecomendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecomendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recomendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recomendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recomendations
    **/
    _count?: true | RecomendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecomendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecomendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecomendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecomendationMaxAggregateInputType
  }

  export type GetRecomendationAggregateType<T extends RecomendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecomendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecomendation[P]>
      : GetScalarType<T[P], AggregateRecomendation[P]>
  }




  export type RecomendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecomendationWhereInput
    orderBy?: RecomendationOrderByWithAggregationInput | RecomendationOrderByWithAggregationInput[]
    by: RecomendationScalarFieldEnum[] | RecomendationScalarFieldEnum
    having?: RecomendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecomendationCountAggregateInputType | true
    _avg?: RecomendationAvgAggregateInputType
    _sum?: RecomendationSumAggregateInputType
    _min?: RecomendationMinAggregateInputType
    _max?: RecomendationMaxAggregateInputType
  }

  export type RecomendationGroupByOutputType = {
    id: number
    text: string
    createdAt: Date
    updatedAt: Date
    clientId: number
    _count: RecomendationCountAggregateOutputType | null
    _avg: RecomendationAvgAggregateOutputType | null
    _sum: RecomendationSumAggregateOutputType | null
    _min: RecomendationMinAggregateOutputType | null
    _max: RecomendationMaxAggregateOutputType | null
  }

  type GetRecomendationGroupByPayload<T extends RecomendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecomendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecomendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecomendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecomendationGroupByOutputType[P]>
        }
      >
    >


  export type RecomendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recomendation"]>



  export type RecomendationSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type RecomendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["recomendation"]>
  export type RecomendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $RecomendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recomendation"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      createdAt: Date
      updatedAt: Date
      clientId: number
    }, ExtArgs["result"]["recomendation"]>
    composites: {}
  }

  type RecomendationGetPayload<S extends boolean | null | undefined | RecomendationDefaultArgs> = $Result.GetResult<Prisma.$RecomendationPayload, S>

  type RecomendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecomendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecomendationCountAggregateInputType | true
    }

  export interface RecomendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recomendation'], meta: { name: 'Recomendation' } }
    /**
     * Find zero or one Recomendation that matches the filter.
     * @param {RecomendationFindUniqueArgs} args - Arguments to find a Recomendation
     * @example
     * // Get one Recomendation
     * const recomendation = await prisma.recomendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecomendationFindUniqueArgs>(args: SelectSubset<T, RecomendationFindUniqueArgs<ExtArgs>>): Prisma__RecomendationClient<$Result.GetResult<Prisma.$RecomendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recomendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecomendationFindUniqueOrThrowArgs} args - Arguments to find a Recomendation
     * @example
     * // Get one Recomendation
     * const recomendation = await prisma.recomendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecomendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecomendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecomendationClient<$Result.GetResult<Prisma.$RecomendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recomendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendationFindFirstArgs} args - Arguments to find a Recomendation
     * @example
     * // Get one Recomendation
     * const recomendation = await prisma.recomendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecomendationFindFirstArgs>(args?: SelectSubset<T, RecomendationFindFirstArgs<ExtArgs>>): Prisma__RecomendationClient<$Result.GetResult<Prisma.$RecomendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recomendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendationFindFirstOrThrowArgs} args - Arguments to find a Recomendation
     * @example
     * // Get one Recomendation
     * const recomendation = await prisma.recomendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecomendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecomendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecomendationClient<$Result.GetResult<Prisma.$RecomendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recomendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recomendations
     * const recomendations = await prisma.recomendation.findMany()
     * 
     * // Get first 10 Recomendations
     * const recomendations = await prisma.recomendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recomendationWithIdOnly = await prisma.recomendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecomendationFindManyArgs>(args?: SelectSubset<T, RecomendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecomendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recomendation.
     * @param {RecomendationCreateArgs} args - Arguments to create a Recomendation.
     * @example
     * // Create one Recomendation
     * const Recomendation = await prisma.recomendation.create({
     *   data: {
     *     // ... data to create a Recomendation
     *   }
     * })
     * 
     */
    create<T extends RecomendationCreateArgs>(args: SelectSubset<T, RecomendationCreateArgs<ExtArgs>>): Prisma__RecomendationClient<$Result.GetResult<Prisma.$RecomendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recomendations.
     * @param {RecomendationCreateManyArgs} args - Arguments to create many Recomendations.
     * @example
     * // Create many Recomendations
     * const recomendation = await prisma.recomendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecomendationCreateManyArgs>(args?: SelectSubset<T, RecomendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recomendation.
     * @param {RecomendationDeleteArgs} args - Arguments to delete one Recomendation.
     * @example
     * // Delete one Recomendation
     * const Recomendation = await prisma.recomendation.delete({
     *   where: {
     *     // ... filter to delete one Recomendation
     *   }
     * })
     * 
     */
    delete<T extends RecomendationDeleteArgs>(args: SelectSubset<T, RecomendationDeleteArgs<ExtArgs>>): Prisma__RecomendationClient<$Result.GetResult<Prisma.$RecomendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recomendation.
     * @param {RecomendationUpdateArgs} args - Arguments to update one Recomendation.
     * @example
     * // Update one Recomendation
     * const recomendation = await prisma.recomendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecomendationUpdateArgs>(args: SelectSubset<T, RecomendationUpdateArgs<ExtArgs>>): Prisma__RecomendationClient<$Result.GetResult<Prisma.$RecomendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recomendations.
     * @param {RecomendationDeleteManyArgs} args - Arguments to filter Recomendations to delete.
     * @example
     * // Delete a few Recomendations
     * const { count } = await prisma.recomendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecomendationDeleteManyArgs>(args?: SelectSubset<T, RecomendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recomendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recomendations
     * const recomendation = await prisma.recomendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecomendationUpdateManyArgs>(args: SelectSubset<T, RecomendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recomendation.
     * @param {RecomendationUpsertArgs} args - Arguments to update or create a Recomendation.
     * @example
     * // Update or create a Recomendation
     * const recomendation = await prisma.recomendation.upsert({
     *   create: {
     *     // ... data to create a Recomendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recomendation we want to update
     *   }
     * })
     */
    upsert<T extends RecomendationUpsertArgs>(args: SelectSubset<T, RecomendationUpsertArgs<ExtArgs>>): Prisma__RecomendationClient<$Result.GetResult<Prisma.$RecomendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recomendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendationCountArgs} args - Arguments to filter Recomendations to count.
     * @example
     * // Count the number of Recomendations
     * const count = await prisma.recomendation.count({
     *   where: {
     *     // ... the filter for the Recomendations we want to count
     *   }
     * })
    **/
    count<T extends RecomendationCountArgs>(
      args?: Subset<T, RecomendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecomendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recomendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecomendationAggregateArgs>(args: Subset<T, RecomendationAggregateArgs>): Prisma.PrismaPromise<GetRecomendationAggregateType<T>>

    /**
     * Group by Recomendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendationGroupByArgs} args - Group by arguments.
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
      T extends RecomendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecomendationGroupByArgs['orderBy'] }
        : { orderBy?: RecomendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecomendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecomendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recomendation model
   */
  readonly fields: RecomendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recomendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecomendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Recomendation model
   */
  interface RecomendationFieldRefs {
    readonly id: FieldRef<"Recomendation", 'Int'>
    readonly text: FieldRef<"Recomendation", 'String'>
    readonly createdAt: FieldRef<"Recomendation", 'DateTime'>
    readonly updatedAt: FieldRef<"Recomendation", 'DateTime'>
    readonly clientId: FieldRef<"Recomendation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Recomendation findUnique
   */
  export type RecomendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
    /**
     * Filter, which Recomendation to fetch.
     */
    where: RecomendationWhereUniqueInput
  }

  /**
   * Recomendation findUniqueOrThrow
   */
  export type RecomendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
    /**
     * Filter, which Recomendation to fetch.
     */
    where: RecomendationWhereUniqueInput
  }

  /**
   * Recomendation findFirst
   */
  export type RecomendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
    /**
     * Filter, which Recomendation to fetch.
     */
    where?: RecomendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recomendations to fetch.
     */
    orderBy?: RecomendationOrderByWithRelationInput | RecomendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recomendations.
     */
    cursor?: RecomendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recomendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recomendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recomendations.
     */
    distinct?: RecomendationScalarFieldEnum | RecomendationScalarFieldEnum[]
  }

  /**
   * Recomendation findFirstOrThrow
   */
  export type RecomendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
    /**
     * Filter, which Recomendation to fetch.
     */
    where?: RecomendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recomendations to fetch.
     */
    orderBy?: RecomendationOrderByWithRelationInput | RecomendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recomendations.
     */
    cursor?: RecomendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recomendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recomendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recomendations.
     */
    distinct?: RecomendationScalarFieldEnum | RecomendationScalarFieldEnum[]
  }

  /**
   * Recomendation findMany
   */
  export type RecomendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
    /**
     * Filter, which Recomendations to fetch.
     */
    where?: RecomendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recomendations to fetch.
     */
    orderBy?: RecomendationOrderByWithRelationInput | RecomendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recomendations.
     */
    cursor?: RecomendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recomendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recomendations.
     */
    skip?: number
    distinct?: RecomendationScalarFieldEnum | RecomendationScalarFieldEnum[]
  }

  /**
   * Recomendation create
   */
  export type RecomendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
    /**
     * The data needed to create a Recomendation.
     */
    data: XOR<RecomendationCreateInput, RecomendationUncheckedCreateInput>
  }

  /**
   * Recomendation createMany
   */
  export type RecomendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recomendations.
     */
    data: RecomendationCreateManyInput | RecomendationCreateManyInput[]
  }

  /**
   * Recomendation update
   */
  export type RecomendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
    /**
     * The data needed to update a Recomendation.
     */
    data: XOR<RecomendationUpdateInput, RecomendationUncheckedUpdateInput>
    /**
     * Choose, which Recomendation to update.
     */
    where: RecomendationWhereUniqueInput
  }

  /**
   * Recomendation updateMany
   */
  export type RecomendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recomendations.
     */
    data: XOR<RecomendationUpdateManyMutationInput, RecomendationUncheckedUpdateManyInput>
    /**
     * Filter which Recomendations to update
     */
    where?: RecomendationWhereInput
    /**
     * Limit how many Recomendations to update.
     */
    limit?: number
  }

  /**
   * Recomendation upsert
   */
  export type RecomendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
    /**
     * The filter to search for the Recomendation to update in case it exists.
     */
    where: RecomendationWhereUniqueInput
    /**
     * In case the Recomendation found by the `where` argument doesn't exist, create a new Recomendation with this data.
     */
    create: XOR<RecomendationCreateInput, RecomendationUncheckedCreateInput>
    /**
     * In case the Recomendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecomendationUpdateInput, RecomendationUncheckedUpdateInput>
  }

  /**
   * Recomendation delete
   */
  export type RecomendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
    /**
     * Filter which Recomendation to delete.
     */
    where: RecomendationWhereUniqueInput
  }

  /**
   * Recomendation deleteMany
   */
  export type RecomendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recomendations to delete
     */
    where?: RecomendationWhereInput
    /**
     * Limit how many Recomendations to delete.
     */
    limit?: number
  }

  /**
   * Recomendation without action
   */
  export type RecomendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recomendation
     */
    select?: RecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recomendation
     */
    omit?: RecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendationInclude<ExtArgs> | null
  }


  /**
   * Model Disclaimer
   */

  export type AggregateDisclaimer = {
    _count: DisclaimerCountAggregateOutputType | null
    _avg: DisclaimerAvgAggregateOutputType | null
    _sum: DisclaimerSumAggregateOutputType | null
    _min: DisclaimerMinAggregateOutputType | null
    _max: DisclaimerMaxAggregateOutputType | null
  }

  export type DisclaimerAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type DisclaimerSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type DisclaimerMinAggregateOutputType = {
    id: number | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type DisclaimerMaxAggregateOutputType = {
    id: number | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type DisclaimerCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type DisclaimerAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type DisclaimerSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type DisclaimerMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type DisclaimerMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type DisclaimerCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type DisclaimerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disclaimer to aggregate.
     */
    where?: DisclaimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disclaimers to fetch.
     */
    orderBy?: DisclaimerOrderByWithRelationInput | DisclaimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisclaimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disclaimers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disclaimers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disclaimers
    **/
    _count?: true | DisclaimerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisclaimerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisclaimerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisclaimerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisclaimerMaxAggregateInputType
  }

  export type GetDisclaimerAggregateType<T extends DisclaimerAggregateArgs> = {
        [P in keyof T & keyof AggregateDisclaimer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisclaimer[P]>
      : GetScalarType<T[P], AggregateDisclaimer[P]>
  }




  export type DisclaimerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisclaimerWhereInput
    orderBy?: DisclaimerOrderByWithAggregationInput | DisclaimerOrderByWithAggregationInput[]
    by: DisclaimerScalarFieldEnum[] | DisclaimerScalarFieldEnum
    having?: DisclaimerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisclaimerCountAggregateInputType | true
    _avg?: DisclaimerAvgAggregateInputType
    _sum?: DisclaimerSumAggregateInputType
    _min?: DisclaimerMinAggregateInputType
    _max?: DisclaimerMaxAggregateInputType
  }

  export type DisclaimerGroupByOutputType = {
    id: number
    text: string
    createdAt: Date
    updatedAt: Date
    clientId: number
    _count: DisclaimerCountAggregateOutputType | null
    _avg: DisclaimerAvgAggregateOutputType | null
    _sum: DisclaimerSumAggregateOutputType | null
    _min: DisclaimerMinAggregateOutputType | null
    _max: DisclaimerMaxAggregateOutputType | null
  }

  type GetDisclaimerGroupByPayload<T extends DisclaimerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisclaimerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisclaimerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisclaimerGroupByOutputType[P]>
            : GetScalarType<T[P], DisclaimerGroupByOutputType[P]>
        }
      >
    >


  export type DisclaimerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disclaimer"]>



  export type DisclaimerSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type DisclaimerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["disclaimer"]>
  export type DisclaimerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $DisclaimerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disclaimer"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      createdAt: Date
      updatedAt: Date
      clientId: number
    }, ExtArgs["result"]["disclaimer"]>
    composites: {}
  }

  type DisclaimerGetPayload<S extends boolean | null | undefined | DisclaimerDefaultArgs> = $Result.GetResult<Prisma.$DisclaimerPayload, S>

  type DisclaimerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisclaimerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisclaimerCountAggregateInputType | true
    }

  export interface DisclaimerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disclaimer'], meta: { name: 'Disclaimer' } }
    /**
     * Find zero or one Disclaimer that matches the filter.
     * @param {DisclaimerFindUniqueArgs} args - Arguments to find a Disclaimer
     * @example
     * // Get one Disclaimer
     * const disclaimer = await prisma.disclaimer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisclaimerFindUniqueArgs>(args: SelectSubset<T, DisclaimerFindUniqueArgs<ExtArgs>>): Prisma__DisclaimerClient<$Result.GetResult<Prisma.$DisclaimerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disclaimer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisclaimerFindUniqueOrThrowArgs} args - Arguments to find a Disclaimer
     * @example
     * // Get one Disclaimer
     * const disclaimer = await prisma.disclaimer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisclaimerFindUniqueOrThrowArgs>(args: SelectSubset<T, DisclaimerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisclaimerClient<$Result.GetResult<Prisma.$DisclaimerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disclaimer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclaimerFindFirstArgs} args - Arguments to find a Disclaimer
     * @example
     * // Get one Disclaimer
     * const disclaimer = await prisma.disclaimer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisclaimerFindFirstArgs>(args?: SelectSubset<T, DisclaimerFindFirstArgs<ExtArgs>>): Prisma__DisclaimerClient<$Result.GetResult<Prisma.$DisclaimerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disclaimer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclaimerFindFirstOrThrowArgs} args - Arguments to find a Disclaimer
     * @example
     * // Get one Disclaimer
     * const disclaimer = await prisma.disclaimer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisclaimerFindFirstOrThrowArgs>(args?: SelectSubset<T, DisclaimerFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisclaimerClient<$Result.GetResult<Prisma.$DisclaimerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disclaimers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclaimerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disclaimers
     * const disclaimers = await prisma.disclaimer.findMany()
     * 
     * // Get first 10 Disclaimers
     * const disclaimers = await prisma.disclaimer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disclaimerWithIdOnly = await prisma.disclaimer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisclaimerFindManyArgs>(args?: SelectSubset<T, DisclaimerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisclaimerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disclaimer.
     * @param {DisclaimerCreateArgs} args - Arguments to create a Disclaimer.
     * @example
     * // Create one Disclaimer
     * const Disclaimer = await prisma.disclaimer.create({
     *   data: {
     *     // ... data to create a Disclaimer
     *   }
     * })
     * 
     */
    create<T extends DisclaimerCreateArgs>(args: SelectSubset<T, DisclaimerCreateArgs<ExtArgs>>): Prisma__DisclaimerClient<$Result.GetResult<Prisma.$DisclaimerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disclaimers.
     * @param {DisclaimerCreateManyArgs} args - Arguments to create many Disclaimers.
     * @example
     * // Create many Disclaimers
     * const disclaimer = await prisma.disclaimer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisclaimerCreateManyArgs>(args?: SelectSubset<T, DisclaimerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disclaimer.
     * @param {DisclaimerDeleteArgs} args - Arguments to delete one Disclaimer.
     * @example
     * // Delete one Disclaimer
     * const Disclaimer = await prisma.disclaimer.delete({
     *   where: {
     *     // ... filter to delete one Disclaimer
     *   }
     * })
     * 
     */
    delete<T extends DisclaimerDeleteArgs>(args: SelectSubset<T, DisclaimerDeleteArgs<ExtArgs>>): Prisma__DisclaimerClient<$Result.GetResult<Prisma.$DisclaimerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disclaimer.
     * @param {DisclaimerUpdateArgs} args - Arguments to update one Disclaimer.
     * @example
     * // Update one Disclaimer
     * const disclaimer = await prisma.disclaimer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisclaimerUpdateArgs>(args: SelectSubset<T, DisclaimerUpdateArgs<ExtArgs>>): Prisma__DisclaimerClient<$Result.GetResult<Prisma.$DisclaimerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disclaimers.
     * @param {DisclaimerDeleteManyArgs} args - Arguments to filter Disclaimers to delete.
     * @example
     * // Delete a few Disclaimers
     * const { count } = await prisma.disclaimer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisclaimerDeleteManyArgs>(args?: SelectSubset<T, DisclaimerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disclaimers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclaimerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disclaimers
     * const disclaimer = await prisma.disclaimer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisclaimerUpdateManyArgs>(args: SelectSubset<T, DisclaimerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disclaimer.
     * @param {DisclaimerUpsertArgs} args - Arguments to update or create a Disclaimer.
     * @example
     * // Update or create a Disclaimer
     * const disclaimer = await prisma.disclaimer.upsert({
     *   create: {
     *     // ... data to create a Disclaimer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disclaimer we want to update
     *   }
     * })
     */
    upsert<T extends DisclaimerUpsertArgs>(args: SelectSubset<T, DisclaimerUpsertArgs<ExtArgs>>): Prisma__DisclaimerClient<$Result.GetResult<Prisma.$DisclaimerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disclaimers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclaimerCountArgs} args - Arguments to filter Disclaimers to count.
     * @example
     * // Count the number of Disclaimers
     * const count = await prisma.disclaimer.count({
     *   where: {
     *     // ... the filter for the Disclaimers we want to count
     *   }
     * })
    **/
    count<T extends DisclaimerCountArgs>(
      args?: Subset<T, DisclaimerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisclaimerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disclaimer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclaimerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisclaimerAggregateArgs>(args: Subset<T, DisclaimerAggregateArgs>): Prisma.PrismaPromise<GetDisclaimerAggregateType<T>>

    /**
     * Group by Disclaimer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclaimerGroupByArgs} args - Group by arguments.
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
      T extends DisclaimerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisclaimerGroupByArgs['orderBy'] }
        : { orderBy?: DisclaimerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisclaimerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisclaimerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disclaimer model
   */
  readonly fields: DisclaimerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disclaimer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisclaimerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Disclaimer model
   */
  interface DisclaimerFieldRefs {
    readonly id: FieldRef<"Disclaimer", 'Int'>
    readonly text: FieldRef<"Disclaimer", 'String'>
    readonly createdAt: FieldRef<"Disclaimer", 'DateTime'>
    readonly updatedAt: FieldRef<"Disclaimer", 'DateTime'>
    readonly clientId: FieldRef<"Disclaimer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Disclaimer findUnique
   */
  export type DisclaimerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
    /**
     * Filter, which Disclaimer to fetch.
     */
    where: DisclaimerWhereUniqueInput
  }

  /**
   * Disclaimer findUniqueOrThrow
   */
  export type DisclaimerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
    /**
     * Filter, which Disclaimer to fetch.
     */
    where: DisclaimerWhereUniqueInput
  }

  /**
   * Disclaimer findFirst
   */
  export type DisclaimerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
    /**
     * Filter, which Disclaimer to fetch.
     */
    where?: DisclaimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disclaimers to fetch.
     */
    orderBy?: DisclaimerOrderByWithRelationInput | DisclaimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disclaimers.
     */
    cursor?: DisclaimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disclaimers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disclaimers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disclaimers.
     */
    distinct?: DisclaimerScalarFieldEnum | DisclaimerScalarFieldEnum[]
  }

  /**
   * Disclaimer findFirstOrThrow
   */
  export type DisclaimerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
    /**
     * Filter, which Disclaimer to fetch.
     */
    where?: DisclaimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disclaimers to fetch.
     */
    orderBy?: DisclaimerOrderByWithRelationInput | DisclaimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disclaimers.
     */
    cursor?: DisclaimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disclaimers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disclaimers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disclaimers.
     */
    distinct?: DisclaimerScalarFieldEnum | DisclaimerScalarFieldEnum[]
  }

  /**
   * Disclaimer findMany
   */
  export type DisclaimerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
    /**
     * Filter, which Disclaimers to fetch.
     */
    where?: DisclaimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disclaimers to fetch.
     */
    orderBy?: DisclaimerOrderByWithRelationInput | DisclaimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disclaimers.
     */
    cursor?: DisclaimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disclaimers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disclaimers.
     */
    skip?: number
    distinct?: DisclaimerScalarFieldEnum | DisclaimerScalarFieldEnum[]
  }

  /**
   * Disclaimer create
   */
  export type DisclaimerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
    /**
     * The data needed to create a Disclaimer.
     */
    data: XOR<DisclaimerCreateInput, DisclaimerUncheckedCreateInput>
  }

  /**
   * Disclaimer createMany
   */
  export type DisclaimerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disclaimers.
     */
    data: DisclaimerCreateManyInput | DisclaimerCreateManyInput[]
  }

  /**
   * Disclaimer update
   */
  export type DisclaimerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
    /**
     * The data needed to update a Disclaimer.
     */
    data: XOR<DisclaimerUpdateInput, DisclaimerUncheckedUpdateInput>
    /**
     * Choose, which Disclaimer to update.
     */
    where: DisclaimerWhereUniqueInput
  }

  /**
   * Disclaimer updateMany
   */
  export type DisclaimerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disclaimers.
     */
    data: XOR<DisclaimerUpdateManyMutationInput, DisclaimerUncheckedUpdateManyInput>
    /**
     * Filter which Disclaimers to update
     */
    where?: DisclaimerWhereInput
    /**
     * Limit how many Disclaimers to update.
     */
    limit?: number
  }

  /**
   * Disclaimer upsert
   */
  export type DisclaimerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
    /**
     * The filter to search for the Disclaimer to update in case it exists.
     */
    where: DisclaimerWhereUniqueInput
    /**
     * In case the Disclaimer found by the `where` argument doesn't exist, create a new Disclaimer with this data.
     */
    create: XOR<DisclaimerCreateInput, DisclaimerUncheckedCreateInput>
    /**
     * In case the Disclaimer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisclaimerUpdateInput, DisclaimerUncheckedUpdateInput>
  }

  /**
   * Disclaimer delete
   */
  export type DisclaimerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
    /**
     * Filter which Disclaimer to delete.
     */
    where: DisclaimerWhereUniqueInput
  }

  /**
   * Disclaimer deleteMany
   */
  export type DisclaimerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disclaimers to delete
     */
    where?: DisclaimerWhereInput
    /**
     * Limit how many Disclaimers to delete.
     */
    limit?: number
  }

  /**
   * Disclaimer without action
   */
  export type DisclaimerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclaimer
     */
    select?: DisclaimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclaimer
     */
    omit?: DisclaimerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclaimerInclude<ExtArgs> | null
  }


  /**
   * Model BusinessUnit
   */

  export type AggregateBusinessUnit = {
    _count: BusinessUnitCountAggregateOutputType | null
    _avg: BusinessUnitAvgAggregateOutputType | null
    _sum: BusinessUnitSumAggregateOutputType | null
    _min: BusinessUnitMinAggregateOutputType | null
    _max: BusinessUnitMaxAggregateOutputType | null
  }

  export type BusinessUnitAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type BusinessUnitSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type BusinessUnitMinAggregateOutputType = {
    id: number | null
    description: string | null
    street: string | null
    clientId: number | null
  }

  export type BusinessUnitMaxAggregateOutputType = {
    id: number | null
    description: string | null
    street: string | null
    clientId: number | null
  }

  export type BusinessUnitCountAggregateOutputType = {
    id: number
    description: number
    street: number
    clientId: number
    _all: number
  }


  export type BusinessUnitAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type BusinessUnitSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type BusinessUnitMinAggregateInputType = {
    id?: true
    description?: true
    street?: true
    clientId?: true
  }

  export type BusinessUnitMaxAggregateInputType = {
    id?: true
    description?: true
    street?: true
    clientId?: true
  }

  export type BusinessUnitCountAggregateInputType = {
    id?: true
    description?: true
    street?: true
    clientId?: true
    _all?: true
  }

  export type BusinessUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessUnit to aggregate.
     */
    where?: BusinessUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUnits to fetch.
     */
    orderBy?: BusinessUnitOrderByWithRelationInput | BusinessUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessUnits
    **/
    _count?: true | BusinessUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessUnitMaxAggregateInputType
  }

  export type GetBusinessUnitAggregateType<T extends BusinessUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessUnit[P]>
      : GetScalarType<T[P], AggregateBusinessUnit[P]>
  }




  export type BusinessUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessUnitWhereInput
    orderBy?: BusinessUnitOrderByWithAggregationInput | BusinessUnitOrderByWithAggregationInput[]
    by: BusinessUnitScalarFieldEnum[] | BusinessUnitScalarFieldEnum
    having?: BusinessUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessUnitCountAggregateInputType | true
    _avg?: BusinessUnitAvgAggregateInputType
    _sum?: BusinessUnitSumAggregateInputType
    _min?: BusinessUnitMinAggregateInputType
    _max?: BusinessUnitMaxAggregateInputType
  }

  export type BusinessUnitGroupByOutputType = {
    id: number
    description: string
    street: string
    clientId: number
    _count: BusinessUnitCountAggregateOutputType | null
    _avg: BusinessUnitAvgAggregateOutputType | null
    _sum: BusinessUnitSumAggregateOutputType | null
    _min: BusinessUnitMinAggregateOutputType | null
    _max: BusinessUnitMaxAggregateOutputType | null
  }

  type GetBusinessUnitGroupByPayload<T extends BusinessUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessUnitGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessUnitGroupByOutputType[P]>
        }
      >
    >


  export type BusinessUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    street?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    deviceDetails?: boolean | BusinessUnit$deviceDetailsArgs<ExtArgs>
    _count?: boolean | BusinessUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessUnit"]>



  export type BusinessUnitSelectScalar = {
    id?: boolean
    description?: boolean
    street?: boolean
    clientId?: boolean
  }

  export type BusinessUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "street" | "clientId", ExtArgs["result"]["businessUnit"]>
  export type BusinessUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    deviceDetails?: boolean | BusinessUnit$deviceDetailsArgs<ExtArgs>
    _count?: boolean | BusinessUnitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BusinessUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessUnit"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      deviceDetails: Prisma.$DeviceDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      street: string
      clientId: number
    }, ExtArgs["result"]["businessUnit"]>
    composites: {}
  }

  type BusinessUnitGetPayload<S extends boolean | null | undefined | BusinessUnitDefaultArgs> = $Result.GetResult<Prisma.$BusinessUnitPayload, S>

  type BusinessUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessUnitCountAggregateInputType | true
    }

  export interface BusinessUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessUnit'], meta: { name: 'BusinessUnit' } }
    /**
     * Find zero or one BusinessUnit that matches the filter.
     * @param {BusinessUnitFindUniqueArgs} args - Arguments to find a BusinessUnit
     * @example
     * // Get one BusinessUnit
     * const businessUnit = await prisma.businessUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessUnitFindUniqueArgs>(args: SelectSubset<T, BusinessUnitFindUniqueArgs<ExtArgs>>): Prisma__BusinessUnitClient<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessUnitFindUniqueOrThrowArgs} args - Arguments to find a BusinessUnit
     * @example
     * // Get one BusinessUnit
     * const businessUnit = await prisma.businessUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessUnitClient<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUnitFindFirstArgs} args - Arguments to find a BusinessUnit
     * @example
     * // Get one BusinessUnit
     * const businessUnit = await prisma.businessUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessUnitFindFirstArgs>(args?: SelectSubset<T, BusinessUnitFindFirstArgs<ExtArgs>>): Prisma__BusinessUnitClient<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUnitFindFirstOrThrowArgs} args - Arguments to find a BusinessUnit
     * @example
     * // Get one BusinessUnit
     * const businessUnit = await prisma.businessUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessUnitClient<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessUnits
     * const businessUnits = await prisma.businessUnit.findMany()
     * 
     * // Get first 10 BusinessUnits
     * const businessUnits = await prisma.businessUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessUnitWithIdOnly = await prisma.businessUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessUnitFindManyArgs>(args?: SelectSubset<T, BusinessUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessUnit.
     * @param {BusinessUnitCreateArgs} args - Arguments to create a BusinessUnit.
     * @example
     * // Create one BusinessUnit
     * const BusinessUnit = await prisma.businessUnit.create({
     *   data: {
     *     // ... data to create a BusinessUnit
     *   }
     * })
     * 
     */
    create<T extends BusinessUnitCreateArgs>(args: SelectSubset<T, BusinessUnitCreateArgs<ExtArgs>>): Prisma__BusinessUnitClient<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessUnits.
     * @param {BusinessUnitCreateManyArgs} args - Arguments to create many BusinessUnits.
     * @example
     * // Create many BusinessUnits
     * const businessUnit = await prisma.businessUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessUnitCreateManyArgs>(args?: SelectSubset<T, BusinessUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessUnit.
     * @param {BusinessUnitDeleteArgs} args - Arguments to delete one BusinessUnit.
     * @example
     * // Delete one BusinessUnit
     * const BusinessUnit = await prisma.businessUnit.delete({
     *   where: {
     *     // ... filter to delete one BusinessUnit
     *   }
     * })
     * 
     */
    delete<T extends BusinessUnitDeleteArgs>(args: SelectSubset<T, BusinessUnitDeleteArgs<ExtArgs>>): Prisma__BusinessUnitClient<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessUnit.
     * @param {BusinessUnitUpdateArgs} args - Arguments to update one BusinessUnit.
     * @example
     * // Update one BusinessUnit
     * const businessUnit = await prisma.businessUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUnitUpdateArgs>(args: SelectSubset<T, BusinessUnitUpdateArgs<ExtArgs>>): Prisma__BusinessUnitClient<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessUnits.
     * @param {BusinessUnitDeleteManyArgs} args - Arguments to filter BusinessUnits to delete.
     * @example
     * // Delete a few BusinessUnits
     * const { count } = await prisma.businessUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessUnitDeleteManyArgs>(args?: SelectSubset<T, BusinessUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessUnits
     * const businessUnit = await prisma.businessUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUnitUpdateManyArgs>(args: SelectSubset<T, BusinessUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessUnit.
     * @param {BusinessUnitUpsertArgs} args - Arguments to update or create a BusinessUnit.
     * @example
     * // Update or create a BusinessUnit
     * const businessUnit = await prisma.businessUnit.upsert({
     *   create: {
     *     // ... data to create a BusinessUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessUnit we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUnitUpsertArgs>(args: SelectSubset<T, BusinessUnitUpsertArgs<ExtArgs>>): Prisma__BusinessUnitClient<$Result.GetResult<Prisma.$BusinessUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUnitCountArgs} args - Arguments to filter BusinessUnits to count.
     * @example
     * // Count the number of BusinessUnits
     * const count = await prisma.businessUnit.count({
     *   where: {
     *     // ... the filter for the BusinessUnits we want to count
     *   }
     * })
    **/
    count<T extends BusinessUnitCountArgs>(
      args?: Subset<T, BusinessUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessUnitAggregateArgs>(args: Subset<T, BusinessUnitAggregateArgs>): Prisma.PrismaPromise<GetBusinessUnitAggregateType<T>>

    /**
     * Group by BusinessUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUnitGroupByArgs} args - Group by arguments.
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
      T extends BusinessUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessUnitGroupByArgs['orderBy'] }
        : { orderBy?: BusinessUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessUnit model
   */
  readonly fields: BusinessUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deviceDetails<T extends BusinessUnit$deviceDetailsArgs<ExtArgs> = {}>(args?: Subset<T, BusinessUnit$deviceDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BusinessUnit model
   */
  interface BusinessUnitFieldRefs {
    readonly id: FieldRef<"BusinessUnit", 'Int'>
    readonly description: FieldRef<"BusinessUnit", 'String'>
    readonly street: FieldRef<"BusinessUnit", 'String'>
    readonly clientId: FieldRef<"BusinessUnit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BusinessUnit findUnique
   */
  export type BusinessUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    /**
     * Filter, which BusinessUnit to fetch.
     */
    where: BusinessUnitWhereUniqueInput
  }

  /**
   * BusinessUnit findUniqueOrThrow
   */
  export type BusinessUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    /**
     * Filter, which BusinessUnit to fetch.
     */
    where: BusinessUnitWhereUniqueInput
  }

  /**
   * BusinessUnit findFirst
   */
  export type BusinessUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    /**
     * Filter, which BusinessUnit to fetch.
     */
    where?: BusinessUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUnits to fetch.
     */
    orderBy?: BusinessUnitOrderByWithRelationInput | BusinessUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessUnits.
     */
    cursor?: BusinessUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessUnits.
     */
    distinct?: BusinessUnitScalarFieldEnum | BusinessUnitScalarFieldEnum[]
  }

  /**
   * BusinessUnit findFirstOrThrow
   */
  export type BusinessUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    /**
     * Filter, which BusinessUnit to fetch.
     */
    where?: BusinessUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUnits to fetch.
     */
    orderBy?: BusinessUnitOrderByWithRelationInput | BusinessUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessUnits.
     */
    cursor?: BusinessUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessUnits.
     */
    distinct?: BusinessUnitScalarFieldEnum | BusinessUnitScalarFieldEnum[]
  }

  /**
   * BusinessUnit findMany
   */
  export type BusinessUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    /**
     * Filter, which BusinessUnits to fetch.
     */
    where?: BusinessUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUnits to fetch.
     */
    orderBy?: BusinessUnitOrderByWithRelationInput | BusinessUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessUnits.
     */
    cursor?: BusinessUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUnits.
     */
    skip?: number
    distinct?: BusinessUnitScalarFieldEnum | BusinessUnitScalarFieldEnum[]
  }

  /**
   * BusinessUnit create
   */
  export type BusinessUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessUnit.
     */
    data: XOR<BusinessUnitCreateInput, BusinessUnitUncheckedCreateInput>
  }

  /**
   * BusinessUnit createMany
   */
  export type BusinessUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessUnits.
     */
    data: BusinessUnitCreateManyInput | BusinessUnitCreateManyInput[]
  }

  /**
   * BusinessUnit update
   */
  export type BusinessUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessUnit.
     */
    data: XOR<BusinessUnitUpdateInput, BusinessUnitUncheckedUpdateInput>
    /**
     * Choose, which BusinessUnit to update.
     */
    where: BusinessUnitWhereUniqueInput
  }

  /**
   * BusinessUnit updateMany
   */
  export type BusinessUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessUnits.
     */
    data: XOR<BusinessUnitUpdateManyMutationInput, BusinessUnitUncheckedUpdateManyInput>
    /**
     * Filter which BusinessUnits to update
     */
    where?: BusinessUnitWhereInput
    /**
     * Limit how many BusinessUnits to update.
     */
    limit?: number
  }

  /**
   * BusinessUnit upsert
   */
  export type BusinessUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessUnit to update in case it exists.
     */
    where: BusinessUnitWhereUniqueInput
    /**
     * In case the BusinessUnit found by the `where` argument doesn't exist, create a new BusinessUnit with this data.
     */
    create: XOR<BusinessUnitCreateInput, BusinessUnitUncheckedCreateInput>
    /**
     * In case the BusinessUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUnitUpdateInput, BusinessUnitUncheckedUpdateInput>
  }

  /**
   * BusinessUnit delete
   */
  export type BusinessUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
    /**
     * Filter which BusinessUnit to delete.
     */
    where: BusinessUnitWhereUniqueInput
  }

  /**
   * BusinessUnit deleteMany
   */
  export type BusinessUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessUnits to delete
     */
    where?: BusinessUnitWhereInput
    /**
     * Limit how many BusinessUnits to delete.
     */
    limit?: number
  }

  /**
   * BusinessUnit.deviceDetails
   */
  export type BusinessUnit$deviceDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDetail
     */
    select?: DeviceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceDetail
     */
    omit?: DeviceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceDetailInclude<ExtArgs> | null
    where?: DeviceDetailWhereInput
    orderBy?: DeviceDetailOrderByWithRelationInput | DeviceDetailOrderByWithRelationInput[]
    cursor?: DeviceDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceDetailScalarFieldEnum | DeviceDetailScalarFieldEnum[]
  }

  /**
   * BusinessUnit without action
   */
  export type BusinessUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUnit
     */
    select?: BusinessUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUnit
     */
    omit?: BusinessUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUnitInclude<ExtArgs> | null
  }


  /**
   * Model MicrosoftSku
   */

  export type AggregateMicrosoftSku = {
    _count: MicrosoftSkuCountAggregateOutputType | null
    _min: MicrosoftSkuMinAggregateOutputType | null
    _max: MicrosoftSkuMaxAggregateOutputType | null
  }

  export type MicrosoftSkuMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MicrosoftSkuMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MicrosoftSkuCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MicrosoftSkuMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MicrosoftSkuMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MicrosoftSkuCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MicrosoftSkuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MicrosoftSku to aggregate.
     */
    where?: MicrosoftSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftSkus to fetch.
     */
    orderBy?: MicrosoftSkuOrderByWithRelationInput | MicrosoftSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MicrosoftSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MicrosoftSkus
    **/
    _count?: true | MicrosoftSkuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MicrosoftSkuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MicrosoftSkuMaxAggregateInputType
  }

  export type GetMicrosoftSkuAggregateType<T extends MicrosoftSkuAggregateArgs> = {
        [P in keyof T & keyof AggregateMicrosoftSku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMicrosoftSku[P]>
      : GetScalarType<T[P], AggregateMicrosoftSku[P]>
  }




  export type MicrosoftSkuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicrosoftSkuWhereInput
    orderBy?: MicrosoftSkuOrderByWithAggregationInput | MicrosoftSkuOrderByWithAggregationInput[]
    by: MicrosoftSkuScalarFieldEnum[] | MicrosoftSkuScalarFieldEnum
    having?: MicrosoftSkuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MicrosoftSkuCountAggregateInputType | true
    _min?: MicrosoftSkuMinAggregateInputType
    _max?: MicrosoftSkuMaxAggregateInputType
  }

  export type MicrosoftSkuGroupByOutputType = {
    id: string
    name: string
    _count: MicrosoftSkuCountAggregateOutputType | null
    _min: MicrosoftSkuMinAggregateOutputType | null
    _max: MicrosoftSkuMaxAggregateOutputType | null
  }

  type GetMicrosoftSkuGroupByPayload<T extends MicrosoftSkuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MicrosoftSkuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MicrosoftSkuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MicrosoftSkuGroupByOutputType[P]>
            : GetScalarType<T[P], MicrosoftSkuGroupByOutputType[P]>
        }
      >
    >


  export type MicrosoftSkuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    microsoftAccounts?: boolean | MicrosoftSku$microsoftAccountsArgs<ExtArgs>
    microsoftSubscribedSkus?: boolean | MicrosoftSku$microsoftSubscribedSkusArgs<ExtArgs>
    _count?: boolean | MicrosoftSkuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["microsoftSku"]>



  export type MicrosoftSkuSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MicrosoftSkuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["microsoftSku"]>
  export type MicrosoftSkuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microsoftAccounts?: boolean | MicrosoftSku$microsoftAccountsArgs<ExtArgs>
    microsoftSubscribedSkus?: boolean | MicrosoftSku$microsoftSubscribedSkusArgs<ExtArgs>
    _count?: boolean | MicrosoftSkuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MicrosoftSkuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MicrosoftSku"
    objects: {
      microsoftAccounts: Prisma.$MicrosoftAccountPayload<ExtArgs>[]
      microsoftSubscribedSkus: Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["microsoftSku"]>
    composites: {}
  }

  type MicrosoftSkuGetPayload<S extends boolean | null | undefined | MicrosoftSkuDefaultArgs> = $Result.GetResult<Prisma.$MicrosoftSkuPayload, S>

  type MicrosoftSkuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MicrosoftSkuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MicrosoftSkuCountAggregateInputType | true
    }

  export interface MicrosoftSkuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MicrosoftSku'], meta: { name: 'MicrosoftSku' } }
    /**
     * Find zero or one MicrosoftSku that matches the filter.
     * @param {MicrosoftSkuFindUniqueArgs} args - Arguments to find a MicrosoftSku
     * @example
     * // Get one MicrosoftSku
     * const microsoftSku = await prisma.microsoftSku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MicrosoftSkuFindUniqueArgs>(args: SelectSubset<T, MicrosoftSkuFindUniqueArgs<ExtArgs>>): Prisma__MicrosoftSkuClient<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MicrosoftSku that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MicrosoftSkuFindUniqueOrThrowArgs} args - Arguments to find a MicrosoftSku
     * @example
     * // Get one MicrosoftSku
     * const microsoftSku = await prisma.microsoftSku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MicrosoftSkuFindUniqueOrThrowArgs>(args: SelectSubset<T, MicrosoftSkuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MicrosoftSkuClient<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MicrosoftSku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSkuFindFirstArgs} args - Arguments to find a MicrosoftSku
     * @example
     * // Get one MicrosoftSku
     * const microsoftSku = await prisma.microsoftSku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MicrosoftSkuFindFirstArgs>(args?: SelectSubset<T, MicrosoftSkuFindFirstArgs<ExtArgs>>): Prisma__MicrosoftSkuClient<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MicrosoftSku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSkuFindFirstOrThrowArgs} args - Arguments to find a MicrosoftSku
     * @example
     * // Get one MicrosoftSku
     * const microsoftSku = await prisma.microsoftSku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MicrosoftSkuFindFirstOrThrowArgs>(args?: SelectSubset<T, MicrosoftSkuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MicrosoftSkuClient<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MicrosoftSkus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSkuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MicrosoftSkus
     * const microsoftSkus = await prisma.microsoftSku.findMany()
     * 
     * // Get first 10 MicrosoftSkus
     * const microsoftSkus = await prisma.microsoftSku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const microsoftSkuWithIdOnly = await prisma.microsoftSku.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MicrosoftSkuFindManyArgs>(args?: SelectSubset<T, MicrosoftSkuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MicrosoftSku.
     * @param {MicrosoftSkuCreateArgs} args - Arguments to create a MicrosoftSku.
     * @example
     * // Create one MicrosoftSku
     * const MicrosoftSku = await prisma.microsoftSku.create({
     *   data: {
     *     // ... data to create a MicrosoftSku
     *   }
     * })
     * 
     */
    create<T extends MicrosoftSkuCreateArgs>(args: SelectSubset<T, MicrosoftSkuCreateArgs<ExtArgs>>): Prisma__MicrosoftSkuClient<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MicrosoftSkus.
     * @param {MicrosoftSkuCreateManyArgs} args - Arguments to create many MicrosoftSkus.
     * @example
     * // Create many MicrosoftSkus
     * const microsoftSku = await prisma.microsoftSku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MicrosoftSkuCreateManyArgs>(args?: SelectSubset<T, MicrosoftSkuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MicrosoftSku.
     * @param {MicrosoftSkuDeleteArgs} args - Arguments to delete one MicrosoftSku.
     * @example
     * // Delete one MicrosoftSku
     * const MicrosoftSku = await prisma.microsoftSku.delete({
     *   where: {
     *     // ... filter to delete one MicrosoftSku
     *   }
     * })
     * 
     */
    delete<T extends MicrosoftSkuDeleteArgs>(args: SelectSubset<T, MicrosoftSkuDeleteArgs<ExtArgs>>): Prisma__MicrosoftSkuClient<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MicrosoftSku.
     * @param {MicrosoftSkuUpdateArgs} args - Arguments to update one MicrosoftSku.
     * @example
     * // Update one MicrosoftSku
     * const microsoftSku = await prisma.microsoftSku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MicrosoftSkuUpdateArgs>(args: SelectSubset<T, MicrosoftSkuUpdateArgs<ExtArgs>>): Prisma__MicrosoftSkuClient<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MicrosoftSkus.
     * @param {MicrosoftSkuDeleteManyArgs} args - Arguments to filter MicrosoftSkus to delete.
     * @example
     * // Delete a few MicrosoftSkus
     * const { count } = await prisma.microsoftSku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MicrosoftSkuDeleteManyArgs>(args?: SelectSubset<T, MicrosoftSkuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MicrosoftSkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSkuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MicrosoftSkus
     * const microsoftSku = await prisma.microsoftSku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MicrosoftSkuUpdateManyArgs>(args: SelectSubset<T, MicrosoftSkuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MicrosoftSku.
     * @param {MicrosoftSkuUpsertArgs} args - Arguments to update or create a MicrosoftSku.
     * @example
     * // Update or create a MicrosoftSku
     * const microsoftSku = await prisma.microsoftSku.upsert({
     *   create: {
     *     // ... data to create a MicrosoftSku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MicrosoftSku we want to update
     *   }
     * })
     */
    upsert<T extends MicrosoftSkuUpsertArgs>(args: SelectSubset<T, MicrosoftSkuUpsertArgs<ExtArgs>>): Prisma__MicrosoftSkuClient<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MicrosoftSkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSkuCountArgs} args - Arguments to filter MicrosoftSkus to count.
     * @example
     * // Count the number of MicrosoftSkus
     * const count = await prisma.microsoftSku.count({
     *   where: {
     *     // ... the filter for the MicrosoftSkus we want to count
     *   }
     * })
    **/
    count<T extends MicrosoftSkuCountArgs>(
      args?: Subset<T, MicrosoftSkuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MicrosoftSkuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MicrosoftSku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSkuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MicrosoftSkuAggregateArgs>(args: Subset<T, MicrosoftSkuAggregateArgs>): Prisma.PrismaPromise<GetMicrosoftSkuAggregateType<T>>

    /**
     * Group by MicrosoftSku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSkuGroupByArgs} args - Group by arguments.
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
      T extends MicrosoftSkuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MicrosoftSkuGroupByArgs['orderBy'] }
        : { orderBy?: MicrosoftSkuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MicrosoftSkuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMicrosoftSkuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MicrosoftSku model
   */
  readonly fields: MicrosoftSkuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MicrosoftSku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MicrosoftSkuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    microsoftAccounts<T extends MicrosoftSku$microsoftAccountsArgs<ExtArgs> = {}>(args?: Subset<T, MicrosoftSku$microsoftAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    microsoftSubscribedSkus<T extends MicrosoftSku$microsoftSubscribedSkusArgs<ExtArgs> = {}>(args?: Subset<T, MicrosoftSku$microsoftSubscribedSkusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MicrosoftSku model
   */
  interface MicrosoftSkuFieldRefs {
    readonly id: FieldRef<"MicrosoftSku", 'String'>
    readonly name: FieldRef<"MicrosoftSku", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MicrosoftSku findUnique
   */
  export type MicrosoftSkuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftSku to fetch.
     */
    where: MicrosoftSkuWhereUniqueInput
  }

  /**
   * MicrosoftSku findUniqueOrThrow
   */
  export type MicrosoftSkuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftSku to fetch.
     */
    where: MicrosoftSkuWhereUniqueInput
  }

  /**
   * MicrosoftSku findFirst
   */
  export type MicrosoftSkuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftSku to fetch.
     */
    where?: MicrosoftSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftSkus to fetch.
     */
    orderBy?: MicrosoftSkuOrderByWithRelationInput | MicrosoftSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MicrosoftSkus.
     */
    cursor?: MicrosoftSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MicrosoftSkus.
     */
    distinct?: MicrosoftSkuScalarFieldEnum | MicrosoftSkuScalarFieldEnum[]
  }

  /**
   * MicrosoftSku findFirstOrThrow
   */
  export type MicrosoftSkuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftSku to fetch.
     */
    where?: MicrosoftSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftSkus to fetch.
     */
    orderBy?: MicrosoftSkuOrderByWithRelationInput | MicrosoftSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MicrosoftSkus.
     */
    cursor?: MicrosoftSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MicrosoftSkus.
     */
    distinct?: MicrosoftSkuScalarFieldEnum | MicrosoftSkuScalarFieldEnum[]
  }

  /**
   * MicrosoftSku findMany
   */
  export type MicrosoftSkuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftSkus to fetch.
     */
    where?: MicrosoftSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftSkus to fetch.
     */
    orderBy?: MicrosoftSkuOrderByWithRelationInput | MicrosoftSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MicrosoftSkus.
     */
    cursor?: MicrosoftSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftSkus.
     */
    skip?: number
    distinct?: MicrosoftSkuScalarFieldEnum | MicrosoftSkuScalarFieldEnum[]
  }

  /**
   * MicrosoftSku create
   */
  export type MicrosoftSkuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
    /**
     * The data needed to create a MicrosoftSku.
     */
    data: XOR<MicrosoftSkuCreateInput, MicrosoftSkuUncheckedCreateInput>
  }

  /**
   * MicrosoftSku createMany
   */
  export type MicrosoftSkuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MicrosoftSkus.
     */
    data: MicrosoftSkuCreateManyInput | MicrosoftSkuCreateManyInput[]
  }

  /**
   * MicrosoftSku update
   */
  export type MicrosoftSkuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
    /**
     * The data needed to update a MicrosoftSku.
     */
    data: XOR<MicrosoftSkuUpdateInput, MicrosoftSkuUncheckedUpdateInput>
    /**
     * Choose, which MicrosoftSku to update.
     */
    where: MicrosoftSkuWhereUniqueInput
  }

  /**
   * MicrosoftSku updateMany
   */
  export type MicrosoftSkuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MicrosoftSkus.
     */
    data: XOR<MicrosoftSkuUpdateManyMutationInput, MicrosoftSkuUncheckedUpdateManyInput>
    /**
     * Filter which MicrosoftSkus to update
     */
    where?: MicrosoftSkuWhereInput
    /**
     * Limit how many MicrosoftSkus to update.
     */
    limit?: number
  }

  /**
   * MicrosoftSku upsert
   */
  export type MicrosoftSkuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
    /**
     * The filter to search for the MicrosoftSku to update in case it exists.
     */
    where: MicrosoftSkuWhereUniqueInput
    /**
     * In case the MicrosoftSku found by the `where` argument doesn't exist, create a new MicrosoftSku with this data.
     */
    create: XOR<MicrosoftSkuCreateInput, MicrosoftSkuUncheckedCreateInput>
    /**
     * In case the MicrosoftSku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MicrosoftSkuUpdateInput, MicrosoftSkuUncheckedUpdateInput>
  }

  /**
   * MicrosoftSku delete
   */
  export type MicrosoftSkuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
    /**
     * Filter which MicrosoftSku to delete.
     */
    where: MicrosoftSkuWhereUniqueInput
  }

  /**
   * MicrosoftSku deleteMany
   */
  export type MicrosoftSkuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MicrosoftSkus to delete
     */
    where?: MicrosoftSkuWhereInput
    /**
     * Limit how many MicrosoftSkus to delete.
     */
    limit?: number
  }

  /**
   * MicrosoftSku.microsoftAccounts
   */
  export type MicrosoftSku$microsoftAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    where?: MicrosoftAccountWhereInput
    orderBy?: MicrosoftAccountOrderByWithRelationInput | MicrosoftAccountOrderByWithRelationInput[]
    cursor?: MicrosoftAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MicrosoftAccountScalarFieldEnum | MicrosoftAccountScalarFieldEnum[]
  }

  /**
   * MicrosoftSku.microsoftSubscribedSkus
   */
  export type MicrosoftSku$microsoftSubscribedSkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    where?: MicrosoftSubscribedSkuWhereInput
    orderBy?: MicrosoftSubscribedSkuOrderByWithRelationInput | MicrosoftSubscribedSkuOrderByWithRelationInput[]
    cursor?: MicrosoftSubscribedSkuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MicrosoftSubscribedSkuScalarFieldEnum | MicrosoftSubscribedSkuScalarFieldEnum[]
  }

  /**
   * MicrosoftSku without action
   */
  export type MicrosoftSkuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
  }


  /**
   * Model MicrosoftAccount
   */

  export type AggregateMicrosoftAccount = {
    _count: MicrosoftAccountCountAggregateOutputType | null
    _avg: MicrosoftAccountAvgAggregateOutputType | null
    _sum: MicrosoftAccountSumAggregateOutputType | null
    _min: MicrosoftAccountMinAggregateOutputType | null
    _max: MicrosoftAccountMaxAggregateOutputType | null
  }

  export type MicrosoftAccountAvgAggregateOutputType = {
    clientId: number | null
  }

  export type MicrosoftAccountSumAggregateOutputType = {
    clientId: number | null
  }

  export type MicrosoftAccountMinAggregateOutputType = {
    id: string | null
    displayName: string | null
    email: string | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type MicrosoftAccountMaxAggregateOutputType = {
    id: string | null
    displayName: string | null
    email: string | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type MicrosoftAccountCountAggregateOutputType = {
    id: number
    displayName: number
    email: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type MicrosoftAccountAvgAggregateInputType = {
    clientId?: true
  }

  export type MicrosoftAccountSumAggregateInputType = {
    clientId?: true
  }

  export type MicrosoftAccountMinAggregateInputType = {
    id?: true
    displayName?: true
    email?: true
    updatedAt?: true
    clientId?: true
  }

  export type MicrosoftAccountMaxAggregateInputType = {
    id?: true
    displayName?: true
    email?: true
    updatedAt?: true
    clientId?: true
  }

  export type MicrosoftAccountCountAggregateInputType = {
    id?: true
    displayName?: true
    email?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type MicrosoftAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MicrosoftAccount to aggregate.
     */
    where?: MicrosoftAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftAccounts to fetch.
     */
    orderBy?: MicrosoftAccountOrderByWithRelationInput | MicrosoftAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MicrosoftAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MicrosoftAccounts
    **/
    _count?: true | MicrosoftAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MicrosoftAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MicrosoftAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MicrosoftAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MicrosoftAccountMaxAggregateInputType
  }

  export type GetMicrosoftAccountAggregateType<T extends MicrosoftAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateMicrosoftAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMicrosoftAccount[P]>
      : GetScalarType<T[P], AggregateMicrosoftAccount[P]>
  }




  export type MicrosoftAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicrosoftAccountWhereInput
    orderBy?: MicrosoftAccountOrderByWithAggregationInput | MicrosoftAccountOrderByWithAggregationInput[]
    by: MicrosoftAccountScalarFieldEnum[] | MicrosoftAccountScalarFieldEnum
    having?: MicrosoftAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MicrosoftAccountCountAggregateInputType | true
    _avg?: MicrosoftAccountAvgAggregateInputType
    _sum?: MicrosoftAccountSumAggregateInputType
    _min?: MicrosoftAccountMinAggregateInputType
    _max?: MicrosoftAccountMaxAggregateInputType
  }

  export type MicrosoftAccountGroupByOutputType = {
    id: string
    displayName: string
    email: string
    updatedAt: Date
    clientId: number
    _count: MicrosoftAccountCountAggregateOutputType | null
    _avg: MicrosoftAccountAvgAggregateOutputType | null
    _sum: MicrosoftAccountSumAggregateOutputType | null
    _min: MicrosoftAccountMinAggregateOutputType | null
    _max: MicrosoftAccountMaxAggregateOutputType | null
  }

  type GetMicrosoftAccountGroupByPayload<T extends MicrosoftAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MicrosoftAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MicrosoftAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MicrosoftAccountGroupByOutputType[P]>
            : GetScalarType<T[P], MicrosoftAccountGroupByOutputType[P]>
        }
      >
    >


  export type MicrosoftAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    email?: boolean
    updatedAt?: boolean
    clientId?: boolean
    microsoftSkus?: boolean | MicrosoftAccount$microsoftSkusArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    _count?: boolean | MicrosoftAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["microsoftAccount"]>



  export type MicrosoftAccountSelectScalar = {
    id?: boolean
    displayName?: boolean
    email?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type MicrosoftAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayName" | "email" | "updatedAt" | "clientId", ExtArgs["result"]["microsoftAccount"]>
  export type MicrosoftAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microsoftSkus?: boolean | MicrosoftAccount$microsoftSkusArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    _count?: boolean | MicrosoftAccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MicrosoftAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MicrosoftAccount"
    objects: {
      microsoftSkus: Prisma.$MicrosoftSkuPayload<ExtArgs>[]
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayName: string
      email: string
      updatedAt: Date
      clientId: number
    }, ExtArgs["result"]["microsoftAccount"]>
    composites: {}
  }

  type MicrosoftAccountGetPayload<S extends boolean | null | undefined | MicrosoftAccountDefaultArgs> = $Result.GetResult<Prisma.$MicrosoftAccountPayload, S>

  type MicrosoftAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MicrosoftAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MicrosoftAccountCountAggregateInputType | true
    }

  export interface MicrosoftAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MicrosoftAccount'], meta: { name: 'MicrosoftAccount' } }
    /**
     * Find zero or one MicrosoftAccount that matches the filter.
     * @param {MicrosoftAccountFindUniqueArgs} args - Arguments to find a MicrosoftAccount
     * @example
     * // Get one MicrosoftAccount
     * const microsoftAccount = await prisma.microsoftAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MicrosoftAccountFindUniqueArgs>(args: SelectSubset<T, MicrosoftAccountFindUniqueArgs<ExtArgs>>): Prisma__MicrosoftAccountClient<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MicrosoftAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MicrosoftAccountFindUniqueOrThrowArgs} args - Arguments to find a MicrosoftAccount
     * @example
     * // Get one MicrosoftAccount
     * const microsoftAccount = await prisma.microsoftAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MicrosoftAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, MicrosoftAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MicrosoftAccountClient<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MicrosoftAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftAccountFindFirstArgs} args - Arguments to find a MicrosoftAccount
     * @example
     * // Get one MicrosoftAccount
     * const microsoftAccount = await prisma.microsoftAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MicrosoftAccountFindFirstArgs>(args?: SelectSubset<T, MicrosoftAccountFindFirstArgs<ExtArgs>>): Prisma__MicrosoftAccountClient<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MicrosoftAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftAccountFindFirstOrThrowArgs} args - Arguments to find a MicrosoftAccount
     * @example
     * // Get one MicrosoftAccount
     * const microsoftAccount = await prisma.microsoftAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MicrosoftAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, MicrosoftAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__MicrosoftAccountClient<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MicrosoftAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MicrosoftAccounts
     * const microsoftAccounts = await prisma.microsoftAccount.findMany()
     * 
     * // Get first 10 MicrosoftAccounts
     * const microsoftAccounts = await prisma.microsoftAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const microsoftAccountWithIdOnly = await prisma.microsoftAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MicrosoftAccountFindManyArgs>(args?: SelectSubset<T, MicrosoftAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MicrosoftAccount.
     * @param {MicrosoftAccountCreateArgs} args - Arguments to create a MicrosoftAccount.
     * @example
     * // Create one MicrosoftAccount
     * const MicrosoftAccount = await prisma.microsoftAccount.create({
     *   data: {
     *     // ... data to create a MicrosoftAccount
     *   }
     * })
     * 
     */
    create<T extends MicrosoftAccountCreateArgs>(args: SelectSubset<T, MicrosoftAccountCreateArgs<ExtArgs>>): Prisma__MicrosoftAccountClient<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MicrosoftAccounts.
     * @param {MicrosoftAccountCreateManyArgs} args - Arguments to create many MicrosoftAccounts.
     * @example
     * // Create many MicrosoftAccounts
     * const microsoftAccount = await prisma.microsoftAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MicrosoftAccountCreateManyArgs>(args?: SelectSubset<T, MicrosoftAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MicrosoftAccount.
     * @param {MicrosoftAccountDeleteArgs} args - Arguments to delete one MicrosoftAccount.
     * @example
     * // Delete one MicrosoftAccount
     * const MicrosoftAccount = await prisma.microsoftAccount.delete({
     *   where: {
     *     // ... filter to delete one MicrosoftAccount
     *   }
     * })
     * 
     */
    delete<T extends MicrosoftAccountDeleteArgs>(args: SelectSubset<T, MicrosoftAccountDeleteArgs<ExtArgs>>): Prisma__MicrosoftAccountClient<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MicrosoftAccount.
     * @param {MicrosoftAccountUpdateArgs} args - Arguments to update one MicrosoftAccount.
     * @example
     * // Update one MicrosoftAccount
     * const microsoftAccount = await prisma.microsoftAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MicrosoftAccountUpdateArgs>(args: SelectSubset<T, MicrosoftAccountUpdateArgs<ExtArgs>>): Prisma__MicrosoftAccountClient<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MicrosoftAccounts.
     * @param {MicrosoftAccountDeleteManyArgs} args - Arguments to filter MicrosoftAccounts to delete.
     * @example
     * // Delete a few MicrosoftAccounts
     * const { count } = await prisma.microsoftAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MicrosoftAccountDeleteManyArgs>(args?: SelectSubset<T, MicrosoftAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MicrosoftAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MicrosoftAccounts
     * const microsoftAccount = await prisma.microsoftAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MicrosoftAccountUpdateManyArgs>(args: SelectSubset<T, MicrosoftAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MicrosoftAccount.
     * @param {MicrosoftAccountUpsertArgs} args - Arguments to update or create a MicrosoftAccount.
     * @example
     * // Update or create a MicrosoftAccount
     * const microsoftAccount = await prisma.microsoftAccount.upsert({
     *   create: {
     *     // ... data to create a MicrosoftAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MicrosoftAccount we want to update
     *   }
     * })
     */
    upsert<T extends MicrosoftAccountUpsertArgs>(args: SelectSubset<T, MicrosoftAccountUpsertArgs<ExtArgs>>): Prisma__MicrosoftAccountClient<$Result.GetResult<Prisma.$MicrosoftAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MicrosoftAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftAccountCountArgs} args - Arguments to filter MicrosoftAccounts to count.
     * @example
     * // Count the number of MicrosoftAccounts
     * const count = await prisma.microsoftAccount.count({
     *   where: {
     *     // ... the filter for the MicrosoftAccounts we want to count
     *   }
     * })
    **/
    count<T extends MicrosoftAccountCountArgs>(
      args?: Subset<T, MicrosoftAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MicrosoftAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MicrosoftAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MicrosoftAccountAggregateArgs>(args: Subset<T, MicrosoftAccountAggregateArgs>): Prisma.PrismaPromise<GetMicrosoftAccountAggregateType<T>>

    /**
     * Group by MicrosoftAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftAccountGroupByArgs} args - Group by arguments.
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
      T extends MicrosoftAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MicrosoftAccountGroupByArgs['orderBy'] }
        : { orderBy?: MicrosoftAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MicrosoftAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMicrosoftAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MicrosoftAccount model
   */
  readonly fields: MicrosoftAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MicrosoftAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MicrosoftAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    microsoftSkus<T extends MicrosoftAccount$microsoftSkusArgs<ExtArgs> = {}>(args?: Subset<T, MicrosoftAccount$microsoftSkusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MicrosoftAccount model
   */
  interface MicrosoftAccountFieldRefs {
    readonly id: FieldRef<"MicrosoftAccount", 'String'>
    readonly displayName: FieldRef<"MicrosoftAccount", 'String'>
    readonly email: FieldRef<"MicrosoftAccount", 'String'>
    readonly updatedAt: FieldRef<"MicrosoftAccount", 'DateTime'>
    readonly clientId: FieldRef<"MicrosoftAccount", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MicrosoftAccount findUnique
   */
  export type MicrosoftAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftAccount to fetch.
     */
    where: MicrosoftAccountWhereUniqueInput
  }

  /**
   * MicrosoftAccount findUniqueOrThrow
   */
  export type MicrosoftAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftAccount to fetch.
     */
    where: MicrosoftAccountWhereUniqueInput
  }

  /**
   * MicrosoftAccount findFirst
   */
  export type MicrosoftAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftAccount to fetch.
     */
    where?: MicrosoftAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftAccounts to fetch.
     */
    orderBy?: MicrosoftAccountOrderByWithRelationInput | MicrosoftAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MicrosoftAccounts.
     */
    cursor?: MicrosoftAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MicrosoftAccounts.
     */
    distinct?: MicrosoftAccountScalarFieldEnum | MicrosoftAccountScalarFieldEnum[]
  }

  /**
   * MicrosoftAccount findFirstOrThrow
   */
  export type MicrosoftAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftAccount to fetch.
     */
    where?: MicrosoftAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftAccounts to fetch.
     */
    orderBy?: MicrosoftAccountOrderByWithRelationInput | MicrosoftAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MicrosoftAccounts.
     */
    cursor?: MicrosoftAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MicrosoftAccounts.
     */
    distinct?: MicrosoftAccountScalarFieldEnum | MicrosoftAccountScalarFieldEnum[]
  }

  /**
   * MicrosoftAccount findMany
   */
  export type MicrosoftAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftAccounts to fetch.
     */
    where?: MicrosoftAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftAccounts to fetch.
     */
    orderBy?: MicrosoftAccountOrderByWithRelationInput | MicrosoftAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MicrosoftAccounts.
     */
    cursor?: MicrosoftAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftAccounts.
     */
    skip?: number
    distinct?: MicrosoftAccountScalarFieldEnum | MicrosoftAccountScalarFieldEnum[]
  }

  /**
   * MicrosoftAccount create
   */
  export type MicrosoftAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a MicrosoftAccount.
     */
    data: XOR<MicrosoftAccountCreateInput, MicrosoftAccountUncheckedCreateInput>
  }

  /**
   * MicrosoftAccount createMany
   */
  export type MicrosoftAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MicrosoftAccounts.
     */
    data: MicrosoftAccountCreateManyInput | MicrosoftAccountCreateManyInput[]
  }

  /**
   * MicrosoftAccount update
   */
  export type MicrosoftAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a MicrosoftAccount.
     */
    data: XOR<MicrosoftAccountUpdateInput, MicrosoftAccountUncheckedUpdateInput>
    /**
     * Choose, which MicrosoftAccount to update.
     */
    where: MicrosoftAccountWhereUniqueInput
  }

  /**
   * MicrosoftAccount updateMany
   */
  export type MicrosoftAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MicrosoftAccounts.
     */
    data: XOR<MicrosoftAccountUpdateManyMutationInput, MicrosoftAccountUncheckedUpdateManyInput>
    /**
     * Filter which MicrosoftAccounts to update
     */
    where?: MicrosoftAccountWhereInput
    /**
     * Limit how many MicrosoftAccounts to update.
     */
    limit?: number
  }

  /**
   * MicrosoftAccount upsert
   */
  export type MicrosoftAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the MicrosoftAccount to update in case it exists.
     */
    where: MicrosoftAccountWhereUniqueInput
    /**
     * In case the MicrosoftAccount found by the `where` argument doesn't exist, create a new MicrosoftAccount with this data.
     */
    create: XOR<MicrosoftAccountCreateInput, MicrosoftAccountUncheckedCreateInput>
    /**
     * In case the MicrosoftAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MicrosoftAccountUpdateInput, MicrosoftAccountUncheckedUpdateInput>
  }

  /**
   * MicrosoftAccount delete
   */
  export type MicrosoftAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
    /**
     * Filter which MicrosoftAccount to delete.
     */
    where: MicrosoftAccountWhereUniqueInput
  }

  /**
   * MicrosoftAccount deleteMany
   */
  export type MicrosoftAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MicrosoftAccounts to delete
     */
    where?: MicrosoftAccountWhereInput
    /**
     * Limit how many MicrosoftAccounts to delete.
     */
    limit?: number
  }

  /**
   * MicrosoftAccount.microsoftSkus
   */
  export type MicrosoftAccount$microsoftSkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSku
     */
    select?: MicrosoftSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSku
     */
    omit?: MicrosoftSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSkuInclude<ExtArgs> | null
    where?: MicrosoftSkuWhereInput
    orderBy?: MicrosoftSkuOrderByWithRelationInput | MicrosoftSkuOrderByWithRelationInput[]
    cursor?: MicrosoftSkuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MicrosoftSkuScalarFieldEnum | MicrosoftSkuScalarFieldEnum[]
  }

  /**
   * MicrosoftAccount without action
   */
  export type MicrosoftAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftAccount
     */
    select?: MicrosoftAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftAccount
     */
    omit?: MicrosoftAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftAccountInclude<ExtArgs> | null
  }


  /**
   * Model MicrosoftSubscribedSku
   */

  export type AggregateMicrosoftSubscribedSku = {
    _count: MicrosoftSubscribedSkuCountAggregateOutputType | null
    _avg: MicrosoftSubscribedSkuAvgAggregateOutputType | null
    _sum: MicrosoftSubscribedSkuSumAggregateOutputType | null
    _min: MicrosoftSubscribedSkuMinAggregateOutputType | null
    _max: MicrosoftSubscribedSkuMaxAggregateOutputType | null
  }

  export type MicrosoftSubscribedSkuAvgAggregateOutputType = {
    qty: number | null
    used: number | null
    clientId: number | null
  }

  export type MicrosoftSubscribedSkuSumAggregateOutputType = {
    qty: number | null
    used: number | null
    clientId: number | null
  }

  export type MicrosoftSubscribedSkuMinAggregateOutputType = {
    id: string | null
    qty: number | null
    used: number | null
    updatedAt: Date | null
    skuId: string | null
    clientId: number | null
  }

  export type MicrosoftSubscribedSkuMaxAggregateOutputType = {
    id: string | null
    qty: number | null
    used: number | null
    updatedAt: Date | null
    skuId: string | null
    clientId: number | null
  }

  export type MicrosoftSubscribedSkuCountAggregateOutputType = {
    id: number
    qty: number
    used: number
    updatedAt: number
    skuId: number
    clientId: number
    _all: number
  }


  export type MicrosoftSubscribedSkuAvgAggregateInputType = {
    qty?: true
    used?: true
    clientId?: true
  }

  export type MicrosoftSubscribedSkuSumAggregateInputType = {
    qty?: true
    used?: true
    clientId?: true
  }

  export type MicrosoftSubscribedSkuMinAggregateInputType = {
    id?: true
    qty?: true
    used?: true
    updatedAt?: true
    skuId?: true
    clientId?: true
  }

  export type MicrosoftSubscribedSkuMaxAggregateInputType = {
    id?: true
    qty?: true
    used?: true
    updatedAt?: true
    skuId?: true
    clientId?: true
  }

  export type MicrosoftSubscribedSkuCountAggregateInputType = {
    id?: true
    qty?: true
    used?: true
    updatedAt?: true
    skuId?: true
    clientId?: true
    _all?: true
  }

  export type MicrosoftSubscribedSkuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MicrosoftSubscribedSku to aggregate.
     */
    where?: MicrosoftSubscribedSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftSubscribedSkus to fetch.
     */
    orderBy?: MicrosoftSubscribedSkuOrderByWithRelationInput | MicrosoftSubscribedSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MicrosoftSubscribedSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftSubscribedSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftSubscribedSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MicrosoftSubscribedSkus
    **/
    _count?: true | MicrosoftSubscribedSkuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MicrosoftSubscribedSkuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MicrosoftSubscribedSkuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MicrosoftSubscribedSkuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MicrosoftSubscribedSkuMaxAggregateInputType
  }

  export type GetMicrosoftSubscribedSkuAggregateType<T extends MicrosoftSubscribedSkuAggregateArgs> = {
        [P in keyof T & keyof AggregateMicrosoftSubscribedSku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMicrosoftSubscribedSku[P]>
      : GetScalarType<T[P], AggregateMicrosoftSubscribedSku[P]>
  }




  export type MicrosoftSubscribedSkuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicrosoftSubscribedSkuWhereInput
    orderBy?: MicrosoftSubscribedSkuOrderByWithAggregationInput | MicrosoftSubscribedSkuOrderByWithAggregationInput[]
    by: MicrosoftSubscribedSkuScalarFieldEnum[] | MicrosoftSubscribedSkuScalarFieldEnum
    having?: MicrosoftSubscribedSkuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MicrosoftSubscribedSkuCountAggregateInputType | true
    _avg?: MicrosoftSubscribedSkuAvgAggregateInputType
    _sum?: MicrosoftSubscribedSkuSumAggregateInputType
    _min?: MicrosoftSubscribedSkuMinAggregateInputType
    _max?: MicrosoftSubscribedSkuMaxAggregateInputType
  }

  export type MicrosoftSubscribedSkuGroupByOutputType = {
    id: string
    qty: number
    used: number
    updatedAt: Date
    skuId: string
    clientId: number
    _count: MicrosoftSubscribedSkuCountAggregateOutputType | null
    _avg: MicrosoftSubscribedSkuAvgAggregateOutputType | null
    _sum: MicrosoftSubscribedSkuSumAggregateOutputType | null
    _min: MicrosoftSubscribedSkuMinAggregateOutputType | null
    _max: MicrosoftSubscribedSkuMaxAggregateOutputType | null
  }

  type GetMicrosoftSubscribedSkuGroupByPayload<T extends MicrosoftSubscribedSkuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MicrosoftSubscribedSkuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MicrosoftSubscribedSkuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MicrosoftSubscribedSkuGroupByOutputType[P]>
            : GetScalarType<T[P], MicrosoftSubscribedSkuGroupByOutputType[P]>
        }
      >
    >


  export type MicrosoftSubscribedSkuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qty?: boolean
    used?: boolean
    updatedAt?: boolean
    skuId?: boolean
    clientId?: boolean
    sku?: boolean | MicrosoftSkuDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["microsoftSubscribedSku"]>



  export type MicrosoftSubscribedSkuSelectScalar = {
    id?: boolean
    qty?: boolean
    used?: boolean
    updatedAt?: boolean
    skuId?: boolean
    clientId?: boolean
  }

  export type MicrosoftSubscribedSkuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qty" | "used" | "updatedAt" | "skuId" | "clientId", ExtArgs["result"]["microsoftSubscribedSku"]>
  export type MicrosoftSubscribedSkuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sku?: boolean | MicrosoftSkuDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $MicrosoftSubscribedSkuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MicrosoftSubscribedSku"
    objects: {
      sku: Prisma.$MicrosoftSkuPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qty: number
      used: number
      updatedAt: Date
      skuId: string
      clientId: number
    }, ExtArgs["result"]["microsoftSubscribedSku"]>
    composites: {}
  }

  type MicrosoftSubscribedSkuGetPayload<S extends boolean | null | undefined | MicrosoftSubscribedSkuDefaultArgs> = $Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload, S>

  type MicrosoftSubscribedSkuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MicrosoftSubscribedSkuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MicrosoftSubscribedSkuCountAggregateInputType | true
    }

  export interface MicrosoftSubscribedSkuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MicrosoftSubscribedSku'], meta: { name: 'MicrosoftSubscribedSku' } }
    /**
     * Find zero or one MicrosoftSubscribedSku that matches the filter.
     * @param {MicrosoftSubscribedSkuFindUniqueArgs} args - Arguments to find a MicrosoftSubscribedSku
     * @example
     * // Get one MicrosoftSubscribedSku
     * const microsoftSubscribedSku = await prisma.microsoftSubscribedSku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MicrosoftSubscribedSkuFindUniqueArgs>(args: SelectSubset<T, MicrosoftSubscribedSkuFindUniqueArgs<ExtArgs>>): Prisma__MicrosoftSubscribedSkuClient<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MicrosoftSubscribedSku that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MicrosoftSubscribedSkuFindUniqueOrThrowArgs} args - Arguments to find a MicrosoftSubscribedSku
     * @example
     * // Get one MicrosoftSubscribedSku
     * const microsoftSubscribedSku = await prisma.microsoftSubscribedSku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MicrosoftSubscribedSkuFindUniqueOrThrowArgs>(args: SelectSubset<T, MicrosoftSubscribedSkuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MicrosoftSubscribedSkuClient<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MicrosoftSubscribedSku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSubscribedSkuFindFirstArgs} args - Arguments to find a MicrosoftSubscribedSku
     * @example
     * // Get one MicrosoftSubscribedSku
     * const microsoftSubscribedSku = await prisma.microsoftSubscribedSku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MicrosoftSubscribedSkuFindFirstArgs>(args?: SelectSubset<T, MicrosoftSubscribedSkuFindFirstArgs<ExtArgs>>): Prisma__MicrosoftSubscribedSkuClient<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MicrosoftSubscribedSku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSubscribedSkuFindFirstOrThrowArgs} args - Arguments to find a MicrosoftSubscribedSku
     * @example
     * // Get one MicrosoftSubscribedSku
     * const microsoftSubscribedSku = await prisma.microsoftSubscribedSku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MicrosoftSubscribedSkuFindFirstOrThrowArgs>(args?: SelectSubset<T, MicrosoftSubscribedSkuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MicrosoftSubscribedSkuClient<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MicrosoftSubscribedSkus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSubscribedSkuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MicrosoftSubscribedSkus
     * const microsoftSubscribedSkus = await prisma.microsoftSubscribedSku.findMany()
     * 
     * // Get first 10 MicrosoftSubscribedSkus
     * const microsoftSubscribedSkus = await prisma.microsoftSubscribedSku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const microsoftSubscribedSkuWithIdOnly = await prisma.microsoftSubscribedSku.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MicrosoftSubscribedSkuFindManyArgs>(args?: SelectSubset<T, MicrosoftSubscribedSkuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MicrosoftSubscribedSku.
     * @param {MicrosoftSubscribedSkuCreateArgs} args - Arguments to create a MicrosoftSubscribedSku.
     * @example
     * // Create one MicrosoftSubscribedSku
     * const MicrosoftSubscribedSku = await prisma.microsoftSubscribedSku.create({
     *   data: {
     *     // ... data to create a MicrosoftSubscribedSku
     *   }
     * })
     * 
     */
    create<T extends MicrosoftSubscribedSkuCreateArgs>(args: SelectSubset<T, MicrosoftSubscribedSkuCreateArgs<ExtArgs>>): Prisma__MicrosoftSubscribedSkuClient<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MicrosoftSubscribedSkus.
     * @param {MicrosoftSubscribedSkuCreateManyArgs} args - Arguments to create many MicrosoftSubscribedSkus.
     * @example
     * // Create many MicrosoftSubscribedSkus
     * const microsoftSubscribedSku = await prisma.microsoftSubscribedSku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MicrosoftSubscribedSkuCreateManyArgs>(args?: SelectSubset<T, MicrosoftSubscribedSkuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MicrosoftSubscribedSku.
     * @param {MicrosoftSubscribedSkuDeleteArgs} args - Arguments to delete one MicrosoftSubscribedSku.
     * @example
     * // Delete one MicrosoftSubscribedSku
     * const MicrosoftSubscribedSku = await prisma.microsoftSubscribedSku.delete({
     *   where: {
     *     // ... filter to delete one MicrosoftSubscribedSku
     *   }
     * })
     * 
     */
    delete<T extends MicrosoftSubscribedSkuDeleteArgs>(args: SelectSubset<T, MicrosoftSubscribedSkuDeleteArgs<ExtArgs>>): Prisma__MicrosoftSubscribedSkuClient<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MicrosoftSubscribedSku.
     * @param {MicrosoftSubscribedSkuUpdateArgs} args - Arguments to update one MicrosoftSubscribedSku.
     * @example
     * // Update one MicrosoftSubscribedSku
     * const microsoftSubscribedSku = await prisma.microsoftSubscribedSku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MicrosoftSubscribedSkuUpdateArgs>(args: SelectSubset<T, MicrosoftSubscribedSkuUpdateArgs<ExtArgs>>): Prisma__MicrosoftSubscribedSkuClient<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MicrosoftSubscribedSkus.
     * @param {MicrosoftSubscribedSkuDeleteManyArgs} args - Arguments to filter MicrosoftSubscribedSkus to delete.
     * @example
     * // Delete a few MicrosoftSubscribedSkus
     * const { count } = await prisma.microsoftSubscribedSku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MicrosoftSubscribedSkuDeleteManyArgs>(args?: SelectSubset<T, MicrosoftSubscribedSkuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MicrosoftSubscribedSkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSubscribedSkuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MicrosoftSubscribedSkus
     * const microsoftSubscribedSku = await prisma.microsoftSubscribedSku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MicrosoftSubscribedSkuUpdateManyArgs>(args: SelectSubset<T, MicrosoftSubscribedSkuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MicrosoftSubscribedSku.
     * @param {MicrosoftSubscribedSkuUpsertArgs} args - Arguments to update or create a MicrosoftSubscribedSku.
     * @example
     * // Update or create a MicrosoftSubscribedSku
     * const microsoftSubscribedSku = await prisma.microsoftSubscribedSku.upsert({
     *   create: {
     *     // ... data to create a MicrosoftSubscribedSku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MicrosoftSubscribedSku we want to update
     *   }
     * })
     */
    upsert<T extends MicrosoftSubscribedSkuUpsertArgs>(args: SelectSubset<T, MicrosoftSubscribedSkuUpsertArgs<ExtArgs>>): Prisma__MicrosoftSubscribedSkuClient<$Result.GetResult<Prisma.$MicrosoftSubscribedSkuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MicrosoftSubscribedSkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSubscribedSkuCountArgs} args - Arguments to filter MicrosoftSubscribedSkus to count.
     * @example
     * // Count the number of MicrosoftSubscribedSkus
     * const count = await prisma.microsoftSubscribedSku.count({
     *   where: {
     *     // ... the filter for the MicrosoftSubscribedSkus we want to count
     *   }
     * })
    **/
    count<T extends MicrosoftSubscribedSkuCountArgs>(
      args?: Subset<T, MicrosoftSubscribedSkuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MicrosoftSubscribedSkuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MicrosoftSubscribedSku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSubscribedSkuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MicrosoftSubscribedSkuAggregateArgs>(args: Subset<T, MicrosoftSubscribedSkuAggregateArgs>): Prisma.PrismaPromise<GetMicrosoftSubscribedSkuAggregateType<T>>

    /**
     * Group by MicrosoftSubscribedSku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicrosoftSubscribedSkuGroupByArgs} args - Group by arguments.
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
      T extends MicrosoftSubscribedSkuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MicrosoftSubscribedSkuGroupByArgs['orderBy'] }
        : { orderBy?: MicrosoftSubscribedSkuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MicrosoftSubscribedSkuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMicrosoftSubscribedSkuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MicrosoftSubscribedSku model
   */
  readonly fields: MicrosoftSubscribedSkuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MicrosoftSubscribedSku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MicrosoftSubscribedSkuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sku<T extends MicrosoftSkuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MicrosoftSkuDefaultArgs<ExtArgs>>): Prisma__MicrosoftSkuClient<$Result.GetResult<Prisma.$MicrosoftSkuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MicrosoftSubscribedSku model
   */
  interface MicrosoftSubscribedSkuFieldRefs {
    readonly id: FieldRef<"MicrosoftSubscribedSku", 'String'>
    readonly qty: FieldRef<"MicrosoftSubscribedSku", 'Int'>
    readonly used: FieldRef<"MicrosoftSubscribedSku", 'Int'>
    readonly updatedAt: FieldRef<"MicrosoftSubscribedSku", 'DateTime'>
    readonly skuId: FieldRef<"MicrosoftSubscribedSku", 'String'>
    readonly clientId: FieldRef<"MicrosoftSubscribedSku", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MicrosoftSubscribedSku findUnique
   */
  export type MicrosoftSubscribedSkuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftSubscribedSku to fetch.
     */
    where: MicrosoftSubscribedSkuWhereUniqueInput
  }

  /**
   * MicrosoftSubscribedSku findUniqueOrThrow
   */
  export type MicrosoftSubscribedSkuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftSubscribedSku to fetch.
     */
    where: MicrosoftSubscribedSkuWhereUniqueInput
  }

  /**
   * MicrosoftSubscribedSku findFirst
   */
  export type MicrosoftSubscribedSkuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftSubscribedSku to fetch.
     */
    where?: MicrosoftSubscribedSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftSubscribedSkus to fetch.
     */
    orderBy?: MicrosoftSubscribedSkuOrderByWithRelationInput | MicrosoftSubscribedSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MicrosoftSubscribedSkus.
     */
    cursor?: MicrosoftSubscribedSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftSubscribedSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftSubscribedSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MicrosoftSubscribedSkus.
     */
    distinct?: MicrosoftSubscribedSkuScalarFieldEnum | MicrosoftSubscribedSkuScalarFieldEnum[]
  }

  /**
   * MicrosoftSubscribedSku findFirstOrThrow
   */
  export type MicrosoftSubscribedSkuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftSubscribedSku to fetch.
     */
    where?: MicrosoftSubscribedSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftSubscribedSkus to fetch.
     */
    orderBy?: MicrosoftSubscribedSkuOrderByWithRelationInput | MicrosoftSubscribedSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MicrosoftSubscribedSkus.
     */
    cursor?: MicrosoftSubscribedSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftSubscribedSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftSubscribedSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MicrosoftSubscribedSkus.
     */
    distinct?: MicrosoftSubscribedSkuScalarFieldEnum | MicrosoftSubscribedSkuScalarFieldEnum[]
  }

  /**
   * MicrosoftSubscribedSku findMany
   */
  export type MicrosoftSubscribedSkuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    /**
     * Filter, which MicrosoftSubscribedSkus to fetch.
     */
    where?: MicrosoftSubscribedSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicrosoftSubscribedSkus to fetch.
     */
    orderBy?: MicrosoftSubscribedSkuOrderByWithRelationInput | MicrosoftSubscribedSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MicrosoftSubscribedSkus.
     */
    cursor?: MicrosoftSubscribedSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicrosoftSubscribedSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicrosoftSubscribedSkus.
     */
    skip?: number
    distinct?: MicrosoftSubscribedSkuScalarFieldEnum | MicrosoftSubscribedSkuScalarFieldEnum[]
  }

  /**
   * MicrosoftSubscribedSku create
   */
  export type MicrosoftSubscribedSkuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    /**
     * The data needed to create a MicrosoftSubscribedSku.
     */
    data: XOR<MicrosoftSubscribedSkuCreateInput, MicrosoftSubscribedSkuUncheckedCreateInput>
  }

  /**
   * MicrosoftSubscribedSku createMany
   */
  export type MicrosoftSubscribedSkuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MicrosoftSubscribedSkus.
     */
    data: MicrosoftSubscribedSkuCreateManyInput | MicrosoftSubscribedSkuCreateManyInput[]
  }

  /**
   * MicrosoftSubscribedSku update
   */
  export type MicrosoftSubscribedSkuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    /**
     * The data needed to update a MicrosoftSubscribedSku.
     */
    data: XOR<MicrosoftSubscribedSkuUpdateInput, MicrosoftSubscribedSkuUncheckedUpdateInput>
    /**
     * Choose, which MicrosoftSubscribedSku to update.
     */
    where: MicrosoftSubscribedSkuWhereUniqueInput
  }

  /**
   * MicrosoftSubscribedSku updateMany
   */
  export type MicrosoftSubscribedSkuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MicrosoftSubscribedSkus.
     */
    data: XOR<MicrosoftSubscribedSkuUpdateManyMutationInput, MicrosoftSubscribedSkuUncheckedUpdateManyInput>
    /**
     * Filter which MicrosoftSubscribedSkus to update
     */
    where?: MicrosoftSubscribedSkuWhereInput
    /**
     * Limit how many MicrosoftSubscribedSkus to update.
     */
    limit?: number
  }

  /**
   * MicrosoftSubscribedSku upsert
   */
  export type MicrosoftSubscribedSkuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    /**
     * The filter to search for the MicrosoftSubscribedSku to update in case it exists.
     */
    where: MicrosoftSubscribedSkuWhereUniqueInput
    /**
     * In case the MicrosoftSubscribedSku found by the `where` argument doesn't exist, create a new MicrosoftSubscribedSku with this data.
     */
    create: XOR<MicrosoftSubscribedSkuCreateInput, MicrosoftSubscribedSkuUncheckedCreateInput>
    /**
     * In case the MicrosoftSubscribedSku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MicrosoftSubscribedSkuUpdateInput, MicrosoftSubscribedSkuUncheckedUpdateInput>
  }

  /**
   * MicrosoftSubscribedSku delete
   */
  export type MicrosoftSubscribedSkuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
    /**
     * Filter which MicrosoftSubscribedSku to delete.
     */
    where: MicrosoftSubscribedSkuWhereUniqueInput
  }

  /**
   * MicrosoftSubscribedSku deleteMany
   */
  export type MicrosoftSubscribedSkuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MicrosoftSubscribedSkus to delete
     */
    where?: MicrosoftSubscribedSkuWhereInput
    /**
     * Limit how many MicrosoftSubscribedSkus to delete.
     */
    limit?: number
  }

  /**
   * MicrosoftSubscribedSku without action
   */
  export type MicrosoftSubscribedSkuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicrosoftSubscribedSku
     */
    select?: MicrosoftSubscribedSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MicrosoftSubscribedSku
     */
    omit?: MicrosoftSubscribedSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicrosoftSubscribedSkuInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InviteScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    role: 'role',
    usedAt: 'usedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt'
  };

  export type InviteScalarFieldEnum = (typeof InviteScalarFieldEnum)[keyof typeof InviteScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyName: 'companyName',
    category: 'category',
    cnpj: 'cnpj',
    isActive: 'isActive',
    contractDeviceQty: 'contractDeviceQty',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nickname: 'nickname',
    mac: 'mac',
    brand: 'brand',
    os: 'os',
    processor: 'processor',
    username: 'username',
    serial: 'serial',
    model: 'model',
    type: 'type',
    isActive: 'isActive',
    updatedAt: 'updatedAt',
    syncedAt: 'syncedAt',
    clientId: 'clientId'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const SecurityStatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mac: 'mac',
    group: 'group',
    isManaged: 'isManaged',
    isManagedWithBest: 'isManagedWithBest',
    syncedAt: 'syncedAt',
    deviceId: 'deviceId'
  };

  export type SecurityStatusScalarFieldEnum = (typeof SecurityStatusScalarFieldEnum)[keyof typeof SecurityStatusScalarFieldEnum]


  export const DeviceDetailScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    ramal: 'ramal',
    imei1: 'imei1',
    imei2: 'imei2',
    domain: 'domain',
    totalRam: 'totalRam',
    totalStorage: 'totalStorage',
    usedStorage: 'usedStorage',
    purchaseDate: 'purchaseDate',
    warrantyDate: 'warrantyDate',
    clientVersion: 'clientVersion',
    businessUnitId: 'businessUnitId',
    updatedAt: 'updatedAt',
    deviceId: 'deviceId'
  };

  export type DeviceDetailScalarFieldEnum = (typeof DeviceDetailScalarFieldEnum)[keyof typeof DeviceDetailScalarFieldEnum]


  export const SecurityEventScalarFieldEnum: {
    id: 'id',
    deviceName: 'deviceName',
    endpoint: 'endpoint',
    username: 'username',
    occurrences: 'occurrences',
    lastOccurrence: 'lastOccurrence',
    module: 'module',
    type: 'type',
    companyName: 'companyName',
    deviceId: 'deviceId'
  };

  export type SecurityEventScalarFieldEnum = (typeof SecurityEventScalarFieldEnum)[keyof typeof SecurityEventScalarFieldEnum]


  export const RecomendationScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type RecomendationScalarFieldEnum = (typeof RecomendationScalarFieldEnum)[keyof typeof RecomendationScalarFieldEnum]


  export const DisclaimerScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type DisclaimerScalarFieldEnum = (typeof DisclaimerScalarFieldEnum)[keyof typeof DisclaimerScalarFieldEnum]


  export const BusinessUnitScalarFieldEnum: {
    id: 'id',
    description: 'description',
    street: 'street',
    clientId: 'clientId'
  };

  export type BusinessUnitScalarFieldEnum = (typeof BusinessUnitScalarFieldEnum)[keyof typeof BusinessUnitScalarFieldEnum]


  export const MicrosoftSkuScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MicrosoftSkuScalarFieldEnum = (typeof MicrosoftSkuScalarFieldEnum)[keyof typeof MicrosoftSkuScalarFieldEnum]


  export const MicrosoftAccountScalarFieldEnum: {
    id: 'id',
    displayName: 'displayName',
    email: 'email',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type MicrosoftAccountScalarFieldEnum = (typeof MicrosoftAccountScalarFieldEnum)[keyof typeof MicrosoftAccountScalarFieldEnum]


  export const MicrosoftSubscribedSkuScalarFieldEnum: {
    id: 'id',
    qty: 'qty',
    used: 'used',
    updatedAt: 'updatedAt',
    skuId: 'skuId',
    clientId: 'clientId'
  };

  export type MicrosoftSubscribedSkuScalarFieldEnum = (typeof MicrosoftSubscribedSkuScalarFieldEnum)[keyof typeof MicrosoftSubscribedSkuScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


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
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clients?: ClientListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: ClientOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clients?: ClientListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InviteWhereInput = {
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    id?: StringFilter<"Invite"> | string
    email?: StringFilter<"Invite"> | string
    token?: StringFilter<"Invite"> | string
    role?: StringFilter<"Invite"> | string
    usedAt?: DateTimeNullableFilter<"Invite"> | Date | string | null
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    updatedAt?: DateTimeFilter<"Invite"> | Date | string
    expiresAt?: DateTimeFilter<"Invite"> | Date | string
    clients?: ClientListRelationFilter
  }

  export type InviteOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    role?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    clients?: ClientOrderByRelationAggregateInput
  }

  export type InviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    token?: string
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    role?: StringFilter<"Invite"> | string
    usedAt?: DateTimeNullableFilter<"Invite"> | Date | string | null
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    updatedAt?: DateTimeFilter<"Invite"> | Date | string
    expiresAt?: DateTimeFilter<"Invite"> | Date | string
    clients?: ClientListRelationFilter
  }, "id" | "email" | "token">

  export type InviteOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    role?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    _count?: InviteCountOrderByAggregateInput
    _max?: InviteMaxOrderByAggregateInput
    _min?: InviteMinOrderByAggregateInput
  }

  export type InviteScalarWhereWithAggregatesInput = {
    AND?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    OR?: InviteScalarWhereWithAggregatesInput[]
    NOT?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invite"> | string
    email?: StringWithAggregatesFilter<"Invite"> | string
    token?: StringWithAggregatesFilter<"Invite"> | string
    role?: StringWithAggregatesFilter<"Invite"> | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"Invite"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    companyName?: StringFilter<"Client"> | string
    category?: StringFilter<"Client"> | string
    cnpj?: StringFilter<"Client"> | string
    isActive?: BoolFilter<"Client"> | boolean
    contractDeviceQty?: IntFilter<"Client"> | number
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    businessUnits?: BusinessUnitListRelationFilter
    devices?: DeviceListRelationFilter
    recomendations?: RecomendationListRelationFilter
    disclaimers?: DisclaimerListRelationFilter
    microsoftAccounts?: MicrosoftAccountListRelationFilter
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuListRelationFilter
    invites?: InviteListRelationFilter
    users?: UserListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    category?: SortOrder
    cnpj?: SortOrder
    isActive?: SortOrder
    contractDeviceQty?: SortOrder
    updatedAt?: SortOrder
    businessUnits?: BusinessUnitOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
    recomendations?: RecomendationOrderByRelationAggregateInput
    disclaimers?: DisclaimerOrderByRelationAggregateInput
    microsoftAccounts?: MicrosoftAccountOrderByRelationAggregateInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuOrderByRelationAggregateInput
    invites?: InviteOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    companyName?: StringFilter<"Client"> | string
    category?: StringFilter<"Client"> | string
    cnpj?: StringFilter<"Client"> | string
    isActive?: BoolFilter<"Client"> | boolean
    contractDeviceQty?: IntFilter<"Client"> | number
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    businessUnits?: BusinessUnitListRelationFilter
    devices?: DeviceListRelationFilter
    recomendations?: RecomendationListRelationFilter
    disclaimers?: DisclaimerListRelationFilter
    microsoftAccounts?: MicrosoftAccountListRelationFilter
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuListRelationFilter
    invites?: InviteListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    category?: SortOrder
    cnpj?: SortOrder
    isActive?: SortOrder
    contractDeviceQty?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    companyName?: StringWithAggregatesFilter<"Client"> | string
    category?: StringWithAggregatesFilter<"Client"> | string
    cnpj?: StringWithAggregatesFilter<"Client"> | string
    isActive?: BoolWithAggregatesFilter<"Client"> | boolean
    contractDeviceQty?: IntWithAggregatesFilter<"Client"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    name?: StringFilter<"Device"> | string
    nickname?: StringFilter<"Device"> | string
    mac?: StringFilter<"Device"> | string
    brand?: StringFilter<"Device"> | string
    os?: StringFilter<"Device"> | string
    processor?: StringFilter<"Device"> | string
    username?: StringFilter<"Device"> | string
    serial?: StringFilter<"Device"> | string
    model?: StringFilter<"Device"> | string
    type?: StringFilter<"Device"> | string
    isActive?: BoolFilter<"Device"> | boolean
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    syncedAt?: DateTimeFilter<"Device"> | Date | string
    clientId?: IntFilter<"Device"> | number
    securityStatus?: SecurityStatusListRelationFilter
    securityEvents?: SecurityEventListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    DeviceDetail?: DeviceDetailListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    mac?: SortOrder
    brand?: SortOrder
    os?: SortOrder
    processor?: SortOrder
    username?: SortOrder
    serial?: SortOrder
    model?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    syncedAt?: SortOrder
    clientId?: SortOrder
    securityStatus?: SecurityStatusOrderByRelationAggregateInput
    securityEvents?: SecurityEventOrderByRelationAggregateInput
    client?: ClientOrderByWithRelationInput
    DeviceDetail?: DeviceDetailOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringFilter<"Device"> | string
    nickname?: StringFilter<"Device"> | string
    mac?: StringFilter<"Device"> | string
    brand?: StringFilter<"Device"> | string
    os?: StringFilter<"Device"> | string
    processor?: StringFilter<"Device"> | string
    username?: StringFilter<"Device"> | string
    serial?: StringFilter<"Device"> | string
    model?: StringFilter<"Device"> | string
    type?: StringFilter<"Device"> | string
    isActive?: BoolFilter<"Device"> | boolean
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    syncedAt?: DateTimeFilter<"Device"> | Date | string
    clientId?: IntFilter<"Device"> | number
    securityStatus?: SecurityStatusListRelationFilter
    securityEvents?: SecurityEventListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    DeviceDetail?: DeviceDetailListRelationFilter
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    mac?: SortOrder
    brand?: SortOrder
    os?: SortOrder
    processor?: SortOrder
    username?: SortOrder
    serial?: SortOrder
    model?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    syncedAt?: SortOrder
    clientId?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    name?: StringWithAggregatesFilter<"Device"> | string
    nickname?: StringWithAggregatesFilter<"Device"> | string
    mac?: StringWithAggregatesFilter<"Device"> | string
    brand?: StringWithAggregatesFilter<"Device"> | string
    os?: StringWithAggregatesFilter<"Device"> | string
    processor?: StringWithAggregatesFilter<"Device"> | string
    username?: StringWithAggregatesFilter<"Device"> | string
    serial?: StringWithAggregatesFilter<"Device"> | string
    model?: StringWithAggregatesFilter<"Device"> | string
    type?: StringWithAggregatesFilter<"Device"> | string
    isActive?: BoolWithAggregatesFilter<"Device"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    syncedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    clientId?: IntWithAggregatesFilter<"Device"> | number
  }

  export type SecurityStatusWhereInput = {
    AND?: SecurityStatusWhereInput | SecurityStatusWhereInput[]
    OR?: SecurityStatusWhereInput[]
    NOT?: SecurityStatusWhereInput | SecurityStatusWhereInput[]
    id?: StringFilter<"SecurityStatus"> | string
    name?: StringFilter<"SecurityStatus"> | string
    mac?: StringFilter<"SecurityStatus"> | string
    group?: StringFilter<"SecurityStatus"> | string
    isManaged?: BoolFilter<"SecurityStatus"> | boolean
    isManagedWithBest?: BoolFilter<"SecurityStatus"> | boolean
    syncedAt?: DateTimeFilter<"SecurityStatus"> | Date | string
    deviceId?: IntNullableFilter<"SecurityStatus"> | number | null
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
  }

  export type SecurityStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mac?: SortOrder
    group?: SortOrder
    isManaged?: SortOrder
    isManagedWithBest?: SortOrder
    syncedAt?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type SecurityStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SecurityStatusWhereInput | SecurityStatusWhereInput[]
    OR?: SecurityStatusWhereInput[]
    NOT?: SecurityStatusWhereInput | SecurityStatusWhereInput[]
    name?: StringFilter<"SecurityStatus"> | string
    mac?: StringFilter<"SecurityStatus"> | string
    group?: StringFilter<"SecurityStatus"> | string
    isManaged?: BoolFilter<"SecurityStatus"> | boolean
    isManagedWithBest?: BoolFilter<"SecurityStatus"> | boolean
    syncedAt?: DateTimeFilter<"SecurityStatus"> | Date | string
    deviceId?: IntNullableFilter<"SecurityStatus"> | number | null
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
  }, "id">

  export type SecurityStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mac?: SortOrder
    group?: SortOrder
    isManaged?: SortOrder
    isManagedWithBest?: SortOrder
    syncedAt?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    _count?: SecurityStatusCountOrderByAggregateInput
    _avg?: SecurityStatusAvgOrderByAggregateInput
    _max?: SecurityStatusMaxOrderByAggregateInput
    _min?: SecurityStatusMinOrderByAggregateInput
    _sum?: SecurityStatusSumOrderByAggregateInput
  }

  export type SecurityStatusScalarWhereWithAggregatesInput = {
    AND?: SecurityStatusScalarWhereWithAggregatesInput | SecurityStatusScalarWhereWithAggregatesInput[]
    OR?: SecurityStatusScalarWhereWithAggregatesInput[]
    NOT?: SecurityStatusScalarWhereWithAggregatesInput | SecurityStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecurityStatus"> | string
    name?: StringWithAggregatesFilter<"SecurityStatus"> | string
    mac?: StringWithAggregatesFilter<"SecurityStatus"> | string
    group?: StringWithAggregatesFilter<"SecurityStatus"> | string
    isManaged?: BoolWithAggregatesFilter<"SecurityStatus"> | boolean
    isManagedWithBest?: BoolWithAggregatesFilter<"SecurityStatus"> | boolean
    syncedAt?: DateTimeWithAggregatesFilter<"SecurityStatus"> | Date | string
    deviceId?: IntNullableWithAggregatesFilter<"SecurityStatus"> | number | null
  }

  export type DeviceDetailWhereInput = {
    AND?: DeviceDetailWhereInput | DeviceDetailWhereInput[]
    OR?: DeviceDetailWhereInput[]
    NOT?: DeviceDetailWhereInput | DeviceDetailWhereInput[]
    id?: IntFilter<"DeviceDetail"> | number
    groupId?: IntNullableFilter<"DeviceDetail"> | number | null
    ramal?: StringFilter<"DeviceDetail"> | string
    imei1?: StringFilter<"DeviceDetail"> | string
    imei2?: StringFilter<"DeviceDetail"> | string
    domain?: StringFilter<"DeviceDetail"> | string
    totalRam?: StringFilter<"DeviceDetail"> | string
    totalStorage?: StringFilter<"DeviceDetail"> | string
    usedStorage?: StringFilter<"DeviceDetail"> | string
    purchaseDate?: DateTimeNullableFilter<"DeviceDetail"> | Date | string | null
    warrantyDate?: DateTimeNullableFilter<"DeviceDetail"> | Date | string | null
    clientVersion?: StringFilter<"DeviceDetail"> | string
    businessUnitId?: IntNullableFilter<"DeviceDetail"> | number | null
    updatedAt?: DateTimeFilter<"DeviceDetail"> | Date | string
    deviceId?: IntNullableFilter<"DeviceDetail"> | number | null
    businessUnit?: XOR<BusinessUnitNullableScalarRelationFilter, BusinessUnitWhereInput> | null
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
  }

  export type DeviceDetailOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrderInput | SortOrder
    ramal?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    domain?: SortOrder
    totalRam?: SortOrder
    totalStorage?: SortOrder
    usedStorage?: SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    warrantyDate?: SortOrderInput | SortOrder
    clientVersion?: SortOrder
    businessUnitId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    businessUnit?: BusinessUnitOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
  }

  export type DeviceDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeviceDetailWhereInput | DeviceDetailWhereInput[]
    OR?: DeviceDetailWhereInput[]
    NOT?: DeviceDetailWhereInput | DeviceDetailWhereInput[]
    groupId?: IntNullableFilter<"DeviceDetail"> | number | null
    ramal?: StringFilter<"DeviceDetail"> | string
    imei1?: StringFilter<"DeviceDetail"> | string
    imei2?: StringFilter<"DeviceDetail"> | string
    domain?: StringFilter<"DeviceDetail"> | string
    totalRam?: StringFilter<"DeviceDetail"> | string
    totalStorage?: StringFilter<"DeviceDetail"> | string
    usedStorage?: StringFilter<"DeviceDetail"> | string
    purchaseDate?: DateTimeNullableFilter<"DeviceDetail"> | Date | string | null
    warrantyDate?: DateTimeNullableFilter<"DeviceDetail"> | Date | string | null
    clientVersion?: StringFilter<"DeviceDetail"> | string
    businessUnitId?: IntNullableFilter<"DeviceDetail"> | number | null
    updatedAt?: DateTimeFilter<"DeviceDetail"> | Date | string
    deviceId?: IntNullableFilter<"DeviceDetail"> | number | null
    businessUnit?: XOR<BusinessUnitNullableScalarRelationFilter, BusinessUnitWhereInput> | null
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
  }, "id">

  export type DeviceDetailOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrderInput | SortOrder
    ramal?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    domain?: SortOrder
    totalRam?: SortOrder
    totalStorage?: SortOrder
    usedStorage?: SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    warrantyDate?: SortOrderInput | SortOrder
    clientVersion?: SortOrder
    businessUnitId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    _count?: DeviceDetailCountOrderByAggregateInput
    _avg?: DeviceDetailAvgOrderByAggregateInput
    _max?: DeviceDetailMaxOrderByAggregateInput
    _min?: DeviceDetailMinOrderByAggregateInput
    _sum?: DeviceDetailSumOrderByAggregateInput
  }

  export type DeviceDetailScalarWhereWithAggregatesInput = {
    AND?: DeviceDetailScalarWhereWithAggregatesInput | DeviceDetailScalarWhereWithAggregatesInput[]
    OR?: DeviceDetailScalarWhereWithAggregatesInput[]
    NOT?: DeviceDetailScalarWhereWithAggregatesInput | DeviceDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeviceDetail"> | number
    groupId?: IntNullableWithAggregatesFilter<"DeviceDetail"> | number | null
    ramal?: StringWithAggregatesFilter<"DeviceDetail"> | string
    imei1?: StringWithAggregatesFilter<"DeviceDetail"> | string
    imei2?: StringWithAggregatesFilter<"DeviceDetail"> | string
    domain?: StringWithAggregatesFilter<"DeviceDetail"> | string
    totalRam?: StringWithAggregatesFilter<"DeviceDetail"> | string
    totalStorage?: StringWithAggregatesFilter<"DeviceDetail"> | string
    usedStorage?: StringWithAggregatesFilter<"DeviceDetail"> | string
    purchaseDate?: DateTimeNullableWithAggregatesFilter<"DeviceDetail"> | Date | string | null
    warrantyDate?: DateTimeNullableWithAggregatesFilter<"DeviceDetail"> | Date | string | null
    clientVersion?: StringWithAggregatesFilter<"DeviceDetail"> | string
    businessUnitId?: IntNullableWithAggregatesFilter<"DeviceDetail"> | number | null
    updatedAt?: DateTimeWithAggregatesFilter<"DeviceDetail"> | Date | string
    deviceId?: IntNullableWithAggregatesFilter<"DeviceDetail"> | number | null
  }

  export type SecurityEventWhereInput = {
    AND?: SecurityEventWhereInput | SecurityEventWhereInput[]
    OR?: SecurityEventWhereInput[]
    NOT?: SecurityEventWhereInput | SecurityEventWhereInput[]
    id?: IntFilter<"SecurityEvent"> | number
    deviceName?: StringFilter<"SecurityEvent"> | string
    endpoint?: StringFilter<"SecurityEvent"> | string
    username?: StringFilter<"SecurityEvent"> | string
    occurrences?: IntFilter<"SecurityEvent"> | number
    lastOccurrence?: DateTimeFilter<"SecurityEvent"> | Date | string
    module?: StringFilter<"SecurityEvent"> | string
    type?: StringFilter<"SecurityEvent"> | string
    companyName?: StringFilter<"SecurityEvent"> | string
    deviceId?: IntNullableFilter<"SecurityEvent"> | number | null
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
  }

  export type SecurityEventOrderByWithRelationInput = {
    id?: SortOrder
    deviceName?: SortOrder
    endpoint?: SortOrder
    username?: SortOrder
    occurrences?: SortOrder
    lastOccurrence?: SortOrder
    module?: SortOrder
    type?: SortOrder
    companyName?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type SecurityEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SecurityEventWhereInput | SecurityEventWhereInput[]
    OR?: SecurityEventWhereInput[]
    NOT?: SecurityEventWhereInput | SecurityEventWhereInput[]
    deviceName?: StringFilter<"SecurityEvent"> | string
    endpoint?: StringFilter<"SecurityEvent"> | string
    username?: StringFilter<"SecurityEvent"> | string
    occurrences?: IntFilter<"SecurityEvent"> | number
    lastOccurrence?: DateTimeFilter<"SecurityEvent"> | Date | string
    module?: StringFilter<"SecurityEvent"> | string
    type?: StringFilter<"SecurityEvent"> | string
    companyName?: StringFilter<"SecurityEvent"> | string
    deviceId?: IntNullableFilter<"SecurityEvent"> | number | null
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
  }, "id">

  export type SecurityEventOrderByWithAggregationInput = {
    id?: SortOrder
    deviceName?: SortOrder
    endpoint?: SortOrder
    username?: SortOrder
    occurrences?: SortOrder
    lastOccurrence?: SortOrder
    module?: SortOrder
    type?: SortOrder
    companyName?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    _count?: SecurityEventCountOrderByAggregateInput
    _avg?: SecurityEventAvgOrderByAggregateInput
    _max?: SecurityEventMaxOrderByAggregateInput
    _min?: SecurityEventMinOrderByAggregateInput
    _sum?: SecurityEventSumOrderByAggregateInput
  }

  export type SecurityEventScalarWhereWithAggregatesInput = {
    AND?: SecurityEventScalarWhereWithAggregatesInput | SecurityEventScalarWhereWithAggregatesInput[]
    OR?: SecurityEventScalarWhereWithAggregatesInput[]
    NOT?: SecurityEventScalarWhereWithAggregatesInput | SecurityEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SecurityEvent"> | number
    deviceName?: StringWithAggregatesFilter<"SecurityEvent"> | string
    endpoint?: StringWithAggregatesFilter<"SecurityEvent"> | string
    username?: StringWithAggregatesFilter<"SecurityEvent"> | string
    occurrences?: IntWithAggregatesFilter<"SecurityEvent"> | number
    lastOccurrence?: DateTimeWithAggregatesFilter<"SecurityEvent"> | Date | string
    module?: StringWithAggregatesFilter<"SecurityEvent"> | string
    type?: StringWithAggregatesFilter<"SecurityEvent"> | string
    companyName?: StringWithAggregatesFilter<"SecurityEvent"> | string
    deviceId?: IntNullableWithAggregatesFilter<"SecurityEvent"> | number | null
  }

  export type RecomendationWhereInput = {
    AND?: RecomendationWhereInput | RecomendationWhereInput[]
    OR?: RecomendationWhereInput[]
    NOT?: RecomendationWhereInput | RecomendationWhereInput[]
    id?: IntFilter<"Recomendation"> | number
    text?: StringFilter<"Recomendation"> | string
    createdAt?: DateTimeFilter<"Recomendation"> | Date | string
    updatedAt?: DateTimeFilter<"Recomendation"> | Date | string
    clientId?: IntFilter<"Recomendation"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type RecomendationOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type RecomendationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecomendationWhereInput | RecomendationWhereInput[]
    OR?: RecomendationWhereInput[]
    NOT?: RecomendationWhereInput | RecomendationWhereInput[]
    text?: StringFilter<"Recomendation"> | string
    createdAt?: DateTimeFilter<"Recomendation"> | Date | string
    updatedAt?: DateTimeFilter<"Recomendation"> | Date | string
    clientId?: IntFilter<"Recomendation"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type RecomendationOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: RecomendationCountOrderByAggregateInput
    _avg?: RecomendationAvgOrderByAggregateInput
    _max?: RecomendationMaxOrderByAggregateInput
    _min?: RecomendationMinOrderByAggregateInput
    _sum?: RecomendationSumOrderByAggregateInput
  }

  export type RecomendationScalarWhereWithAggregatesInput = {
    AND?: RecomendationScalarWhereWithAggregatesInput | RecomendationScalarWhereWithAggregatesInput[]
    OR?: RecomendationScalarWhereWithAggregatesInput[]
    NOT?: RecomendationScalarWhereWithAggregatesInput | RecomendationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recomendation"> | number
    text?: StringWithAggregatesFilter<"Recomendation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Recomendation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recomendation"> | Date | string
    clientId?: IntWithAggregatesFilter<"Recomendation"> | number
  }

  export type DisclaimerWhereInput = {
    AND?: DisclaimerWhereInput | DisclaimerWhereInput[]
    OR?: DisclaimerWhereInput[]
    NOT?: DisclaimerWhereInput | DisclaimerWhereInput[]
    id?: IntFilter<"Disclaimer"> | number
    text?: StringFilter<"Disclaimer"> | string
    createdAt?: DateTimeFilter<"Disclaimer"> | Date | string
    updatedAt?: DateTimeFilter<"Disclaimer"> | Date | string
    clientId?: IntFilter<"Disclaimer"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type DisclaimerOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type DisclaimerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisclaimerWhereInput | DisclaimerWhereInput[]
    OR?: DisclaimerWhereInput[]
    NOT?: DisclaimerWhereInput | DisclaimerWhereInput[]
    text?: StringFilter<"Disclaimer"> | string
    createdAt?: DateTimeFilter<"Disclaimer"> | Date | string
    updatedAt?: DateTimeFilter<"Disclaimer"> | Date | string
    clientId?: IntFilter<"Disclaimer"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type DisclaimerOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: DisclaimerCountOrderByAggregateInput
    _avg?: DisclaimerAvgOrderByAggregateInput
    _max?: DisclaimerMaxOrderByAggregateInput
    _min?: DisclaimerMinOrderByAggregateInput
    _sum?: DisclaimerSumOrderByAggregateInput
  }

  export type DisclaimerScalarWhereWithAggregatesInput = {
    AND?: DisclaimerScalarWhereWithAggregatesInput | DisclaimerScalarWhereWithAggregatesInput[]
    OR?: DisclaimerScalarWhereWithAggregatesInput[]
    NOT?: DisclaimerScalarWhereWithAggregatesInput | DisclaimerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Disclaimer"> | number
    text?: StringWithAggregatesFilter<"Disclaimer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Disclaimer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Disclaimer"> | Date | string
    clientId?: IntWithAggregatesFilter<"Disclaimer"> | number
  }

  export type BusinessUnitWhereInput = {
    AND?: BusinessUnitWhereInput | BusinessUnitWhereInput[]
    OR?: BusinessUnitWhereInput[]
    NOT?: BusinessUnitWhereInput | BusinessUnitWhereInput[]
    id?: IntFilter<"BusinessUnit"> | number
    description?: StringFilter<"BusinessUnit"> | string
    street?: StringFilter<"BusinessUnit"> | string
    clientId?: IntFilter<"BusinessUnit"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    deviceDetails?: DeviceDetailListRelationFilter
  }

  export type BusinessUnitOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    street?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
    deviceDetails?: DeviceDetailOrderByRelationAggregateInput
  }

  export type BusinessUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusinessUnitWhereInput | BusinessUnitWhereInput[]
    OR?: BusinessUnitWhereInput[]
    NOT?: BusinessUnitWhereInput | BusinessUnitWhereInput[]
    description?: StringFilter<"BusinessUnit"> | string
    street?: StringFilter<"BusinessUnit"> | string
    clientId?: IntFilter<"BusinessUnit"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    deviceDetails?: DeviceDetailListRelationFilter
  }, "id">

  export type BusinessUnitOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    street?: SortOrder
    clientId?: SortOrder
    _count?: BusinessUnitCountOrderByAggregateInput
    _avg?: BusinessUnitAvgOrderByAggregateInput
    _max?: BusinessUnitMaxOrderByAggregateInput
    _min?: BusinessUnitMinOrderByAggregateInput
    _sum?: BusinessUnitSumOrderByAggregateInput
  }

  export type BusinessUnitScalarWhereWithAggregatesInput = {
    AND?: BusinessUnitScalarWhereWithAggregatesInput | BusinessUnitScalarWhereWithAggregatesInput[]
    OR?: BusinessUnitScalarWhereWithAggregatesInput[]
    NOT?: BusinessUnitScalarWhereWithAggregatesInput | BusinessUnitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessUnit"> | number
    description?: StringWithAggregatesFilter<"BusinessUnit"> | string
    street?: StringWithAggregatesFilter<"BusinessUnit"> | string
    clientId?: IntWithAggregatesFilter<"BusinessUnit"> | number
  }

  export type MicrosoftSkuWhereInput = {
    AND?: MicrosoftSkuWhereInput | MicrosoftSkuWhereInput[]
    OR?: MicrosoftSkuWhereInput[]
    NOT?: MicrosoftSkuWhereInput | MicrosoftSkuWhereInput[]
    id?: StringFilter<"MicrosoftSku"> | string
    name?: StringFilter<"MicrosoftSku"> | string
    microsoftAccounts?: MicrosoftAccountListRelationFilter
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuListRelationFilter
  }

  export type MicrosoftSkuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    microsoftAccounts?: MicrosoftAccountOrderByRelationAggregateInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuOrderByRelationAggregateInput
  }

  export type MicrosoftSkuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MicrosoftSkuWhereInput | MicrosoftSkuWhereInput[]
    OR?: MicrosoftSkuWhereInput[]
    NOT?: MicrosoftSkuWhereInput | MicrosoftSkuWhereInput[]
    name?: StringFilter<"MicrosoftSku"> | string
    microsoftAccounts?: MicrosoftAccountListRelationFilter
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuListRelationFilter
  }, "id">

  export type MicrosoftSkuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MicrosoftSkuCountOrderByAggregateInput
    _max?: MicrosoftSkuMaxOrderByAggregateInput
    _min?: MicrosoftSkuMinOrderByAggregateInput
  }

  export type MicrosoftSkuScalarWhereWithAggregatesInput = {
    AND?: MicrosoftSkuScalarWhereWithAggregatesInput | MicrosoftSkuScalarWhereWithAggregatesInput[]
    OR?: MicrosoftSkuScalarWhereWithAggregatesInput[]
    NOT?: MicrosoftSkuScalarWhereWithAggregatesInput | MicrosoftSkuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MicrosoftSku"> | string
    name?: StringWithAggregatesFilter<"MicrosoftSku"> | string
  }

  export type MicrosoftAccountWhereInput = {
    AND?: MicrosoftAccountWhereInput | MicrosoftAccountWhereInput[]
    OR?: MicrosoftAccountWhereInput[]
    NOT?: MicrosoftAccountWhereInput | MicrosoftAccountWhereInput[]
    id?: StringFilter<"MicrosoftAccount"> | string
    displayName?: StringFilter<"MicrosoftAccount"> | string
    email?: StringFilter<"MicrosoftAccount"> | string
    updatedAt?: DateTimeFilter<"MicrosoftAccount"> | Date | string
    clientId?: IntFilter<"MicrosoftAccount"> | number
    microsoftSkus?: MicrosoftSkuListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type MicrosoftAccountOrderByWithRelationInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    microsoftSkus?: MicrosoftSkuOrderByRelationAggregateInput
    client?: ClientOrderByWithRelationInput
  }

  export type MicrosoftAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MicrosoftAccountWhereInput | MicrosoftAccountWhereInput[]
    OR?: MicrosoftAccountWhereInput[]
    NOT?: MicrosoftAccountWhereInput | MicrosoftAccountWhereInput[]
    displayName?: StringFilter<"MicrosoftAccount"> | string
    email?: StringFilter<"MicrosoftAccount"> | string
    updatedAt?: DateTimeFilter<"MicrosoftAccount"> | Date | string
    clientId?: IntFilter<"MicrosoftAccount"> | number
    microsoftSkus?: MicrosoftSkuListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type MicrosoftAccountOrderByWithAggregationInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: MicrosoftAccountCountOrderByAggregateInput
    _avg?: MicrosoftAccountAvgOrderByAggregateInput
    _max?: MicrosoftAccountMaxOrderByAggregateInput
    _min?: MicrosoftAccountMinOrderByAggregateInput
    _sum?: MicrosoftAccountSumOrderByAggregateInput
  }

  export type MicrosoftAccountScalarWhereWithAggregatesInput = {
    AND?: MicrosoftAccountScalarWhereWithAggregatesInput | MicrosoftAccountScalarWhereWithAggregatesInput[]
    OR?: MicrosoftAccountScalarWhereWithAggregatesInput[]
    NOT?: MicrosoftAccountScalarWhereWithAggregatesInput | MicrosoftAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MicrosoftAccount"> | string
    displayName?: StringWithAggregatesFilter<"MicrosoftAccount"> | string
    email?: StringWithAggregatesFilter<"MicrosoftAccount"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"MicrosoftAccount"> | Date | string
    clientId?: IntWithAggregatesFilter<"MicrosoftAccount"> | number
  }

  export type MicrosoftSubscribedSkuWhereInput = {
    AND?: MicrosoftSubscribedSkuWhereInput | MicrosoftSubscribedSkuWhereInput[]
    OR?: MicrosoftSubscribedSkuWhereInput[]
    NOT?: MicrosoftSubscribedSkuWhereInput | MicrosoftSubscribedSkuWhereInput[]
    id?: StringFilter<"MicrosoftSubscribedSku"> | string
    qty?: IntFilter<"MicrosoftSubscribedSku"> | number
    used?: IntFilter<"MicrosoftSubscribedSku"> | number
    updatedAt?: DateTimeFilter<"MicrosoftSubscribedSku"> | Date | string
    skuId?: StringFilter<"MicrosoftSubscribedSku"> | string
    clientId?: IntFilter<"MicrosoftSubscribedSku"> | number
    sku?: XOR<MicrosoftSkuScalarRelationFilter, MicrosoftSkuWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type MicrosoftSubscribedSkuOrderByWithRelationInput = {
    id?: SortOrder
    qty?: SortOrder
    used?: SortOrder
    updatedAt?: SortOrder
    skuId?: SortOrder
    clientId?: SortOrder
    sku?: MicrosoftSkuOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
  }

  export type MicrosoftSubscribedSkuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    skuClient?: MicrosoftSubscribedSkuSkuClientCompoundUniqueInput
    AND?: MicrosoftSubscribedSkuWhereInput | MicrosoftSubscribedSkuWhereInput[]
    OR?: MicrosoftSubscribedSkuWhereInput[]
    NOT?: MicrosoftSubscribedSkuWhereInput | MicrosoftSubscribedSkuWhereInput[]
    qty?: IntFilter<"MicrosoftSubscribedSku"> | number
    used?: IntFilter<"MicrosoftSubscribedSku"> | number
    updatedAt?: DateTimeFilter<"MicrosoftSubscribedSku"> | Date | string
    skuId?: StringFilter<"MicrosoftSubscribedSku"> | string
    clientId?: IntFilter<"MicrosoftSubscribedSku"> | number
    sku?: XOR<MicrosoftSkuScalarRelationFilter, MicrosoftSkuWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "skuClient">

  export type MicrosoftSubscribedSkuOrderByWithAggregationInput = {
    id?: SortOrder
    qty?: SortOrder
    used?: SortOrder
    updatedAt?: SortOrder
    skuId?: SortOrder
    clientId?: SortOrder
    _count?: MicrosoftSubscribedSkuCountOrderByAggregateInput
    _avg?: MicrosoftSubscribedSkuAvgOrderByAggregateInput
    _max?: MicrosoftSubscribedSkuMaxOrderByAggregateInput
    _min?: MicrosoftSubscribedSkuMinOrderByAggregateInput
    _sum?: MicrosoftSubscribedSkuSumOrderByAggregateInput
  }

  export type MicrosoftSubscribedSkuScalarWhereWithAggregatesInput = {
    AND?: MicrosoftSubscribedSkuScalarWhereWithAggregatesInput | MicrosoftSubscribedSkuScalarWhereWithAggregatesInput[]
    OR?: MicrosoftSubscribedSkuScalarWhereWithAggregatesInput[]
    NOT?: MicrosoftSubscribedSkuScalarWhereWithAggregatesInput | MicrosoftSubscribedSkuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MicrosoftSubscribedSku"> | string
    qty?: IntWithAggregatesFilter<"MicrosoftSubscribedSku"> | number
    used?: IntWithAggregatesFilter<"MicrosoftSubscribedSku"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"MicrosoftSubscribedSku"> | Date | string
    skuId?: StringWithAggregatesFilter<"MicrosoftSubscribedSku"> | string
    clientId?: IntWithAggregatesFilter<"MicrosoftSubscribedSku"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCreateInput = {
    id?: string
    email: string
    token: string
    role?: string
    usedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    clients?: ClientCreateNestedManyWithoutInvitesInput
  }

  export type InviteUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    role?: string
    usedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutInvitesInput
  }

  export type InviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutInvitesNestedInput
  }

  export type InviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutInvitesNestedInput
  }

  export type InviteCreateManyInput = {
    id?: string
    email: string
    token: string
    role?: string
    usedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
  }

  export type InviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitCreateNestedManyWithoutClientInput
    devices?: DeviceCreateNestedManyWithoutClientInput
    recomendations?: RecomendationCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuCreateNestedManyWithoutClientInput
    invites?: InviteCreateNestedManyWithoutClientsInput
    users?: UserCreateNestedManyWithoutClientsInput
  }

  export type ClientUncheckedCreateInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitUncheckedCreateNestedManyWithoutClientInput
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
    recomendations?: RecomendationUncheckedCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerUncheckedCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountUncheckedCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutClientInput
    invites?: InviteUncheckedCreateNestedManyWithoutClientsInput
    users?: UserUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUpdateManyWithoutClientNestedInput
    devices?: DeviceUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUpdateManyWithoutClientNestedInput
    invites?: InviteUpdateManyWithoutClientsNestedInput
    users?: UserUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUncheckedUpdateManyWithoutClientNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUncheckedUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUncheckedUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUncheckedUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientNestedInput
    invites?: InviteUncheckedUpdateManyWithoutClientsNestedInput
    users?: UserUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientCreateManyInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    securityStatus?: SecurityStatusCreateNestedManyWithoutDeviceInput
    securityEvents?: SecurityEventCreateNestedManyWithoutDeviceInput
    client: ClientCreateNestedOneWithoutDevicesInput
    DeviceDetail?: DeviceDetailCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    clientId: number
    securityStatus?: SecurityStatusUncheckedCreateNestedManyWithoutDeviceInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutDeviceInput
    DeviceDetail?: DeviceDetailUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityStatus?: SecurityStatusUpdateManyWithoutDeviceNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutDeviceNestedInput
    client?: ClientUpdateOneRequiredWithoutDevicesNestedInput
    DeviceDetail?: DeviceDetailUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    securityStatus?: SecurityStatusUncheckedUpdateManyWithoutDeviceNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutDeviceNestedInput
    DeviceDetail?: DeviceDetailUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    clientId: number
  }

  export type DeviceUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type SecurityStatusCreateInput = {
    id: string
    name: string
    mac: string
    group: string
    isManaged: boolean
    isManagedWithBest: boolean
    syncedAt?: Date | string
    device?: DeviceCreateNestedOneWithoutSecurityStatusInput
  }

  export type SecurityStatusUncheckedCreateInput = {
    id: string
    name: string
    mac: string
    group: string
    isManaged: boolean
    isManagedWithBest: boolean
    syncedAt?: Date | string
    deviceId?: number | null
  }

  export type SecurityStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    isManagedWithBest?: BoolFieldUpdateOperationsInput | boolean
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutSecurityStatusNestedInput
  }

  export type SecurityStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    isManagedWithBest?: BoolFieldUpdateOperationsInput | boolean
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SecurityStatusCreateManyInput = {
    id: string
    name: string
    mac: string
    group: string
    isManaged: boolean
    isManagedWithBest: boolean
    syncedAt?: Date | string
    deviceId?: number | null
  }

  export type SecurityStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    isManagedWithBest?: BoolFieldUpdateOperationsInput | boolean
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    isManagedWithBest?: BoolFieldUpdateOperationsInput | boolean
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DeviceDetailCreateInput = {
    id: number
    groupId?: number | null
    ramal: string
    imei1: string
    imei2: string
    domain: string
    totalRam: string
    totalStorage: string
    usedStorage: string
    purchaseDate?: Date | string | null
    warrantyDate?: Date | string | null
    clientVersion: string
    updatedAt?: Date | string
    businessUnit?: BusinessUnitCreateNestedOneWithoutDeviceDetailsInput
    device?: DeviceCreateNestedOneWithoutDeviceDetailInput
  }

  export type DeviceDetailUncheckedCreateInput = {
    id: number
    groupId?: number | null
    ramal: string
    imei1: string
    imei2: string
    domain: string
    totalRam: string
    totalStorage: string
    usedStorage: string
    purchaseDate?: Date | string | null
    warrantyDate?: Date | string | null
    clientVersion: string
    businessUnitId?: number | null
    updatedAt?: Date | string
    deviceId?: number | null
  }

  export type DeviceDetailUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    ramal?: StringFieldUpdateOperationsInput | string
    imei1?: StringFieldUpdateOperationsInput | string
    imei2?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    totalRam?: StringFieldUpdateOperationsInput | string
    totalStorage?: StringFieldUpdateOperationsInput | string
    usedStorage?: StringFieldUpdateOperationsInput | string
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientVersion?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnit?: BusinessUnitUpdateOneWithoutDeviceDetailsNestedInput
    device?: DeviceUpdateOneWithoutDeviceDetailNestedInput
  }

  export type DeviceDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    ramal?: StringFieldUpdateOperationsInput | string
    imei1?: StringFieldUpdateOperationsInput | string
    imei2?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    totalRam?: StringFieldUpdateOperationsInput | string
    totalStorage?: StringFieldUpdateOperationsInput | string
    usedStorage?: StringFieldUpdateOperationsInput | string
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientVersion?: StringFieldUpdateOperationsInput | string
    businessUnitId?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DeviceDetailCreateManyInput = {
    id: number
    groupId?: number | null
    ramal: string
    imei1: string
    imei2: string
    domain: string
    totalRam: string
    totalStorage: string
    usedStorage: string
    purchaseDate?: Date | string | null
    warrantyDate?: Date | string | null
    clientVersion: string
    businessUnitId?: number | null
    updatedAt?: Date | string
    deviceId?: number | null
  }

  export type DeviceDetailUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    ramal?: StringFieldUpdateOperationsInput | string
    imei1?: StringFieldUpdateOperationsInput | string
    imei2?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    totalRam?: StringFieldUpdateOperationsInput | string
    totalStorage?: StringFieldUpdateOperationsInput | string
    usedStorage?: StringFieldUpdateOperationsInput | string
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientVersion?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    ramal?: StringFieldUpdateOperationsInput | string
    imei1?: StringFieldUpdateOperationsInput | string
    imei2?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    totalRam?: StringFieldUpdateOperationsInput | string
    totalStorage?: StringFieldUpdateOperationsInput | string
    usedStorage?: StringFieldUpdateOperationsInput | string
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientVersion?: StringFieldUpdateOperationsInput | string
    businessUnitId?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SecurityEventCreateInput = {
    deviceName: string
    endpoint: string
    username: string
    occurrences: number
    lastOccurrence: Date | string
    module: string
    type: string
    companyName: string
    device?: DeviceCreateNestedOneWithoutSecurityEventsInput
  }

  export type SecurityEventUncheckedCreateInput = {
    id?: number
    deviceName: string
    endpoint: string
    username: string
    occurrences: number
    lastOccurrence: Date | string
    module: string
    type: string
    companyName: string
    deviceId?: number | null
  }

  export type SecurityEventUpdateInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    occurrences?: IntFieldUpdateOperationsInput | number
    lastOccurrence?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    device?: DeviceUpdateOneWithoutSecurityEventsNestedInput
  }

  export type SecurityEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    occurrences?: IntFieldUpdateOperationsInput | number
    lastOccurrence?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SecurityEventCreateManyInput = {
    deviceName: string
    endpoint: string
    username: string
    occurrences: number
    lastOccurrence: Date | string
    module: string
    type: string
    companyName: string
    deviceId?: number | null
  }

  export type SecurityEventUpdateManyMutationInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    occurrences?: IntFieldUpdateOperationsInput | number
    lastOccurrence?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type SecurityEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    occurrences?: IntFieldUpdateOperationsInput | number
    lastOccurrence?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecomendationCreateInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutRecomendationsInput
  }

  export type RecomendationUncheckedCreateInput = {
    id?: number
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type RecomendationUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutRecomendationsNestedInput
  }

  export type RecomendationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type RecomendationCreateManyInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type RecomendationUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecomendationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DisclaimerCreateInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutDisclaimersInput
  }

  export type DisclaimerUncheckedCreateInput = {
    id?: number
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type DisclaimerUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutDisclaimersNestedInput
  }

  export type DisclaimerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DisclaimerCreateManyInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type DisclaimerUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisclaimerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessUnitCreateInput = {
    id: number
    description: string
    street: string
    client: ClientCreateNestedOneWithoutBusinessUnitsInput
    deviceDetails?: DeviceDetailCreateNestedManyWithoutBusinessUnitInput
  }

  export type BusinessUnitUncheckedCreateInput = {
    id: number
    description: string
    street: string
    clientId: number
    deviceDetails?: DeviceDetailUncheckedCreateNestedManyWithoutBusinessUnitInput
  }

  export type BusinessUnitUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutBusinessUnitsNestedInput
    deviceDetails?: DeviceDetailUpdateManyWithoutBusinessUnitNestedInput
  }

  export type BusinessUnitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
    deviceDetails?: DeviceDetailUncheckedUpdateManyWithoutBusinessUnitNestedInput
  }

  export type BusinessUnitCreateManyInput = {
    id: number
    description: string
    street: string
    clientId: number
  }

  export type BusinessUnitUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUnitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MicrosoftSkuCreateInput = {
    id: string
    name: string
    microsoftAccounts?: MicrosoftAccountCreateNestedManyWithoutMicrosoftSkusInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuCreateNestedManyWithoutSkuInput
  }

  export type MicrosoftSkuUncheckedCreateInput = {
    id: string
    name: string
    microsoftAccounts?: MicrosoftAccountUncheckedCreateNestedManyWithoutMicrosoftSkusInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutSkuInput
  }

  export type MicrosoftSkuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    microsoftAccounts?: MicrosoftAccountUpdateManyWithoutMicrosoftSkusNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUpdateManyWithoutSkuNestedInput
  }

  export type MicrosoftSkuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    microsoftAccounts?: MicrosoftAccountUncheckedUpdateManyWithoutMicrosoftSkusNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedUpdateManyWithoutSkuNestedInput
  }

  export type MicrosoftSkuCreateManyInput = {
    id: string
    name: string
  }

  export type MicrosoftSkuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MicrosoftSkuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MicrosoftAccountCreateInput = {
    id: string
    displayName: string
    email: string
    updatedAt?: Date | string
    microsoftSkus?: MicrosoftSkuCreateNestedManyWithoutMicrosoftAccountsInput
    client: ClientCreateNestedOneWithoutMicrosoftAccountsInput
  }

  export type MicrosoftAccountUncheckedCreateInput = {
    id: string
    displayName: string
    email: string
    updatedAt?: Date | string
    clientId: number
    microsoftSkus?: MicrosoftSkuUncheckedCreateNestedManyWithoutMicrosoftAccountsInput
  }

  export type MicrosoftAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microsoftSkus?: MicrosoftSkuUpdateManyWithoutMicrosoftAccountsNestedInput
    client?: ClientUpdateOneRequiredWithoutMicrosoftAccountsNestedInput
  }

  export type MicrosoftAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    microsoftSkus?: MicrosoftSkuUncheckedUpdateManyWithoutMicrosoftAccountsNestedInput
  }

  export type MicrosoftAccountCreateManyInput = {
    id: string
    displayName: string
    email: string
    updatedAt?: Date | string
    clientId: number
  }

  export type MicrosoftAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MicrosoftAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MicrosoftSubscribedSkuCreateInput = {
    id?: string
    qty: number
    used: number
    updatedAt?: Date | string
    sku: MicrosoftSkuCreateNestedOneWithoutMicrosoftSubscribedSkusInput
    client: ClientCreateNestedOneWithoutMicrosoftSubscribedSkusInput
  }

  export type MicrosoftSubscribedSkuUncheckedCreateInput = {
    id?: string
    qty: number
    used: number
    updatedAt?: Date | string
    skuId: string
    clientId: number
  }

  export type MicrosoftSubscribedSkuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sku?: MicrosoftSkuUpdateOneRequiredWithoutMicrosoftSubscribedSkusNestedInput
    client?: ClientUpdateOneRequiredWithoutMicrosoftSubscribedSkusNestedInput
  }

  export type MicrosoftSubscribedSkuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skuId?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MicrosoftSubscribedSkuCreateManyInput = {
    id?: string
    qty: number
    used: number
    updatedAt?: Date | string
    skuId: string
    clientId: number
  }

  export type MicrosoftSubscribedSkuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MicrosoftSubscribedSkuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skuId?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type InviteCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    role?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type InviteMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    role?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type InviteMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    role?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
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

  export type BusinessUnitListRelationFilter = {
    every?: BusinessUnitWhereInput
    some?: BusinessUnitWhereInput
    none?: BusinessUnitWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type RecomendationListRelationFilter = {
    every?: RecomendationWhereInput
    some?: RecomendationWhereInput
    none?: RecomendationWhereInput
  }

  export type DisclaimerListRelationFilter = {
    every?: DisclaimerWhereInput
    some?: DisclaimerWhereInput
    none?: DisclaimerWhereInput
  }

  export type MicrosoftAccountListRelationFilter = {
    every?: MicrosoftAccountWhereInput
    some?: MicrosoftAccountWhereInput
    none?: MicrosoftAccountWhereInput
  }

  export type MicrosoftSubscribedSkuListRelationFilter = {
    every?: MicrosoftSubscribedSkuWhereInput
    some?: MicrosoftSubscribedSkuWhereInput
    none?: MicrosoftSubscribedSkuWhereInput
  }

  export type InviteListRelationFilter = {
    every?: InviteWhereInput
    some?: InviteWhereInput
    none?: InviteWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type BusinessUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecomendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisclaimerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MicrosoftAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MicrosoftSubscribedSkuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    category?: SortOrder
    cnpj?: SortOrder
    isActive?: SortOrder
    contractDeviceQty?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
    contractDeviceQty?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    category?: SortOrder
    cnpj?: SortOrder
    isActive?: SortOrder
    contractDeviceQty?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    category?: SortOrder
    cnpj?: SortOrder
    isActive?: SortOrder
    contractDeviceQty?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
    contractDeviceQty?: SortOrder
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

  export type SecurityStatusListRelationFilter = {
    every?: SecurityStatusWhereInput
    some?: SecurityStatusWhereInput
    none?: SecurityStatusWhereInput
  }

  export type SecurityEventListRelationFilter = {
    every?: SecurityEventWhereInput
    some?: SecurityEventWhereInput
    none?: SecurityEventWhereInput
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type DeviceDetailListRelationFilter = {
    every?: DeviceDetailWhereInput
    some?: DeviceDetailWhereInput
    none?: DeviceDetailWhereInput
  }

  export type SecurityStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecurityEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    mac?: SortOrder
    brand?: SortOrder
    os?: SortOrder
    processor?: SortOrder
    username?: SortOrder
    serial?: SortOrder
    model?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    syncedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    mac?: SortOrder
    brand?: SortOrder
    os?: SortOrder
    processor?: SortOrder
    username?: SortOrder
    serial?: SortOrder
    model?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    syncedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    mac?: SortOrder
    brand?: SortOrder
    os?: SortOrder
    processor?: SortOrder
    username?: SortOrder
    serial?: SortOrder
    model?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    syncedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
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

  export type DeviceNullableScalarRelationFilter = {
    is?: DeviceWhereInput | null
    isNot?: DeviceWhereInput | null
  }

  export type SecurityStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mac?: SortOrder
    group?: SortOrder
    isManaged?: SortOrder
    isManagedWithBest?: SortOrder
    syncedAt?: SortOrder
    deviceId?: SortOrder
  }

  export type SecurityStatusAvgOrderByAggregateInput = {
    deviceId?: SortOrder
  }

  export type SecurityStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mac?: SortOrder
    group?: SortOrder
    isManaged?: SortOrder
    isManagedWithBest?: SortOrder
    syncedAt?: SortOrder
    deviceId?: SortOrder
  }

  export type SecurityStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mac?: SortOrder
    group?: SortOrder
    isManaged?: SortOrder
    isManagedWithBest?: SortOrder
    syncedAt?: SortOrder
    deviceId?: SortOrder
  }

  export type SecurityStatusSumOrderByAggregateInput = {
    deviceId?: SortOrder
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

  export type BusinessUnitNullableScalarRelationFilter = {
    is?: BusinessUnitWhereInput | null
    isNot?: BusinessUnitWhereInput | null
  }

  export type DeviceDetailCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    ramal?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    domain?: SortOrder
    totalRam?: SortOrder
    totalStorage?: SortOrder
    usedStorage?: SortOrder
    purchaseDate?: SortOrder
    warrantyDate?: SortOrder
    clientVersion?: SortOrder
    businessUnitId?: SortOrder
    updatedAt?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    businessUnitId?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    ramal?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    domain?: SortOrder
    totalRam?: SortOrder
    totalStorage?: SortOrder
    usedStorage?: SortOrder
    purchaseDate?: SortOrder
    warrantyDate?: SortOrder
    clientVersion?: SortOrder
    businessUnitId?: SortOrder
    updatedAt?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceDetailMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    ramal?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    domain?: SortOrder
    totalRam?: SortOrder
    totalStorage?: SortOrder
    usedStorage?: SortOrder
    purchaseDate?: SortOrder
    warrantyDate?: SortOrder
    clientVersion?: SortOrder
    businessUnitId?: SortOrder
    updatedAt?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceDetailSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    businessUnitId?: SortOrder
    deviceId?: SortOrder
  }

  export type SecurityEventCountOrderByAggregateInput = {
    id?: SortOrder
    deviceName?: SortOrder
    endpoint?: SortOrder
    username?: SortOrder
    occurrences?: SortOrder
    lastOccurrence?: SortOrder
    module?: SortOrder
    type?: SortOrder
    companyName?: SortOrder
    deviceId?: SortOrder
  }

  export type SecurityEventAvgOrderByAggregateInput = {
    id?: SortOrder
    occurrences?: SortOrder
    deviceId?: SortOrder
  }

  export type SecurityEventMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceName?: SortOrder
    endpoint?: SortOrder
    username?: SortOrder
    occurrences?: SortOrder
    lastOccurrence?: SortOrder
    module?: SortOrder
    type?: SortOrder
    companyName?: SortOrder
    deviceId?: SortOrder
  }

  export type SecurityEventMinOrderByAggregateInput = {
    id?: SortOrder
    deviceName?: SortOrder
    endpoint?: SortOrder
    username?: SortOrder
    occurrences?: SortOrder
    lastOccurrence?: SortOrder
    module?: SortOrder
    type?: SortOrder
    companyName?: SortOrder
    deviceId?: SortOrder
  }

  export type SecurityEventSumOrderByAggregateInput = {
    id?: SortOrder
    occurrences?: SortOrder
    deviceId?: SortOrder
  }

  export type RecomendationCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type RecomendationAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type RecomendationMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type RecomendationMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type RecomendationSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type DisclaimerCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DisclaimerAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type DisclaimerMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DisclaimerMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DisclaimerSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type BusinessUnitCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    street?: SortOrder
    clientId?: SortOrder
  }

  export type BusinessUnitAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type BusinessUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    street?: SortOrder
    clientId?: SortOrder
  }

  export type BusinessUnitMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    street?: SortOrder
    clientId?: SortOrder
  }

  export type BusinessUnitSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type MicrosoftSkuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MicrosoftSkuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MicrosoftSkuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MicrosoftSkuListRelationFilter = {
    every?: MicrosoftSkuWhereInput
    some?: MicrosoftSkuWhereInput
    none?: MicrosoftSkuWhereInput
  }

  export type MicrosoftSkuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MicrosoftAccountCountOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type MicrosoftAccountAvgOrderByAggregateInput = {
    clientId?: SortOrder
  }

  export type MicrosoftAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type MicrosoftAccountMinOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type MicrosoftAccountSumOrderByAggregateInput = {
    clientId?: SortOrder
  }

  export type MicrosoftSkuScalarRelationFilter = {
    is?: MicrosoftSkuWhereInput
    isNot?: MicrosoftSkuWhereInput
  }

  export type MicrosoftSubscribedSkuSkuClientCompoundUniqueInput = {
    skuId: string
    clientId: number
  }

  export type MicrosoftSubscribedSkuCountOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
    used?: SortOrder
    updatedAt?: SortOrder
    skuId?: SortOrder
    clientId?: SortOrder
  }

  export type MicrosoftSubscribedSkuAvgOrderByAggregateInput = {
    qty?: SortOrder
    used?: SortOrder
    clientId?: SortOrder
  }

  export type MicrosoftSubscribedSkuMaxOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
    used?: SortOrder
    updatedAt?: SortOrder
    skuId?: SortOrder
    clientId?: SortOrder
  }

  export type MicrosoftSubscribedSkuMinOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
    used?: SortOrder
    updatedAt?: SortOrder
    skuId?: SortOrder
    clientId?: SortOrder
  }

  export type MicrosoftSubscribedSkuSumOrderByAggregateInput = {
    qty?: SortOrder
    used?: SortOrder
    clientId?: SortOrder
  }

  export type ClientCreateNestedManyWithoutUsersInput = {
    create?: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput> | ClientCreateWithoutUsersInput[] | ClientUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUsersInput | ClientCreateOrConnectWithoutUsersInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput> | ClientCreateWithoutUsersInput[] | ClientUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUsersInput | ClientCreateOrConnectWithoutUsersInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput> | ClientCreateWithoutUsersInput[] | ClientUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUsersInput | ClientCreateOrConnectWithoutUsersInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUsersInput | ClientUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUsersInput | ClientUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUsersInput | ClientUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput> | ClientCreateWithoutUsersInput[] | ClientUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUsersInput | ClientCreateOrConnectWithoutUsersInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUsersInput | ClientUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUsersInput | ClientUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUsersInput | ClientUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientCreateNestedManyWithoutInvitesInput = {
    create?: XOR<ClientCreateWithoutInvitesInput, ClientUncheckedCreateWithoutInvitesInput> | ClientCreateWithoutInvitesInput[] | ClientUncheckedCreateWithoutInvitesInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutInvitesInput | ClientCreateOrConnectWithoutInvitesInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutInvitesInput = {
    create?: XOR<ClientCreateWithoutInvitesInput, ClientUncheckedCreateWithoutInvitesInput> | ClientCreateWithoutInvitesInput[] | ClientUncheckedCreateWithoutInvitesInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutInvitesInput | ClientCreateOrConnectWithoutInvitesInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClientUpdateManyWithoutInvitesNestedInput = {
    create?: XOR<ClientCreateWithoutInvitesInput, ClientUncheckedCreateWithoutInvitesInput> | ClientCreateWithoutInvitesInput[] | ClientUncheckedCreateWithoutInvitesInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutInvitesInput | ClientCreateOrConnectWithoutInvitesInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutInvitesInput | ClientUpsertWithWhereUniqueWithoutInvitesInput[]
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutInvitesInput | ClientUpdateWithWhereUniqueWithoutInvitesInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutInvitesInput | ClientUpdateManyWithWhereWithoutInvitesInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutInvitesNestedInput = {
    create?: XOR<ClientCreateWithoutInvitesInput, ClientUncheckedCreateWithoutInvitesInput> | ClientCreateWithoutInvitesInput[] | ClientUncheckedCreateWithoutInvitesInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutInvitesInput | ClientCreateOrConnectWithoutInvitesInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutInvitesInput | ClientUpsertWithWhereUniqueWithoutInvitesInput[]
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutInvitesInput | ClientUpdateWithWhereUniqueWithoutInvitesInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutInvitesInput | ClientUpdateManyWithWhereWithoutInvitesInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type BusinessUnitCreateNestedManyWithoutClientInput = {
    create?: XOR<BusinessUnitCreateWithoutClientInput, BusinessUnitUncheckedCreateWithoutClientInput> | BusinessUnitCreateWithoutClientInput[] | BusinessUnitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BusinessUnitCreateOrConnectWithoutClientInput | BusinessUnitCreateOrConnectWithoutClientInput[]
    createMany?: BusinessUnitCreateManyClientInputEnvelope
    connect?: BusinessUnitWhereUniqueInput | BusinessUnitWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutClientInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type RecomendationCreateNestedManyWithoutClientInput = {
    create?: XOR<RecomendationCreateWithoutClientInput, RecomendationUncheckedCreateWithoutClientInput> | RecomendationCreateWithoutClientInput[] | RecomendationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RecomendationCreateOrConnectWithoutClientInput | RecomendationCreateOrConnectWithoutClientInput[]
    createMany?: RecomendationCreateManyClientInputEnvelope
    connect?: RecomendationWhereUniqueInput | RecomendationWhereUniqueInput[]
  }

  export type DisclaimerCreateNestedManyWithoutClientInput = {
    create?: XOR<DisclaimerCreateWithoutClientInput, DisclaimerUncheckedCreateWithoutClientInput> | DisclaimerCreateWithoutClientInput[] | DisclaimerUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DisclaimerCreateOrConnectWithoutClientInput | DisclaimerCreateOrConnectWithoutClientInput[]
    createMany?: DisclaimerCreateManyClientInputEnvelope
    connect?: DisclaimerWhereUniqueInput | DisclaimerWhereUniqueInput[]
  }

  export type MicrosoftAccountCreateNestedManyWithoutClientInput = {
    create?: XOR<MicrosoftAccountCreateWithoutClientInput, MicrosoftAccountUncheckedCreateWithoutClientInput> | MicrosoftAccountCreateWithoutClientInput[] | MicrosoftAccountUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MicrosoftAccountCreateOrConnectWithoutClientInput | MicrosoftAccountCreateOrConnectWithoutClientInput[]
    createMany?: MicrosoftAccountCreateManyClientInputEnvelope
    connect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
  }

  export type MicrosoftSubscribedSkuCreateNestedManyWithoutClientInput = {
    create?: XOR<MicrosoftSubscribedSkuCreateWithoutClientInput, MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput> | MicrosoftSubscribedSkuCreateWithoutClientInput[] | MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MicrosoftSubscribedSkuCreateOrConnectWithoutClientInput | MicrosoftSubscribedSkuCreateOrConnectWithoutClientInput[]
    createMany?: MicrosoftSubscribedSkuCreateManyClientInputEnvelope
    connect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
  }

  export type InviteCreateNestedManyWithoutClientsInput = {
    create?: XOR<InviteCreateWithoutClientsInput, InviteUncheckedCreateWithoutClientsInput> | InviteCreateWithoutClientsInput[] | InviteUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutClientsInput | InviteCreateOrConnectWithoutClientsInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput> | UserCreateWithoutClientsInput[] | UserUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput | UserCreateOrConnectWithoutClientsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BusinessUnitUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<BusinessUnitCreateWithoutClientInput, BusinessUnitUncheckedCreateWithoutClientInput> | BusinessUnitCreateWithoutClientInput[] | BusinessUnitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BusinessUnitCreateOrConnectWithoutClientInput | BusinessUnitCreateOrConnectWithoutClientInput[]
    createMany?: BusinessUnitCreateManyClientInputEnvelope
    connect?: BusinessUnitWhereUniqueInput | BusinessUnitWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type RecomendationUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<RecomendationCreateWithoutClientInput, RecomendationUncheckedCreateWithoutClientInput> | RecomendationCreateWithoutClientInput[] | RecomendationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RecomendationCreateOrConnectWithoutClientInput | RecomendationCreateOrConnectWithoutClientInput[]
    createMany?: RecomendationCreateManyClientInputEnvelope
    connect?: RecomendationWhereUniqueInput | RecomendationWhereUniqueInput[]
  }

  export type DisclaimerUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DisclaimerCreateWithoutClientInput, DisclaimerUncheckedCreateWithoutClientInput> | DisclaimerCreateWithoutClientInput[] | DisclaimerUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DisclaimerCreateOrConnectWithoutClientInput | DisclaimerCreateOrConnectWithoutClientInput[]
    createMany?: DisclaimerCreateManyClientInputEnvelope
    connect?: DisclaimerWhereUniqueInput | DisclaimerWhereUniqueInput[]
  }

  export type MicrosoftAccountUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<MicrosoftAccountCreateWithoutClientInput, MicrosoftAccountUncheckedCreateWithoutClientInput> | MicrosoftAccountCreateWithoutClientInput[] | MicrosoftAccountUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MicrosoftAccountCreateOrConnectWithoutClientInput | MicrosoftAccountCreateOrConnectWithoutClientInput[]
    createMany?: MicrosoftAccountCreateManyClientInputEnvelope
    connect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
  }

  export type MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<MicrosoftSubscribedSkuCreateWithoutClientInput, MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput> | MicrosoftSubscribedSkuCreateWithoutClientInput[] | MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MicrosoftSubscribedSkuCreateOrConnectWithoutClientInput | MicrosoftSubscribedSkuCreateOrConnectWithoutClientInput[]
    createMany?: MicrosoftSubscribedSkuCreateManyClientInputEnvelope
    connect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
  }

  export type InviteUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<InviteCreateWithoutClientsInput, InviteUncheckedCreateWithoutClientsInput> | InviteCreateWithoutClientsInput[] | InviteUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutClientsInput | InviteCreateOrConnectWithoutClientsInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput> | UserCreateWithoutClientsInput[] | UserUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput | UserCreateOrConnectWithoutClientsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessUnitUpdateManyWithoutClientNestedInput = {
    create?: XOR<BusinessUnitCreateWithoutClientInput, BusinessUnitUncheckedCreateWithoutClientInput> | BusinessUnitCreateWithoutClientInput[] | BusinessUnitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BusinessUnitCreateOrConnectWithoutClientInput | BusinessUnitCreateOrConnectWithoutClientInput[]
    upsert?: BusinessUnitUpsertWithWhereUniqueWithoutClientInput | BusinessUnitUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BusinessUnitCreateManyClientInputEnvelope
    set?: BusinessUnitWhereUniqueInput | BusinessUnitWhereUniqueInput[]
    disconnect?: BusinessUnitWhereUniqueInput | BusinessUnitWhereUniqueInput[]
    delete?: BusinessUnitWhereUniqueInput | BusinessUnitWhereUniqueInput[]
    connect?: BusinessUnitWhereUniqueInput | BusinessUnitWhereUniqueInput[]
    update?: BusinessUnitUpdateWithWhereUniqueWithoutClientInput | BusinessUnitUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BusinessUnitUpdateManyWithWhereWithoutClientInput | BusinessUnitUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BusinessUnitScalarWhereInput | BusinessUnitScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutClientNestedInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutClientInput | DeviceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutClientInput | DeviceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutClientInput | DeviceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type RecomendationUpdateManyWithoutClientNestedInput = {
    create?: XOR<RecomendationCreateWithoutClientInput, RecomendationUncheckedCreateWithoutClientInput> | RecomendationCreateWithoutClientInput[] | RecomendationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RecomendationCreateOrConnectWithoutClientInput | RecomendationCreateOrConnectWithoutClientInput[]
    upsert?: RecomendationUpsertWithWhereUniqueWithoutClientInput | RecomendationUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RecomendationCreateManyClientInputEnvelope
    set?: RecomendationWhereUniqueInput | RecomendationWhereUniqueInput[]
    disconnect?: RecomendationWhereUniqueInput | RecomendationWhereUniqueInput[]
    delete?: RecomendationWhereUniqueInput | RecomendationWhereUniqueInput[]
    connect?: RecomendationWhereUniqueInput | RecomendationWhereUniqueInput[]
    update?: RecomendationUpdateWithWhereUniqueWithoutClientInput | RecomendationUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RecomendationUpdateManyWithWhereWithoutClientInput | RecomendationUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RecomendationScalarWhereInput | RecomendationScalarWhereInput[]
  }

  export type DisclaimerUpdateManyWithoutClientNestedInput = {
    create?: XOR<DisclaimerCreateWithoutClientInput, DisclaimerUncheckedCreateWithoutClientInput> | DisclaimerCreateWithoutClientInput[] | DisclaimerUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DisclaimerCreateOrConnectWithoutClientInput | DisclaimerCreateOrConnectWithoutClientInput[]
    upsert?: DisclaimerUpsertWithWhereUniqueWithoutClientInput | DisclaimerUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DisclaimerCreateManyClientInputEnvelope
    set?: DisclaimerWhereUniqueInput | DisclaimerWhereUniqueInput[]
    disconnect?: DisclaimerWhereUniqueInput | DisclaimerWhereUniqueInput[]
    delete?: DisclaimerWhereUniqueInput | DisclaimerWhereUniqueInput[]
    connect?: DisclaimerWhereUniqueInput | DisclaimerWhereUniqueInput[]
    update?: DisclaimerUpdateWithWhereUniqueWithoutClientInput | DisclaimerUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DisclaimerUpdateManyWithWhereWithoutClientInput | DisclaimerUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DisclaimerScalarWhereInput | DisclaimerScalarWhereInput[]
  }

  export type MicrosoftAccountUpdateManyWithoutClientNestedInput = {
    create?: XOR<MicrosoftAccountCreateWithoutClientInput, MicrosoftAccountUncheckedCreateWithoutClientInput> | MicrosoftAccountCreateWithoutClientInput[] | MicrosoftAccountUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MicrosoftAccountCreateOrConnectWithoutClientInput | MicrosoftAccountCreateOrConnectWithoutClientInput[]
    upsert?: MicrosoftAccountUpsertWithWhereUniqueWithoutClientInput | MicrosoftAccountUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MicrosoftAccountCreateManyClientInputEnvelope
    set?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    disconnect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    delete?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    connect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    update?: MicrosoftAccountUpdateWithWhereUniqueWithoutClientInput | MicrosoftAccountUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MicrosoftAccountUpdateManyWithWhereWithoutClientInput | MicrosoftAccountUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MicrosoftAccountScalarWhereInput | MicrosoftAccountScalarWhereInput[]
  }

  export type MicrosoftSubscribedSkuUpdateManyWithoutClientNestedInput = {
    create?: XOR<MicrosoftSubscribedSkuCreateWithoutClientInput, MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput> | MicrosoftSubscribedSkuCreateWithoutClientInput[] | MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MicrosoftSubscribedSkuCreateOrConnectWithoutClientInput | MicrosoftSubscribedSkuCreateOrConnectWithoutClientInput[]
    upsert?: MicrosoftSubscribedSkuUpsertWithWhereUniqueWithoutClientInput | MicrosoftSubscribedSkuUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MicrosoftSubscribedSkuCreateManyClientInputEnvelope
    set?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    disconnect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    delete?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    connect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    update?: MicrosoftSubscribedSkuUpdateWithWhereUniqueWithoutClientInput | MicrosoftSubscribedSkuUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MicrosoftSubscribedSkuUpdateManyWithWhereWithoutClientInput | MicrosoftSubscribedSkuUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MicrosoftSubscribedSkuScalarWhereInput | MicrosoftSubscribedSkuScalarWhereInput[]
  }

  export type InviteUpdateManyWithoutClientsNestedInput = {
    create?: XOR<InviteCreateWithoutClientsInput, InviteUncheckedCreateWithoutClientsInput> | InviteCreateWithoutClientsInput[] | InviteUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutClientsInput | InviteCreateOrConnectWithoutClientsInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutClientsInput | InviteUpsertWithWhereUniqueWithoutClientsInput[]
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutClientsInput | InviteUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutClientsInput | InviteUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput> | UserCreateWithoutClientsInput[] | UserUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput | UserCreateOrConnectWithoutClientsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientsInput | UserUpsertWithWhereUniqueWithoutClientsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientsInput | UserUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientsInput | UserUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BusinessUnitUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<BusinessUnitCreateWithoutClientInput, BusinessUnitUncheckedCreateWithoutClientInput> | BusinessUnitCreateWithoutClientInput[] | BusinessUnitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BusinessUnitCreateOrConnectWithoutClientInput | BusinessUnitCreateOrConnectWithoutClientInput[]
    upsert?: BusinessUnitUpsertWithWhereUniqueWithoutClientInput | BusinessUnitUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BusinessUnitCreateManyClientInputEnvelope
    set?: BusinessUnitWhereUniqueInput | BusinessUnitWhereUniqueInput[]
    disconnect?: BusinessUnitWhereUniqueInput | BusinessUnitWhereUniqueInput[]
    delete?: BusinessUnitWhereUniqueInput | BusinessUnitWhereUniqueInput[]
    connect?: BusinessUnitWhereUniqueInput | BusinessUnitWhereUniqueInput[]
    update?: BusinessUnitUpdateWithWhereUniqueWithoutClientInput | BusinessUnitUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BusinessUnitUpdateManyWithWhereWithoutClientInput | BusinessUnitUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BusinessUnitScalarWhereInput | BusinessUnitScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutClientInput | DeviceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutClientInput | DeviceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutClientInput | DeviceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type RecomendationUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<RecomendationCreateWithoutClientInput, RecomendationUncheckedCreateWithoutClientInput> | RecomendationCreateWithoutClientInput[] | RecomendationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RecomendationCreateOrConnectWithoutClientInput | RecomendationCreateOrConnectWithoutClientInput[]
    upsert?: RecomendationUpsertWithWhereUniqueWithoutClientInput | RecomendationUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RecomendationCreateManyClientInputEnvelope
    set?: RecomendationWhereUniqueInput | RecomendationWhereUniqueInput[]
    disconnect?: RecomendationWhereUniqueInput | RecomendationWhereUniqueInput[]
    delete?: RecomendationWhereUniqueInput | RecomendationWhereUniqueInput[]
    connect?: RecomendationWhereUniqueInput | RecomendationWhereUniqueInput[]
    update?: RecomendationUpdateWithWhereUniqueWithoutClientInput | RecomendationUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RecomendationUpdateManyWithWhereWithoutClientInput | RecomendationUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RecomendationScalarWhereInput | RecomendationScalarWhereInput[]
  }

  export type DisclaimerUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DisclaimerCreateWithoutClientInput, DisclaimerUncheckedCreateWithoutClientInput> | DisclaimerCreateWithoutClientInput[] | DisclaimerUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DisclaimerCreateOrConnectWithoutClientInput | DisclaimerCreateOrConnectWithoutClientInput[]
    upsert?: DisclaimerUpsertWithWhereUniqueWithoutClientInput | DisclaimerUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DisclaimerCreateManyClientInputEnvelope
    set?: DisclaimerWhereUniqueInput | DisclaimerWhereUniqueInput[]
    disconnect?: DisclaimerWhereUniqueInput | DisclaimerWhereUniqueInput[]
    delete?: DisclaimerWhereUniqueInput | DisclaimerWhereUniqueInput[]
    connect?: DisclaimerWhereUniqueInput | DisclaimerWhereUniqueInput[]
    update?: DisclaimerUpdateWithWhereUniqueWithoutClientInput | DisclaimerUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DisclaimerUpdateManyWithWhereWithoutClientInput | DisclaimerUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DisclaimerScalarWhereInput | DisclaimerScalarWhereInput[]
  }

  export type MicrosoftAccountUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<MicrosoftAccountCreateWithoutClientInput, MicrosoftAccountUncheckedCreateWithoutClientInput> | MicrosoftAccountCreateWithoutClientInput[] | MicrosoftAccountUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MicrosoftAccountCreateOrConnectWithoutClientInput | MicrosoftAccountCreateOrConnectWithoutClientInput[]
    upsert?: MicrosoftAccountUpsertWithWhereUniqueWithoutClientInput | MicrosoftAccountUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MicrosoftAccountCreateManyClientInputEnvelope
    set?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    disconnect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    delete?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    connect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    update?: MicrosoftAccountUpdateWithWhereUniqueWithoutClientInput | MicrosoftAccountUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MicrosoftAccountUpdateManyWithWhereWithoutClientInput | MicrosoftAccountUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MicrosoftAccountScalarWhereInput | MicrosoftAccountScalarWhereInput[]
  }

  export type MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<MicrosoftSubscribedSkuCreateWithoutClientInput, MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput> | MicrosoftSubscribedSkuCreateWithoutClientInput[] | MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MicrosoftSubscribedSkuCreateOrConnectWithoutClientInput | MicrosoftSubscribedSkuCreateOrConnectWithoutClientInput[]
    upsert?: MicrosoftSubscribedSkuUpsertWithWhereUniqueWithoutClientInput | MicrosoftSubscribedSkuUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MicrosoftSubscribedSkuCreateManyClientInputEnvelope
    set?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    disconnect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    delete?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    connect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    update?: MicrosoftSubscribedSkuUpdateWithWhereUniqueWithoutClientInput | MicrosoftSubscribedSkuUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MicrosoftSubscribedSkuUpdateManyWithWhereWithoutClientInput | MicrosoftSubscribedSkuUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MicrosoftSubscribedSkuScalarWhereInput | MicrosoftSubscribedSkuScalarWhereInput[]
  }

  export type InviteUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<InviteCreateWithoutClientsInput, InviteUncheckedCreateWithoutClientsInput> | InviteCreateWithoutClientsInput[] | InviteUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutClientsInput | InviteCreateOrConnectWithoutClientsInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutClientsInput | InviteUpsertWithWhereUniqueWithoutClientsInput[]
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutClientsInput | InviteUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutClientsInput | InviteUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput> | UserCreateWithoutClientsInput[] | UserUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput | UserCreateOrConnectWithoutClientsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientsInput | UserUpsertWithWhereUniqueWithoutClientsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientsInput | UserUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientsInput | UserUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SecurityStatusCreateNestedManyWithoutDeviceInput = {
    create?: XOR<SecurityStatusCreateWithoutDeviceInput, SecurityStatusUncheckedCreateWithoutDeviceInput> | SecurityStatusCreateWithoutDeviceInput[] | SecurityStatusUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SecurityStatusCreateOrConnectWithoutDeviceInput | SecurityStatusCreateOrConnectWithoutDeviceInput[]
    createMany?: SecurityStatusCreateManyDeviceInputEnvelope
    connect?: SecurityStatusWhereUniqueInput | SecurityStatusWhereUniqueInput[]
  }

  export type SecurityEventCreateNestedManyWithoutDeviceInput = {
    create?: XOR<SecurityEventCreateWithoutDeviceInput, SecurityEventUncheckedCreateWithoutDeviceInput> | SecurityEventCreateWithoutDeviceInput[] | SecurityEventUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutDeviceInput | SecurityEventCreateOrConnectWithoutDeviceInput[]
    createMany?: SecurityEventCreateManyDeviceInputEnvelope
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
  }

  export type ClientCreateNestedOneWithoutDevicesInput = {
    create?: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDevicesInput
    connect?: ClientWhereUniqueInput
  }

  export type DeviceDetailCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceDetailCreateWithoutDeviceInput, DeviceDetailUncheckedCreateWithoutDeviceInput> | DeviceDetailCreateWithoutDeviceInput[] | DeviceDetailUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceDetailCreateOrConnectWithoutDeviceInput | DeviceDetailCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceDetailCreateManyDeviceInputEnvelope
    connect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
  }

  export type SecurityStatusUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<SecurityStatusCreateWithoutDeviceInput, SecurityStatusUncheckedCreateWithoutDeviceInput> | SecurityStatusCreateWithoutDeviceInput[] | SecurityStatusUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SecurityStatusCreateOrConnectWithoutDeviceInput | SecurityStatusCreateOrConnectWithoutDeviceInput[]
    createMany?: SecurityStatusCreateManyDeviceInputEnvelope
    connect?: SecurityStatusWhereUniqueInput | SecurityStatusWhereUniqueInput[]
  }

  export type SecurityEventUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<SecurityEventCreateWithoutDeviceInput, SecurityEventUncheckedCreateWithoutDeviceInput> | SecurityEventCreateWithoutDeviceInput[] | SecurityEventUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutDeviceInput | SecurityEventCreateOrConnectWithoutDeviceInput[]
    createMany?: SecurityEventCreateManyDeviceInputEnvelope
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
  }

  export type DeviceDetailUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceDetailCreateWithoutDeviceInput, DeviceDetailUncheckedCreateWithoutDeviceInput> | DeviceDetailCreateWithoutDeviceInput[] | DeviceDetailUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceDetailCreateOrConnectWithoutDeviceInput | DeviceDetailCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceDetailCreateManyDeviceInputEnvelope
    connect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
  }

  export type SecurityStatusUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<SecurityStatusCreateWithoutDeviceInput, SecurityStatusUncheckedCreateWithoutDeviceInput> | SecurityStatusCreateWithoutDeviceInput[] | SecurityStatusUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SecurityStatusCreateOrConnectWithoutDeviceInput | SecurityStatusCreateOrConnectWithoutDeviceInput[]
    upsert?: SecurityStatusUpsertWithWhereUniqueWithoutDeviceInput | SecurityStatusUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: SecurityStatusCreateManyDeviceInputEnvelope
    set?: SecurityStatusWhereUniqueInput | SecurityStatusWhereUniqueInput[]
    disconnect?: SecurityStatusWhereUniqueInput | SecurityStatusWhereUniqueInput[]
    delete?: SecurityStatusWhereUniqueInput | SecurityStatusWhereUniqueInput[]
    connect?: SecurityStatusWhereUniqueInput | SecurityStatusWhereUniqueInput[]
    update?: SecurityStatusUpdateWithWhereUniqueWithoutDeviceInput | SecurityStatusUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: SecurityStatusUpdateManyWithWhereWithoutDeviceInput | SecurityStatusUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: SecurityStatusScalarWhereInput | SecurityStatusScalarWhereInput[]
  }

  export type SecurityEventUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<SecurityEventCreateWithoutDeviceInput, SecurityEventUncheckedCreateWithoutDeviceInput> | SecurityEventCreateWithoutDeviceInput[] | SecurityEventUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutDeviceInput | SecurityEventCreateOrConnectWithoutDeviceInput[]
    upsert?: SecurityEventUpsertWithWhereUniqueWithoutDeviceInput | SecurityEventUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: SecurityEventCreateManyDeviceInputEnvelope
    set?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    disconnect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    delete?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    update?: SecurityEventUpdateWithWhereUniqueWithoutDeviceInput | SecurityEventUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: SecurityEventUpdateManyWithWhereWithoutDeviceInput | SecurityEventUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
  }

  export type ClientUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDevicesInput
    upsert?: ClientUpsertWithoutDevicesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDevicesInput, ClientUpdateWithoutDevicesInput>, ClientUncheckedUpdateWithoutDevicesInput>
  }

  export type DeviceDetailUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceDetailCreateWithoutDeviceInput, DeviceDetailUncheckedCreateWithoutDeviceInput> | DeviceDetailCreateWithoutDeviceInput[] | DeviceDetailUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceDetailCreateOrConnectWithoutDeviceInput | DeviceDetailCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceDetailUpsertWithWhereUniqueWithoutDeviceInput | DeviceDetailUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceDetailCreateManyDeviceInputEnvelope
    set?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    disconnect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    delete?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    connect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    update?: DeviceDetailUpdateWithWhereUniqueWithoutDeviceInput | DeviceDetailUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceDetailUpdateManyWithWhereWithoutDeviceInput | DeviceDetailUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceDetailScalarWhereInput | DeviceDetailScalarWhereInput[]
  }

  export type SecurityStatusUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<SecurityStatusCreateWithoutDeviceInput, SecurityStatusUncheckedCreateWithoutDeviceInput> | SecurityStatusCreateWithoutDeviceInput[] | SecurityStatusUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SecurityStatusCreateOrConnectWithoutDeviceInput | SecurityStatusCreateOrConnectWithoutDeviceInput[]
    upsert?: SecurityStatusUpsertWithWhereUniqueWithoutDeviceInput | SecurityStatusUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: SecurityStatusCreateManyDeviceInputEnvelope
    set?: SecurityStatusWhereUniqueInput | SecurityStatusWhereUniqueInput[]
    disconnect?: SecurityStatusWhereUniqueInput | SecurityStatusWhereUniqueInput[]
    delete?: SecurityStatusWhereUniqueInput | SecurityStatusWhereUniqueInput[]
    connect?: SecurityStatusWhereUniqueInput | SecurityStatusWhereUniqueInput[]
    update?: SecurityStatusUpdateWithWhereUniqueWithoutDeviceInput | SecurityStatusUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: SecurityStatusUpdateManyWithWhereWithoutDeviceInput | SecurityStatusUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: SecurityStatusScalarWhereInput | SecurityStatusScalarWhereInput[]
  }

  export type SecurityEventUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<SecurityEventCreateWithoutDeviceInput, SecurityEventUncheckedCreateWithoutDeviceInput> | SecurityEventCreateWithoutDeviceInput[] | SecurityEventUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutDeviceInput | SecurityEventCreateOrConnectWithoutDeviceInput[]
    upsert?: SecurityEventUpsertWithWhereUniqueWithoutDeviceInput | SecurityEventUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: SecurityEventCreateManyDeviceInputEnvelope
    set?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    disconnect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    delete?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    update?: SecurityEventUpdateWithWhereUniqueWithoutDeviceInput | SecurityEventUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: SecurityEventUpdateManyWithWhereWithoutDeviceInput | SecurityEventUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
  }

  export type DeviceDetailUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceDetailCreateWithoutDeviceInput, DeviceDetailUncheckedCreateWithoutDeviceInput> | DeviceDetailCreateWithoutDeviceInput[] | DeviceDetailUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceDetailCreateOrConnectWithoutDeviceInput | DeviceDetailCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceDetailUpsertWithWhereUniqueWithoutDeviceInput | DeviceDetailUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceDetailCreateManyDeviceInputEnvelope
    set?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    disconnect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    delete?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    connect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    update?: DeviceDetailUpdateWithWhereUniqueWithoutDeviceInput | DeviceDetailUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceDetailUpdateManyWithWhereWithoutDeviceInput | DeviceDetailUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceDetailScalarWhereInput | DeviceDetailScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutSecurityStatusInput = {
    create?: XOR<DeviceCreateWithoutSecurityStatusInput, DeviceUncheckedCreateWithoutSecurityStatusInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSecurityStatusInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneWithoutSecurityStatusNestedInput = {
    create?: XOR<DeviceCreateWithoutSecurityStatusInput, DeviceUncheckedCreateWithoutSecurityStatusInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSecurityStatusInput
    upsert?: DeviceUpsertWithoutSecurityStatusInput
    disconnect?: DeviceWhereInput | boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutSecurityStatusInput, DeviceUpdateWithoutSecurityStatusInput>, DeviceUncheckedUpdateWithoutSecurityStatusInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessUnitCreateNestedOneWithoutDeviceDetailsInput = {
    create?: XOR<BusinessUnitCreateWithoutDeviceDetailsInput, BusinessUnitUncheckedCreateWithoutDeviceDetailsInput>
    connectOrCreate?: BusinessUnitCreateOrConnectWithoutDeviceDetailsInput
    connect?: BusinessUnitWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutDeviceDetailInput = {
    create?: XOR<DeviceCreateWithoutDeviceDetailInput, DeviceUncheckedCreateWithoutDeviceDetailInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceDetailInput
    connect?: DeviceWhereUniqueInput
  }

  export type BusinessUnitUpdateOneWithoutDeviceDetailsNestedInput = {
    create?: XOR<BusinessUnitCreateWithoutDeviceDetailsInput, BusinessUnitUncheckedCreateWithoutDeviceDetailsInput>
    connectOrCreate?: BusinessUnitCreateOrConnectWithoutDeviceDetailsInput
    upsert?: BusinessUnitUpsertWithoutDeviceDetailsInput
    disconnect?: BusinessUnitWhereInput | boolean
    delete?: BusinessUnitWhereInput | boolean
    connect?: BusinessUnitWhereUniqueInput
    update?: XOR<XOR<BusinessUnitUpdateToOneWithWhereWithoutDeviceDetailsInput, BusinessUnitUpdateWithoutDeviceDetailsInput>, BusinessUnitUncheckedUpdateWithoutDeviceDetailsInput>
  }

  export type DeviceUpdateOneWithoutDeviceDetailNestedInput = {
    create?: XOR<DeviceCreateWithoutDeviceDetailInput, DeviceUncheckedCreateWithoutDeviceDetailInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceDetailInput
    upsert?: DeviceUpsertWithoutDeviceDetailInput
    disconnect?: DeviceWhereInput | boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutDeviceDetailInput, DeviceUpdateWithoutDeviceDetailInput>, DeviceUncheckedUpdateWithoutDeviceDetailInput>
  }

  export type DeviceCreateNestedOneWithoutSecurityEventsInput = {
    create?: XOR<DeviceCreateWithoutSecurityEventsInput, DeviceUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSecurityEventsInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneWithoutSecurityEventsNestedInput = {
    create?: XOR<DeviceCreateWithoutSecurityEventsInput, DeviceUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSecurityEventsInput
    upsert?: DeviceUpsertWithoutSecurityEventsInput
    disconnect?: DeviceWhereInput | boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutSecurityEventsInput, DeviceUpdateWithoutSecurityEventsInput>, DeviceUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type ClientCreateNestedOneWithoutRecomendationsInput = {
    create?: XOR<ClientCreateWithoutRecomendationsInput, ClientUncheckedCreateWithoutRecomendationsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRecomendationsInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutRecomendationsNestedInput = {
    create?: XOR<ClientCreateWithoutRecomendationsInput, ClientUncheckedCreateWithoutRecomendationsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRecomendationsInput
    upsert?: ClientUpsertWithoutRecomendationsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutRecomendationsInput, ClientUpdateWithoutRecomendationsInput>, ClientUncheckedUpdateWithoutRecomendationsInput>
  }

  export type ClientCreateNestedOneWithoutDisclaimersInput = {
    create?: XOR<ClientCreateWithoutDisclaimersInput, ClientUncheckedCreateWithoutDisclaimersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDisclaimersInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutDisclaimersNestedInput = {
    create?: XOR<ClientCreateWithoutDisclaimersInput, ClientUncheckedCreateWithoutDisclaimersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDisclaimersInput
    upsert?: ClientUpsertWithoutDisclaimersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDisclaimersInput, ClientUpdateWithoutDisclaimersInput>, ClientUncheckedUpdateWithoutDisclaimersInput>
  }

  export type ClientCreateNestedOneWithoutBusinessUnitsInput = {
    create?: XOR<ClientCreateWithoutBusinessUnitsInput, ClientUncheckedCreateWithoutBusinessUnitsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBusinessUnitsInput
    connect?: ClientWhereUniqueInput
  }

  export type DeviceDetailCreateNestedManyWithoutBusinessUnitInput = {
    create?: XOR<DeviceDetailCreateWithoutBusinessUnitInput, DeviceDetailUncheckedCreateWithoutBusinessUnitInput> | DeviceDetailCreateWithoutBusinessUnitInput[] | DeviceDetailUncheckedCreateWithoutBusinessUnitInput[]
    connectOrCreate?: DeviceDetailCreateOrConnectWithoutBusinessUnitInput | DeviceDetailCreateOrConnectWithoutBusinessUnitInput[]
    createMany?: DeviceDetailCreateManyBusinessUnitInputEnvelope
    connect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
  }

  export type DeviceDetailUncheckedCreateNestedManyWithoutBusinessUnitInput = {
    create?: XOR<DeviceDetailCreateWithoutBusinessUnitInput, DeviceDetailUncheckedCreateWithoutBusinessUnitInput> | DeviceDetailCreateWithoutBusinessUnitInput[] | DeviceDetailUncheckedCreateWithoutBusinessUnitInput[]
    connectOrCreate?: DeviceDetailCreateOrConnectWithoutBusinessUnitInput | DeviceDetailCreateOrConnectWithoutBusinessUnitInput[]
    createMany?: DeviceDetailCreateManyBusinessUnitInputEnvelope
    connect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutBusinessUnitsNestedInput = {
    create?: XOR<ClientCreateWithoutBusinessUnitsInput, ClientUncheckedCreateWithoutBusinessUnitsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBusinessUnitsInput
    upsert?: ClientUpsertWithoutBusinessUnitsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutBusinessUnitsInput, ClientUpdateWithoutBusinessUnitsInput>, ClientUncheckedUpdateWithoutBusinessUnitsInput>
  }

  export type DeviceDetailUpdateManyWithoutBusinessUnitNestedInput = {
    create?: XOR<DeviceDetailCreateWithoutBusinessUnitInput, DeviceDetailUncheckedCreateWithoutBusinessUnitInput> | DeviceDetailCreateWithoutBusinessUnitInput[] | DeviceDetailUncheckedCreateWithoutBusinessUnitInput[]
    connectOrCreate?: DeviceDetailCreateOrConnectWithoutBusinessUnitInput | DeviceDetailCreateOrConnectWithoutBusinessUnitInput[]
    upsert?: DeviceDetailUpsertWithWhereUniqueWithoutBusinessUnitInput | DeviceDetailUpsertWithWhereUniqueWithoutBusinessUnitInput[]
    createMany?: DeviceDetailCreateManyBusinessUnitInputEnvelope
    set?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    disconnect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    delete?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    connect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    update?: DeviceDetailUpdateWithWhereUniqueWithoutBusinessUnitInput | DeviceDetailUpdateWithWhereUniqueWithoutBusinessUnitInput[]
    updateMany?: DeviceDetailUpdateManyWithWhereWithoutBusinessUnitInput | DeviceDetailUpdateManyWithWhereWithoutBusinessUnitInput[]
    deleteMany?: DeviceDetailScalarWhereInput | DeviceDetailScalarWhereInput[]
  }

  export type DeviceDetailUncheckedUpdateManyWithoutBusinessUnitNestedInput = {
    create?: XOR<DeviceDetailCreateWithoutBusinessUnitInput, DeviceDetailUncheckedCreateWithoutBusinessUnitInput> | DeviceDetailCreateWithoutBusinessUnitInput[] | DeviceDetailUncheckedCreateWithoutBusinessUnitInput[]
    connectOrCreate?: DeviceDetailCreateOrConnectWithoutBusinessUnitInput | DeviceDetailCreateOrConnectWithoutBusinessUnitInput[]
    upsert?: DeviceDetailUpsertWithWhereUniqueWithoutBusinessUnitInput | DeviceDetailUpsertWithWhereUniqueWithoutBusinessUnitInput[]
    createMany?: DeviceDetailCreateManyBusinessUnitInputEnvelope
    set?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    disconnect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    delete?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    connect?: DeviceDetailWhereUniqueInput | DeviceDetailWhereUniqueInput[]
    update?: DeviceDetailUpdateWithWhereUniqueWithoutBusinessUnitInput | DeviceDetailUpdateWithWhereUniqueWithoutBusinessUnitInput[]
    updateMany?: DeviceDetailUpdateManyWithWhereWithoutBusinessUnitInput | DeviceDetailUpdateManyWithWhereWithoutBusinessUnitInput[]
    deleteMany?: DeviceDetailScalarWhereInput | DeviceDetailScalarWhereInput[]
  }

  export type MicrosoftAccountCreateNestedManyWithoutMicrosoftSkusInput = {
    create?: XOR<MicrosoftAccountCreateWithoutMicrosoftSkusInput, MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput> | MicrosoftAccountCreateWithoutMicrosoftSkusInput[] | MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput[]
    connectOrCreate?: MicrosoftAccountCreateOrConnectWithoutMicrosoftSkusInput | MicrosoftAccountCreateOrConnectWithoutMicrosoftSkusInput[]
    connect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
  }

  export type MicrosoftSubscribedSkuCreateNestedManyWithoutSkuInput = {
    create?: XOR<MicrosoftSubscribedSkuCreateWithoutSkuInput, MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput> | MicrosoftSubscribedSkuCreateWithoutSkuInput[] | MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: MicrosoftSubscribedSkuCreateOrConnectWithoutSkuInput | MicrosoftSubscribedSkuCreateOrConnectWithoutSkuInput[]
    createMany?: MicrosoftSubscribedSkuCreateManySkuInputEnvelope
    connect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
  }

  export type MicrosoftAccountUncheckedCreateNestedManyWithoutMicrosoftSkusInput = {
    create?: XOR<MicrosoftAccountCreateWithoutMicrosoftSkusInput, MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput> | MicrosoftAccountCreateWithoutMicrosoftSkusInput[] | MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput[]
    connectOrCreate?: MicrosoftAccountCreateOrConnectWithoutMicrosoftSkusInput | MicrosoftAccountCreateOrConnectWithoutMicrosoftSkusInput[]
    connect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
  }

  export type MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutSkuInput = {
    create?: XOR<MicrosoftSubscribedSkuCreateWithoutSkuInput, MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput> | MicrosoftSubscribedSkuCreateWithoutSkuInput[] | MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: MicrosoftSubscribedSkuCreateOrConnectWithoutSkuInput | MicrosoftSubscribedSkuCreateOrConnectWithoutSkuInput[]
    createMany?: MicrosoftSubscribedSkuCreateManySkuInputEnvelope
    connect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
  }

  export type MicrosoftAccountUpdateManyWithoutMicrosoftSkusNestedInput = {
    create?: XOR<MicrosoftAccountCreateWithoutMicrosoftSkusInput, MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput> | MicrosoftAccountCreateWithoutMicrosoftSkusInput[] | MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput[]
    connectOrCreate?: MicrosoftAccountCreateOrConnectWithoutMicrosoftSkusInput | MicrosoftAccountCreateOrConnectWithoutMicrosoftSkusInput[]
    upsert?: MicrosoftAccountUpsertWithWhereUniqueWithoutMicrosoftSkusInput | MicrosoftAccountUpsertWithWhereUniqueWithoutMicrosoftSkusInput[]
    set?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    disconnect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    delete?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    connect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    update?: MicrosoftAccountUpdateWithWhereUniqueWithoutMicrosoftSkusInput | MicrosoftAccountUpdateWithWhereUniqueWithoutMicrosoftSkusInput[]
    updateMany?: MicrosoftAccountUpdateManyWithWhereWithoutMicrosoftSkusInput | MicrosoftAccountUpdateManyWithWhereWithoutMicrosoftSkusInput[]
    deleteMany?: MicrosoftAccountScalarWhereInput | MicrosoftAccountScalarWhereInput[]
  }

  export type MicrosoftSubscribedSkuUpdateManyWithoutSkuNestedInput = {
    create?: XOR<MicrosoftSubscribedSkuCreateWithoutSkuInput, MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput> | MicrosoftSubscribedSkuCreateWithoutSkuInput[] | MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: MicrosoftSubscribedSkuCreateOrConnectWithoutSkuInput | MicrosoftSubscribedSkuCreateOrConnectWithoutSkuInput[]
    upsert?: MicrosoftSubscribedSkuUpsertWithWhereUniqueWithoutSkuInput | MicrosoftSubscribedSkuUpsertWithWhereUniqueWithoutSkuInput[]
    createMany?: MicrosoftSubscribedSkuCreateManySkuInputEnvelope
    set?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    disconnect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    delete?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    connect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    update?: MicrosoftSubscribedSkuUpdateWithWhereUniqueWithoutSkuInput | MicrosoftSubscribedSkuUpdateWithWhereUniqueWithoutSkuInput[]
    updateMany?: MicrosoftSubscribedSkuUpdateManyWithWhereWithoutSkuInput | MicrosoftSubscribedSkuUpdateManyWithWhereWithoutSkuInput[]
    deleteMany?: MicrosoftSubscribedSkuScalarWhereInput | MicrosoftSubscribedSkuScalarWhereInput[]
  }

  export type MicrosoftAccountUncheckedUpdateManyWithoutMicrosoftSkusNestedInput = {
    create?: XOR<MicrosoftAccountCreateWithoutMicrosoftSkusInput, MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput> | MicrosoftAccountCreateWithoutMicrosoftSkusInput[] | MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput[]
    connectOrCreate?: MicrosoftAccountCreateOrConnectWithoutMicrosoftSkusInput | MicrosoftAccountCreateOrConnectWithoutMicrosoftSkusInput[]
    upsert?: MicrosoftAccountUpsertWithWhereUniqueWithoutMicrosoftSkusInput | MicrosoftAccountUpsertWithWhereUniqueWithoutMicrosoftSkusInput[]
    set?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    disconnect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    delete?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    connect?: MicrosoftAccountWhereUniqueInput | MicrosoftAccountWhereUniqueInput[]
    update?: MicrosoftAccountUpdateWithWhereUniqueWithoutMicrosoftSkusInput | MicrosoftAccountUpdateWithWhereUniqueWithoutMicrosoftSkusInput[]
    updateMany?: MicrosoftAccountUpdateManyWithWhereWithoutMicrosoftSkusInput | MicrosoftAccountUpdateManyWithWhereWithoutMicrosoftSkusInput[]
    deleteMany?: MicrosoftAccountScalarWhereInput | MicrosoftAccountScalarWhereInput[]
  }

  export type MicrosoftSubscribedSkuUncheckedUpdateManyWithoutSkuNestedInput = {
    create?: XOR<MicrosoftSubscribedSkuCreateWithoutSkuInput, MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput> | MicrosoftSubscribedSkuCreateWithoutSkuInput[] | MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: MicrosoftSubscribedSkuCreateOrConnectWithoutSkuInput | MicrosoftSubscribedSkuCreateOrConnectWithoutSkuInput[]
    upsert?: MicrosoftSubscribedSkuUpsertWithWhereUniqueWithoutSkuInput | MicrosoftSubscribedSkuUpsertWithWhereUniqueWithoutSkuInput[]
    createMany?: MicrosoftSubscribedSkuCreateManySkuInputEnvelope
    set?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    disconnect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    delete?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    connect?: MicrosoftSubscribedSkuWhereUniqueInput | MicrosoftSubscribedSkuWhereUniqueInput[]
    update?: MicrosoftSubscribedSkuUpdateWithWhereUniqueWithoutSkuInput | MicrosoftSubscribedSkuUpdateWithWhereUniqueWithoutSkuInput[]
    updateMany?: MicrosoftSubscribedSkuUpdateManyWithWhereWithoutSkuInput | MicrosoftSubscribedSkuUpdateManyWithWhereWithoutSkuInput[]
    deleteMany?: MicrosoftSubscribedSkuScalarWhereInput | MicrosoftSubscribedSkuScalarWhereInput[]
  }

  export type MicrosoftSkuCreateNestedManyWithoutMicrosoftAccountsInput = {
    create?: XOR<MicrosoftSkuCreateWithoutMicrosoftAccountsInput, MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput> | MicrosoftSkuCreateWithoutMicrosoftAccountsInput[] | MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput[]
    connectOrCreate?: MicrosoftSkuCreateOrConnectWithoutMicrosoftAccountsInput | MicrosoftSkuCreateOrConnectWithoutMicrosoftAccountsInput[]
    connect?: MicrosoftSkuWhereUniqueInput | MicrosoftSkuWhereUniqueInput[]
  }

  export type ClientCreateNestedOneWithoutMicrosoftAccountsInput = {
    create?: XOR<ClientCreateWithoutMicrosoftAccountsInput, ClientUncheckedCreateWithoutMicrosoftAccountsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMicrosoftAccountsInput
    connect?: ClientWhereUniqueInput
  }

  export type MicrosoftSkuUncheckedCreateNestedManyWithoutMicrosoftAccountsInput = {
    create?: XOR<MicrosoftSkuCreateWithoutMicrosoftAccountsInput, MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput> | MicrosoftSkuCreateWithoutMicrosoftAccountsInput[] | MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput[]
    connectOrCreate?: MicrosoftSkuCreateOrConnectWithoutMicrosoftAccountsInput | MicrosoftSkuCreateOrConnectWithoutMicrosoftAccountsInput[]
    connect?: MicrosoftSkuWhereUniqueInput | MicrosoftSkuWhereUniqueInput[]
  }

  export type MicrosoftSkuUpdateManyWithoutMicrosoftAccountsNestedInput = {
    create?: XOR<MicrosoftSkuCreateWithoutMicrosoftAccountsInput, MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput> | MicrosoftSkuCreateWithoutMicrosoftAccountsInput[] | MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput[]
    connectOrCreate?: MicrosoftSkuCreateOrConnectWithoutMicrosoftAccountsInput | MicrosoftSkuCreateOrConnectWithoutMicrosoftAccountsInput[]
    upsert?: MicrosoftSkuUpsertWithWhereUniqueWithoutMicrosoftAccountsInput | MicrosoftSkuUpsertWithWhereUniqueWithoutMicrosoftAccountsInput[]
    set?: MicrosoftSkuWhereUniqueInput | MicrosoftSkuWhereUniqueInput[]
    disconnect?: MicrosoftSkuWhereUniqueInput | MicrosoftSkuWhereUniqueInput[]
    delete?: MicrosoftSkuWhereUniqueInput | MicrosoftSkuWhereUniqueInput[]
    connect?: MicrosoftSkuWhereUniqueInput | MicrosoftSkuWhereUniqueInput[]
    update?: MicrosoftSkuUpdateWithWhereUniqueWithoutMicrosoftAccountsInput | MicrosoftSkuUpdateWithWhereUniqueWithoutMicrosoftAccountsInput[]
    updateMany?: MicrosoftSkuUpdateManyWithWhereWithoutMicrosoftAccountsInput | MicrosoftSkuUpdateManyWithWhereWithoutMicrosoftAccountsInput[]
    deleteMany?: MicrosoftSkuScalarWhereInput | MicrosoftSkuScalarWhereInput[]
  }

  export type ClientUpdateOneRequiredWithoutMicrosoftAccountsNestedInput = {
    create?: XOR<ClientCreateWithoutMicrosoftAccountsInput, ClientUncheckedCreateWithoutMicrosoftAccountsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMicrosoftAccountsInput
    upsert?: ClientUpsertWithoutMicrosoftAccountsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutMicrosoftAccountsInput, ClientUpdateWithoutMicrosoftAccountsInput>, ClientUncheckedUpdateWithoutMicrosoftAccountsInput>
  }

  export type MicrosoftSkuUncheckedUpdateManyWithoutMicrosoftAccountsNestedInput = {
    create?: XOR<MicrosoftSkuCreateWithoutMicrosoftAccountsInput, MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput> | MicrosoftSkuCreateWithoutMicrosoftAccountsInput[] | MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput[]
    connectOrCreate?: MicrosoftSkuCreateOrConnectWithoutMicrosoftAccountsInput | MicrosoftSkuCreateOrConnectWithoutMicrosoftAccountsInput[]
    upsert?: MicrosoftSkuUpsertWithWhereUniqueWithoutMicrosoftAccountsInput | MicrosoftSkuUpsertWithWhereUniqueWithoutMicrosoftAccountsInput[]
    set?: MicrosoftSkuWhereUniqueInput | MicrosoftSkuWhereUniqueInput[]
    disconnect?: MicrosoftSkuWhereUniqueInput | MicrosoftSkuWhereUniqueInput[]
    delete?: MicrosoftSkuWhereUniqueInput | MicrosoftSkuWhereUniqueInput[]
    connect?: MicrosoftSkuWhereUniqueInput | MicrosoftSkuWhereUniqueInput[]
    update?: MicrosoftSkuUpdateWithWhereUniqueWithoutMicrosoftAccountsInput | MicrosoftSkuUpdateWithWhereUniqueWithoutMicrosoftAccountsInput[]
    updateMany?: MicrosoftSkuUpdateManyWithWhereWithoutMicrosoftAccountsInput | MicrosoftSkuUpdateManyWithWhereWithoutMicrosoftAccountsInput[]
    deleteMany?: MicrosoftSkuScalarWhereInput | MicrosoftSkuScalarWhereInput[]
  }

  export type MicrosoftSkuCreateNestedOneWithoutMicrosoftSubscribedSkusInput = {
    create?: XOR<MicrosoftSkuCreateWithoutMicrosoftSubscribedSkusInput, MicrosoftSkuUncheckedCreateWithoutMicrosoftSubscribedSkusInput>
    connectOrCreate?: MicrosoftSkuCreateOrConnectWithoutMicrosoftSubscribedSkusInput
    connect?: MicrosoftSkuWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutMicrosoftSubscribedSkusInput = {
    create?: XOR<ClientCreateWithoutMicrosoftSubscribedSkusInput, ClientUncheckedCreateWithoutMicrosoftSubscribedSkusInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMicrosoftSubscribedSkusInput
    connect?: ClientWhereUniqueInput
  }

  export type MicrosoftSkuUpdateOneRequiredWithoutMicrosoftSubscribedSkusNestedInput = {
    create?: XOR<MicrosoftSkuCreateWithoutMicrosoftSubscribedSkusInput, MicrosoftSkuUncheckedCreateWithoutMicrosoftSubscribedSkusInput>
    connectOrCreate?: MicrosoftSkuCreateOrConnectWithoutMicrosoftSubscribedSkusInput
    upsert?: MicrosoftSkuUpsertWithoutMicrosoftSubscribedSkusInput
    connect?: MicrosoftSkuWhereUniqueInput
    update?: XOR<XOR<MicrosoftSkuUpdateToOneWithWhereWithoutMicrosoftSubscribedSkusInput, MicrosoftSkuUpdateWithoutMicrosoftSubscribedSkusInput>, MicrosoftSkuUncheckedUpdateWithoutMicrosoftSubscribedSkusInput>
  }

  export type ClientUpdateOneRequiredWithoutMicrosoftSubscribedSkusNestedInput = {
    create?: XOR<ClientCreateWithoutMicrosoftSubscribedSkusInput, ClientUncheckedCreateWithoutMicrosoftSubscribedSkusInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMicrosoftSubscribedSkusInput
    upsert?: ClientUpsertWithoutMicrosoftSubscribedSkusInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutMicrosoftSubscribedSkusInput, ClientUpdateWithoutMicrosoftSubscribedSkusInput>, ClientUncheckedUpdateWithoutMicrosoftSubscribedSkusInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ClientCreateWithoutUsersInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitCreateNestedManyWithoutClientInput
    devices?: DeviceCreateNestedManyWithoutClientInput
    recomendations?: RecomendationCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuCreateNestedManyWithoutClientInput
    invites?: InviteCreateNestedManyWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutUsersInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitUncheckedCreateNestedManyWithoutClientInput
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
    recomendations?: RecomendationUncheckedCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerUncheckedCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountUncheckedCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutClientInput
    invites?: InviteUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientCreateOrConnectWithoutUsersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput>
  }

  export type ClientUpsertWithWhereUniqueWithoutUsersInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutUsersInput, ClientUncheckedUpdateWithoutUsersInput>
    create: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutUsersInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutUsersInput, ClientUncheckedUpdateWithoutUsersInput>
  }

  export type ClientUpdateManyWithWhereWithoutUsersInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutUsersInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    companyName?: StringFilter<"Client"> | string
    category?: StringFilter<"Client"> | string
    cnpj?: StringFilter<"Client"> | string
    isActive?: BoolFilter<"Client"> | boolean
    contractDeviceQty?: IntFilter<"Client"> | number
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type ClientCreateWithoutInvitesInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitCreateNestedManyWithoutClientInput
    devices?: DeviceCreateNestedManyWithoutClientInput
    recomendations?: RecomendationCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuCreateNestedManyWithoutClientInput
    users?: UserCreateNestedManyWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutInvitesInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitUncheckedCreateNestedManyWithoutClientInput
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
    recomendations?: RecomendationUncheckedCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerUncheckedCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountUncheckedCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutClientInput
    users?: UserUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientCreateOrConnectWithoutInvitesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutInvitesInput, ClientUncheckedCreateWithoutInvitesInput>
  }

  export type ClientUpsertWithWhereUniqueWithoutInvitesInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutInvitesInput, ClientUncheckedUpdateWithoutInvitesInput>
    create: XOR<ClientCreateWithoutInvitesInput, ClientUncheckedCreateWithoutInvitesInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutInvitesInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutInvitesInput, ClientUncheckedUpdateWithoutInvitesInput>
  }

  export type ClientUpdateManyWithWhereWithoutInvitesInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutInvitesInput>
  }

  export type BusinessUnitCreateWithoutClientInput = {
    id: number
    description: string
    street: string
    deviceDetails?: DeviceDetailCreateNestedManyWithoutBusinessUnitInput
  }

  export type BusinessUnitUncheckedCreateWithoutClientInput = {
    id: number
    description: string
    street: string
    deviceDetails?: DeviceDetailUncheckedCreateNestedManyWithoutBusinessUnitInput
  }

  export type BusinessUnitCreateOrConnectWithoutClientInput = {
    where: BusinessUnitWhereUniqueInput
    create: XOR<BusinessUnitCreateWithoutClientInput, BusinessUnitUncheckedCreateWithoutClientInput>
  }

  export type BusinessUnitCreateManyClientInputEnvelope = {
    data: BusinessUnitCreateManyClientInput | BusinessUnitCreateManyClientInput[]
  }

  export type DeviceCreateWithoutClientInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    securityStatus?: SecurityStatusCreateNestedManyWithoutDeviceInput
    securityEvents?: SecurityEventCreateNestedManyWithoutDeviceInput
    DeviceDetail?: DeviceDetailCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutClientInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    securityStatus?: SecurityStatusUncheckedCreateNestedManyWithoutDeviceInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutDeviceInput
    DeviceDetail?: DeviceDetailUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutClientInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput>
  }

  export type DeviceCreateManyClientInputEnvelope = {
    data: DeviceCreateManyClientInput | DeviceCreateManyClientInput[]
  }

  export type RecomendationCreateWithoutClientInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecomendationUncheckedCreateWithoutClientInput = {
    id?: number
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecomendationCreateOrConnectWithoutClientInput = {
    where: RecomendationWhereUniqueInput
    create: XOR<RecomendationCreateWithoutClientInput, RecomendationUncheckedCreateWithoutClientInput>
  }

  export type RecomendationCreateManyClientInputEnvelope = {
    data: RecomendationCreateManyClientInput | RecomendationCreateManyClientInput[]
  }

  export type DisclaimerCreateWithoutClientInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisclaimerUncheckedCreateWithoutClientInput = {
    id?: number
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisclaimerCreateOrConnectWithoutClientInput = {
    where: DisclaimerWhereUniqueInput
    create: XOR<DisclaimerCreateWithoutClientInput, DisclaimerUncheckedCreateWithoutClientInput>
  }

  export type DisclaimerCreateManyClientInputEnvelope = {
    data: DisclaimerCreateManyClientInput | DisclaimerCreateManyClientInput[]
  }

  export type MicrosoftAccountCreateWithoutClientInput = {
    id: string
    displayName: string
    email: string
    updatedAt?: Date | string
    microsoftSkus?: MicrosoftSkuCreateNestedManyWithoutMicrosoftAccountsInput
  }

  export type MicrosoftAccountUncheckedCreateWithoutClientInput = {
    id: string
    displayName: string
    email: string
    updatedAt?: Date | string
    microsoftSkus?: MicrosoftSkuUncheckedCreateNestedManyWithoutMicrosoftAccountsInput
  }

  export type MicrosoftAccountCreateOrConnectWithoutClientInput = {
    where: MicrosoftAccountWhereUniqueInput
    create: XOR<MicrosoftAccountCreateWithoutClientInput, MicrosoftAccountUncheckedCreateWithoutClientInput>
  }

  export type MicrosoftAccountCreateManyClientInputEnvelope = {
    data: MicrosoftAccountCreateManyClientInput | MicrosoftAccountCreateManyClientInput[]
  }

  export type MicrosoftSubscribedSkuCreateWithoutClientInput = {
    id?: string
    qty: number
    used: number
    updatedAt?: Date | string
    sku: MicrosoftSkuCreateNestedOneWithoutMicrosoftSubscribedSkusInput
  }

  export type MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput = {
    id?: string
    qty: number
    used: number
    updatedAt?: Date | string
    skuId: string
  }

  export type MicrosoftSubscribedSkuCreateOrConnectWithoutClientInput = {
    where: MicrosoftSubscribedSkuWhereUniqueInput
    create: XOR<MicrosoftSubscribedSkuCreateWithoutClientInput, MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput>
  }

  export type MicrosoftSubscribedSkuCreateManyClientInputEnvelope = {
    data: MicrosoftSubscribedSkuCreateManyClientInput | MicrosoftSubscribedSkuCreateManyClientInput[]
  }

  export type InviteCreateWithoutClientsInput = {
    id?: string
    email: string
    token: string
    role?: string
    usedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
  }

  export type InviteUncheckedCreateWithoutClientsInput = {
    id?: string
    email: string
    token: string
    role?: string
    usedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
  }

  export type InviteCreateOrConnectWithoutClientsInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutClientsInput, InviteUncheckedCreateWithoutClientsInput>
  }

  export type UserCreateWithoutClientsInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutClientsInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type BusinessUnitUpsertWithWhereUniqueWithoutClientInput = {
    where: BusinessUnitWhereUniqueInput
    update: XOR<BusinessUnitUpdateWithoutClientInput, BusinessUnitUncheckedUpdateWithoutClientInput>
    create: XOR<BusinessUnitCreateWithoutClientInput, BusinessUnitUncheckedCreateWithoutClientInput>
  }

  export type BusinessUnitUpdateWithWhereUniqueWithoutClientInput = {
    where: BusinessUnitWhereUniqueInput
    data: XOR<BusinessUnitUpdateWithoutClientInput, BusinessUnitUncheckedUpdateWithoutClientInput>
  }

  export type BusinessUnitUpdateManyWithWhereWithoutClientInput = {
    where: BusinessUnitScalarWhereInput
    data: XOR<BusinessUnitUpdateManyMutationInput, BusinessUnitUncheckedUpdateManyWithoutClientInput>
  }

  export type BusinessUnitScalarWhereInput = {
    AND?: BusinessUnitScalarWhereInput | BusinessUnitScalarWhereInput[]
    OR?: BusinessUnitScalarWhereInput[]
    NOT?: BusinessUnitScalarWhereInput | BusinessUnitScalarWhereInput[]
    id?: IntFilter<"BusinessUnit"> | number
    description?: StringFilter<"BusinessUnit"> | string
    street?: StringFilter<"BusinessUnit"> | string
    clientId?: IntFilter<"BusinessUnit"> | number
  }

  export type DeviceUpsertWithWhereUniqueWithoutClientInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutClientInput, DeviceUncheckedUpdateWithoutClientInput>
    create: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutClientInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutClientInput, DeviceUncheckedUpdateWithoutClientInput>
  }

  export type DeviceUpdateManyWithWhereWithoutClientInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutClientInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: IntFilter<"Device"> | number
    name?: StringFilter<"Device"> | string
    nickname?: StringFilter<"Device"> | string
    mac?: StringFilter<"Device"> | string
    brand?: StringFilter<"Device"> | string
    os?: StringFilter<"Device"> | string
    processor?: StringFilter<"Device"> | string
    username?: StringFilter<"Device"> | string
    serial?: StringFilter<"Device"> | string
    model?: StringFilter<"Device"> | string
    type?: StringFilter<"Device"> | string
    isActive?: BoolFilter<"Device"> | boolean
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    syncedAt?: DateTimeFilter<"Device"> | Date | string
    clientId?: IntFilter<"Device"> | number
  }

  export type RecomendationUpsertWithWhereUniqueWithoutClientInput = {
    where: RecomendationWhereUniqueInput
    update: XOR<RecomendationUpdateWithoutClientInput, RecomendationUncheckedUpdateWithoutClientInput>
    create: XOR<RecomendationCreateWithoutClientInput, RecomendationUncheckedCreateWithoutClientInput>
  }

  export type RecomendationUpdateWithWhereUniqueWithoutClientInput = {
    where: RecomendationWhereUniqueInput
    data: XOR<RecomendationUpdateWithoutClientInput, RecomendationUncheckedUpdateWithoutClientInput>
  }

  export type RecomendationUpdateManyWithWhereWithoutClientInput = {
    where: RecomendationScalarWhereInput
    data: XOR<RecomendationUpdateManyMutationInput, RecomendationUncheckedUpdateManyWithoutClientInput>
  }

  export type RecomendationScalarWhereInput = {
    AND?: RecomendationScalarWhereInput | RecomendationScalarWhereInput[]
    OR?: RecomendationScalarWhereInput[]
    NOT?: RecomendationScalarWhereInput | RecomendationScalarWhereInput[]
    id?: IntFilter<"Recomendation"> | number
    text?: StringFilter<"Recomendation"> | string
    createdAt?: DateTimeFilter<"Recomendation"> | Date | string
    updatedAt?: DateTimeFilter<"Recomendation"> | Date | string
    clientId?: IntFilter<"Recomendation"> | number
  }

  export type DisclaimerUpsertWithWhereUniqueWithoutClientInput = {
    where: DisclaimerWhereUniqueInput
    update: XOR<DisclaimerUpdateWithoutClientInput, DisclaimerUncheckedUpdateWithoutClientInput>
    create: XOR<DisclaimerCreateWithoutClientInput, DisclaimerUncheckedCreateWithoutClientInput>
  }

  export type DisclaimerUpdateWithWhereUniqueWithoutClientInput = {
    where: DisclaimerWhereUniqueInput
    data: XOR<DisclaimerUpdateWithoutClientInput, DisclaimerUncheckedUpdateWithoutClientInput>
  }

  export type DisclaimerUpdateManyWithWhereWithoutClientInput = {
    where: DisclaimerScalarWhereInput
    data: XOR<DisclaimerUpdateManyMutationInput, DisclaimerUncheckedUpdateManyWithoutClientInput>
  }

  export type DisclaimerScalarWhereInput = {
    AND?: DisclaimerScalarWhereInput | DisclaimerScalarWhereInput[]
    OR?: DisclaimerScalarWhereInput[]
    NOT?: DisclaimerScalarWhereInput | DisclaimerScalarWhereInput[]
    id?: IntFilter<"Disclaimer"> | number
    text?: StringFilter<"Disclaimer"> | string
    createdAt?: DateTimeFilter<"Disclaimer"> | Date | string
    updatedAt?: DateTimeFilter<"Disclaimer"> | Date | string
    clientId?: IntFilter<"Disclaimer"> | number
  }

  export type MicrosoftAccountUpsertWithWhereUniqueWithoutClientInput = {
    where: MicrosoftAccountWhereUniqueInput
    update: XOR<MicrosoftAccountUpdateWithoutClientInput, MicrosoftAccountUncheckedUpdateWithoutClientInput>
    create: XOR<MicrosoftAccountCreateWithoutClientInput, MicrosoftAccountUncheckedCreateWithoutClientInput>
  }

  export type MicrosoftAccountUpdateWithWhereUniqueWithoutClientInput = {
    where: MicrosoftAccountWhereUniqueInput
    data: XOR<MicrosoftAccountUpdateWithoutClientInput, MicrosoftAccountUncheckedUpdateWithoutClientInput>
  }

  export type MicrosoftAccountUpdateManyWithWhereWithoutClientInput = {
    where: MicrosoftAccountScalarWhereInput
    data: XOR<MicrosoftAccountUpdateManyMutationInput, MicrosoftAccountUncheckedUpdateManyWithoutClientInput>
  }

  export type MicrosoftAccountScalarWhereInput = {
    AND?: MicrosoftAccountScalarWhereInput | MicrosoftAccountScalarWhereInput[]
    OR?: MicrosoftAccountScalarWhereInput[]
    NOT?: MicrosoftAccountScalarWhereInput | MicrosoftAccountScalarWhereInput[]
    id?: StringFilter<"MicrosoftAccount"> | string
    displayName?: StringFilter<"MicrosoftAccount"> | string
    email?: StringFilter<"MicrosoftAccount"> | string
    updatedAt?: DateTimeFilter<"MicrosoftAccount"> | Date | string
    clientId?: IntFilter<"MicrosoftAccount"> | number
  }

  export type MicrosoftSubscribedSkuUpsertWithWhereUniqueWithoutClientInput = {
    where: MicrosoftSubscribedSkuWhereUniqueInput
    update: XOR<MicrosoftSubscribedSkuUpdateWithoutClientInput, MicrosoftSubscribedSkuUncheckedUpdateWithoutClientInput>
    create: XOR<MicrosoftSubscribedSkuCreateWithoutClientInput, MicrosoftSubscribedSkuUncheckedCreateWithoutClientInput>
  }

  export type MicrosoftSubscribedSkuUpdateWithWhereUniqueWithoutClientInput = {
    where: MicrosoftSubscribedSkuWhereUniqueInput
    data: XOR<MicrosoftSubscribedSkuUpdateWithoutClientInput, MicrosoftSubscribedSkuUncheckedUpdateWithoutClientInput>
  }

  export type MicrosoftSubscribedSkuUpdateManyWithWhereWithoutClientInput = {
    where: MicrosoftSubscribedSkuScalarWhereInput
    data: XOR<MicrosoftSubscribedSkuUpdateManyMutationInput, MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientInput>
  }

  export type MicrosoftSubscribedSkuScalarWhereInput = {
    AND?: MicrosoftSubscribedSkuScalarWhereInput | MicrosoftSubscribedSkuScalarWhereInput[]
    OR?: MicrosoftSubscribedSkuScalarWhereInput[]
    NOT?: MicrosoftSubscribedSkuScalarWhereInput | MicrosoftSubscribedSkuScalarWhereInput[]
    id?: StringFilter<"MicrosoftSubscribedSku"> | string
    qty?: IntFilter<"MicrosoftSubscribedSku"> | number
    used?: IntFilter<"MicrosoftSubscribedSku"> | number
    updatedAt?: DateTimeFilter<"MicrosoftSubscribedSku"> | Date | string
    skuId?: StringFilter<"MicrosoftSubscribedSku"> | string
    clientId?: IntFilter<"MicrosoftSubscribedSku"> | number
  }

  export type InviteUpsertWithWhereUniqueWithoutClientsInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutClientsInput, InviteUncheckedUpdateWithoutClientsInput>
    create: XOR<InviteCreateWithoutClientsInput, InviteUncheckedCreateWithoutClientsInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutClientsInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutClientsInput, InviteUncheckedUpdateWithoutClientsInput>
  }

  export type InviteUpdateManyWithWhereWithoutClientsInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutClientsInput>
  }

  export type InviteScalarWhereInput = {
    AND?: InviteScalarWhereInput | InviteScalarWhereInput[]
    OR?: InviteScalarWhereInput[]
    NOT?: InviteScalarWhereInput | InviteScalarWhereInput[]
    id?: StringFilter<"Invite"> | string
    email?: StringFilter<"Invite"> | string
    token?: StringFilter<"Invite"> | string
    role?: StringFilter<"Invite"> | string
    usedAt?: DateTimeNullableFilter<"Invite"> | Date | string | null
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    updatedAt?: DateTimeFilter<"Invite"> | Date | string
    expiresAt?: DateTimeFilter<"Invite"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutClientsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClientsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
  }

  export type UserUpdateManyWithWhereWithoutClientsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClientsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type SecurityStatusCreateWithoutDeviceInput = {
    id: string
    name: string
    mac: string
    group: string
    isManaged: boolean
    isManagedWithBest: boolean
    syncedAt?: Date | string
  }

  export type SecurityStatusUncheckedCreateWithoutDeviceInput = {
    id: string
    name: string
    mac: string
    group: string
    isManaged: boolean
    isManagedWithBest: boolean
    syncedAt?: Date | string
  }

  export type SecurityStatusCreateOrConnectWithoutDeviceInput = {
    where: SecurityStatusWhereUniqueInput
    create: XOR<SecurityStatusCreateWithoutDeviceInput, SecurityStatusUncheckedCreateWithoutDeviceInput>
  }

  export type SecurityStatusCreateManyDeviceInputEnvelope = {
    data: SecurityStatusCreateManyDeviceInput | SecurityStatusCreateManyDeviceInput[]
  }

  export type SecurityEventCreateWithoutDeviceInput = {
    deviceName: string
    endpoint: string
    username: string
    occurrences: number
    lastOccurrence: Date | string
    module: string
    type: string
    companyName: string
  }

  export type SecurityEventUncheckedCreateWithoutDeviceInput = {
    id?: number
    deviceName: string
    endpoint: string
    username: string
    occurrences: number
    lastOccurrence: Date | string
    module: string
    type: string
    companyName: string
  }

  export type SecurityEventCreateOrConnectWithoutDeviceInput = {
    where: SecurityEventWhereUniqueInput
    create: XOR<SecurityEventCreateWithoutDeviceInput, SecurityEventUncheckedCreateWithoutDeviceInput>
  }

  export type SecurityEventCreateManyDeviceInputEnvelope = {
    data: SecurityEventCreateManyDeviceInput | SecurityEventCreateManyDeviceInput[]
  }

  export type ClientCreateWithoutDevicesInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitCreateNestedManyWithoutClientInput
    recomendations?: RecomendationCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuCreateNestedManyWithoutClientInput
    invites?: InviteCreateNestedManyWithoutClientsInput
    users?: UserCreateNestedManyWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutDevicesInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitUncheckedCreateNestedManyWithoutClientInput
    recomendations?: RecomendationUncheckedCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerUncheckedCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountUncheckedCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutClientInput
    invites?: InviteUncheckedCreateNestedManyWithoutClientsInput
    users?: UserUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientCreateOrConnectWithoutDevicesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
  }

  export type DeviceDetailCreateWithoutDeviceInput = {
    id: number
    groupId?: number | null
    ramal: string
    imei1: string
    imei2: string
    domain: string
    totalRam: string
    totalStorage: string
    usedStorage: string
    purchaseDate?: Date | string | null
    warrantyDate?: Date | string | null
    clientVersion: string
    updatedAt?: Date | string
    businessUnit?: BusinessUnitCreateNestedOneWithoutDeviceDetailsInput
  }

  export type DeviceDetailUncheckedCreateWithoutDeviceInput = {
    id: number
    groupId?: number | null
    ramal: string
    imei1: string
    imei2: string
    domain: string
    totalRam: string
    totalStorage: string
    usedStorage: string
    purchaseDate?: Date | string | null
    warrantyDate?: Date | string | null
    clientVersion: string
    businessUnitId?: number | null
    updatedAt?: Date | string
  }

  export type DeviceDetailCreateOrConnectWithoutDeviceInput = {
    where: DeviceDetailWhereUniqueInput
    create: XOR<DeviceDetailCreateWithoutDeviceInput, DeviceDetailUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceDetailCreateManyDeviceInputEnvelope = {
    data: DeviceDetailCreateManyDeviceInput | DeviceDetailCreateManyDeviceInput[]
  }

  export type SecurityStatusUpsertWithWhereUniqueWithoutDeviceInput = {
    where: SecurityStatusWhereUniqueInput
    update: XOR<SecurityStatusUpdateWithoutDeviceInput, SecurityStatusUncheckedUpdateWithoutDeviceInput>
    create: XOR<SecurityStatusCreateWithoutDeviceInput, SecurityStatusUncheckedCreateWithoutDeviceInput>
  }

  export type SecurityStatusUpdateWithWhereUniqueWithoutDeviceInput = {
    where: SecurityStatusWhereUniqueInput
    data: XOR<SecurityStatusUpdateWithoutDeviceInput, SecurityStatusUncheckedUpdateWithoutDeviceInput>
  }

  export type SecurityStatusUpdateManyWithWhereWithoutDeviceInput = {
    where: SecurityStatusScalarWhereInput
    data: XOR<SecurityStatusUpdateManyMutationInput, SecurityStatusUncheckedUpdateManyWithoutDeviceInput>
  }

  export type SecurityStatusScalarWhereInput = {
    AND?: SecurityStatusScalarWhereInput | SecurityStatusScalarWhereInput[]
    OR?: SecurityStatusScalarWhereInput[]
    NOT?: SecurityStatusScalarWhereInput | SecurityStatusScalarWhereInput[]
    id?: StringFilter<"SecurityStatus"> | string
    name?: StringFilter<"SecurityStatus"> | string
    mac?: StringFilter<"SecurityStatus"> | string
    group?: StringFilter<"SecurityStatus"> | string
    isManaged?: BoolFilter<"SecurityStatus"> | boolean
    isManagedWithBest?: BoolFilter<"SecurityStatus"> | boolean
    syncedAt?: DateTimeFilter<"SecurityStatus"> | Date | string
    deviceId?: IntNullableFilter<"SecurityStatus"> | number | null
  }

  export type SecurityEventUpsertWithWhereUniqueWithoutDeviceInput = {
    where: SecurityEventWhereUniqueInput
    update: XOR<SecurityEventUpdateWithoutDeviceInput, SecurityEventUncheckedUpdateWithoutDeviceInput>
    create: XOR<SecurityEventCreateWithoutDeviceInput, SecurityEventUncheckedCreateWithoutDeviceInput>
  }

  export type SecurityEventUpdateWithWhereUniqueWithoutDeviceInput = {
    where: SecurityEventWhereUniqueInput
    data: XOR<SecurityEventUpdateWithoutDeviceInput, SecurityEventUncheckedUpdateWithoutDeviceInput>
  }

  export type SecurityEventUpdateManyWithWhereWithoutDeviceInput = {
    where: SecurityEventScalarWhereInput
    data: XOR<SecurityEventUpdateManyMutationInput, SecurityEventUncheckedUpdateManyWithoutDeviceInput>
  }

  export type SecurityEventScalarWhereInput = {
    AND?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
    OR?: SecurityEventScalarWhereInput[]
    NOT?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
    id?: IntFilter<"SecurityEvent"> | number
    deviceName?: StringFilter<"SecurityEvent"> | string
    endpoint?: StringFilter<"SecurityEvent"> | string
    username?: StringFilter<"SecurityEvent"> | string
    occurrences?: IntFilter<"SecurityEvent"> | number
    lastOccurrence?: DateTimeFilter<"SecurityEvent"> | Date | string
    module?: StringFilter<"SecurityEvent"> | string
    type?: StringFilter<"SecurityEvent"> | string
    companyName?: StringFilter<"SecurityEvent"> | string
    deviceId?: IntNullableFilter<"SecurityEvent"> | number | null
  }

  export type ClientUpsertWithoutDevicesInput = {
    update: XOR<ClientUpdateWithoutDevicesInput, ClientUncheckedUpdateWithoutDevicesInput>
    create: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDevicesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDevicesInput, ClientUncheckedUpdateWithoutDevicesInput>
  }

  export type ClientUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUpdateManyWithoutClientNestedInput
    invites?: InviteUpdateManyWithoutClientsNestedInput
    users?: UserUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUncheckedUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUncheckedUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUncheckedUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUncheckedUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientNestedInput
    invites?: InviteUncheckedUpdateManyWithoutClientsNestedInput
    users?: UserUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type DeviceDetailUpsertWithWhereUniqueWithoutDeviceInput = {
    where: DeviceDetailWhereUniqueInput
    update: XOR<DeviceDetailUpdateWithoutDeviceInput, DeviceDetailUncheckedUpdateWithoutDeviceInput>
    create: XOR<DeviceDetailCreateWithoutDeviceInput, DeviceDetailUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceDetailUpdateWithWhereUniqueWithoutDeviceInput = {
    where: DeviceDetailWhereUniqueInput
    data: XOR<DeviceDetailUpdateWithoutDeviceInput, DeviceDetailUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceDetailUpdateManyWithWhereWithoutDeviceInput = {
    where: DeviceDetailScalarWhereInput
    data: XOR<DeviceDetailUpdateManyMutationInput, DeviceDetailUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DeviceDetailScalarWhereInput = {
    AND?: DeviceDetailScalarWhereInput | DeviceDetailScalarWhereInput[]
    OR?: DeviceDetailScalarWhereInput[]
    NOT?: DeviceDetailScalarWhereInput | DeviceDetailScalarWhereInput[]
    id?: IntFilter<"DeviceDetail"> | number
    groupId?: IntNullableFilter<"DeviceDetail"> | number | null
    ramal?: StringFilter<"DeviceDetail"> | string
    imei1?: StringFilter<"DeviceDetail"> | string
    imei2?: StringFilter<"DeviceDetail"> | string
    domain?: StringFilter<"DeviceDetail"> | string
    totalRam?: StringFilter<"DeviceDetail"> | string
    totalStorage?: StringFilter<"DeviceDetail"> | string
    usedStorage?: StringFilter<"DeviceDetail"> | string
    purchaseDate?: DateTimeNullableFilter<"DeviceDetail"> | Date | string | null
    warrantyDate?: DateTimeNullableFilter<"DeviceDetail"> | Date | string | null
    clientVersion?: StringFilter<"DeviceDetail"> | string
    businessUnitId?: IntNullableFilter<"DeviceDetail"> | number | null
    updatedAt?: DateTimeFilter<"DeviceDetail"> | Date | string
    deviceId?: IntNullableFilter<"DeviceDetail"> | number | null
  }

  export type DeviceCreateWithoutSecurityStatusInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    securityEvents?: SecurityEventCreateNestedManyWithoutDeviceInput
    client: ClientCreateNestedOneWithoutDevicesInput
    DeviceDetail?: DeviceDetailCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutSecurityStatusInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    clientId: number
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutDeviceInput
    DeviceDetail?: DeviceDetailUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutSecurityStatusInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutSecurityStatusInput, DeviceUncheckedCreateWithoutSecurityStatusInput>
  }

  export type DeviceUpsertWithoutSecurityStatusInput = {
    update: XOR<DeviceUpdateWithoutSecurityStatusInput, DeviceUncheckedUpdateWithoutSecurityStatusInput>
    create: XOR<DeviceCreateWithoutSecurityStatusInput, DeviceUncheckedCreateWithoutSecurityStatusInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutSecurityStatusInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutSecurityStatusInput, DeviceUncheckedUpdateWithoutSecurityStatusInput>
  }

  export type DeviceUpdateWithoutSecurityStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityEvents?: SecurityEventUpdateManyWithoutDeviceNestedInput
    client?: ClientUpdateOneRequiredWithoutDevicesNestedInput
    DeviceDetail?: DeviceDetailUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutSecurityStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutDeviceNestedInput
    DeviceDetail?: DeviceDetailUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type BusinessUnitCreateWithoutDeviceDetailsInput = {
    id: number
    description: string
    street: string
    client: ClientCreateNestedOneWithoutBusinessUnitsInput
  }

  export type BusinessUnitUncheckedCreateWithoutDeviceDetailsInput = {
    id: number
    description: string
    street: string
    clientId: number
  }

  export type BusinessUnitCreateOrConnectWithoutDeviceDetailsInput = {
    where: BusinessUnitWhereUniqueInput
    create: XOR<BusinessUnitCreateWithoutDeviceDetailsInput, BusinessUnitUncheckedCreateWithoutDeviceDetailsInput>
  }

  export type DeviceCreateWithoutDeviceDetailInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    securityStatus?: SecurityStatusCreateNestedManyWithoutDeviceInput
    securityEvents?: SecurityEventCreateNestedManyWithoutDeviceInput
    client: ClientCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutDeviceDetailInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    clientId: number
    securityStatus?: SecurityStatusUncheckedCreateNestedManyWithoutDeviceInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutDeviceDetailInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutDeviceDetailInput, DeviceUncheckedCreateWithoutDeviceDetailInput>
  }

  export type BusinessUnitUpsertWithoutDeviceDetailsInput = {
    update: XOR<BusinessUnitUpdateWithoutDeviceDetailsInput, BusinessUnitUncheckedUpdateWithoutDeviceDetailsInput>
    create: XOR<BusinessUnitCreateWithoutDeviceDetailsInput, BusinessUnitUncheckedCreateWithoutDeviceDetailsInput>
    where?: BusinessUnitWhereInput
  }

  export type BusinessUnitUpdateToOneWithWhereWithoutDeviceDetailsInput = {
    where?: BusinessUnitWhereInput
    data: XOR<BusinessUnitUpdateWithoutDeviceDetailsInput, BusinessUnitUncheckedUpdateWithoutDeviceDetailsInput>
  }

  export type BusinessUnitUpdateWithoutDeviceDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutBusinessUnitsNestedInput
  }

  export type BusinessUnitUncheckedUpdateWithoutDeviceDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceUpsertWithoutDeviceDetailInput = {
    update: XOR<DeviceUpdateWithoutDeviceDetailInput, DeviceUncheckedUpdateWithoutDeviceDetailInput>
    create: XOR<DeviceCreateWithoutDeviceDetailInput, DeviceUncheckedCreateWithoutDeviceDetailInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutDeviceDetailInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutDeviceDetailInput, DeviceUncheckedUpdateWithoutDeviceDetailInput>
  }

  export type DeviceUpdateWithoutDeviceDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityStatus?: SecurityStatusUpdateManyWithoutDeviceNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutDeviceNestedInput
    client?: ClientUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutDeviceDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    securityStatus?: SecurityStatusUncheckedUpdateManyWithoutDeviceNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutSecurityEventsInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    securityStatus?: SecurityStatusCreateNestedManyWithoutDeviceInput
    client: ClientCreateNestedOneWithoutDevicesInput
    DeviceDetail?: DeviceDetailCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutSecurityEventsInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
    clientId: number
    securityStatus?: SecurityStatusUncheckedCreateNestedManyWithoutDeviceInput
    DeviceDetail?: DeviceDetailUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutSecurityEventsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutSecurityEventsInput, DeviceUncheckedCreateWithoutSecurityEventsInput>
  }

  export type DeviceUpsertWithoutSecurityEventsInput = {
    update: XOR<DeviceUpdateWithoutSecurityEventsInput, DeviceUncheckedUpdateWithoutSecurityEventsInput>
    create: XOR<DeviceCreateWithoutSecurityEventsInput, DeviceUncheckedCreateWithoutSecurityEventsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutSecurityEventsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutSecurityEventsInput, DeviceUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type DeviceUpdateWithoutSecurityEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityStatus?: SecurityStatusUpdateManyWithoutDeviceNestedInput
    client?: ClientUpdateOneRequiredWithoutDevicesNestedInput
    DeviceDetail?: DeviceDetailUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutSecurityEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    securityStatus?: SecurityStatusUncheckedUpdateManyWithoutDeviceNestedInput
    DeviceDetail?: DeviceDetailUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type ClientCreateWithoutRecomendationsInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitCreateNestedManyWithoutClientInput
    devices?: DeviceCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuCreateNestedManyWithoutClientInput
    invites?: InviteCreateNestedManyWithoutClientsInput
    users?: UserCreateNestedManyWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutRecomendationsInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitUncheckedCreateNestedManyWithoutClientInput
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerUncheckedCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountUncheckedCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutClientInput
    invites?: InviteUncheckedCreateNestedManyWithoutClientsInput
    users?: UserUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientCreateOrConnectWithoutRecomendationsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutRecomendationsInput, ClientUncheckedCreateWithoutRecomendationsInput>
  }

  export type ClientUpsertWithoutRecomendationsInput = {
    update: XOR<ClientUpdateWithoutRecomendationsInput, ClientUncheckedUpdateWithoutRecomendationsInput>
    create: XOR<ClientCreateWithoutRecomendationsInput, ClientUncheckedCreateWithoutRecomendationsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutRecomendationsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutRecomendationsInput, ClientUncheckedUpdateWithoutRecomendationsInput>
  }

  export type ClientUpdateWithoutRecomendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUpdateManyWithoutClientNestedInput
    devices?: DeviceUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUpdateManyWithoutClientNestedInput
    invites?: InviteUpdateManyWithoutClientsNestedInput
    users?: UserUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutRecomendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUncheckedUpdateManyWithoutClientNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUncheckedUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUncheckedUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientNestedInput
    invites?: InviteUncheckedUpdateManyWithoutClientsNestedInput
    users?: UserUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientCreateWithoutDisclaimersInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitCreateNestedManyWithoutClientInput
    devices?: DeviceCreateNestedManyWithoutClientInput
    recomendations?: RecomendationCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuCreateNestedManyWithoutClientInput
    invites?: InviteCreateNestedManyWithoutClientsInput
    users?: UserCreateNestedManyWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutDisclaimersInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitUncheckedCreateNestedManyWithoutClientInput
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
    recomendations?: RecomendationUncheckedCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountUncheckedCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutClientInput
    invites?: InviteUncheckedCreateNestedManyWithoutClientsInput
    users?: UserUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientCreateOrConnectWithoutDisclaimersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDisclaimersInput, ClientUncheckedCreateWithoutDisclaimersInput>
  }

  export type ClientUpsertWithoutDisclaimersInput = {
    update: XOR<ClientUpdateWithoutDisclaimersInput, ClientUncheckedUpdateWithoutDisclaimersInput>
    create: XOR<ClientCreateWithoutDisclaimersInput, ClientUncheckedCreateWithoutDisclaimersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDisclaimersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDisclaimersInput, ClientUncheckedUpdateWithoutDisclaimersInput>
  }

  export type ClientUpdateWithoutDisclaimersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUpdateManyWithoutClientNestedInput
    devices?: DeviceUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUpdateManyWithoutClientNestedInput
    invites?: InviteUpdateManyWithoutClientsNestedInput
    users?: UserUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutDisclaimersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUncheckedUpdateManyWithoutClientNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUncheckedUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUncheckedUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientNestedInput
    invites?: InviteUncheckedUpdateManyWithoutClientsNestedInput
    users?: UserUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientCreateWithoutBusinessUnitsInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutClientInput
    recomendations?: RecomendationCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuCreateNestedManyWithoutClientInput
    invites?: InviteCreateNestedManyWithoutClientsInput
    users?: UserCreateNestedManyWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutBusinessUnitsInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
    recomendations?: RecomendationUncheckedCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerUncheckedCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountUncheckedCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutClientInput
    invites?: InviteUncheckedCreateNestedManyWithoutClientsInput
    users?: UserUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientCreateOrConnectWithoutBusinessUnitsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutBusinessUnitsInput, ClientUncheckedCreateWithoutBusinessUnitsInput>
  }

  export type DeviceDetailCreateWithoutBusinessUnitInput = {
    id: number
    groupId?: number | null
    ramal: string
    imei1: string
    imei2: string
    domain: string
    totalRam: string
    totalStorage: string
    usedStorage: string
    purchaseDate?: Date | string | null
    warrantyDate?: Date | string | null
    clientVersion: string
    updatedAt?: Date | string
    device?: DeviceCreateNestedOneWithoutDeviceDetailInput
  }

  export type DeviceDetailUncheckedCreateWithoutBusinessUnitInput = {
    id: number
    groupId?: number | null
    ramal: string
    imei1: string
    imei2: string
    domain: string
    totalRam: string
    totalStorage: string
    usedStorage: string
    purchaseDate?: Date | string | null
    warrantyDate?: Date | string | null
    clientVersion: string
    updatedAt?: Date | string
    deviceId?: number | null
  }

  export type DeviceDetailCreateOrConnectWithoutBusinessUnitInput = {
    where: DeviceDetailWhereUniqueInput
    create: XOR<DeviceDetailCreateWithoutBusinessUnitInput, DeviceDetailUncheckedCreateWithoutBusinessUnitInput>
  }

  export type DeviceDetailCreateManyBusinessUnitInputEnvelope = {
    data: DeviceDetailCreateManyBusinessUnitInput | DeviceDetailCreateManyBusinessUnitInput[]
  }

  export type ClientUpsertWithoutBusinessUnitsInput = {
    update: XOR<ClientUpdateWithoutBusinessUnitsInput, ClientUncheckedUpdateWithoutBusinessUnitsInput>
    create: XOR<ClientCreateWithoutBusinessUnitsInput, ClientUncheckedCreateWithoutBusinessUnitsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutBusinessUnitsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutBusinessUnitsInput, ClientUncheckedUpdateWithoutBusinessUnitsInput>
  }

  export type ClientUpdateWithoutBusinessUnitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUpdateManyWithoutClientNestedInput
    invites?: InviteUpdateManyWithoutClientsNestedInput
    users?: UserUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutBusinessUnitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUncheckedUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUncheckedUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUncheckedUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientNestedInput
    invites?: InviteUncheckedUpdateManyWithoutClientsNestedInput
    users?: UserUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type DeviceDetailUpsertWithWhereUniqueWithoutBusinessUnitInput = {
    where: DeviceDetailWhereUniqueInput
    update: XOR<DeviceDetailUpdateWithoutBusinessUnitInput, DeviceDetailUncheckedUpdateWithoutBusinessUnitInput>
    create: XOR<DeviceDetailCreateWithoutBusinessUnitInput, DeviceDetailUncheckedCreateWithoutBusinessUnitInput>
  }

  export type DeviceDetailUpdateWithWhereUniqueWithoutBusinessUnitInput = {
    where: DeviceDetailWhereUniqueInput
    data: XOR<DeviceDetailUpdateWithoutBusinessUnitInput, DeviceDetailUncheckedUpdateWithoutBusinessUnitInput>
  }

  export type DeviceDetailUpdateManyWithWhereWithoutBusinessUnitInput = {
    where: DeviceDetailScalarWhereInput
    data: XOR<DeviceDetailUpdateManyMutationInput, DeviceDetailUncheckedUpdateManyWithoutBusinessUnitInput>
  }

  export type MicrosoftAccountCreateWithoutMicrosoftSkusInput = {
    id: string
    displayName: string
    email: string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutMicrosoftAccountsInput
  }

  export type MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput = {
    id: string
    displayName: string
    email: string
    updatedAt?: Date | string
    clientId: number
  }

  export type MicrosoftAccountCreateOrConnectWithoutMicrosoftSkusInput = {
    where: MicrosoftAccountWhereUniqueInput
    create: XOR<MicrosoftAccountCreateWithoutMicrosoftSkusInput, MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput>
  }

  export type MicrosoftSubscribedSkuCreateWithoutSkuInput = {
    id?: string
    qty: number
    used: number
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutMicrosoftSubscribedSkusInput
  }

  export type MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput = {
    id?: string
    qty: number
    used: number
    updatedAt?: Date | string
    clientId: number
  }

  export type MicrosoftSubscribedSkuCreateOrConnectWithoutSkuInput = {
    where: MicrosoftSubscribedSkuWhereUniqueInput
    create: XOR<MicrosoftSubscribedSkuCreateWithoutSkuInput, MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput>
  }

  export type MicrosoftSubscribedSkuCreateManySkuInputEnvelope = {
    data: MicrosoftSubscribedSkuCreateManySkuInput | MicrosoftSubscribedSkuCreateManySkuInput[]
  }

  export type MicrosoftAccountUpsertWithWhereUniqueWithoutMicrosoftSkusInput = {
    where: MicrosoftAccountWhereUniqueInput
    update: XOR<MicrosoftAccountUpdateWithoutMicrosoftSkusInput, MicrosoftAccountUncheckedUpdateWithoutMicrosoftSkusInput>
    create: XOR<MicrosoftAccountCreateWithoutMicrosoftSkusInput, MicrosoftAccountUncheckedCreateWithoutMicrosoftSkusInput>
  }

  export type MicrosoftAccountUpdateWithWhereUniqueWithoutMicrosoftSkusInput = {
    where: MicrosoftAccountWhereUniqueInput
    data: XOR<MicrosoftAccountUpdateWithoutMicrosoftSkusInput, MicrosoftAccountUncheckedUpdateWithoutMicrosoftSkusInput>
  }

  export type MicrosoftAccountUpdateManyWithWhereWithoutMicrosoftSkusInput = {
    where: MicrosoftAccountScalarWhereInput
    data: XOR<MicrosoftAccountUpdateManyMutationInput, MicrosoftAccountUncheckedUpdateManyWithoutMicrosoftSkusInput>
  }

  export type MicrosoftSubscribedSkuUpsertWithWhereUniqueWithoutSkuInput = {
    where: MicrosoftSubscribedSkuWhereUniqueInput
    update: XOR<MicrosoftSubscribedSkuUpdateWithoutSkuInput, MicrosoftSubscribedSkuUncheckedUpdateWithoutSkuInput>
    create: XOR<MicrosoftSubscribedSkuCreateWithoutSkuInput, MicrosoftSubscribedSkuUncheckedCreateWithoutSkuInput>
  }

  export type MicrosoftSubscribedSkuUpdateWithWhereUniqueWithoutSkuInput = {
    where: MicrosoftSubscribedSkuWhereUniqueInput
    data: XOR<MicrosoftSubscribedSkuUpdateWithoutSkuInput, MicrosoftSubscribedSkuUncheckedUpdateWithoutSkuInput>
  }

  export type MicrosoftSubscribedSkuUpdateManyWithWhereWithoutSkuInput = {
    where: MicrosoftSubscribedSkuScalarWhereInput
    data: XOR<MicrosoftSubscribedSkuUpdateManyMutationInput, MicrosoftSubscribedSkuUncheckedUpdateManyWithoutSkuInput>
  }

  export type MicrosoftSkuCreateWithoutMicrosoftAccountsInput = {
    id: string
    name: string
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuCreateNestedManyWithoutSkuInput
  }

  export type MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput = {
    id: string
    name: string
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutSkuInput
  }

  export type MicrosoftSkuCreateOrConnectWithoutMicrosoftAccountsInput = {
    where: MicrosoftSkuWhereUniqueInput
    create: XOR<MicrosoftSkuCreateWithoutMicrosoftAccountsInput, MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput>
  }

  export type ClientCreateWithoutMicrosoftAccountsInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitCreateNestedManyWithoutClientInput
    devices?: DeviceCreateNestedManyWithoutClientInput
    recomendations?: RecomendationCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuCreateNestedManyWithoutClientInput
    invites?: InviteCreateNestedManyWithoutClientsInput
    users?: UserCreateNestedManyWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutMicrosoftAccountsInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitUncheckedCreateNestedManyWithoutClientInput
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
    recomendations?: RecomendationUncheckedCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerUncheckedCreateNestedManyWithoutClientInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedCreateNestedManyWithoutClientInput
    invites?: InviteUncheckedCreateNestedManyWithoutClientsInput
    users?: UserUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientCreateOrConnectWithoutMicrosoftAccountsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutMicrosoftAccountsInput, ClientUncheckedCreateWithoutMicrosoftAccountsInput>
  }

  export type MicrosoftSkuUpsertWithWhereUniqueWithoutMicrosoftAccountsInput = {
    where: MicrosoftSkuWhereUniqueInput
    update: XOR<MicrosoftSkuUpdateWithoutMicrosoftAccountsInput, MicrosoftSkuUncheckedUpdateWithoutMicrosoftAccountsInput>
    create: XOR<MicrosoftSkuCreateWithoutMicrosoftAccountsInput, MicrosoftSkuUncheckedCreateWithoutMicrosoftAccountsInput>
  }

  export type MicrosoftSkuUpdateWithWhereUniqueWithoutMicrosoftAccountsInput = {
    where: MicrosoftSkuWhereUniqueInput
    data: XOR<MicrosoftSkuUpdateWithoutMicrosoftAccountsInput, MicrosoftSkuUncheckedUpdateWithoutMicrosoftAccountsInput>
  }

  export type MicrosoftSkuUpdateManyWithWhereWithoutMicrosoftAccountsInput = {
    where: MicrosoftSkuScalarWhereInput
    data: XOR<MicrosoftSkuUpdateManyMutationInput, MicrosoftSkuUncheckedUpdateManyWithoutMicrosoftAccountsInput>
  }

  export type MicrosoftSkuScalarWhereInput = {
    AND?: MicrosoftSkuScalarWhereInput | MicrosoftSkuScalarWhereInput[]
    OR?: MicrosoftSkuScalarWhereInput[]
    NOT?: MicrosoftSkuScalarWhereInput | MicrosoftSkuScalarWhereInput[]
    id?: StringFilter<"MicrosoftSku"> | string
    name?: StringFilter<"MicrosoftSku"> | string
  }

  export type ClientUpsertWithoutMicrosoftAccountsInput = {
    update: XOR<ClientUpdateWithoutMicrosoftAccountsInput, ClientUncheckedUpdateWithoutMicrosoftAccountsInput>
    create: XOR<ClientCreateWithoutMicrosoftAccountsInput, ClientUncheckedCreateWithoutMicrosoftAccountsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutMicrosoftAccountsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutMicrosoftAccountsInput, ClientUncheckedUpdateWithoutMicrosoftAccountsInput>
  }

  export type ClientUpdateWithoutMicrosoftAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUpdateManyWithoutClientNestedInput
    devices?: DeviceUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUpdateManyWithoutClientNestedInput
    invites?: InviteUpdateManyWithoutClientsNestedInput
    users?: UserUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutMicrosoftAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUncheckedUpdateManyWithoutClientNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUncheckedUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUncheckedUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientNestedInput
    invites?: InviteUncheckedUpdateManyWithoutClientsNestedInput
    users?: UserUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type MicrosoftSkuCreateWithoutMicrosoftSubscribedSkusInput = {
    id: string
    name: string
    microsoftAccounts?: MicrosoftAccountCreateNestedManyWithoutMicrosoftSkusInput
  }

  export type MicrosoftSkuUncheckedCreateWithoutMicrosoftSubscribedSkusInput = {
    id: string
    name: string
    microsoftAccounts?: MicrosoftAccountUncheckedCreateNestedManyWithoutMicrosoftSkusInput
  }

  export type MicrosoftSkuCreateOrConnectWithoutMicrosoftSubscribedSkusInput = {
    where: MicrosoftSkuWhereUniqueInput
    create: XOR<MicrosoftSkuCreateWithoutMicrosoftSubscribedSkusInput, MicrosoftSkuUncheckedCreateWithoutMicrosoftSubscribedSkusInput>
  }

  export type ClientCreateWithoutMicrosoftSubscribedSkusInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitCreateNestedManyWithoutClientInput
    devices?: DeviceCreateNestedManyWithoutClientInput
    recomendations?: RecomendationCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountCreateNestedManyWithoutClientInput
    invites?: InviteCreateNestedManyWithoutClientsInput
    users?: UserCreateNestedManyWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutMicrosoftSubscribedSkusInput = {
    id: number
    name: string
    companyName: string
    category?: string
    cnpj: string
    isActive?: boolean
    contractDeviceQty?: number
    updatedAt?: Date | string
    businessUnits?: BusinessUnitUncheckedCreateNestedManyWithoutClientInput
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
    recomendations?: RecomendationUncheckedCreateNestedManyWithoutClientInput
    disclaimers?: DisclaimerUncheckedCreateNestedManyWithoutClientInput
    microsoftAccounts?: MicrosoftAccountUncheckedCreateNestedManyWithoutClientInput
    invites?: InviteUncheckedCreateNestedManyWithoutClientsInput
    users?: UserUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientCreateOrConnectWithoutMicrosoftSubscribedSkusInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutMicrosoftSubscribedSkusInput, ClientUncheckedCreateWithoutMicrosoftSubscribedSkusInput>
  }

  export type MicrosoftSkuUpsertWithoutMicrosoftSubscribedSkusInput = {
    update: XOR<MicrosoftSkuUpdateWithoutMicrosoftSubscribedSkusInput, MicrosoftSkuUncheckedUpdateWithoutMicrosoftSubscribedSkusInput>
    create: XOR<MicrosoftSkuCreateWithoutMicrosoftSubscribedSkusInput, MicrosoftSkuUncheckedCreateWithoutMicrosoftSubscribedSkusInput>
    where?: MicrosoftSkuWhereInput
  }

  export type MicrosoftSkuUpdateToOneWithWhereWithoutMicrosoftSubscribedSkusInput = {
    where?: MicrosoftSkuWhereInput
    data: XOR<MicrosoftSkuUpdateWithoutMicrosoftSubscribedSkusInput, MicrosoftSkuUncheckedUpdateWithoutMicrosoftSubscribedSkusInput>
  }

  export type MicrosoftSkuUpdateWithoutMicrosoftSubscribedSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    microsoftAccounts?: MicrosoftAccountUpdateManyWithoutMicrosoftSkusNestedInput
  }

  export type MicrosoftSkuUncheckedUpdateWithoutMicrosoftSubscribedSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    microsoftAccounts?: MicrosoftAccountUncheckedUpdateManyWithoutMicrosoftSkusNestedInput
  }

  export type ClientUpsertWithoutMicrosoftSubscribedSkusInput = {
    update: XOR<ClientUpdateWithoutMicrosoftSubscribedSkusInput, ClientUncheckedUpdateWithoutMicrosoftSubscribedSkusInput>
    create: XOR<ClientCreateWithoutMicrosoftSubscribedSkusInput, ClientUncheckedCreateWithoutMicrosoftSubscribedSkusInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutMicrosoftSubscribedSkusInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutMicrosoftSubscribedSkusInput, ClientUncheckedUpdateWithoutMicrosoftSubscribedSkusInput>
  }

  export type ClientUpdateWithoutMicrosoftSubscribedSkusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUpdateManyWithoutClientNestedInput
    devices?: DeviceUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUpdateManyWithoutClientNestedInput
    invites?: InviteUpdateManyWithoutClientsNestedInput
    users?: UserUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutMicrosoftSubscribedSkusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUncheckedUpdateManyWithoutClientNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUncheckedUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUncheckedUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUncheckedUpdateManyWithoutClientNestedInput
    invites?: InviteUncheckedUpdateManyWithoutClientsNestedInput
    users?: UserUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUpdateManyWithoutClientNestedInput
    devices?: DeviceUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUpdateManyWithoutClientNestedInput
    invites?: InviteUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUncheckedUpdateManyWithoutClientNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUncheckedUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUncheckedUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUncheckedUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientNestedInput
    invites?: InviteUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpdateWithoutInvitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUpdateManyWithoutClientNestedInput
    devices?: DeviceUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUpdateManyWithoutClientNestedInput
    users?: UserUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutInvitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnits?: BusinessUnitUncheckedUpdateManyWithoutClientNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
    recomendations?: RecomendationUncheckedUpdateManyWithoutClientNestedInput
    disclaimers?: DisclaimerUncheckedUpdateManyWithoutClientNestedInput
    microsoftAccounts?: MicrosoftAccountUncheckedUpdateManyWithoutClientNestedInput
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientNestedInput
    users?: UserUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutInvitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    contractDeviceQty?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUnitCreateManyClientInput = {
    id: number
    description: string
    street: string
  }

  export type DeviceCreateManyClientInput = {
    id: number
    name: string
    nickname: string
    mac: string
    brand: string
    os: string
    processor: string
    username: string
    serial: string
    model: string
    type: string
    isActive: boolean
    updatedAt?: Date | string
    syncedAt?: Date | string
  }

  export type RecomendationCreateManyClientInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisclaimerCreateManyClientInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MicrosoftAccountCreateManyClientInput = {
    id: string
    displayName: string
    email: string
    updatedAt?: Date | string
  }

  export type MicrosoftSubscribedSkuCreateManyClientInput = {
    id?: string
    qty: number
    used: number
    updatedAt?: Date | string
    skuId: string
  }

  export type BusinessUnitUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    deviceDetails?: DeviceDetailUpdateManyWithoutBusinessUnitNestedInput
  }

  export type BusinessUnitUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    deviceDetails?: DeviceDetailUncheckedUpdateManyWithoutBusinessUnitNestedInput
  }

  export type BusinessUnitUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityStatus?: SecurityStatusUpdateManyWithoutDeviceNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutDeviceNestedInput
    DeviceDetail?: DeviceDetailUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityStatus?: SecurityStatusUncheckedUpdateManyWithoutDeviceNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutDeviceNestedInput
    DeviceDetail?: DeviceDetailUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    processor?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecomendationUpdateWithoutClientInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecomendationUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecomendationUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisclaimerUpdateWithoutClientInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisclaimerUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisclaimerUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MicrosoftAccountUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microsoftSkus?: MicrosoftSkuUpdateManyWithoutMicrosoftAccountsNestedInput
  }

  export type MicrosoftAccountUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microsoftSkus?: MicrosoftSkuUncheckedUpdateManyWithoutMicrosoftAccountsNestedInput
  }

  export type MicrosoftAccountUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MicrosoftSubscribedSkuUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sku?: MicrosoftSkuUpdateOneRequiredWithoutMicrosoftSubscribedSkusNestedInput
  }

  export type MicrosoftSubscribedSkuUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skuId?: StringFieldUpdateOperationsInput | string
  }

  export type MicrosoftSubscribedSkuUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skuId?: StringFieldUpdateOperationsInput | string
  }

  export type InviteUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUncheckedUpdateManyWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityStatusCreateManyDeviceInput = {
    id: string
    name: string
    mac: string
    group: string
    isManaged: boolean
    isManagedWithBest: boolean
    syncedAt?: Date | string
  }

  export type SecurityEventCreateManyDeviceInput = {
    deviceName: string
    endpoint: string
    username: string
    occurrences: number
    lastOccurrence: Date | string
    module: string
    type: string
    companyName: string
  }

  export type DeviceDetailCreateManyDeviceInput = {
    id: number
    groupId?: number | null
    ramal: string
    imei1: string
    imei2: string
    domain: string
    totalRam: string
    totalStorage: string
    usedStorage: string
    purchaseDate?: Date | string | null
    warrantyDate?: Date | string | null
    clientVersion: string
    businessUnitId?: number | null
    updatedAt?: Date | string
  }

  export type SecurityStatusUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    isManagedWithBest?: BoolFieldUpdateOperationsInput | boolean
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityStatusUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    isManagedWithBest?: BoolFieldUpdateOperationsInput | boolean
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityStatusUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    isManagedWithBest?: BoolFieldUpdateOperationsInput | boolean
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUpdateWithoutDeviceInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    occurrences?: IntFieldUpdateOperationsInput | number
    lastOccurrence?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type SecurityEventUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    occurrences?: IntFieldUpdateOperationsInput | number
    lastOccurrence?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type SecurityEventUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    occurrences?: IntFieldUpdateOperationsInput | number
    lastOccurrence?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceDetailUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    ramal?: StringFieldUpdateOperationsInput | string
    imei1?: StringFieldUpdateOperationsInput | string
    imei2?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    totalRam?: StringFieldUpdateOperationsInput | string
    totalStorage?: StringFieldUpdateOperationsInput | string
    usedStorage?: StringFieldUpdateOperationsInput | string
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientVersion?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnit?: BusinessUnitUpdateOneWithoutDeviceDetailsNestedInput
  }

  export type DeviceDetailUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    ramal?: StringFieldUpdateOperationsInput | string
    imei1?: StringFieldUpdateOperationsInput | string
    imei2?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    totalRam?: StringFieldUpdateOperationsInput | string
    totalStorage?: StringFieldUpdateOperationsInput | string
    usedStorage?: StringFieldUpdateOperationsInput | string
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientVersion?: StringFieldUpdateOperationsInput | string
    businessUnitId?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceDetailUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    ramal?: StringFieldUpdateOperationsInput | string
    imei1?: StringFieldUpdateOperationsInput | string
    imei2?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    totalRam?: StringFieldUpdateOperationsInput | string
    totalStorage?: StringFieldUpdateOperationsInput | string
    usedStorage?: StringFieldUpdateOperationsInput | string
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientVersion?: StringFieldUpdateOperationsInput | string
    businessUnitId?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceDetailCreateManyBusinessUnitInput = {
    id: number
    groupId?: number | null
    ramal: string
    imei1: string
    imei2: string
    domain: string
    totalRam: string
    totalStorage: string
    usedStorage: string
    purchaseDate?: Date | string | null
    warrantyDate?: Date | string | null
    clientVersion: string
    updatedAt?: Date | string
    deviceId?: number | null
  }

  export type DeviceDetailUpdateWithoutBusinessUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    ramal?: StringFieldUpdateOperationsInput | string
    imei1?: StringFieldUpdateOperationsInput | string
    imei2?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    totalRam?: StringFieldUpdateOperationsInput | string
    totalStorage?: StringFieldUpdateOperationsInput | string
    usedStorage?: StringFieldUpdateOperationsInput | string
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientVersion?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutDeviceDetailNestedInput
  }

  export type DeviceDetailUncheckedUpdateWithoutBusinessUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    ramal?: StringFieldUpdateOperationsInput | string
    imei1?: StringFieldUpdateOperationsInput | string
    imei2?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    totalRam?: StringFieldUpdateOperationsInput | string
    totalStorage?: StringFieldUpdateOperationsInput | string
    usedStorage?: StringFieldUpdateOperationsInput | string
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientVersion?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DeviceDetailUncheckedUpdateManyWithoutBusinessUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    ramal?: StringFieldUpdateOperationsInput | string
    imei1?: StringFieldUpdateOperationsInput | string
    imei2?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    totalRam?: StringFieldUpdateOperationsInput | string
    totalStorage?: StringFieldUpdateOperationsInput | string
    usedStorage?: StringFieldUpdateOperationsInput | string
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientVersion?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MicrosoftSubscribedSkuCreateManySkuInput = {
    id?: string
    qty: number
    used: number
    updatedAt?: Date | string
    clientId: number
  }

  export type MicrosoftAccountUpdateWithoutMicrosoftSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutMicrosoftAccountsNestedInput
  }

  export type MicrosoftAccountUncheckedUpdateWithoutMicrosoftSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MicrosoftAccountUncheckedUpdateManyWithoutMicrosoftSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MicrosoftSubscribedSkuUpdateWithoutSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutMicrosoftSubscribedSkusNestedInput
  }

  export type MicrosoftSubscribedSkuUncheckedUpdateWithoutSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MicrosoftSubscribedSkuUncheckedUpdateManyWithoutSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MicrosoftSkuUpdateWithoutMicrosoftAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUpdateManyWithoutSkuNestedInput
  }

  export type MicrosoftSkuUncheckedUpdateWithoutMicrosoftAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    microsoftSubscribedSkus?: MicrosoftSubscribedSkuUncheckedUpdateManyWithoutSkuNestedInput
  }

  export type MicrosoftSkuUncheckedUpdateManyWithoutMicrosoftAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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