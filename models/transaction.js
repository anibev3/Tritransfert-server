const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    transactionType: {  
        type: String, 
        enum: ['Deposit', 'Withdraw', 'Transfer'] 
    },
    accountNumber: { 
        type: Number, 
        required: "please ensure that the account number exists" 
    },
    sender: { 
        type: String 
    },
    description: { 
        type: String 
    },
    transactionAmount: { 
        type: Number, 
        required: "please enter a transaction amount" 
    },
    transactionTime: { 
        type: Date, 
        default: Date.now 
    },
    trnxType: {
        type: String,
        required: false,
        enum: ["Credit", "Debit"],
      },
      purpose: {
        type: String,
        enum: ["Transfer", "Deposit"],
        required: false,
      },
});

module.exports = mongoose.model("transaction", transactionSchema);