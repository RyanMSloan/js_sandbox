const user = {email: 'jdoe@test.com'};

try {
  // produce a ReferenceError
  // myFunc();

  // produce a TypeError
  // null.myFunction();

  // will produce a SyntaxError
  // eval('Hello World');

  // will produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('user has no name');
  }

} catch(err) {
  console.log(err);
  // console.log(err.message);
  // console.log(err.name);
  // console.log(err.name);
  // console.log(err instanceof ReferenceError);
} finally {
  console.log('finally runs regardless of results');
}

console.log('code still runs...');