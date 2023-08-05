# pull official base image
FROM node:alpine

# set working directory
WORKDIR /var/www/frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /var/www/frontend/node_modules/.bin:$PATH

# install app dependencies

EXPOSE 3000
# start app
CMD ["npm", "start"] 