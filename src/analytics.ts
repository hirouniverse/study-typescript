
// variable is ok even if it is implicitly any
let logged;


function sendAnalytics(data: string) { // parameter is not OK if it is implicitly any
  logged = true;
  console.log('Sending...');
  console.log(data);
  console.log('Sending done!');
}

sendAnalytics('text data');