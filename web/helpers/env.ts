import { objectKeys } from "./utils"

enum AppEnv {
  Production = "production",
  Development = "development",
}

interface Env {
  NEXT_PUBLIC_APP_ENV: AppEnv
  NEXT_PUBLIC_MAPBOX_TOKEN: string
}

const env: Env = {
  NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV as AppEnv,
  NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string,
}

const frontendKeys = objectKeys(env).filter((key) =>
  key.includes("NEXT_PUBLIC"),
)
const serverKeys = objectKeys(env).filter((key) => !frontendKeys.includes(key))

let keysToValidate = frontendKeys
if (typeof window === "undefined") {
  keysToValidate = serverKeys
}

const missingKeys: Array<string> = []

keysToValidate.forEach((key) => {
  if (!env[key]) {
    missingKeys.push(key)
  }
  if (key === "NEXT_PUBLIC_APP_ENV") {
    if (!Object.values(AppEnv).includes(env[key] as any)) {
      throw new Error(
        `${key} must be one of ${Object.values(AppEnv).join(", ")}`,
      )
    }
  }
})
if (missingKeys.length > 0) {
  throw new Error(`Missing environment variables: ${missingKeys.join(", ")}`)
}

export const isDev = () =>
  process.env.NODE_ENV === "development" &&
  env.NEXT_PUBLIC_APP_ENV === AppEnv.Development
export const isProd = () =>
  process.env.NODE_ENV === "production" &&
  env.NEXT_PUBLIC_APP_ENV === AppEnv.Production

export default env
