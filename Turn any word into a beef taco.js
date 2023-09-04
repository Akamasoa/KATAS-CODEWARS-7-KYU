/*
DESCRIPTION:
If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

We want to input a word as a string, and return a list representing that word as a taco.

Key

all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa

NOTE
We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will always have a shell.
*/

function tacofy(word) {
  const obj = {
    t: "tomato",
    l: "lettuce",
    c: "cheese",
    g: "guacamole",
    s: "salsa",
    a: "beef",
    e: "beef",
    u: "beef",
    i: "beef",
    o: "beef"
  };
  const arr = [];
  word.split("").map(v => arr.push(obj[v.toLowerCase()]));
  arr.unshift("shell");
  arr.push("shell");
  return arr.filter(v => (v === undefined ? null : v));
}

/*
function tacofy(word) {
  word=word.toLowerCase();
  var arr=['shell'];
  for (var i=0; i<word.length; ++i)
  {
    if (word[i]=='a' || word[i]=='e' || word[i]=='o' || word[i]=='i' || word[i]=='u')
      arr.push('beef');
    if (word[i]=='t')
      arr.push('tomato');
    if (word[i]=='l')
      arr.push('lettuce');
    if (word[i]=='c')
      arr.push('cheese');
    if (word[i]=='g')
      arr.push('guacamole');
    if (word[i]=='s')
      arr.push('salsa');
  }
  arr.push('shell');
  return arr;
}
*/
