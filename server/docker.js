import { execShellCommand } from '../utils/shell'

export const validateDockerExist = async () => {
  const dockerVersion = await execShellCommand('docker --version')
  return dockerVersion
}

export const listContainers = async () => {
  const list = await execShellCommand('docker ps -aq')
  const parseData = list.replace(/\n/ig, ' ').split(' ').filter(val => val !== '')
  const dockers = []
  await Promise.all(parseData.map(async dockerId => {
    const dockerDetail = await execShellCommand(`docker inspect ${dockerId}`)
    const parseData = JSON.parse(dockerDetail.replace(/\n/ig, ' '))[0]
    dockers.push({ id: dockerId, detail: parseData })
  }))
  return dockers
}

export const deleteContainer = async (dockerId) => {
  const containerDeleted = await execShellCommand(`docker rm -f ${dockerId}`)
  return containerDeleted
}
