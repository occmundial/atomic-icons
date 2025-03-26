import AWS from 'aws-sdk'
import { PutObjectRequest } from 'aws-sdk/clients/s3'
import fs from 'fs'
import path from 'path'

const version = process.argv[2]
AWS.config.update({
  region: 'us-west-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
})
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

const uploadParams: PutObjectRequest = {
  Bucket: 'cdn-icons-occ',
  Key: '',
  CacheControl: 'max-age=2592000',
  ContentType: 'image/svg+xml',
  ACL: 'bucket-owner-full-control'
}

const fileStream = fs.createReadStream(
  path.join('.', 'dist', 'atomic-icons.svg')
)

uploadParams.Body = fileStream
uploadParams.Key = `atomic-icons-${version}.svg`

s3.upload(uploadParams, function (err, data) {
  if (err) {
    console.log('Error', err)
  }
  if (data) {
    console.log('Upload Success', data.Location)
  }
})
