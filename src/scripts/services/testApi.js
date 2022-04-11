function getTest() {
  return new Promise(
    (resolve, reject) => {
      resolve('test1')
    }
  )
}

export {
  getTest
}