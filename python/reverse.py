n = int(input("enter a number"))
print(n)
rm = 0
rev=0
while(n>0):
    rm = n%10
    rev = (rev*10)+rm
    n=n//10
print("reverse =",rev)