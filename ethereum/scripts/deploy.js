async function main() {
  const CatsBase = await ethers.getContractFactory("CatsBase");
  const catsBase = await CatsBase.deploy();
  console.log("CatsBase deployed: ", catsBase.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })