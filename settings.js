/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61VaY+rNhT9K5W/JtOwL5FGKhCWBJIJ2SdVVRkwhIQttkkCT/nvFZMZvZFe+zqVyifL2Oeee8+5199AUaYEuagBw2+gwukFUtQtaVMhMAR6HccIgz6IIIVgCMh4IDtp3NNW7HG3JtHYN6u1SlvLOG/d/cKZXl6apb03ks3rM7j3QVUHWRr+BDCQ4MlrWn5e1cpiPL9OuHLvqsg/iSeRD9lKOvhiuS/WQj5+BvcOEaY4LRKzOqAcYZi5qJnDFH+N/nlqXHfyrTJNj9nuT/FK1ZjIwPpYs+ntGG0ng8vkpVj3RkXyNfo+P5APS69ejF41at9mF1ecEs6a0Uu18psm0aRzUrgX31u+0ydpUqBoHKGCprT5ct3NObYz3tmfdxZdV4TbrIWtLTtcLa97/rhYHFQXaWWQtZz5NeKodVqy48ttE03202aXJ3ErcdmmWaTuNem1WaY0wWRnwkb4THyOP7xy+i91HzsyndNU2XLsq3e0FoPWlrQeCVwDq9NAX1+OxWFSbTK0Fb5GX5LGRFuJFWvdXkTHOuNZdmih39OumTbiZ87phhsfL1dj61PdIa3xz1i24vakxvHBaznJSnHPjEoaV5yR1Mw10+fnJib6aAqv/uhKhdicnZd1slIme+UWiI6xtpUee/LS1US0XO4wOkmvXrI++M9vGZ1QM47AkL33AUZJSiiGNC2Lbk8S+wBGlyUKMaJv1QXiS3DWvXk4P9SGyly9pCzmq7JBRXLK4Kw32FMR+yKmpsg8gz6ocBkiQlDkpISWuJkiQmCCCBj+/iZUlzNGeUnRJI3AEKgcz/GqKjKMIP1Gfr0eICWwqn4tEAV9EOMynyIwpLhGffB2QVLZkTnSVFWyeF3SBYaTdEsTDcVQOFEemV2G+SPoKs0RoTCvwJCVBU5SBFFh7v3/hweji7LOGyNFYSVB1g2G5TTREETLGrHGSFJ/zkPl7n/0QYFu9GHjrvg82wdxigldF3WVlTD68PjHTxiGZV3QZVOERrdAGAw/bSNK0yIhXWZ1AXF4SC/I6PIAwxhmBN37IEKXNEQdHshdPdoLT4vVny/rrQthluUV63cKHsricUSUY4FlOeWJlXnuSeCD4EnlIXqSOZYJocgwMhOBrhyPCdLd+UdD76i3mOqixSLruBOCnZ/XOkPinboZv5ny4USEUfRR5QCGp7palSdU/AS3DJmQvyUBf9XhxEd8Xr6gQbmO5sz1E+7D4WD47fvUNsqow1sohi1bvAI6tbo4P7hhqLA/GqKA3WkwrSNIUvyLmxZJF+1dig4nQhSmGQFDYLzgCUWKY47r0SAQbFszE81INPBduo+J8Gi56Byo0XW6H/UWeDl71Ry8u7a72wDONgWjvTIX1brBpiyZjfb8NyCduGxkebNqAQ1sbXU72dZJbNfTYOWKyaBqT9t8W0Q3Tz1cDTroHVniMovQtWphFRu+zS6DSZK3jhaTInVKrT0MNh7Rk+cu2sNCn4ORquy13rUKzmvTXcTLk6QchaqJerFYFPP57sLsuJV8IQ6uUqe6zddq4oXj7bytTMlZLw5subKvJqtf+MVsqhBZtQZ2+j6r3mZl9v5Gpe9j5GG4OEVvI/9din+V7Lv3mXv/E8b7I/IP/tJ3MB/swpHtD06QOW41XWKVKavE3HGzVzV75g0W4Zac3Znlg3vX1FUGaVziHAwBLCJcpl2PZJBQ7Xv7/s1EkNQ+yButqpYU0o+uB1r3jfQG3P8CUD+jrR8JAAA=';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
