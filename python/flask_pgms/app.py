from flask import Flask,render_template,request

app=Flask(__name__)
@app.route('/')

def func():
    return render_template('home.html')

@app.route('/home')
def homefunc():
    return render_template('home.html')

@app.route('/about')
def aboutfunc():
    return render_template('about.html')

@app.route('/contact')
def contactfunc():
    return render_template('contact.html')

@app.route('/send',methods=['GET','POST'])
def sendfunc():
    if(request.method=='POST'):
        getname=request.form['gname']
         
        # return getname
        getemail=request.form['email']
        # return getemail
        getmobile=request.form['mobile']
        # return getmobile
        getsub=request.form['sub']
        # return getsub
        getmsg=request.form['msg']
        # return getmsg
        return render_template('send.html',newname=getname,newmail=getemail,newmobile=getmobile,newsub=getsub,newmsg=getmsg)  


if(__name__=='__main__'):
    app.run(debug=True)
