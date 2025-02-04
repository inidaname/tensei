import { Mail } from '@tensei/mail'
import { AnyEntity } from '@mikro-orm/core'
import { DataPayload } from '@tensei/common'
import { SessionData } from 'express-session'
import * as Formatter from 'express-response-formatter'

declare global {
  namespace Express {
    export interface Request {
      // @ts-ignore
      user: import('@tensei/orm').UserModel & DataPayload
      // @ts-ignore
      team: import('@tensei/orm').TeamModel
      verifyTwoFactorAuthToken: (token: string | number) => boolean
    }
  }
}

declare module 'express-session' {
  interface SessionData {
    user: {
      id: number
    }
  }
}
