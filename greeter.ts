function greeter(person: string) {
  return 'Hello' + person;
}

let user = "Juan User";

console.log(greeter(user))

document.body.innerHTML = '' + greeter(user)