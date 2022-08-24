import * as Option from 'fp-ts/lib/Option'
import fs from 'fs-extra'

export const clearTmpDirectory = async (): Promise<Option.Option<string>> => {
  try {
    await fs.emptyDir(`/tmp/working`)
    await fs.rmdir(`/tmp/working`)
  } catch (error) {
    return Option.some(error.toString())
  }

  return Option.none
}
