class AppException extends Error {
    constructor(message, status = 500) {
      super(message);
      this.status = status;
      this.isOperational = true;
    }
  }
  
  export default AppException;
  