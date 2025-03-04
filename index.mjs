exports.handler = async () => {
    console.log("Executing faulty Lambda function...");

    // Intentional Error: Division by Zero
    let result = 10 / 0;

    // Simulating an undefined variable reference error
    let errorTrigger = undefinedVariable; // This will cause a runtime error

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "This should fail!" }),
    };
};
