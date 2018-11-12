n = int(input("enter a number"))
print(n)
num=n
rm = 0
rev=0
while(n>0):
    rm = n%10
    rev = (rev*10)+rm
    n=n//10

if(rev==num):
    print("palindrome")
else:
    print("not a palindrome")
