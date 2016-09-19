var array = [];

function forLoop(array)
{
  for(let i = 0; i < 25; i++)
  {
    array.push(` "I am ${i} strange loop${i === 0 ?` `: `s`}."`);
  }
  return array;
}

function whileLoop(n)
{
  while(n > 0)
  {
    console.log(n--);
  }
  return `done`;
}

newArray = [1, 2, 3, 4, 5];
function doWhileLoop(newArray)
{

  function maybeTrue()
  {
    return Math.random() >= 0.5;
  }
  do
  {
    newArray.pop()
  }
  while (newArray.length > 1 && maybeTrue());

  return newArray;

}
