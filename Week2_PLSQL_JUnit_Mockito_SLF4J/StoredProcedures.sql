
create procedure processMonthlyInterest is
begin 
  update accounts
   set balance=balance+(balance*0.01)
   where accounttype='Savings';
   commit;
end;
/

exec processMonthlyInterest;




create procedure updateEmployeeBonus(
    department in varchar,
    bonus_percent in number)
    is
begin
   update employees e
   set salary=salary+(salary*bonus_percent/100)
   where e.department=department;
   commit;
end;
/

drop procedure updateEmployeeBonus;

exec updateEmployeeBonus('IT', 5);


create procedure Transferfunds(from_account in number, to_account in number, amount in number) is
 nbalance number;
begin
  select balance into nbalance from accounts where accountid = from_account;
  
  if nbalance<amount then   raise_application_error(-20001, 'Insufficient balance in source account.');
  end if;
  
  update accounts
  set balance=balance-amount
  where accountid=from_account;
  
  update accounts
  set balance=balance+amount
  where accountid=to_account;
  commit;
  
end;
/


exec Transferfunds(1,2,100);

select * from employees;
select * from accounts;
