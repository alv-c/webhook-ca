
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\desenvolvimento\\Documents\\PROJETOS\\webhook-controle-acesso-chatpro\\generated\\prisma-watchdog",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\desenvolvimento\\Documents\\PROJETOS\\webhook-controle-acesso-chatpro\\prisma\\schema.prisma-watchdog",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_WATCHDOG",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma-watchdog\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL_WATCHDOG\")\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel apis {\n  id                                                                          Int                   @id @default(autoincrement())\n  name                                                                        String                @unique(map: \"name\") @db.VarChar(255)\n  group_name                                                                  String?               @db.VarChar(255)\n  request_authentication_type                                                 String?               @db.VarChar(255)\n  request_target_method_type                                                  String                @db.VarChar(255)\n  request_target_response_type                                                String                @db.VarChar(255)\n  basic_and_bearer_authentication_method_type                                 String?               @db.VarChar(255)\n  oauth_authentication_grant_type                                             String?               @db.VarChar(255)\n  api_key_authentication_key                                                  String?               @db.LongText\n  api_key_authentication_header_name                                          String?               @db.VarChar(255)\n  basic_authentication_username                                               String?               @db.LongText\n  basic_authentication_password                                               String?               @db.LongText\n  basic_and_bearer_authentication_url                                         String?               @db.VarChar(255)\n  basic_and_bearer_authentication_query_parameter_map                         Json?\n  basic_and_bearer_authentication_header_map                                  Json?\n  basic_and_bearer_authentication_body                                        Json?\n  basic_and_bearer_authentication_token_extractor_list                        Json?\n  basic_and_bearer_authentication_expiration_extractor_list                   Json?\n  basic_and_bearer_authentication_expiration_buffer                           Int?\n  bearer_authentication_token                                                 String?               @db.LongText\n  oauth_authentication_client_id                                              String?               @db.LongText\n  oauth_authentication_client_secret                                          String?               @db.LongText\n  oauth_authentication_token_url                                              String?               @db.VarChar(255)\n  oauth_authentication_authorization_url                                      String?               @db.VarChar(255)\n  oauth_authentication_redirect_url                                           String?               @db.VarChar(255)\n  oauth_authentication_scope                                                  String?               @db.VarChar(255)\n  oauth_authentication_access_token_extractor_list                            Json?\n  oauth_authentication_refresh_token_extractor_list                           Json?\n  oauth_authentication_expiration_extractor_list                              Json?\n  oauth_authentication_expiration_buffer                                      Int?\n  oauth_authentication_pkce_enabled                                           Boolean?\n  oauth_authentication_additional_parameter_map                               Json?\n  request_target_url                                                          String                @db.VarChar(255)\n  request_target_query_parameter_map                                          Json?\n  request_target_header_map                                                   Json?\n  request_target_body                                                         Json?\n  is_api_active                                                               Boolean               @default(true)\n  created_at                                                                  DateTime              @default(now()) @db.DateTime(0)\n  updated_at                                                                  DateTime              @default(now()) @db.DateTime(0)\n  authentication_types                                                        authentication_types? @relation(fields: [request_authentication_type], references: [authentication_type], onDelete: Cascade, onUpdate: NoAction, map: \"apis_ibfk_1\")\n  method_types_apis_request_target_method_typeTomethod_types                  method_types          @relation(\"apis_request_target_method_typeTomethod_types\", fields: [request_target_method_type], references: [method_type], onDelete: Cascade, onUpdate: NoAction, map: \"apis_ibfk_2\")\n  response_types                                                              response_types        @relation(fields: [request_target_response_type], references: [response_type], onDelete: Cascade, onUpdate: NoAction, map: \"apis_ibfk_3\")\n  method_types_apis_basic_and_bearer_authentication_method_typeTomethod_types method_types?         @relation(\"apis_basic_and_bearer_authentication_method_typeTomethod_types\", fields: [basic_and_bearer_authentication_method_type], references: [method_type], onDelete: Cascade, onUpdate: NoAction, map: \"apis_ibfk_4\")\n  grant_types                                                                 grant_types?          @relation(fields: [oauth_authentication_grant_type], references: [grant_type], onDelete: Cascade, onUpdate: NoAction, map: \"apis_ibfk_5\")\n\n  @@index([api_key_authentication_header_name], map: \"idx_api_key_authentication_header_name\")\n  @@index([basic_and_bearer_authentication_expiration_buffer], map: \"idx_basic_and_bearer_authentication_expiration_buffer\")\n  @@index([basic_and_bearer_authentication_method_type], map: \"idx_basic_and_bearer_authentication_method_type\")\n  @@index([basic_and_bearer_authentication_url], map: \"idx_basic_and_bearer_authentication_url\")\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([group_name], map: \"idx_group_name\")\n  @@index([is_api_active], map: \"idx_is_api_active\")\n  @@index([name], map: \"idx_name\")\n  @@index([oauth_authentication_authorization_url], map: \"idx_oauth_authentication_authorization_url\")\n  @@index([oauth_authentication_expiration_buffer], map: \"idx_oauth_authentication_expiration_buffer\")\n  @@index([oauth_authentication_grant_type], map: \"idx_oauth_authentication_grant_type\")\n  @@index([oauth_authentication_pkce_enabled], map: \"idx_oauth_authentication_pkce_enabled\")\n  @@index([oauth_authentication_redirect_url], map: \"idx_oauth_authentication_redirect_url\")\n  @@index([oauth_authentication_scope], map: \"idx_oauth_authentication_scope\")\n  @@index([oauth_authentication_token_url], map: \"idx_oauth_authentication_token_url\")\n  @@index([request_authentication_type], map: \"idx_request_authentication_type\")\n  @@index([request_target_method_type], map: \"idx_request_target_method_type\")\n  @@index([request_target_response_type], map: \"idx_request_target_response_type\")\n  @@index([request_target_url], map: \"idx_request_target_url\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel application_types {\n  id               Int           @id @default(autoincrement())\n  application_type String        @unique(map: \"application_type\") @db.VarChar(255)\n  created_at       DateTime      @default(now()) @db.DateTime(0)\n  updated_at       DateTime      @default(now()) @db.DateTime(0)\n  applications     applications?\n  users            users[]\n\n  @@index([application_type], map: \"idx_application_type\")\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel applications {\n  id                         Int               @id @default(autoincrement())\n  application_type           String            @unique(map: \"application_type\") @db.VarChar(255)\n  watchdog_try_count         Int               @default(0)\n  is_notified_by_watchdog    Boolean           @default(false)\n  is_application_type_active Boolean           @default(false)\n  heartbeat                  DateTime          @default(now()) @db.DateTime(0)\n  created_at                 DateTime          @default(now()) @db.DateTime(0)\n  updated_at                 DateTime          @default(now()) @db.DateTime(0)\n  application_types          application_types @relation(fields: [application_type], references: [application_type], onDelete: Cascade, onUpdate: NoAction, map: \"applications_ibfk_1\")\n\n  @@index([application_type], map: \"idx_application_type\")\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([heartbeat], map: \"idx_heartbeat\")\n  @@index([is_application_type_active], map: \"idx_is_application_type_active\")\n  @@index([is_notified_by_watchdog], map: \"idx_is_notified_by_watchdog\")\n  @@index([updated_at], map: \"idx_updated_at\")\n  @@index([watchdog_try_count], map: \"idx_watchdog_try_count\")\n}\n\nmodel authentication_types {\n  id                  Int      @id @default(autoincrement())\n  authentication_type String   @unique(map: \"authentication_type\") @db.VarChar(255)\n  created_at          DateTime @default(now()) @db.DateTime(0)\n  updated_at          DateTime @default(now()) @db.DateTime(0)\n  apis                apis[]\n\n  @@index([authentication_type], map: \"idx_authentication_type\")\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel d_guard_layouts {\n  id              Int             @id @default(autoincrement())\n  guid            String          @db.VarChar(255)\n  server_id       Int\n  created_at      DateTime        @default(now()) @db.DateTime(0)\n  updated_at      DateTime        @default(now()) @db.DateTime(0)\n  d_guard_servers d_guard_servers @relation(fields: [server_id], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"d_guard_layouts_ibfk_1\")\n\n  @@unique([guid, server_id], map: \"unique_guid_server_id\")\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([guid], map: \"idx_guid\")\n  @@index([server_id], map: \"idx_server_id\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel d_guard_servers {\n  id                   Int                    @id @default(autoincrement())\n  ip                   String                 @unique(map: \"ip\") @db.VarChar(255)\n  port                 Int\n  username             String                 @db.LongText\n  password             String                 @db.LongText\n  created_at           DateTime               @default(now()) @db.DateTime(0)\n  updated_at           DateTime               @default(now()) @db.DateTime(0)\n  d_guard_layouts      d_guard_layouts[]\n  d_guard_workstations d_guard_workstations[]\n\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([ip], map: \"idx_ip\")\n  @@index([port], map: \"idx_port\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel d_guard_workstations {\n  id              Int             @id @default(autoincrement())\n  guid            String          @db.VarChar(255)\n  server_id       Int\n  created_at      DateTime        @default(now()) @db.DateTime(0)\n  updated_at      DateTime        @default(now()) @db.DateTime(0)\n  d_guard_servers d_guard_servers @relation(fields: [server_id], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"d_guard_workstations_ibfk_1\")\n\n  @@unique([guid, server_id], map: \"unique_guid_server_id\")\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([guid], map: \"idx_guid\")\n  @@index([server_id], map: \"idx_server_id\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel database_types {\n  id            Int         @id @default(autoincrement())\n  database_type String      @unique(map: \"database_type\") @db.VarChar(255)\n  created_at    DateTime    @default(now()) @db.DateTime(0)\n  updated_at    DateTime    @default(now()) @db.DateTime(0)\n  databases     databases[]\n\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([database_type], map: \"idx_database_type\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel databases {\n  id             Int            @id @default(autoincrement())\n  name           String         @unique(map: \"name\") @db.VarChar(255)\n  database_type  String         @db.VarChar(255)\n  host           String?        @db.LongText\n  database       String?        @db.LongText\n  username       String         @db.LongText\n  password       String         @db.LongText\n  connect_string String?        @db.LongText\n  created_at     DateTime       @default(now()) @db.DateTime(0)\n  updated_at     DateTime       @default(now()) @db.DateTime(0)\n  database_types database_types @relation(fields: [database_type], references: [database_type], onDelete: Cascade, onUpdate: NoAction, map: \"databases_ibfk_1\")\n  queries        queries[]\n\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([database_type], map: \"idx_database_type\")\n  @@index([name], map: \"idx_name\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel grant_types {\n  id         Int      @id @default(autoincrement())\n  grant_type String   @unique(map: \"grant_type\") @db.VarChar(255)\n  created_at DateTime @default(now()) @db.DateTime(0)\n  updated_at DateTime @default(now()) @db.DateTime(0)\n  apis       apis[]\n\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([grant_type], map: \"idx_grant_type\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel method_types {\n  id                                                                  Int      @id @default(autoincrement())\n  method_type                                                         String   @unique(map: \"method_type\") @db.VarChar(255)\n  created_at                                                          DateTime @default(now()) @db.DateTime(0)\n  updated_at                                                          DateTime @default(now()) @db.DateTime(0)\n  apis_apis_request_target_method_typeTomethod_types                  apis[]   @relation(\"apis_request_target_method_typeTomethod_types\")\n  apis_apis_basic_and_bearer_authentication_method_typeTomethod_types apis[]   @relation(\"apis_basic_and_bearer_authentication_method_typeTomethod_types\")\n\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([method_type], map: \"idx_method_type\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel queries {\n  id                           Int       @id @default(autoincrement())\n  name                         String    @unique(map: \"name\") @db.VarChar(255)\n  group_name                   String?   @db.VarChar(255)\n  request_target_database_id   Int\n  request_target_sql           String    @db.LongText\n  request_target_parameter_map Json?\n  is_query_active              Boolean   @default(true)\n  created_at                   DateTime  @default(now()) @db.DateTime(0)\n  updated_at                   DateTime  @default(now()) @db.DateTime(0)\n  databases                    databases @relation(fields: [request_target_database_id], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"queries_ibfk_1\")\n\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([group_name], map: \"idx_group_name\")\n  @@index([is_query_active], map: \"idx_is_query_active\")\n  @@index([name], map: \"idx_name\")\n  @@index([request_target_database_id], map: \"idx_request_target_database_id\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel response_types {\n  id            Int      @id @default(autoincrement())\n  response_type String   @unique(map: \"response_type\") @db.VarChar(255)\n  created_at    DateTime @default(now()) @db.DateTime(0)\n  updated_at    DateTime @default(now()) @db.DateTime(0)\n  apis          apis[]\n\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([response_type], map: \"idx_response_type\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel role_types {\n  id         Int      @id @default(autoincrement())\n  role_type  String   @unique(map: \"role_type\") @db.VarChar(255)\n  created_at DateTime @default(now()) @db.DateTime(0)\n  updated_at DateTime @default(now()) @db.DateTime(0)\n\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([role_type], map: \"idx_role_type\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\nmodel table_types {\n  id         Int      @id @default(autoincrement())\n  table_type String   @unique(map: \"table_type\") @db.VarChar(255)\n  created_at DateTime @default(now()) @db.DateTime(0)\n  updated_at DateTime @default(now()) @db.DateTime(0)\n\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([table_type], map: \"idx_table_type\")\n  @@index([updated_at], map: \"idx_updated_at\")\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel users {\n  id                Int               @id @default(autoincrement())\n  application_type  String            @db.VarChar(255)\n  role_list         Json\n  username          String            @db.VarChar(255)\n  password          String            @db.LongText\n  is_user_active    Boolean           @default(true)\n  created_at        DateTime          @default(now()) @db.DateTime(0)\n  updated_at        DateTime          @default(now()) @db.DateTime(0)\n  application_types application_types @relation(fields: [application_type], references: [application_type], onDelete: Cascade, onUpdate: NoAction, map: \"users_ibfk_1\")\n\n  @@unique([application_type, username], map: \"unique_application_type_username\")\n  @@index([application_type], map: \"idx_application_type\")\n  @@index([created_at], map: \"idx_created_at\")\n  @@index([is_user_active], map: \"idx_is_user_active\")\n  @@index([updated_at], map: \"idx_updated_at\")\n  @@index([username], map: \"idx_username\")\n}\n",
  "inlineSchemaHash": "555ab36eae6284e923d8d0e770f0cac62e3b0e5456185ca0ac26f092cff50c01",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma-watchdog",
    "prisma-watchdog",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"apis\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_authentication_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_target_method_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_target_response_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basic_and_bearer_authentication_method_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_grant_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"api_key_authentication_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"api_key_authentication_header_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basic_authentication_username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basic_authentication_password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basic_and_bearer_authentication_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basic_and_bearer_authentication_query_parameter_map\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basic_and_bearer_authentication_header_map\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basic_and_bearer_authentication_body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basic_and_bearer_authentication_token_extractor_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basic_and_bearer_authentication_expiration_extractor_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basic_and_bearer_authentication_expiration_buffer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bearer_authentication_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_client_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_client_secret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_token_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_authorization_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_redirect_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_access_token_extractor_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_refresh_token_extractor_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_expiration_extractor_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_expiration_buffer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_pkce_enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_authentication_additional_parameter_map\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_target_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_target_query_parameter_map\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_target_header_map\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_target_body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_api_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authentication_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"authentication_types\",\"nativeType\":null,\"relationName\":\"apisToauthentication_types\",\"relationFromFields\":[\"request_authentication_type\"],\"relationToFields\":[\"authentication_type\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method_types_apis_request_target_method_typeTomethod_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"method_types\",\"nativeType\":null,\"relationName\":\"apis_request_target_method_typeTomethod_types\",\"relationFromFields\":[\"request_target_method_type\"],\"relationToFields\":[\"method_type\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"response_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"response_types\",\"nativeType\":null,\"relationName\":\"apisToresponse_types\",\"relationFromFields\":[\"request_target_response_type\"],\"relationToFields\":[\"response_type\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method_types_apis_basic_and_bearer_authentication_method_typeTomethod_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"method_types\",\"nativeType\":null,\"relationName\":\"apis_basic_and_bearer_authentication_method_typeTomethod_types\",\"relationFromFields\":[\"basic_and_bearer_authentication_method_type\"],\"relationToFields\":[\"method_type\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grant_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grant_types\",\"nativeType\":null,\"relationName\":\"apisTogrant_types\",\"relationFromFields\":[\"oauth_authentication_grant_type\"],\"relationToFields\":[\"grant_type\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"application_types\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"application_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"applications\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"applications\",\"nativeType\":null,\"relationName\":\"application_typesToapplications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"application_typesTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"applications\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"application_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"watchdog_try_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_notified_by_watchdog\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_application_type_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"heartbeat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"application_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"application_types\",\"nativeType\":null,\"relationName\":\"application_typesToapplications\",\"relationFromFields\":[\"application_type\"],\"relationToFields\":[\"application_type\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"authentication_types\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authentication_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apis\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"apis\",\"nativeType\":null,\"relationName\":\"apisToauthentication_types\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"d_guard_layouts\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"d_guard_servers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_guard_servers\",\"nativeType\":null,\"relationName\":\"d_guard_layoutsTod_guard_servers\",\"relationFromFields\":[\"server_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"guid\",\"server_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"guid\",\"server_id\"]}],\"isGenerated\":false},\"d_guard_servers\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"port\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"d_guard_layouts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_guard_layouts\",\"nativeType\":null,\"relationName\":\"d_guard_layoutsTod_guard_servers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"d_guard_workstations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_guard_workstations\",\"nativeType\":null,\"relationName\":\"d_guard_serversTod_guard_workstations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"d_guard_workstations\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"d_guard_servers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_guard_servers\",\"nativeType\":null,\"relationName\":\"d_guard_serversTod_guard_workstations\",\"relationFromFields\":[\"server_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"guid\",\"server_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"guid\",\"server_id\"]}],\"isGenerated\":false},\"database_types\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"database_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"databases\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"databases\",\"nativeType\":null,\"relationName\":\"database_typesTodatabases\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"databases\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"database_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"database\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connect_string\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"database_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"database_types\",\"nativeType\":null,\"relationName\":\"database_typesTodatabases\",\"relationFromFields\":[\"database_type\"],\"relationToFields\":[\"database_type\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"queries\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"queries\",\"nativeType\":null,\"relationName\":\"databasesToqueries\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"grant_types\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grant_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apis\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"apis\",\"nativeType\":null,\"relationName\":\"apisTogrant_types\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"method_types\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apis_apis_request_target_method_typeTomethod_types\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"apis\",\"nativeType\":null,\"relationName\":\"apis_request_target_method_typeTomethod_types\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apis_apis_basic_and_bearer_authentication_method_typeTomethod_types\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"apis\",\"nativeType\":null,\"relationName\":\"apis_basic_and_bearer_authentication_method_typeTomethod_types\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"queries\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_target_database_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_target_sql\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_target_parameter_map\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_query_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"databases\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"databases\",\"nativeType\":null,\"relationName\":\"databasesToqueries\",\"relationFromFields\":[\"request_target_database_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"response_types\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"response_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apis\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"apis\",\"nativeType\":null,\"relationName\":\"apisToresponse_types\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"role_types\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"table_types\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"application_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_user_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"application_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"application_types\",\"nativeType\":null,\"relationName\":\"application_typesTousers\",\"relationFromFields\":[\"application_type\"],\"relationToFields\":[\"application_type\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"application_type\",\"username\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"application_type\",\"username\"]}],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/prisma-watchdog/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma-watchdog/schema.prisma")
