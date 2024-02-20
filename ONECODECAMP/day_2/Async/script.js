//Javascript is synchronous from top to bottom

//synchronous

// console.log("first");
// console.log("second");
// console.log("third");

//asynchronous
// console.log("first");

// setTimeout(() => {
//     console.log("second");
// }, 2000);

// console.log("third");

// const getData = (callback) => {
//     setTimeout(() => {
//         const data = "This is a data";
//         callback(data)
//     },2000);
// }

// const processData= (data) => {
//     console.log("Processed data: ", data);
// };

// getData(processData);

//Callback hell

const step1 = (callback) => {
    setTimeout(() => {
        console.log("Step 1 Complete");
        callback();
    }, 1000);
}
const step2 = (callback) => {
    setTimeout(() => {
        console.log("Step 2 Complete");
        callback();
    }, 1000);
}
const step3 = (callback) => {
    setTimeout(() => {
        console.log("Step 3 Complete");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All Steps Complete")
        });
    });
});

//Promises solves callback hell

const step4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 4 Complete");
            resolve();
        }, 1000);
    });
   
}

const step5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 5 Complete");
            resolve();
        }, 1000);
    });
   
}

const step6 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 6 Complete");
            resolve();
        }, 1000);
    });
   
}

//Chaining Promises

step4()
    .then(step6)
    .then(step5)
    .then(() => {
        console.log("All Steps Complete");
    })
    .catch((error) => {
        console.log("An error occured: ", error)
    })


    // async/await

    const performSteps = async () => {
        try{
            await step4();
            await step6();
            await step5();
            console.log("All steps complete");
        } catch (error) {
            console.log("An error occured: ", error);
        }
    };

    performSteps();