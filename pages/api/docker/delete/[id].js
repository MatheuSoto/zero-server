import { useRouter } from 'next/router'
import { deleteContainer } from '../../../../server/docker'
import captureError from '../../../../utils/captureError'

export default async (req, res) => {
    const {
        query: { id },
      } = req

      res.end(`Post: ${id}`)
  /*try {
    const deletedContainer = await deleteContainer()
    res.status(200).json({ data: deletedContainer })
  } catch (err) {
    captureError(err)
  }*/
}
