# 8-Bit Clan

Make the next big 8-bit NFT!

[Check it out here](https://8-bit-clan.surge.sh/)

## How to run this app locally

#### 1. Activate front end

*(from main directory)*
```
cd front-end
npm start
```

#### 2. Activate back end

*(from main directory)*
```
cd back-end
node server.js
```

#### 3. Create database `8_bit_clan` and run `8_bit_clan_seed.sql`

You can also manually create the tables following the schema in `8_bit_clan_schema.sql`.

## Tech stack used in app:

- *Frontend*: React.js, JSS for styling
- *Backend*: Node.js, Express
- *Database*: PostgresQL
- *Deployment*: Heroku, Surge

## How to deploy this app

Heroku is used for the backend, Surge is used for the frontend.

*Deploy backend to Heroku first (make sure you're in the backend directory!):*
```
heroku login
heroku create APP_NAME
echo "web: node server.js" > Procfile
heroku git:remote -a APP_NAME
git add .
git commit -m 'deployment'
git push heroku master
```

Let's not forget about our database!!

```
heroku addons:create heroku-postgresql:hobby-dev -a APP_NAME
heroku pg:push 8_bit_clan DATABASE_URL -a APP_NAME
heroku config:set PGSSLMODE=no-verify
heroku open
```

*Then deploy frontend to Surge (make sure you're in the frontend directory!):*

If you haven't already, install Surge from the command line:

```
npm install --global surge
```

Make sure this line is in `api.js` otherwise the frontend and backend won't communicate:

```
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
```

Now replace BACKEND_URL with your deployed backend's URL in the following:
```
REACT_APP_BASE_URL=BACKEND_URL npm run build
cp build/index.html build/200.html
npx surge build
```

## Potential add-on features

- Loading feature (database can easily fetch art data as it is and reconstruct it on the front end, there's even an API call built in already. It will be implemented in the near future)
- Sharing works
- Delete work
- Original 8-bit music for the art maker (you know... to get in the zone)

## Credits

- Developer: Adam Thometz
  - [Github](https://github.com/Adam-Thometz/)
  - [LinkedIn](https://www.linkedin.com/in/adam-thometz/)
  - Email: <adamthometz@gmail.com>
- UX/UI Designer: Melody Acosta
  - [Portfolio](https://melodyux.design/)
  - [LinkedIn](https://www.linkedin.com/in/melodyacosta/)
  - Email: <melodyux.design@gmail>

- This project is a submission to Mintbean's Hiring Hackathon so thanks to them for inspiring us to do more than we thought we could!