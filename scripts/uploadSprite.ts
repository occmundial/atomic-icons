import AWS from 'aws-sdk'
import { PutObjectRequest } from 'aws-sdk/clients/s3'
import fs from 'fs'
import path from 'path'

const version = process.argv[2]
AWS.config.update({ region: 'us-west-2' })
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

const uploadParams: PutObjectRequest = {
  Bucket: 'cdn-h4-occ',
  Key: ''
}

const fileStream = fs.createReadStream(
  path.join('.', 'dist', 'atomic-icons.svg')
)

uploadParams.Body = fileStream
uploadParams.Key = `icons/${version}/atomic-icons.svg`

s3.upload(uploadParams, function (err, data) {
  if (err) {
    console.log('Error', err)
  }
  if (data) {
    console.log('Upload Success', data.Location)
  }
})
