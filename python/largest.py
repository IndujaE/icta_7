a = int(input("enter  number1 :"))
b = int(input("enter  number2 :"))
c = int(input("enter  number3 :"))
if(a>b and a>c):
    print(a," is largest")
else:
    if(b>c):
        print(b," is largest")
    else:
        print(c," is largest")
