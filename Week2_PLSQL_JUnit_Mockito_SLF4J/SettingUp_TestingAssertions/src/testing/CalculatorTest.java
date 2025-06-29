package testing;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class CalculatorTest {
    Calculator calc = new Calculator();

    @Test
    public void testAddition() {
        assertEquals(5, calc.add(2, 3), "Addition should return 5");
    }

    @Test
    public void testSubtraction() {
        assertNotEquals(0, calc.subtract(5, 5), "Subtraction should not return 0");
    }

    @Test
    public void testMultiplication() {
        assertEquals(6, calc.multiply(2, 3));
    }

    @Test
    public void testDivision() {
        assertThrows(ArithmeticException.class, () -> calc.divide(5, 0));
    }

    @Test
    public void testPositive() {
        assertTrue(calc.isPositive(10));
        assertFalse(calc.isPositive(-5));
    }

    @Test
    public void testNull() {
        String str = null;
        assertNull(str);
    }

    @Test
    public void testNotNull() {
        String str = "JUnit";
        assertNotNull(str);
    }
}
