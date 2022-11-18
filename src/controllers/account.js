// Import Product Model
import Account from "./../models/account.js";
 
// Get all products
export const getAccounts = async (req, res) => {
    try {
        Account.sync({
            force: true,
          })
            .then(function () {
              // Insert two rows into the "accounts" table.
              return Account.bulkCreate([
                {
                  id: 1,
                  balance: 1000,
                },
                {
                  id: 2,
                  balance: 250,
                },
              ]);
            })
            .then(function () {
              // Retrieve accounts.
              return Account.findAll();
            })
            .then(function (accounts) {
              res.send(accounts);
            })
            .catch(function (err) {
              console.error("error: " + err.message);
            });
    } catch (err) {
        console.log(err);
    }
}