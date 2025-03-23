async function main() {
  setGlobalVariable('--Scale', await getWidthScale())
  notify("hello", 2)
  await new Promise(resolve => setTimeout(resolve, 2*1000));
  notify(await getWidthScale(), 2)

  console.log("async-ly nekofied :3")
}
