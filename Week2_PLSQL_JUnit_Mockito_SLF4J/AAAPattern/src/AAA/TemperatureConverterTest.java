package AAA;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

public class TemperatureConverterTest {

    TemperatureConverter converter;

    @BeforeEach
    void setUp() {
        converter = new TemperatureConverter(); 
    }

    @AfterEach
    void tearDown() {
        converter = null;
    }

    @Test
    void testCelsiusToFahrenheit() {
       
        double result = converter.celsiusToFahrenheit(0);
        assertEquals(32.0, result);
    }

    @Test
    void testFahrenheitToCelsius() {
       
        double result = converter.fahrenheitToCelsius(212);

        assertEquals(100.0, result);
    }
}
