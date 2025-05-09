
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ApisScalarFieldEnum = {
  id: 'id',
  name: 'name',
  group_name: 'group_name',
  request_authentication_type: 'request_authentication_type',
  request_target_method_type: 'request_target_method_type',
  request_target_response_type: 'request_target_response_type',
  basic_and_bearer_authentication_method_type: 'basic_and_bearer_authentication_method_type',
  oauth_authentication_grant_type: 'oauth_authentication_grant_type',
  api_key_authentication_key: 'api_key_authentication_key',
  api_key_authentication_header_name: 'api_key_authentication_header_name',
  basic_authentication_username: 'basic_authentication_username',
  basic_authentication_password: 'basic_authentication_password',
  basic_and_bearer_authentication_url: 'basic_and_bearer_authentication_url',
  basic_and_bearer_authentication_query_parameter_map: 'basic_and_bearer_authentication_query_parameter_map',
  basic_and_bearer_authentication_header_map: 'basic_and_bearer_authentication_header_map',
  basic_and_bearer_authentication_body: 'basic_and_bearer_authentication_body',
  basic_and_bearer_authentication_token_extractor_list: 'basic_and_bearer_authentication_token_extractor_list',
  basic_and_bearer_authentication_expiration_extractor_list: 'basic_and_bearer_authentication_expiration_extractor_list',
  basic_and_bearer_authentication_expiration_buffer: 'basic_and_bearer_authentication_expiration_buffer',
  bearer_authentication_token: 'bearer_authentication_token',
  oauth_authentication_client_id: 'oauth_authentication_client_id',
  oauth_authentication_client_secret: 'oauth_authentication_client_secret',
  oauth_authentication_token_url: 'oauth_authentication_token_url',
  oauth_authentication_authorization_url: 'oauth_authentication_authorization_url',
  oauth_authentication_redirect_url: 'oauth_authentication_redirect_url',
  oauth_authentication_scope: 'oauth_authentication_scope',
  oauth_authentication_access_token_extractor_list: 'oauth_authentication_access_token_extractor_list',
  oauth_authentication_refresh_token_extractor_list: 'oauth_authentication_refresh_token_extractor_list',
  oauth_authentication_expiration_extractor_list: 'oauth_authentication_expiration_extractor_list',
  oauth_authentication_expiration_buffer: 'oauth_authentication_expiration_buffer',
  oauth_authentication_pkce_enabled: 'oauth_authentication_pkce_enabled',
  oauth_authentication_additional_parameter_map: 'oauth_authentication_additional_parameter_map',
  request_target_url: 'request_target_url',
  request_target_query_parameter_map: 'request_target_query_parameter_map',
  request_target_header_map: 'request_target_header_map',
  request_target_body: 'request_target_body',
  is_api_active: 'is_api_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Application_typesScalarFieldEnum = {
  id: 'id',
  application_type: 'application_type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ApplicationsScalarFieldEnum = {
  id: 'id',
  application_type: 'application_type',
  watchdog_try_count: 'watchdog_try_count',
  is_notified_by_watchdog: 'is_notified_by_watchdog',
  is_application_type_active: 'is_application_type_active',
  heartbeat: 'heartbeat',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Authentication_typesScalarFieldEnum = {
  id: 'id',
  authentication_type: 'authentication_type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_guard_layoutsScalarFieldEnum = {
  id: 'id',
  guid: 'guid',
  server_id: 'server_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_guard_serversScalarFieldEnum = {
  id: 'id',
  ip: 'ip',
  port: 'port',
  username: 'username',
  password: 'password',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.D_guard_workstationsScalarFieldEnum = {
  id: 'id',
  guid: 'guid',
  server_id: 'server_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Database_typesScalarFieldEnum = {
  id: 'id',
  database_type: 'database_type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.DatabasesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  database_type: 'database_type',
  host: 'host',
  database: 'database',
  username: 'username',
  password: 'password',
  connect_string: 'connect_string',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Grant_typesScalarFieldEnum = {
  id: 'id',
  grant_type: 'grant_type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Method_typesScalarFieldEnum = {
  id: 'id',
  method_type: 'method_type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.QueriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  group_name: 'group_name',
  request_target_database_id: 'request_target_database_id',
  request_target_sql: 'request_target_sql',
  request_target_parameter_map: 'request_target_parameter_map',
  is_query_active: 'is_query_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Response_typesScalarFieldEnum = {
  id: 'id',
  response_type: 'response_type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Role_typesScalarFieldEnum = {
  id: 'id',
  role_type: 'role_type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Table_typesScalarFieldEnum = {
  id: 'id',
  table_type: 'table_type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  application_type: 'application_type',
  role_list: 'role_list',
  username: 'username',
  password: 'password',
  is_user_active: 'is_user_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.apisOrderByRelevanceFieldEnum = {
  name: 'name',
  group_name: 'group_name',
  request_authentication_type: 'request_authentication_type',
  request_target_method_type: 'request_target_method_type',
  request_target_response_type: 'request_target_response_type',
  basic_and_bearer_authentication_method_type: 'basic_and_bearer_authentication_method_type',
  oauth_authentication_grant_type: 'oauth_authentication_grant_type',
  api_key_authentication_key: 'api_key_authentication_key',
  api_key_authentication_header_name: 'api_key_authentication_header_name',
  basic_authentication_username: 'basic_authentication_username',
  basic_authentication_password: 'basic_authentication_password',
  basic_and_bearer_authentication_url: 'basic_and_bearer_authentication_url',
  bearer_authentication_token: 'bearer_authentication_token',
  oauth_authentication_client_id: 'oauth_authentication_client_id',
  oauth_authentication_client_secret: 'oauth_authentication_client_secret',
  oauth_authentication_token_url: 'oauth_authentication_token_url',
  oauth_authentication_authorization_url: 'oauth_authentication_authorization_url',
  oauth_authentication_redirect_url: 'oauth_authentication_redirect_url',
  oauth_authentication_scope: 'oauth_authentication_scope',
  request_target_url: 'request_target_url'
};

exports.Prisma.application_typesOrderByRelevanceFieldEnum = {
  application_type: 'application_type'
};

exports.Prisma.applicationsOrderByRelevanceFieldEnum = {
  application_type: 'application_type'
};

exports.Prisma.authentication_typesOrderByRelevanceFieldEnum = {
  authentication_type: 'authentication_type'
};

exports.Prisma.d_guard_layoutsOrderByRelevanceFieldEnum = {
  guid: 'guid'
};

exports.Prisma.d_guard_serversOrderByRelevanceFieldEnum = {
  ip: 'ip',
  username: 'username',
  password: 'password'
};

exports.Prisma.d_guard_workstationsOrderByRelevanceFieldEnum = {
  guid: 'guid'
};

exports.Prisma.database_typesOrderByRelevanceFieldEnum = {
  database_type: 'database_type'
};

exports.Prisma.databasesOrderByRelevanceFieldEnum = {
  name: 'name',
  database_type: 'database_type',
  host: 'host',
  database: 'database',
  username: 'username',
  password: 'password',
  connect_string: 'connect_string'
};

exports.Prisma.grant_typesOrderByRelevanceFieldEnum = {
  grant_type: 'grant_type'
};

exports.Prisma.method_typesOrderByRelevanceFieldEnum = {
  method_type: 'method_type'
};

exports.Prisma.queriesOrderByRelevanceFieldEnum = {
  name: 'name',
  group_name: 'group_name',
  request_target_sql: 'request_target_sql'
};

exports.Prisma.response_typesOrderByRelevanceFieldEnum = {
  response_type: 'response_type'
};

exports.Prisma.role_typesOrderByRelevanceFieldEnum = {
  role_type: 'role_type'
};

exports.Prisma.table_typesOrderByRelevanceFieldEnum = {
  table_type: 'table_type'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
  application_type: 'application_type',
  username: 'username',
  password: 'password'
};


exports.Prisma.ModelName = {
  apis: 'apis',
  application_types: 'application_types',
  applications: 'applications',
  authentication_types: 'authentication_types',
  d_guard_layouts: 'd_guard_layouts',
  d_guard_servers: 'd_guard_servers',
  d_guard_workstations: 'd_guard_workstations',
  database_types: 'database_types',
  databases: 'databases',
  grant_types: 'grant_types',
  method_types: 'method_types',
  queries: 'queries',
  response_types: 'response_types',
  role_types: 'role_types',
  table_types: 'table_types',
  users: 'users'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
