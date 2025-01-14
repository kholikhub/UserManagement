import fs from 'fs/promises'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'users.json')

export async function readUsersFile() {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // If the file doesn't exist or is empty, return an empty array
    return []
  }
}

export async function writeUsersFile(users: any[]) {
  const dirPath = path.dirname(filePath)
  await fs.mkdir(dirPath, { recursive: true })
  await fs.writeFile(filePath, JSON.stringify(users, null, 2))
}

