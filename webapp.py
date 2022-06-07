import flask
import sqlite3
website=flask.Flask("__name__")

@website.route("/")
def first_page():
    return flask.render_template("homepage.html")

@website.route("/user")
def user():
    return flask.render_template("login.html")

@website.route("/login" , methods=['post'])
def second_page():
    entered_username = flask.request.form.get("username")
    entered_password = flask.request.form.get("password")
    con = sqlite3.connect("mysdp2.sqlite3")
    cur = con.cursor()
    cur.execute(f"select * from userstable where accounnumber='{entered_username}' and password='{entered_password}'")

    result = cur.fetchone()
    if result is None:
        data="Enter the valid accountnumber and password"
        return flask.render_template("login.html",data=data)
    else:
        con.row_factory = sqlite3.Row
        cur = con.cursor()
        cur.execute(f"select * from userstable where accounnumber='{entered_username}' and password='{entered_password}'")
        rows = cur.fetchall()
        return flask.render_template("userhome.html",rows=rows)


@website.route("/createnew")
def createnewpage():
    return flask.render_template("registartion.html")

@website.route("/newpage" ,  methods=['post','get'])
def first():
    re_username = flask.request.form.get("username")
    re_lastname = flask.request.form.get("lastname")
    re_password = flask.request.form.get("password1")
    re_password2 = flask.request.form.get("password2")
    re_email = flask.request.form.get("email")
    re_phnumber = flask.request.form.get("phnumber")
    re_account = flask.request.form.get("accnumber")
    balance=0
    loan=0
    con = sqlite3.connect("mysdp2.sqlite3")
    cur = con.cursor()
    my_table_query = "create table if not exists userstable(name varchar(20),lastname varchar(20),password varchar(15),email varchar(30),mobileno varchar(10),accounnumber varchar(12),balance varchar(10),loan varchar(10))"
    cur.execute(my_table_query)
    cur.execute(f"select email from userstable where email='{re_email}'")
    result = cur.fetchone()
    if result != None:
        return "Email Already Exists....Try again"
    else:
        my_insert_query = f"insert into userstable values('{balance}','{re_username}','{re_lastname}','{re_password}','{re_email}','{re_phnumber}','{re_account}')"
        cur.execute(my_insert_query)
        con.commit()
        return flask.render_template("login.html")
@website.route("/login/bank")
def bank():
    return flask.render_template("bank.html")

@website.route("/admin")
def admin():
    return flask.render_template("admin.html")

@website.route("/admin/verification",methods=['post','get'])
def verified():
    username=flask.request.form.get("username")
    firstname=flask.request.form.get("firstname")
    lastname = flask.request.form.get("lastname")
    password = flask.request.form.get("password")
    re_email = flask.request.form.get("email")
    gender = flask.request.form.get("gender")
    con = sqlite3.connect("admin.sqlite3")
    cur = con.cursor()
    my_table_query = "create table if not exists userstable(username varchar(20),firstnamename varchar(20),lastname varchar(15),password varchar(20),email varchar(30),gender varchar(10))"
    cur.execute(my_table_query)
    cur.execute(f"select email from userstable where email='{re_email}'")
    result = cur.fetchone()
    if result != None:
        return "Email Already Exists....Try again"
    else:
        my_insert_query = f"insert into userstable values('{username}','{firstname}','{lastname}','{password}','{re_email}','{gender}')"
        cur.execute(my_insert_query)
        con.commit()
        data=username
        return flask.render_template("verification.html",data=data)

@website.route("/admin/homepage",methods=['post','get'])
def adminhomepage():
    username = flask.request.form.get("username")
    password = flask.request.form.get("password")
    con = sqlite3.connect("admin.sqlite3")
    cur = con.cursor()
    cur.execute(f"select * from userstable where username='{username}' and password='{password}'")

    result = cur.fetchone()
    if result is None:
        data = "Enter the valid accountnumber and password"
        return flask.render_template("admin.html", data=data)
    else:
        return flask.render_template("adminhomepage.html")

@website.route("/loans")
def loans():
    return flask.render_template("loans.html")
@website.route("/loanscan",methods=['post','get'])
def loansscan():
    entered_username = flask.request.form.get("userid")
    entered_password = flask.request.form.get("password")
    entered_amount = flask.request.form.get("amount")
    con = sqlite3.connect("mysdp2.sqlite3")
    cur = con.cursor()
    cur.execute(f"select * from userstable where accounnumber='{entered_username}' and password='{entered_password}'")
    result = cur.fetchone()
    if result is None:
        data = "Enter the valid accountnumber and password"
        return flask.render_template("loans.html", data=data)
    else:
        cur.execute(f"update userstable set balance='1000' where accounnumber='{entered_username}'")
        return "succesfulldone"

@website.route("/graphs")
def graph():
    return flask.render_template("graph.html")
@website.route("/userdetails")
def userdetails():
    con = sqlite3.connect("admin.sqlite3")
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute(f"select * from userstable")
    rows = cur.fetchall()
    return flask.render_template("userdetails.html",rows=rows)

if __name__=="__main__":
    website.run(port=1000)
