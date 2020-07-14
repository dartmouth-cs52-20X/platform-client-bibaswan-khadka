# Starter Pack with image optimization and compression. 
This starter pack includes the imagemin-webpack-plugin to compress images to lower file size and the url-loader plugin which converts a file (if it’s smaller than the specified size) into a Base64 URL and inserts this URL into the bundle to avoid extra image requests. 

When testing I was able to reduce the image size of the starterpack logo from 70kb to 19kb. 
