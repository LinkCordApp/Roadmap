import { Redis } from '@upstash/redis'

export const databaseName =
  process.env.NODE_ENV === 'development' ? 'linkcord-roadmap' : 'linkcord-roadmap'

const redis = Redis.fromEnv()

export default redis
