const Server = require("./server");
const { data, database } = require("../database/init");

const listen = new Server(3000);

function init() {
  try {
    const db = database;
    console.log(`
        Database Connected Success, ${JSON.stringify(
          db
        )}, Server init Success ${JSON.stringify(listen)}
    `);
    console.table(data);
  } catch (error) {
    console.error(error.message);
  }
}

init();
