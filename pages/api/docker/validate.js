import { validateDockerExist } from '../../../server/docker'
import captureError from '../../../utils/captureError'

export default async (req, res) => {
  try {
    const dockerValidate = await validateDockerExist()
    res.status(200).json({ data: dockerValidate })
  } catch (err) {
    captureError(err)
  }
}
