const formatter = dateObject => dateObject.getUTCFullYear() + "/" +
    ("0" + (dateObject.getUTCMonth() + 1)).slice(-2) + "/" +
    ("0" + dateObject.getUTCDate()).slice(-2) + " " +
    ("0" + dateObject.getUTCHours()).slice(-2) + ":" +
    ("0" + dateObject.getUTCMinutes()).slice(-2) + ":" +
    ("0" + dateObject.getUTCSeconds()).slice(-2);

module.exports = {formatter};

console.log(formatter(new Date("2019-1-1 21:45")));;
