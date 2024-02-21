const EmitRandomNumber = (callback, attempts = 0) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 101);
      console.log(`Attempt #${attempts + 1}. EmitRandomNumber is called.`) 
      console.log("2 seconds have lapsed.") 
      console.log(`Random Number generated is ${randomNumber}`);
      if (randomNumber < 80) {
        if (attempts < 10) {
          EmitRandomNumber(callback, attempts + 1);
        } else {
          console.log("Maximum attempts reached.");
        }
      } else {
        console.log("Random Number is greater than or equal to 80.");
      }
      callback(randomNumber);
    }, 2000);
  }
  
  EmitRandomNumber((finalRandomNumber) => {
    console.log(`Final Random Number: ${finalRandomNumber}`);
  });


//   const EmitRandomNumber = (attempts = 0) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 101);
//             console.log(`Attempt #${attempts + 1}. EmitRandomNumber is called.`) 
//             console.log("2 seconds have lapsed.") 
//             console.log(`Random Number generated is ${randomNumber}`);
//             if (randomNumber < 80) {
//               if (attempts < 10) {
//                 EmitRandomNumber(attempts + 1)
//                 .then(resolve)
//                 .then(reject);
//               } else {
//                 reject("Maximum attempts reached. Exiting.");
//               }
//             } else {
//               console.log("Random Number is greater than or equal to 80. Exiting.")
//               resolve(randomNumber);
//             }
//           }, 2000);
//     });
//   }

//   EmitRandomNumber()
//   .then((finalRandomNumber) => {
//     console.log(`Final Random Number: ${finalRandomNumber}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
  


  // function delay(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  
  // async function EmitRandomNumber(attempts = 0) {
  //   await delay(2000);
  
  //   const randomNumber = Math.floor(Math.random() * 101);
  
  //   console.log(`Attempt #${attempts + 1}. EmitRandomNumber is called.`);
  //   console.log(`2 seconds have lapsed.`);
  //   console.log(`Random Number generated is ${randomNumber}`);
  //   if (randomNumber < 80) {
  //     if (attempts < 10) {
  //       return EmitRandomNumber(attempts + 1);
  //     } else {
  //       throw new Error("Maximum attempts reached. Exiting.");
  //     }
  //   } else {
  //     console.log("Random Number is greater than or equal to 80. Exiting.");
  //     return randomNumber;
  //   }
  // }
  
  // async function run() {
  //   try {
  //     const finalRandomNumber = await EmitRandomNumber();
  //     console.log(`Final Random Number: ${finalRandomNumber}`);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }

  // run();