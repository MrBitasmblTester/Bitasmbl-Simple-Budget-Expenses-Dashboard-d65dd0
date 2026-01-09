export const selectTransactions=s=>s.transactions;
export const selectTotal=s=>s.transactions.reduce((t,x)=>t+x.amount,0);