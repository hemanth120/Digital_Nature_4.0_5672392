set serveroutput on;

BEGIN
  FOR cust IN (SELECT customerid, TRUNC(MONTHS_BETWEEN(SYSDATE, dob)/12) AS age
    FROM customers) LOOP
    IF cust.age > 60 THEN
      UPDATE loans
      SET interestrate = interestrate - 1
      WHERE customerid = cust.customerid;
    END IF;
  END LOOP;

  COMMIT;
END;
/

BEGIN
  FOR cust IN (
    SELECT customerid
    FROM customers
    WHERE balance > 10000
  ) LOOP
    UPDATE customers
    SET isvip = 'true'
    WHERE customerid = cust.customerid;
  END LOOP;

  COMMIT;
END;
/

DECLARE
  CURSOR due_loans IS
    SELECT loanid, customerid, enddate
    FROM loans where enddate<=sysdate+30;
    
  v_name customers.name%TYPE;
BEGIN
  FOR loan_rec IN due_loans LOOP
    SELECT name INTO v_name
    FROM customers
    WHERE customerid = loan_rec.customerid ;
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan for ' || v_name ||' (ID: ' || loan_rec.customerid || ') is due till ' || TO_CHAR(loan_rec.enddate, 'DD-MON-YYYY')
    );
  END LOOP;
END;
/

select * from customers;
         
select * from loans;

select * from accounts;

select * from transactions;

select * from employees;
        


