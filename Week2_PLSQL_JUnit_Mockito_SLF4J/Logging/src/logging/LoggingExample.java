package logging;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    // Create logger
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.info("Application started");

        try {
            int result = divide(10, 0); // Will throw exception
            logger.info("Result: " + result);
        } catch (Exception e) {
            logger.error("An error occurred: {}", e.getMessage(), e);
        }

        logger.warn("This is a warning message");
        logger.info("Application ended");
    }

    public static int divide(int a, int b) {
        return a / b;
    }
}
