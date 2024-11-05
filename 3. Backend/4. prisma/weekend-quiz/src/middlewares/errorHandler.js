export const errorHandler = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ${err.name}: ${err.message}`);

  let status = 500;
  let message = "Internal Server Error";
  

  switch (err.name) {
    case "PrismaClientValidationError":
    case "ValidationError":
      status = 400;
      message = "Invalid data provided";
      break;

    case "PrismaClientKnownRequestError":
      if (err.code === "P2002") {
        status = 409;
        message = "Unique constraint violation";
      } else if (err.code === "P2003") {
        status = 400;
        message = "Foreign key constraint violated";
      }
      break;

    case "NotFoundError":
      status = 404;
      message = "Resource not found";
      break;

    case "JavascriptDeveloperClassError":
      status = 401;
      message = "Unauthorized access";
      break;
  }

  res.status(status).json({ error: message });
};

/*
ini testing punya sir agif
* /
// export const errorHandler = (err, req, res, next) => {
//     let message = 'Internal Server Error';
//     let status = 500;
  
//     console.log(err.name);
//     console.log(err.message);
  
//     switch (err.name) {
//       case 'PrismaClientValidationError':
//         status = 400;
//         message = err.message;
//         break;
  
//       case 'NotFoundError':
//         status = 404;
//         message = err.message;
//         break;
  
//       case 'JavascriptDeveloperClassError':
//         status = 401;
//         message = err.message
//         break;
//     }
  
//     res.status(status).send({ error: message });
//   }

*/

export default errorHandler;
