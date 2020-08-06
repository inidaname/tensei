import { Request } from 'express'
import { Resource } from '../resources/Resource'

export interface User {
    email: string
    password: string
}

export type HookFunction = (payload: DataPayload, request: Request) => DataPayload

export interface Asset {
    name: string
    path: string
}

export type SupportedDatabases = 'mysql' | 'pg' | 'sqlite3'

export interface Env {
    port: string|number
    sessionSecret: string
    databaseUrl?: string
    database: SupportedDatabases
}

export interface FlamingoConfig {
    resources: Resource[],
    scripts: Asset[],
    styles: Asset[],
    env: Env
    dashboardPath: string
    apiPath: string
    adminTable: string
}

export interface DataPayload {
    [key: string]: any
}
