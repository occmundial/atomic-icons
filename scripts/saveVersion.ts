import write from 'write'

const version = process.argv[2]

write.sync('.env', `NEXT_PUBLIC_VERSION=${version}`, { overwrite: true })
