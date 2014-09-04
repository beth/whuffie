/*
this should hold our DB classes for objs pulled from the ledger
from our responses from the ledger, we will create appropriate objs containing:
	txn information
	anything necessary to displaying the post
		(info like the image/video name may need to be provided separately)
		this would mean that video and image sharing will come after textpost and (maybe) article sharing

 */

var stellar = require('stellar-lib');
var utils = stellar.utils;


function STRTransaction(msg) {
	// this is a basic class for storing simple STRTransactions
	// the main changes you'll see will be additions to the Memo obj of the Memos array

	var day_zero = 946684800;

	this.type = 'STRTransaction';

	this._id = msg.transaction.hash;
	this.sender = msg.transaction.Account;
	this.receiver = msg.transaction.Destination;
	this.amount = msg.transaction.Amount;
	this.ledger = msg.ledger_index;
	this.date = new Date((day_zero + msg.transaction.date) * 1000);

	var memoObj = new Memo(msg.transaction.Memos[0].Memo);
	this.memotype = memoObj.memotype;
	this.memodata = memoObj.memodata;
}


function Memo(memo) {
	// gets passed in the Memo obj of the Memos array
	// this should be inherited from

	this.memotype = utils.hexToString(memo.MemoType);
	this.memodata = utils.hexToString(memo.MemoData);
}





exports.STRTransaction = STRTransaction;


////////////////////////////////////////////
////////////////////////////////////////////

// EXAMPLE OF SUCCESSFUL TXN RESPONSE (to subscribing client)
/*
{ engine_result: 'tesSUCCESS',
  engine_result_code: 0,
  engine_result_message: 'The transaction was applied.',
  ledger_hash: '96025F2881FFA900F475D5B316EDC199CEEAABBF19F5D59CFB41726CF4CA0B9D',
  ledger_index: 3,
  meta:
    { AffectedNodes: [ [Object], [Object] ],
      TransactionIndex: 0,
      TransactionResult: 'tesSUCCESS' },
  status: 'closed',
	transaction:
    { Account: 'ganVp9o5emfzpwrG5QVUXqMv8AgLcdvySb',
      // we input 10000 into submitTxn
      Amount: '10000000000',
      Destination: 'gM4Fpv2QuHY4knJsQyYGKEHFGw3eMBwc1U',
      Fee: '15',
      Flags: 2147483648,
      LastLedgerSequence: 11,

      Memos: [ {
				Memo: {
					MemoType: 'str',
					MemoData: 'str'
				}
      } ],

      Sequence: 1,
      SigningPubKey: 'BE3900393891A2A2244E28A82C43BA94CA94DD6BFE36D523576A22BFF86055D4',
      TransactionType: 'Payment',
      TxnSignature: 'F26A24E0763800034FD08342E4D029DC8C258377898B66542A57FF24DF9A3DCB9CD03300DA3B0918FE4216543450152AC7299577FBF9209E09B364ED75EBD109',
      date: 462938250,
      hash: '1B5BA850F4A98A452BDDE6A2A2D607BB990D4921F66341D8F5F01E16765A9894'},
  type: 'transaction',
  validated: true }
}

 */
// EXAMPLE OF SUCCESSFUL TXN RESPONSE (on stellard server)
/*
{ id: 3,
	result:
	{ engine_result: 'tesSUCCESS',
		engine_result_code: 0,
		engine_result_message: 'The transaction was applied.',
		tx_blob: '12000022800000002400000001201B0000000B6140000002540BE40068400000000000000F7320BE3900393891A2A2244E28A82C43BA94CA94DD6BFE36D523576A22BFF86055D47440F26A24E0763800034FD08342E4D029DC8C258377898B66542A57FF24DF9A3DCB9CD03300DA3B0918FE4216543450152AC7299577FBF9209E09B364ED75EBD109811437B1B26BE3C91C55D51586C3F0E5C4B03E9CEA7F8314DF8286CDBB009AA5C29F526B5C3B4C480B44EABEF9EA7C04747970657D0474657874E1F1',
		tx_json:
		{ Account: 'ganVp9o5emfzpwrG5QVUXqMv8AgLcdvySb',
			Amount: '10000000000',
			Destination: 'gM4Fpv2QuHY4knJsQyYGKEHFGw3eMBwc1U',
			Fee: '15',
			Flags: 2147483648,
			LastLedgerSequence: 11,
			Memos: [Object],
			Sequence: 1,
			SigningPubKey: 'BE3900393891A2A2244E28A82C43BA94CA94DD6BFE36D523576A22BFF86055D4',
			TransactionType: 'Payment',
			TxnSignature: 'F26A24E0763800034FD08342E4D029DC8C258377898B66542A57FF24DF9A3DCB9CD03300DA3B0918FE4216543450152AC7299577FBF9209E09B364ED75EBD109',
			hash: '1B5BA850F4A98A452BDDE6A2A2D607BB990D4921F66341D8F5F01E16765A9894' }
	},
	status: 'success',
	type: 'response'
}
*/
