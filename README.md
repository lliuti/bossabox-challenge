# VUTTR
## Very Useful Tools To Remember

🦇

This is a simple application to add and manage Tools with it's names, links, descriptions and tags. 
Here you can add, delete and list Tools. Also, you can filter them by it's tags.

### How to install
In order to be able to run the API you must install all of it's dependencies. So, at the root folder you can run:

```
npm install
```
or
```
yarn
```

#### Let's set up the database:
Here I'm using PostgreSQL database.
If you use Docker, you can run:
```
docker run --name *** -e POSTGRES_PASSWORD=*** -p 5432:5432 -d postgres:11
```
But if you don't, you can download it here: https://www.postgresql.org/download/

To create and manage data, you can install Postbird (a GUI client). You can get it here: https://electronjs.org/apps/postbird). Remember to save these information when you open Postbird:
- Host
- Port
- Username
- Password 
After connecting, create a database named 'VUTTR'. 

There is also a *'.env.example'* file at the root folder. In order to run the app, rename it to '.env'. Also **make sure to pass the information you got from Postbird**.

After all that, run the following command:
```
yarn sequelize db:migrate
```
This will create all database tables

### How to run it
Also at the root folder, execute:

```
npm run start
```
or
```
yarn start
```

### Endpoints

You can **add** new Tools using the endpoint
```
POST /tools
```
Here is an example of how your requisition's body is going to look like:
![POST Example Image](https://github.com/lliuti/bossabox-vuttr/blob/master/content/Add-Tool-Example.png)

As you can add, there is an endpoint to **delete** Tools
```
DELETE /tools/:id
```
This is how you can do it:
![DELETE Example Image](https://github.com/lliuti/bossabox-vuttr/blob/master/content/Delete-Tool-Example.png)

You can also **list** all Tools or **filter** them by passing a Tag
```
GET /tools
GET /tools?tag=node
```
Where 'node' can be anything you want to search by

This is an example where I'm trying to find any Tool that have a 'jwt' tag.
![GET Example Image](https://github.com/lliuti/bossabox-vuttr/blob/master/content/Find-Tool-Example.png)

#### Built with
* NodeJS
* Express
* Sequelize
* Nodemon
* Sucrase