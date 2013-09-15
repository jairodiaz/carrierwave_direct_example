# CarrierWaveDirect Example Application with Cross-Origin Resource Sharing (AJAX)

This Rails application demonstrates how to use [CarrierWaveDirect](https://github.com/dwilkie/carrierwave_direct) to upload files directly to S3 bypassing your server.

The application uses Cross-Origin Resource Sharing to upload to Amazon S3 using AJAX. This allows the UI to be responsive and the user can interact with the form while the image loads in the background.

The application does not implement post-procesing (image resizing, version generation) of the uploaded image.
This should be implemented as described by https://github.com/dwilkie/carrierwave_direct_example using background jobs.

A railscast on this topic is http://railscasts.com/episodes/383-uploading-to-amazon-s3.
A detail explanation is http://pjambet.github.io/blog/direct-upload-to-s3/

## Installation

Install the example application:

    git clone git://github.com/jairodiaz/carrierwave_direct_example.git
    cd carrierwave_direct_example
    bundle install --path vendor
    bundle exec rake db:migrate
    bundle exec rails s

## AMAZON S3 BUCKET CONFIGURATION

Example Policy:

    {
      "Version": "<<Version Value>>",
      "Id": "<<Policy Value>>",
      "Statement": [
        {
          "Sid": "<<Sid Value>>",
          "Effect": "Allow",
          "Principal": {
            "AWS": "*"
          },
          "Action": "s3:*",
          "Resource": "arn:aws:s3:::<<bucket-name>>/*"
        }
      ]
    }

Example CORS Configuration:

    <?xml version="1.0" encoding="UTF-8"?>
    <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
        <CORSRule>
            <AllowedOrigin>*</AllowedOrigin>
            <AllowedMethod>POST</AllowedMethod>
            <AllowedMethod>GET</AllowedMethod>
            <AllowedMethod>PUT</AllowedMethod>
            <AllowedMethod>DELETE</AllowedMethod>
            <AllowedMethod>HEAD</AllowedMethod>
            <MaxAgeSeconds>3000</MaxAgeSeconds>
            <ExposeHeader>Location</ExposeHeader>
            <AllowedHeader>*</AllowedHeader>
        </CORSRule>
    </CORSConfiguration>
