# Demo application using Rails5(API), React, Redux, Bootstrap, axios, react-router-redux

# How to build and launch application

git clone https://github.com/saito400/redux-axios-react-router-redux-rails5-example.git

npm install

npm run build

bundle install --path vendor/bundle

bundle exec rails db:create

bundle exec rails db:migrate

bundle exec rails server

access http://localhost:3000/

## log

bundle init

echo "gem 'rails', '5.0.0.beta4', github: 'rails/rails'" >> Gemfile

bundle install --path vendor/bundle

bundle exec rails new . --skip-action-cable --api -d mysql

# Credits

https://github.com/reactjs/redux

https://github.com/oviava/react-redux-axios-example

https://github.com/reactjs/react-router-redux


