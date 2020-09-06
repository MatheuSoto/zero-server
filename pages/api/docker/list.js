import { listContainers } from '../../../server/docker'
import captureError from '../../../utils/captureError'

export default async (req, res) => {
  try {
    const list = await listContainers()
    res.status(200).json({ data: list })
  } catch (err) {
    captureError(err)
  }
}
